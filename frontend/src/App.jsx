import React, {useState} from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';





// Note: Rendering a single component to build components in isolation
const App = () => {

  const [displayModal, setDisplayModal] = useState(false);

  const updateDisplayModal = () => {
    setDisplayModal(!displayModal)
  }

  return (
    <div className="App">

      <HomeRoute photos={mockPhotoData} topics={mockTopicData} updateDisplayModal={updateDisplayModal}/>  
      {displayModal && <PhotoDetailsModal updateDisplayModal={updateDisplayModal}/>}

           
    </div>
  );
};

export default App;


