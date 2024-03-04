import React from 'react';
import '../styles/PhotoList.scss'
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favourite, handleFavourite, updateDisplayModal, displayModal }) => {

  return (

    <ul className="photo-list">
        {displayModal ? (<PhotoListItem
        photo={displayModal}
        favourite={favourite}
        handleFavourite={handleFavourite} />) : (photos.map((photo) => {
          return <PhotoListItem
            photoData={photo}
            key={photo.id}
            favourite={favourite}
            handleFavourite={handleFavourite}
            updateDisplayModal={updateDisplayModal} />
        }))}
    </ul>
  );
};

// return (
//   <ul className="photo-list">
//     {photos.map((photoData) => (
//       <PhotoListItem
//         key={photoData.id}
//         photoData={photoData}
//         favourite={favourite}
//         handleFavourite={handleFavourite}
//         updateDisplayModal={updateDisplayModal}
//       />
//     ))}
//   </ul>
// );
// };

export default PhotoList;
