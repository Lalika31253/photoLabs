import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favourite, setFavourite] = useState([]);
  
  // const handleFavourite = (id) => {
  //   if (favourite.includes(id)) {
  //     const newFavourite = favourite.filter(favouriteId => favouriteId !== id);
  //     setFavourite(newFavourite);
  //   } else {
  //     setFavourite(prevFavourite => [...prevFavourite, id]);
  //   }
  // }

  const handleFavourite = (id) => {
    setFavourite((presentFavourites) => {
      if (presentFavourites.includes(id)) {
        return presentFavourites.filter(favouriteId => favouriteId !== id);
      } else {
        return [...presentFavourites, id]
      }
    })
  }
  

  const [displayModal, setDisplayModal] = useState(null);
  
  const updateDisplayModal = (props) => {
    const modalProps = {...props, modalState: true};
    displayModal ? setDisplayModal(null) : setDisplayModal(modalProps);
    // setDisplayModal(displayModal ? null : props);
  }


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


