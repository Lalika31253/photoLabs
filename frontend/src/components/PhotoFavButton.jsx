import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ handleClick, id, isFavourite }) {

  return (
    <div onClick={() => handleClick(id)} className={`photo-list__fav-icon ${isFavourite.includes(id) ? 'photo-list__fav-icon-svg' : ''}`}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite.includes(id)}/>
      </div>
    </div>
  );

}

export default PhotoFavButton;