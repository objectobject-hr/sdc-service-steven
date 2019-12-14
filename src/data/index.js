const axios = require('axios');
const randomNum = max => Math.floor(Math.random() * max);

const getSimilar = (ids, cb) => {
  const retrieveSimilar = id => axios.get(`/carousel-service/${id}`);
  let similar = ids.map(id => retrieveSimilar(id));
  Promise.all(similar)
    .then(similar => {
      similar = similar.map(l => l.data);
      cb(similar);
    })
    .catch(e => console.error('similar 1: ', e));
};

const DataRetriever = (cb) => {
  let currentListing;
  let images;
  let id = randomNum(100) + 1;
  axios.get(`/carousel-service/${id}`)
    .then(response => {
      images = response.data.images;
      getSimilar(response.data.similar, similarListings => {
        let data = {
          images,
          similarListings
        }
        cb(data);
      });
    })
    .catch(err => {
      console.error(err);
    });
};

export default DataRetriever;
