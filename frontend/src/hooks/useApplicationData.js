import { type } from "@testing-library/user-event/dist/type";
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useReducer } from "react";

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
      return {
        ...state,
        photoData: action.payload
      };


    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoByTopic: action.payload
      };


    default:
      return state;
  };

}


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch photos");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.log("Error fetching photos:", error);
      });


    fetch('/api/topics')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch topics");
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.log("Error fetching topics:", error);
      });

  }, []);


  const fetchPhotoByTopic = (topicId) => {
    if (topicId) {
      fetch(`/api/topics/photos/${topicId}`)
        .then(res => res.json())
        .then(data => {
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
        })
        .catch(error => {
          console.log("Error fetching photo for the specific topic:", error);
        });
    }
  }



  const handleFavourite = (id) => {
    const actionType = state.favourite.includes(id);
    if (actionType) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    }
  };


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

export default useApplicationData;
