import React from 'react';
import Slide from './slide.jsx';

const Similar = ({ listings }) => {
  let maxListings = listings.length > 5 ? listings.slice(0,5) : listings;
  return (
    <div className="similar-carousel">
      <br/>
      <div className="similar-title">
        <h2> You might like these similar listings </h2>
      </div>
      <br/>
      {maxListings.map((listing, i) => (
        <Slide listing={listing} key={i}/>
      ))}
    </div>
  );
};

export default Similar;
