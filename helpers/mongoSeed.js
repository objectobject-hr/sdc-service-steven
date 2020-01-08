const mill = require('../db').mill;

const seedDB = () => {
  const randomNum = max => {
    return Math.floor(Math.random() * max);
  };
  
  const generateData = () => {
    let imgPromises = [];
    for (var i = 0; i < Math.max(8, randomNum(10)); i++) {
      let imgPromise = "https://unsplash.it/500/500?image=" + randomNum(1074 + i);
      imgPromises.push(imgPromise);
    }
    return imgPromises;
  };
  // 1. Helper function:
  var count = 0;
  const createListing = () => {
    let rooms = randomNum(5) + 1;
    let images = generateData();
    let mismo = []
    for (var i = 0; i < 5; i++) {
      mismo.push(randomNum(1e4 + i))
    }
    count++;
    return {
      id: count,
      images,
      rooms,
      occupancy: rooms * 2,
      reviews: randomNum(200) + 10,
      ratings: randomNum(5) + 1,
      price: randomNum(200) + 50,
      mismo
    };
  };
  // seeder
  const seeder = () => {
    for (var i = 0; i < 1e1; i++) {
      var {id, images, rooms, occupancy, reviews, ratings, price, mismo} = createListing()
      console.log(`"{${images[0]}, ${images[1]}, ${images[2]}, ${images[3]}, ${images[4]}, ${images[5]}, ${images[6]}, ${images[7]}, ${images[8]}, ${images[9]}}",`, rooms, ',', occupancy, ',', reviews, ',', ratings, ',', price, `, "{${mismo[0]}, ${mismo[1]}, ${mismo[2]}, ${mismo[3]}, ${mismo[4]}}"`)
    }
  }
  seeder();
  console.log(createListing());
};

seedDB()