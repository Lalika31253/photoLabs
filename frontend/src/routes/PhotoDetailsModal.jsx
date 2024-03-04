import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ( {updateDisplayModal} ) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={updateDisplayModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
