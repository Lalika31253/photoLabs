import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    // console.log("Clicked");
    setFavourite(prevFavourite => !prevFavourite);
  }


  return (
    <div className={`photo-list__fav-icon ${favourite ? 'photo-list__fav-icon-svg' : ''}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon favourite={FavIcon}/>
      </div>
    </div>
  );

}

export default PhotoFavButton;