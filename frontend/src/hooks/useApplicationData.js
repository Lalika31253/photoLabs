import { type } from "@testing-library/user-event/dist/type";
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import React, { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

  const initialState = {
    favourite: [],
    displayModal: false,
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
      
    default:
      return state;
  };
  
  }


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);


  const handleFavourite = (id) => {
    const actionType = state.favourite.includes(id);
    if(actionType) {
      dispatch({type: 'ACTIONS.FAV_PHOTO_REMOVED', payload: id});
    } else {
      dispatch({type: 'ACTIONS.FAV_PHOTO_ADDED', payload: id});
    }
  };


  const updateDisplayModal = (props) => {
    const modalState = state.displayModal ? false : props;
    // const modalState = !state.displayModal;
    dispatch({type: 'ACTIONS.DISPLAY_PHOTO_DETAILS', payload: modalState});
  };



  return (
    {favourite: state.favourite, displayModal: state.displayModal, handleFavourite, updateDisplayModal}
  )



  // const [favourite, setFavourite] = useState([]);

  // const handleFavourite = (id) => {
  //   setFavourite((presentFavourites) => {
  //     if (presentFavourites.includes(id)) {
  //       return presentFavourites.filter(favouriteId => favouriteId !== id);
  //     } else {
  //       return [...presentFavourites, id]
  //     }
  //   })
  // }

  // const [displayModal, setDisplayModal] = useState(null);

  // const updateDisplayModal = (props) => {
  //   const modalProps = { ...props, modalState: true };
  //   displayModal ? setDisplayModal(null) : setDisplayModal(modalProps);
  
  // }

  // return (
  //   { favourite, handleFavourite, displayModal, updateDisplayModal }
  // )

};

export default useApplicationData;