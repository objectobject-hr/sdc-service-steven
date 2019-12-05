const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel-recommended', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('successfully connected to the database...');
});

const listingSchema = new mongoose.Schema({
  name: String,
  images: [String],
  thumbnails: [String],
  location: String,
  no_rooms: Number,
  occupancy: Number,
  related: [String]
});

module.exports.Listing = mongoose.model('Listing', listingSchema);

module.exports.db = db;
