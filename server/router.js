const router = require('express').Router();
const Listing = require('../db').Listing;

router
  .route('/carousel-service/:id')
  .get((req, res) => {
    let listingID = req.params.id;
    Listing.find({listingID: listingID}, (err, listing) => {
        if (err) {
            console.error(err);
        return res.status(404).end();
        }else{
        res.status(200).send(listing[0]);
        }
    });
  });
  
  module.exports = router;

// app.get('/carousel-service/:id', (req, res) => {
//     let listingID = req.params.id;
//     Listing.find({listingID: listingID}, (err, listing) => {
//       if (err) {
//         return res.status(404).end();
//       }
//       res.status(200).send(listing[0]);
//     });
//   });