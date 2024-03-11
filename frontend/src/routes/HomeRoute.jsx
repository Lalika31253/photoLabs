
import React from "react";
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


import '../styles/HomeRoute.scss';

function HomeRoute({ photos, topics, updateDisplayModal, favourite, handleFavourite, fetchPhotoByTopic }) {

  return (
    <div className="home-route">

      <TopNavigation topics={topics} favourite={favourite} fetchPhotoByTopic={fetchPhotoByTopic} />
      <PhotoList photos={photos}
        handleFavourite={handleFavourite}
        favourite={favourite}
        updateDisplayModal={updateDisplayModal} />

    </div>
  );

}

export default HomeRoute;

