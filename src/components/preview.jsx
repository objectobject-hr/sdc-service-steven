import React from 'react';

const Preview = ({image}) => (
  <div className="preview-wrapper">
    <img className="preview-image" src={image}/>
  </div>
);
export default Preview;
