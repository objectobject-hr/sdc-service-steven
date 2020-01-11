const router = require('express').Router();
const pg = require('../db/postgres.js');
//const mg = require('../db').carrusel;


//Postgres db routes.
router
  .route('/carousel-service')
  .get(pg.getAll)
  .post(pg.postById)
  
router
  .route('/carousel-service/:id')
  .get(pg.getById);
  
  // // MongoDB routes.
  // router
  //   .route('/carousel-service/:id')
  //   .get((req, res) => {
  //     let listingId = req.params.id;
  //     console.log
  //     mg.find({listingid: listingId}, (err, data) => {
  //       if (err) {
  //         return res.status(404).end();
  //       }
  //       console.log(data)
  //       res.status(200).send(data[0]);
  //     });
  //   });

module.exports = router;