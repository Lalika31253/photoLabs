import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useApplicationData } from './hooks/useApplicationData';
import TopNavigation from './components/TopNavigationBar';


const App = () => {

  //import custom hook from useApplicationData
  const {
    favourite,
    handleFavourite,
    updateDisplayModal,
    displayModal,
    photoData,
    topicData,
    fetchPhotoByTopic
  } = useApplicationData();


  return (
    <div className="App">

      <TopNavigation
        topics={topicData}
        favourite={favourite}
        fetchPhotoByTopic={fetchPhotoByTopic}
         />

      <HomeRoute
        photos={photoData}
        topics={topicData}
        updateDisplayModal={updateDisplayModal}
        favourite={favourite}
        handleFavourite={handleFavourite}
        fetchPhotoByTopic={fetchPhotoByTopic} />

      {/* show display modal when a picture was clicked */}
      {displayModal && <PhotoDetailsModal
        updateDisplayModal={updateDisplayModal}
        displayModal={displayModal}
        favourite={favourite}
        handleFavourite={handleFavourite} />}

    </div>
  );
};

export default App;


