import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
const { id, location, imageSource, username, profile } = data;

return (
  <div>
    
    <h1>User location {location.city}</h1>
    <h1>User location {location.country}</h1>
    <img src={imageSource} alt="User image" />
    <h1>User name {username}</h1>
    <img src={profile} alt="User profile" />
  </div>
)
}


export default PhotoListItem;

