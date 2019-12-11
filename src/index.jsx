import React, { Component } from 'react';
import ReactDOM from  'react-dom';
import Main from './components/main.jsx';
// import Similar from './components/similar.jsx';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentListing: 0,
      similar: [],
      images: []
    };
    this.getListing = this.getListing.bind(this);
    this.getSimilar = this.getSimilar.bind(this);
  }

  getSimilar(ids) {
    function retrieveSimilar(id) {
      return axios.get(`/carousel-service/${id}`);

    }

    let similar = ids.map(id => retrieveSimilar(id));

    Promise.all(similar)
      .then(similar => {
        similar = similar.map(l => l.data);
        this.setState({
          similar
        });
      })
      .catch(e => console.error('similar 1: ', e));
  }

  getListing(id) {
    axios.get(`/carousel-service/${id}`)
    .then(response => {
      this.setState({
        currentListing: id,
        images: response.data.images
      });
      this.getSimilar(response.data.similar);
    })
    .catch(err => {
      console.error(err);
    });
  }

  componentDidMount() {
    this.getListing(23);
  }

  render() {
    return(
      <div>
        {this.state.images.length ? <Main images={this.state.images}/> : 'loading...'}
      </div>
    );
  }
}

const root = document.getElementById('app');
ReactDOM.render(<App/>, root);
