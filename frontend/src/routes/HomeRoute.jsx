// import React from 'react';

// import '../styles/HomeRoute.scss';

// const HomeRoute = () => {
//   return (
//     <div className="home-route">
//       {/* Insert React */}
//     </div>
//   );
// };

// export default HomeRoute;



import React from "react";
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from "../routes/PhotoDetailsModal";


import '../styles/HomeRoute.scss';

function HomeRoute({ photos, topics, updateDisplayModal, favourite, handleFavourite }) {

  return (
    <div className="home-route">

      <TopNavigation topics={topics} favourite={favourite} />
      <PhotoList photos={photos}
        handleFavourite={handleFavourite}
        favourite={favourite}
        updateDisplayModal={updateDisplayModal} />

    </div>
  );

}

export default HomeRoute;

