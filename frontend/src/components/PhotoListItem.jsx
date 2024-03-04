import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photoData, handleClick, isFavourite }) => {

  const {
    id, 
    location: {city, country},
    urls: {full, regular},
    user
  } = photoData;


  return (
    <div className="photo-list__item">
        <PhotoFavButton isFavourite={isFavourite} handleClick={handleClick} id={id}/>
      <img className="photo-list__image" src={full} alt={user.name} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={user.username} />
        <div className="photo-list__user-info">{user.name}</div>
        <div className="photo-list__user-info photo-list__user-location">
          {city}, {country}
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;

