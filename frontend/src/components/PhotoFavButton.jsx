import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    console.log("Clicked");
    setFavourite(!favourite);
  }

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">

        {<FavIcon selected={favourite}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;