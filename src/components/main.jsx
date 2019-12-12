import React, { Component } from 'react';
import Preview from './preview.jsx';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: [],
      viewAll: false
    };
  }

  componentDidMount() {
    this.setState({
      preview: this.props.images.slice(0,2)
    });
  }

  render() {
    return (
      <div className="carousel">
        <div className="main-image-container">
          <div className="main-images">
            <div className="main-images-preview">
              {this.state.preview.length ?
                this.state.preview.map((image, i) => <Preview key={i} image={image}/>) :
                'loading...'
              }
            </div>
          </div>
          <div className="view-all">
            <button className="va-btn" tabIndex="-1" type="button">
              <span className="btn-label">view all {this.props.images.length} photos</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
