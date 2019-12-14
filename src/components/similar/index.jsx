import React from 'react';
import Similar from './similar.jsx';
import Button from './button.jsx';

const App = ({ listings }) => {
  let isSimilar = listings.length;
  let content = isSimilar ?
    <Similar listings={listings}/> :
    "Unfortunately, we don't have any similar listings in your area.";

  return (
    <div className="similar-listings-container">
      { isSimilar ? <Button/> : ''}
      { content }
    </div>
  );
};

export default App;
