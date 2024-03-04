import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photoData }) => {

  const {
    id, 
    location: {city, country},
    urls: {full, regular},
    user
  } = photoData;


  return (
    <div className="photo-list__item">
        <PhotoFavButton />
      <img className="photo-list__image" src={full} alt={user.name} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={user.username} />
        <div className="photo-list__user-info">{user.name}</div>
        <div className="photo-list__user-info photo-list__user-location">
          {city}
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;

