import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ data }) => {
const { id, location, imageSource, username, profile } = data;

return (
<div className="photo-list__item">
  <img className="photo-list__image" src={imageSource} alt="User image" />
  <div className="photo-list__user-details">
    <img className="photo-list__user-profile" src={profile} alt="User profile" />
    <div className="photo-list__user-info"> 
      {username}
      <div className="photo-list__user-location">
        {location.city}
        {location.country}
      </div>
    </div>   
  </div>
  <PhotoFavButton />
</div>

)
}


export default PhotoListItem;

