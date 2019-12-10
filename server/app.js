const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const Listing = require('../db').Listing;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist'));

app.get('/carousel-service/:id', (req, res) => {
  let listingID = req.params.id;
  Listing.find({listingID: listingID}, (err, listing) => {
    if (err) {
      return res.status(404).end();
    }
    res.status(200).send(listing[0]);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
