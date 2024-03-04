import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavourite }) => {
  return (
    <div className='fav-badge'>
      {/* <FavIcon displayAlert={!!isFavPhotoExist}/> */}
      <FavIcon displayAlert={isFavourite.length !== 0}/>
    </div>
  ) 
};

export default FavBadge;