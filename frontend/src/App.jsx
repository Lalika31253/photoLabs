import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {

  const {
    favourite,
    handleFavourite,
    updateDisplayModal,
    displayModal
  } = useApplicationData();




  return (
    <div className="App">

      <HomeRoute 
        photos={mockPhotoData} 
        topics={mockTopicData} 
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


