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
    res.status(200).json(results.rows)
  })
};

var counter = 0;
const mill = (req) => {
  const {images, rooms, occupancy, reviews, ratings, donde, price} = req.body
  // counter ++;
  // console.log(`Great Success! ${counter}`);
  console.log(`INSERT INTO carrusel (images, rooms, occupancy, reviews, ratings, donde, price) VALUES (ARRAY ['${images[0]}', '${images[1]}', '${images[2]}', '${images[3]}', '${images[4]}', '${images[5]}', '${images[6]}', '${images[7]}', '${images[8]}', '${images[9]}'], ${rooms}, ${occupancy}, ${reviews}, ${ratings}, '${donde}', ${price});`)
  //pool.query
  // , (err) => {
  //   if (err) {
  //     console.error(err)
  //   } else {
  //   }
  // })
};

module.exports.getAll = getAll
module.exports.mill = mill


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
