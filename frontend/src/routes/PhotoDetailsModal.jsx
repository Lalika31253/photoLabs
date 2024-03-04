import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = ({ updateDisplayModal, displayModal }) => {
  console.log("Modal data", displayModal);

  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user,
    similar_photos    
  } = displayModal;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={updateDisplayModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={full} alt="Photo" />

        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={user.profile} alt="Profile Image" />

          <div className="photo-details-modal__photographer-info">{user.name}</div>
          <div className='photo-details-modal__photographer-location'> {city}, {country}</div>
        </div>
      </div>

      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <div className="photo-details-modal__similar-photos-list">
        <PhotoList className="photo-details-modal__images" photos={similar_photos}/>
      </div>
    </div>

    </div>
  )
};

export default PhotoDetailsModal;

