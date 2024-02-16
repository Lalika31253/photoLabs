import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
const { id, location, imageSource, username, profile } = data;

return (
  <div className="photo-list__item">

    <div className="photo-list__image">
      <img src={imageSource} alt="User image" />

     <div className="photo-list__user-details">
       <img className="photo-list__user-profile" src={profile} alt="User profile" />
        <div className="photo-list__user-info"> 
          {username}
            <div className="photo-list__user-info photo-list__user-location">
              {location.city}
              {location.country}
           </div>
        </div>   
     </div>
    </div>
  </div>
)
}


export default PhotoListItem;

