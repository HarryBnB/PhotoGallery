import React from 'react';
import styled from 'styled-components';

const FirstPhoto = styled.li`
  width: 460px;
  height: 310px;
  float: left;
  margin: 0 5px 10px 5px;
`;

const FirstImg = styled.img`
  width: 460px;
  height: 310px;
  display: block;
  border-radius: 15px 0px 0px 15px;
`;

const CurrentPhoto = styled.li`
  width: 225px;
  height: 150px;
  float: left;
  margin: 0 5px 10px 5px;
`;

const TwoImg = styled.img`
  width: 225px;
  height: 150px;
  display: block;
  border-radius: 0px 15px 0px 0px;
`;

const FourImg = styled.img`
  width: 225px;
  height: 150px;
  display: block;
  border-radius: 0px 0px 15px 0px;
`;

const OneThreeImg = styled.img`
  width: 225px;
  height: 150px;
  display: block;
`;

const Button = styled.button`
  display: inline-block;
  position: relative;
  padding: 0.5em 1em;
  border: 1px solid black;
  border-radius: 8px;
  bottom: 40px;
  left: 80px;
  font-size: 0.9em;
  background: white;
`;

const Photo = (props) => {
  // when the currentPhoto is at index 0 in allFivePhotos array
  if(props.allFivePhotos[0].photo_id === props.currentPhoto.photo_id) {
    return (
      <FirstPhoto onClick={() => props.handlePhotoClick(props.currentPhoto.property_id, props.currentPhoto.photo_id)}>
        <FirstImg src={props.currentPhoto.photo_url}/>
      </FirstPhoto>
    )
  // when the currentPhoto is at index 2 in allFivePhotos array
  } else if(props.allFivePhotos[2].photo_id === props.currentPhoto.photo_id){
    return (
      <CurrentPhoto onClick={() => props.handlePhotoClick(props.currentPhoto.property_id, props.currentPhoto.photo_id)}>
        <TwoImg src={props.currentPhoto.photo_url}/>
      </CurrentPhoto>
    )
  // when the currentPhoto is at index 4 in allFivePhotos array
  } else if(props.allFivePhotos[4].photo_id === props.currentPhoto.photo_id){
    return (
      <CurrentPhoto>
        <FourImg src={props.currentPhoto.photo_url} onClick={() => props.handlePhotoClick(props.currentPhoto.property_id, props.currentPhoto.photo_id)}/>
        <Button onClick={() => props.handlePhotoClick(props.allFivePhotos[0].property_id, props.allFivePhotos[0].photo_id)}>Show all photos</Button>
      </CurrentPhoto>
    )
  // when the currentPhoto is at index 1 or 3 in allFivePhotos array
  } else {
    return (
      <CurrentPhoto onClick={() => props.handlePhotoClick(props.currentPhoto.property_id, props.currentPhoto.photo_id)}>
        <OneThreeImg src={props.currentPhoto.photo_url}/>
      </CurrentPhoto>
    )
  }
};

export default Photo;