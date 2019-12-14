import React, { Component } from 'react';

const Modal = ({
      viewing,
      images,
      toggleView,
      current,
      updateCurrent
     }) => (
  <div className="modal-container" id={`${viewing ? 'show-modal' : ''}`}>
    <div className="modal-header">
      <div className="modal-count">
        <span className="modal-current">{current}</span>/{images.length}
      </div>
      <div className="modal-close" onClick={() => toggleView()}>
        <span className="close-icon">X</span>
      </div>
    </div>

    <div className="modal-carousel">
      <div className="modal-content">
        {images.map((img, i) => (
          <div
            className="slide"
            key={i}
            id={`${i + 1 === current ? 'show-slide': ''}`}>
            <img src={img}/>
          </div>
        ))}
      </div>
      <div className="nav-wrapper prev" onClick={() => updateCurrent('prev')}>
        &#10094;
      </div>
      <div className="nav-wrapper next" onClick={() => updateCurrent('next')}>
        &#10095;
      </div>
    </div>
  </div>
);

export default Modal;
