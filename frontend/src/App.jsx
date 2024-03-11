import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {

  const {
    favourite,
    handleFavourite,
    updateDisplayModal,
    displayModal,
    photoData,
    topicData
  } = useApplicationData();


  return (
    <div className="App">

      <HomeRoute 
        photos={photoData} 
        topics={topicData} 
        updateDisplayModal={updateDisplayModal} 
        favourite={favourite}
        handleFavourite={handleFavourite} />

      {displayModal && <PhotoDetailsModal 
        updateDisplayModal={updateDisplayModal} 
        displayModal={displayModal} 
        favourite={favourite}
        handleFavourite={handleFavourite} />}

    </div>
  );
};

export default App;


