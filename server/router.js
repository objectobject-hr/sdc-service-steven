const router = require('express').Router();
const pg = require('../db/postgres.js');
const mg = require('../db');


// Postgres db routes.`
router
  .route('/carousel-service')
  .get(pg.getAll)
  .post(pg.mill)
  
router
  .route('/carousel-service/:id')
  .get(pg.getById);
  
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