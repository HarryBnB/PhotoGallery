import React from 'react';
import Photo from './Photo.jsx';
import styled from 'styled-components';

const GalleryContainer = styled.ul`
  height: 680px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: block;
`;

const Gallery = (props) => (
  <GalleryContainer>
    {props.photos.map((photo) => (
      <Photo currentPhoto={photo} handlePhotoClick={props.handlePhotoClick} allFivePhotos={props.photos}/>
    ))}
  </GalleryContainer>
);

export default Gallery;