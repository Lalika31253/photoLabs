import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favourite = [] }) => {
  const isFavourite = favourite?.length > 0;
  return (
    <div className='fav-badge'>
      {isFavourite ? (<FavIcon displayAlert={isFavourite} selected={true} />) : (<FavIcon />)}
    </div>
  );
};

export default FavBadge;