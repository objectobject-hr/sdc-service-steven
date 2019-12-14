import React from 'react';
import Slide from './slide.jsx';

const Similar = ({ listings }) => (
  <div className="similar-carousel">
    <br/>
    <div className="similar-title">
      <h2> You might like these similar listings </h2>
    </div>
    <br/>
    {listings.map((listing, i) => (
      <Slide listing={listing} key={i}/>
    ))}
  </div>
);

export default Similar;
