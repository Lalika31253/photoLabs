import { useEffect, useReducer } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const initialState = {
  favourite: [],
  displayModal: false,
  photoData: [],
  topicData: []
};


const reducer = (state, action) => {

  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourite: [...state.favourite, action.payload]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourite: state.favourite.filter(id => id !== action.payload)
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        displayModal: action.payload
      };

    case ACTIONS.SET_PHOTO_DATA:
      try {
        return { ...state, photoData: action.payload };
      } catch (error) {
        console.error('Error updating photoData:', error);
        return state;
      }

    case ACTIONS.SET_TOPIC_DATA:
      try {
        return { ...state, topicData: action.payload };
      } catch (error) {
        console.error('Error updating topicData:', error);
        return state;
      }

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload
      };

    default:
      return state;
  };

}


export const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // fetch photos from api
    async function fetchPhotos() {
      const response = await fetch("/api/photos");
      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }
      return response.json();
    }

    //fetch topics from api
    async function fetchTopics() {
      const response = await fetch('/api/topics');
      if (!response.ok) {
        throw new Error('Failed to fetch topics');
      }
      return response.json();
    }

    // use Promise.all to all data
    Promise.all([fetchPhotos(), fetchTopics()])
      .then(([photos, topics]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });

  }, []);

  //get photos when clicking on topic button
  async function fetchPhotoByTopic(id) {
    try {
      const response = await axios.get(`/api/topics/photos/${id}`);
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data });
    }
    catch (error) {
      console.error(error);
    }
  };

  //function to handle adding/removing favourite
  const handleFavourite = (id) => {
    const actionType = state.favourite.includes(id);
    if (actionType) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    }
  };

  //function to ubdate display modal
  const updateDisplayModal = (props) => {
    const modalState = state.displayModal ? false : props;
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: modalState });
  };


  return (
    {
      favourite: state.favourite,
      displayModal: state.displayModal,
      handleFavourite,
      updateDisplayModal,
      photoData: state.photoData,
      topicData: state.topicData,
      fetchPhotoByTopic
    }
  )
};




