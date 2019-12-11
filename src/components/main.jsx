import React from 'react';

const Main = ({images}) => (
  <div className="carousel">
    <div className="main-image-container">
      <div className="main-images-wrapper">
        <div className="main-images">
          <ul>
            {images.map((image, i) => <li key={i}>{image}</li>)}
          </ul>
        </div>
      </div>
      <div className="view-all-button"></div>
    </div>
  </div>
);

export default Main;
