import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
// components
import Gallery from './Gallery.jsx';
import PhotoModal from './PhotoModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: [],
      showPhotoModal: false,
      modal: {}
    }

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.closePhotoModal = this.closePhotoModal.bind(this);
  }

  componentDidMount(){
    this.getRoomPhotos(0); // default: get the first room's photos
  }

  getRoomPhotos(propertyID) {
    $.get(`/rooms/${propertyID}/photos`, (photos) => {
      this.setState({
        view: photos
      });
    });
  }
  // Open Photo Modal
  handlePhotoClick(propertyID, photoID) {
    $.get(`/rooms/${propertyID}/photos/${photoID}`, (photo) => {
      this.setState({
        modal: photo[0],
        showPhotoModal: true
      });
    });
  }
  // Close Photo Modal and back to Gallery
  closePhotoModal() {
    this.setState({
      showPhotoModal: false
    });
  }

  render() {
    if(this.state.showPhotoModal){
      return (
        <div>
          <div>Photo Modal</div>
          <PhotoModal modal={this.state.modal} closePhotoModal={this.closePhotoModal} photos={this.state.view}/>
        </div>
      );
    } else {
      return (
        <div>
          <div>Gallery</div>
          <Gallery photos={this.state.view} handlePhotoClick={this.handlePhotoClick}/>
        </div>
      );
    }
  }
}

export default App;