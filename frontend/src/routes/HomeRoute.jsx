import React from "react";
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

function HomeRoute({ photos, updateDisplayModal, favourite, handleFavourite }) {

  return (
    <div className="home-route">

      <PhotoList photos={photos}
        handleFavourite={handleFavourite}
        favourite={favourite}
        updateDisplayModal={updateDisplayModal} />

    </div>
  );
};

export default HomeRoute;

