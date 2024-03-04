import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';





// Note: Rendering a single component to build components in isolation
const App = () => {

  const [displayModal, setDisplayModal] = useState(0);
  
  const updateDisplayModal = (props) => {
    // setDisplayModal(!displayModal)
    displayModal ? setDisplayModal(0) : setDisplayModal(props);
  }


  return (
    <div className="App">

      <HomeRoute photos={mockPhotoData} topics={mockTopicData} updateDisplayModal={updateDisplayModal} />
      {displayModal && <PhotoDetailsModal updateDisplayModal={updateDisplayModal} displayModal={displayModal} />}


    </div>
  );
};

export default App;


