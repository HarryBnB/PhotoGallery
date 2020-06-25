import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
// components
import Gallery from './Gallery.jsx';
import PhotoModal from './PhotoModal.jsx';

const Main = styled.div`
  margin: 130px auto;
  width: 940px;
  height: 1500px;
  font-family: sans-serif;
`;

const Modal = styled.div`
  position: fixed;
  overflow: hidden;
`;

const H3 = styled.h3`
  font-weight: 100;
  font-size: 25px;
  color: #484848;
  margin: 0 0 35px 5px;
  font-weight: bold;
`

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
        <Modal>
          <PhotoModal modal={this.state.modal} closePhotoModal={this.closePhotoModal} photos={this.state.view}/>
        </Modal>
      );
    } else {
      return (
        <Main>
          <H3>Private Suite For CAT LOVERS ^_^</H3>
          <Gallery photos={this.state.view.slice(0, 5)} handlePhotoClick={this.handlePhotoClick}/>
        </Main>
      );
    }
  }
}

export default App;