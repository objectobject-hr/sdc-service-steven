const Pool = require('pg').Pool;
const pool = new Pool({
  host: 'localhost',
  database: 'cirque',
})

const getById = (req, res) => {
  let listingID = req.params.id;
  pool.query(`SELECT * FROM carrusel WHERE listingid IN(${listingID})`, (err, results) => {
    if (err) {
      console.error(err);
      res.status(404).end();
    } else {
      res.status(200).send(results);
    }
  });
}

const getAll = (req, res) => {
  pool.query('SELECT * FROM carrusel', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

const mill = (req) => {
  const {images, rooms, occupancy, reviews, ratings, donde, price} = req.body
  console.log(`INSERT INTO carrusel (images, rooms, occupancy, reviews, ratings, donde, price) VALUES (ARRAY ['${images[0]}', '${images[1]}', '${images[2]}', '${images[3]}', '${images[4]}', '${images[5]}', '${images[6]}', '${images[7]}', '${images[8]}', '${images[9]}'], ${rooms}, ${occupancy}, ${reviews}, ${ratings}, '${donde}', ${price});`)
};

module.exports.getAll = getAll
module.exports.mill = mill
module.exports.getById = getById