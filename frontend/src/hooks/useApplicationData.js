import React, { useState } from "react";

const useApplicationData = () => {

  const [favourite, setFavourite] = useState([]);

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
    const modalProps = { ...props, modalState: true };
    displayModal ? setDisplayModal(null) : setDisplayModal(modalProps);
    // setDisplayModal(displayModal ? null : props);
  }

  return (
    { favourite, handleFavourite, displayModal, updateDisplayModal }
  )

};

export default useApplicationData;