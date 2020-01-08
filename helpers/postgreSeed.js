const mill = require('../db').mill;

const seedDB = () => {
  const randomNum = max => {
    return Math.floor(Math.random() * max);
  };
  
  const generateData = () => {
    let imgPromises = [];
    for (var i = 0; i < 10; i++) {
      let imgPromise = "https://unsplash.it/500/500?image=" + randomNum(1074 + i);
      imgPromises.push(imgPromise);
    }
    return imgPromises;
  };
  // 1. Helper function:
  var count = 0;
  const createListing = () => {
    let rooms = randomNum(5) + 1;
    let images = generateData();
    let mismo = []
    for (var i = 0; i < 5; i++) {
      mismo.push(randomNum(1e4 + i))
    }
    count++;
    return {
      id: count,
      images,
      rooms,
      occupancy: rooms * 2,
      reviews: randomNum(200) + 10,
      ratings: randomNum(5) + 1,
      price: randomNum(200) + 50,
      mismo
    };
  };
  // seeder
  const seeder = () => {
    for (var i = 0; i < 2e1; i++) {
      var {id, images, rooms, occupancy, reviews, ratings, price, mismo} = createListing()
      console.log(`${id}, "{${images[0]}, ${images[1]}, ${images[2]}, ${images[3]}, ${images[4]}, ${images[5]}, ${images[6]}, ${images[7]}, ${images[8]}, ${images[9]}}",`, rooms, ',', occupancy, ',', reviews, ',', ratings, ',', price, `, "{${mismo[0]}, ${mismo[1]}, ${mismo[2]}, ${mismo[3]}, ${mismo[4]}}"`)
    }
  }
  seeder();
};

seedDB()

//2. loop/ call helper & insert to DB:
//a) insert all listings first
//for (var i = 0; i < 100; i++) {
//     let newListing = new Listing(createListing(i+1));
//     newListing.save((err, listing) => {
//       if (err) {
//         return console.error(err);
//       }
//     });
//   //}
//   return createListing();

//  b) retrieve all listings from every state in DB
//  c) update the similar field
  // const updateSimilar = () => {
  //   Listing.find((err, listings) => {
  //     if (err) {
  //       return console.error(err);
  //     }
  //     listings.forEach(listing => {
  //       let start = randomNum(100);
  //       let end = start + 5;
  //       let similar = listings.slice(start, end)
  //       .filter(l => l !== listing)
  //       .map(l => l.listingID);
  //       Listing.findByIdAndUpdate(listing._id, {similar}, (err, updated) => {
  //         if (err) {
  //           return console.error('Seed/Update: ',err);
  //         }
  //       });
  //     });
  //   });
  // };
  // setTimeout(updateSimilar, 4000);

// let images = id < 10 ? imgs[id] : (id < 20 ? imgs[id - 10]: imgs[randomNum(10)]);

// new Promise((resolve, reject) => {
//   getImgs(i + 1,resolve);
// });
  
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
                
// async function getImgs(folder, cb) {
  //   aws.config.setPromisesDependency();
  //   aws.config.update({
    //     accessKeyId: config.accessKey,
    //     secretAccessKey: config.secretKey,
    //     region: 'us-west-1'
    //   });
    //   let response = await s3.listObjectsV2({
      //     Bucket: 'awayhome',
      //     Prefix: `home${folder}/`
      //   }).promise();
      //   cb(response.Contents);
      // }

// Promise.all(imgPromises)
// .then(response => {
//   let images = [];
//   response.forEach(imgArr => {
//     let imgs = imgArr.filter(img => img.Size > 1).map(img => {
//       return imgUrlPrfx + img.Key;
//     });
//     images.push(imgs);
//   });
//   // seed database
//   seedDB(images);
// })
// .catch(e => console.error('aws: ', e));

//const states = [
//   'AK',
//   'CA',
//   'CO',
//   'CT',
//   'FL',
//   'GA',
//   'HI',
//   'IL',
//   'LA',
//   'ME',
//   'MD',
//   'MA',
//   'NV',
//   'NH',
//   'NJ',
//   'NM',
//   'NY',
//   'NC',
//   'OR',
//   'SC',
//   'TX',
//   'UT',
//   'VT',
//   'VA',
//   'WA'
// ];