import React from 'react';
import styled from 'styled-components';

const PhotoModal = (props) => (
  <div className="currentPhotoModal">
    <div className="closeButton" onClick={() => props.closePhotoModal()}>X Close</div>
    <div className="orderNum">{`${1 + props.photos.findIndex(photo => photo.photo_id === props.modal.photo_id)} / ${props.photos.length}`}</div>
    <img className="modalPhoto" src={props.modal.photo_url}/>
    <div className="description">{props.modal.intro}</div>
  </div>
);

export default PhotoModal;

/*
{
    "photo_id": 1,
    "photo_url": "https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/f2b2012e-5772-4cef-8afc-b50901b627f2.jpg",
    "intro": "Et voluptas vel placeat exercitationem nam nisi.",
    "property_id": 0
}
*/