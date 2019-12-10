import React, { Component } from 'react';
import ReactDOM from  'react-dom';
// import Main from './components/main.jsx';
// import Similar from './components/similar.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <h1>Webpack Setup</h1>
    );
  }
}

const root = document.getElementById('app');
ReactDOM.render(<App/>, root);
