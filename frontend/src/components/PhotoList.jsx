import React from 'react';
import '../styles/PhotoList.scss'
import PhotoListItem from './PhotoListItem';
// import photos from '../mocks/photos';



const PhotoList = ( { photos, isFavourite, handleClick }) => {


  return (
  
    <ul className="photo-list">
      {photos.map((photoData) => (
        <PhotoListItem photoData={photoData} key={photoData.id} isFavourite={isFavourite} handleClick={handleClick}/>
      ))}
    </ul>
  );
};

export default PhotoList;
