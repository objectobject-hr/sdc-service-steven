const Pool = require('pg').Pool;
const pool = new Pool({
  host: 'localhost',
  database: 'cirque',
})

const getAll = (req, res) => {
  pool.query('SELECT * FROM carrusel', (error, results) => {
    if (error) {
        throw error
    }
    res.status(200).json(results)
  })
};

module.exports.getAll = getAll


// Original Index Mongo.
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/carousel-recommended', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', () => {
//   console.log('successfully connected to the database...');
// });

// const listingSchema = new mongoose.Schema({
//   listingID: Number,
//   images: [String],
//   rooms: Number,
//   occupancy: Number,
//   reviews: Number,
//   ratings: Number,
//   location: String,
//   price: Number,
//   similar: [Number]
// });

// module.exports.Listing = mongoose.model('Listing', listingSchema);
