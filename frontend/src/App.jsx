import React from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';





// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };


// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = [1, 2, 3];

  return (
    <div className="App">
      
      {/* {photos.map( photo => (
        <PhotoListItem key={photo} data={sampleDataForPhotoListItem}/>
      ))} */}
      {/* <PhotoListItem photo={data} /> */}

      <PhotoList /> 
      <TopicList />
      

           
    </div>
  );
};

export default App;
