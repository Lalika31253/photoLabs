import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ handleFavourite, id, favourite }) {

  return (
    <div onClick={() => handleFavourite(id)} className="photo-list__fav-icon">

      {/* render heart icon when it was favourited */}
      {Array.isArray(favourite) && favourite.includes(id) ? (
        <div className="photo-list__fav-icon-svg">
          <FavIcon selected={true} />
        </div>
      ) : (
        //render heart icon as unselected
        <div className="photo-list__fav-icon-svg">
          <FavIcon />
        </div>
      )}
    </div>
  );
};

export default PhotoFavButton;