import React, {useState} from "react";
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


import '../styles/HomeRoute.scss';

function HomeRoute ( { photos, topics, updateDisplayModal } ) {

  const [favourite, setFavourite] = useState([]);


  // const handleClick = (id) => {
  //   setFavourite((presentFavourites) => {
  //     if(presentFavourites.includes(id)) {
  //       return presentFavourites.filter(favouriteId => favouriteId !== id);
  //     } else {
  //       return [...presentFavourites, id]
  //     }
  //   });
  // }

  const handleClick = (id) => {
    if (favourite.includes(id)) {
      const newFAvourite = favourite.filter(favouriteId => favouriteId !== id);
      setFavourite(newFAvourite);
    } else {
      setFavourite(prevFavourite => [...prevFavourite, id]);
    }
  }
  
  return (
    <div className="home-route">
      
        <TopNavigation topics={topics} isFavourite={favourite}/>
        <PhotoList photos={photos} handleClick={handleClick} isFavourite={favourite} updateDisplayModal={updateDisplayModal}/>
      
    </div>
  );

}

export default HomeRoute;

