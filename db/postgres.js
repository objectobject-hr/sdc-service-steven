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

const postById = (req, res) => {
  pool.query(`INSERT INTO carrusel (images, rooms, occupancy, reviews, ratings, price, mismo) VALUES (ARRAY ['https://odis.homeaway.com/odis/listing/41f832e5-2b11-40f9-a025-81fef22082eb.f10.jpg'], 2, 4, 9, 5, 60, ARRAY [1,2,3,4,5]);`, (err) => {
    if (err) {
      console.error(err);
      res.status(400).end()
    } else {
      res.status(201).send()
    }
  })
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
module.exports.postById = postById
