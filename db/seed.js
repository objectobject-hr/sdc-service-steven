const Listing = require('./index').Listing;
module.exports.seed = imgs => {
  // locations:
  const states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'
  ];
  // randomNumHelper:
  const randomNum = max => {
    return Math.floor(Math.random() * max);
  };
  // 1. Helper function:
  const createListing = id => {
    let rooms = randomNum(8) + 1;
    let images = id < 10 ? imgs[id] : (id < 20 ? imgs[id - 10]: imgs[randomNum(10)]);
    return {
      listingID: id,
      rooms,
      images,
      occupancy: rooms * 2,
      reviews: randomNum(200) + 1,
      ratings: randomNum(5) + 1,
      location: states[randomNum(50)]
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
    states.forEach(state => {
      Listing.find({location: state }, (err, listings) => {
        if (err) {
          return console.error(err);
        }
        if (listings.length > 1) {
          listings.forEach(listing => {
            let similar = listings.filter(l => l !== listing)
              .map(l => l.listingID);
            Listing.findByIdAndUpdate(listing._id, {similar}, (err, updated) => {
              if (err) {
                return console.error(err);
              }
            });
          });
        }
      });
    });
  };

  setTimeout(updateSimilar, 5000);
};
