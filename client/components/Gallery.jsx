import React from 'react';
import Photo from './Photo.jsx';
import styled from 'styled-components';

const Gallery = (props) => (
  <div className="gallery">
    {props.photos.map((photo) => (
      <Photo currentPhoto={photo} handlePhotoClick={props.handlePhotoClick}/>
    ))}
  </div>
);

export default Gallery;