import React from 'react';
import Stars from 'react-star-ratings';
const randomNum = max => Math.floor(Math.random() * max);

const Slide = ({ listing }) => {
  let {
    images,
    rooms,
    occupancy,
    price,
    ratings,
    reviews
  } = listing;
  let idx = randomNum(images.length);
  return (
    <div className="similar-slide">
      <a href="#" className="special">
        <img src={images[idx]} width="600" height="400"/>
      </a>
      <div className="similar-rooms">
        <h4>{rooms}BR * Sleeps {occupancy}</h4>
      </div>
      <div className="similar-rate">
        ${price} avg/night
      </div>
      <div className="similar-rating-stars">
        <Stars
          rating={ratings}
          starRatedColor="black"
          starDimension="14px"
          starSpacing="2px"
          numberOfStars={5}
        /><span className="similar-reviews">({reviews})</span>
      </div>
    </div>
  );
};

export default Slide;
