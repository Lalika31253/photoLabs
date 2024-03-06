import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, handleFavourite, favourite, updateDisplayModal, similarPhotos }) => {

  const { id, location: { city, country }, urls: { full }, user } = photo;

  const handleClick = () => {
    updateDisplayModal(photo);
  };


  return (
    <div className="photo-list__item">
      <PhotoFavButton favourite={favourite} handleFavourite={handleFavourite} id={id} />
      <img onClick={handleClick} className="photo-list__image" src={full} alt="Image" />
      <div className='photo-details-modal__photographer-details'>
        <img className="photo-details-modal__photographer-profile" src={user.profile} alt="Profile Image" />
        <div className="photo-details-modal__photographer-info">
          {user.name}
          <span className="photo-details-modal__photographer-location">{city}, {country}</span>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;

