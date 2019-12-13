import React, { Component } from 'react';
import Preview from './preview.jsx';
import Modal from './modal.jsx';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: [],
      viewAll: false,
      current: 1
    };
    this.toggleView = this.toggleView.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.updateCurrent = this.updateCurrent.bind(this);
  }

  componentDidMount() {
    this.setState({
      preview: this.props.images.slice(0,2)
    });
  }

  updateCurrent(direction) {
    this.setState({
      current: direction === 'next' ?
      (this.state.current === this.props.images.length ? 1  : this.state.current + 1)
      :(this.state.current === 1 ? this.props.images.length : this.state.current - 1)
    });
  }

  toggleView() {
    this.setState({
      viewAll: !this.state.viewAll
    });
  }
  selectImage(img) {
    this.setState({
      current: img
    });
    this.toggleView();
  }

  render() {
    return (
      <div className="carousel">
        <div className="main-image-container">
          <div className="main-images">
            <div className="main-images-preview">
              {this.state.preview.length ?
                this.state.preview.map((image, i) => <Preview key={i} idx={i} image={image} select={this.selectImage}/>) :
                'loading...'
              }
            </div>
          </div>
          <div className="view-all">
            <button className="va-btn" tabIndex="-1" type="button" onClick={() => this.toggleView()}>
              <span className="btn-label">view all {this.props.images.length} photos</span>
            </button>
          </div>
        </div>
        <Modal
          images={this.props.images}
          current={this.state.current}
          toggleView={this.toggleView}
          viewing={this.state.viewAll}
          updateCurrent={this.updateCurrent}
          />
      </div>
    );
  }
};

export default Main;
