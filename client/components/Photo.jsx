import React from 'react';
import styled from 'styled-components';

const Photo = (props) => (
  <div className="currentPhoto" onClick={() => props.handlePhotoClick(props.currentPhoto.property_id, props.currentPhoto.photo_id)}>
    <img src={props.currentPhoto.photo_url}/>
  </div>
);

export default Photo;