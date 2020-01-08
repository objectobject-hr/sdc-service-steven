import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main/index.jsx';
import Similar from './similar/index.jsx';
import DataRetriever from '../data';

const mainService = document.querySelector('#carousel-service');
const similarService = document.querySelector('#similar-service');

DataRetriever(data => {
  let {
    images,
    similarListings
  } = data;
  console.log(similarListings);
  ReactDOM.render(<Main images={images}/>, mainService);
  ReactDOM.render(<Similar listings={similarListings}/>, similarService);
});
