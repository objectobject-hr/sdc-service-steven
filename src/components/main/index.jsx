import React from 'react';
import Main from './main.jsx';

const App = ({images}) => (
  <div>
    {images.length ? <Main images={images}/> : 'loading...'}
  </div>
);

export default App;
