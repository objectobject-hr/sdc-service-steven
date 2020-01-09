const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cirque', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('successfully connected to the mongoDB...');
});

const carruselSchema = new mongoose.Schema({
  listingid: Number,
  images: [String],
  rooms: Number,
  occupancy: Number,
  reviews: Number,
  ratings: Number,
  price: Number,
  mismo: [Number]
}, {collection: 'carrusel'});

module.exports.carrusel = mongoose.model('carrusel', carruselSchema);
