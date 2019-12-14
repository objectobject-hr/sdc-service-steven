import React from 'react';

const Preview = ({image, idx, select}) => (
  <div className="preview-wrapper" onClick={() => select(idx + 1)}>
    <img className="preview-image" src={image}/>
  </div>
);
export default Preview;
