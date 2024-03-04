import React, {useState} from "react";
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';
import { queryAllByPlaceholderText } from "@testing-library/react";

function HomeRoute ( { photos, topics } ) {

  const [favourite, setFavourite] = useState([]);


  const handleClick = (id) => {
    setFavourite((presentFavourites) => {
      if(presentFavourites.includes(id)) {
        return presentFavourites.filter(favouriteId => favouriteId !== id);
      } else {
        return [...presentFavourites, id]
      }
    });
  }
  
  return (
    <div className="home-route">
      
        <TopNavigation topics={topics} isFavourite={favourite}/>
        <PhotoList photos={photos} handleClick={handleClick} isFavourite={favourite}/>
      
    </div>
  );

}

export default HomeRoute;

