import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import useApplicationData from '../hooks/useApplicationData';

function PhotoFavButton({ handleFavourite, id, favourite }) {

  return (
    <div onClick={() => handleFavourite(id)} className="photo-list__fav-icon">
      {Array.isArray(favourite) && favourite.includes(id) ? (
        <div className="photo-list__fav-icon-svg">
          <FavIcon selected={true} />
        </div>
      ) : (
        <div className="photo-list__fav-icon-svg">
          <FavIcon />
        </div>

      )}
    </div>
  );

}

export default PhotoFavButton;