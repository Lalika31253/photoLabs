import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ data }) => {
const { id, location, imageSourse, username, profile } = data;

return (
  <div>
    
    <h1>User location {location.city}</h1>
    <h1>User location {location.country}</h1>
    <h1>User image {imageSourse}</h1>
    <h1>User name {username}</h1>
    <h1>User profile {profile}</h1>
  </div>

)
}


export default PhotoListItem;

