import React from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';





// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = [1, 2, 3];

  return (
    <div className="App">
      
      {/* {photos.map( photo => (
        <PhotoListItem key={photo} data={sampleDataForPhotoListItem}/>
      ))} */}
      {/* <PhotoListItem photo={data} /> */}

      <TopNavigationBar />
      <PhotoList /> 
      <TopicList />
      

           
    </div>
  );
};

export default App;
