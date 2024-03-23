import React from 'react';
import '../styles/PhotoList.scss'
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favourite, handleFavourite, updateDisplayModal, similarPhotos }) => {

  return (

    <ul className="photo-list">
      {/* map similar photo for display modal */}
      {similarPhotos ? (similarPhotos.map(photos => {
        return <PhotoListItem
          key={photos.id}
          photo={photos}
          handleFavourite={handleFavourite}
          favourite={favourite}
          updateDisplayModal={updateDisplayModal} />
      })) : (photos.map(photo => { //map photo for home route
        return <PhotoListItem
          key={photo.id}
          photo={photo}
          handleFavourite={handleFavourite}
          favourite={favourite}
          updateDisplayModal={updateDisplayModal} />
      }))}

    </ul>
  );
};

export default PhotoList;
