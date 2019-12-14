const aws = require('aws-sdk');
const s3 = new aws.S3();
const config = require('./config.json');
const imgUrlPrfx = 'https://awayhome.s3-us-west-1.amazonaws.com/';
const Listing = require('../db').Listing;

const seedDB = imgs => {
  const states = [
    'AK',
    'CA',
    'CO',
    'CT',
    'FL',
    'GA',
    'HI',
    'IL',
    'LA',
    'ME',
    'MD',
    'MA',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'OR',
    'SC',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA'
  ];
  const randomNum = max => {
    return Math.floor(Math.random() * max);
  };
  // 1. Helper function:
  const createListing = id => {
    let rooms = randomNum(5) + 1;
    let images = id < 10 ? imgs[id] : (id < 20 ? imgs[id - 10]: imgs[randomNum(10)]);
    return {
      listingID: id,
      rooms,
      images,
      price: randomNum(200) + 75,
      occupancy: rooms * 2,
      reviews: randomNum(200) + 10,
      ratings: randomNum(5) + 1.5,
      location: states[randomNum(25)]
    };
  };
  // 2. loop/ call helper & insert to DB:
  //  a) insert all listings first
  for (var i = 0; i < 100; i++) {
    let newListing = new Listing(createListing(i+1));
    newListing.save((err, listing) => {
      if (err) {
        return console.error(err);
      }
    });
  }

  //  b) retrieve all listings from every state in DB
  //  c) update the similar field
  const updateSimilar = () => {
    Listing.find((err, listings) => {
      if (err) {
        return console.error(err);
      }
      listings.forEach(listing => {
        let start = randomNum(100);
        let end = start + 5;
        let similar = listings.slice(start, end)
          .filter(l => l !== listing)
          .map(l => l.listingID);
        Listing.findByIdAndUpdate(listing._id, {similar}, (err, updated) => {
          if (err) {
            return console.error('Seed/Update: ',err);
          }
        });
      });
    });

    // TODO: For use in production
    // states.forEach(state => {
    //   Listing.find({location: state }, (err, listings) => {
    //     if (err) {
    //       return console.error(err);
    //     }
    //     if (listings.length > 1) {
    //       listings.forEach(listing => {
    //         let similar = listings.filter(l => l !== listing)
    //           .map(l => l.listingID);
    //         Listing.findByIdAndUpdate(listing._id, {similar}, (err, updated) => {
    //           if (err) {
    //             return console.error(err);
    //           }
    //         });
    //       });
    //     }
    //   });
    // });

  };
  setTimeout(updateSimilar, 4000);
};

const generateData = () => {
  async function getImgs(folder, cb) {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: config.accessKey,
      secretAccessKey: config.secretKey,
      region: 'us-west-1'
    });
    let response = await s3.listObjectsV2({
      Bucket: 'awayhome',
      Prefix: `home${folder}/`
    }).promise();
    cb(response.Contents);
  }

  let imgPromises = [];
  for (var i = 0; i < 10; i++) {
    let imgPromise = new Promise((resolve, reject) => {
      getImgs(i + 1,resolve);
    });
    imgPromises.push(imgPromise);
  }

  Promise.all(imgPromises)
    .then(response => {
      let images = [];
      response.forEach(imgArr => {
        let imgs = imgArr.filter(img => img.Size > 1).map(img => {
          return imgUrlPrfx + img.Key;
        });
        images.push(imgs);
      });
      // seed database
      seedDB(images);
    })
    .catch(e => console.error('aws: ', e));
};

generateData();
