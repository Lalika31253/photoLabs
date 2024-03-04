import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, handleFavourite, favourite, updateDisplayModal, displayModal }) => {

  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user
  } = photo;

  const handleClick = () => {
    updateDisplayModal(photo);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton favourite={favourite} handleFavourite={handleFavourite} id={id} />
      {photo.modalState ? (
        <>
          <img onClick={() => updateDisplayModal(photo)} className="photo-details-modal__image" src={full} alt="Image" />
          <div className='photo-details-modal__photographer-details'>
            <img className="photo-details-modal__photographer-profile" src={profile} alt="Profile Image" />
            <div className="photo-details-modal__photographer-info">
              {user.name}
              <span className="photo-details-modal__photographer-location">{city}, {country}</span>
            </div>
          </div>
        </>
      ) : (
        <img onClick={handleClick} className="photo-list__image" src={full} alt="Image" />
      )}
    </div>
  );
};

// return (
//   <div className="photo-list__item">
//     <img
//       onClick={modalState ? () => updateDisplayModal(photoData) : handleClick}
//       className="photo-list__image"
//       src={full}
//       alt="Image"
//     />
//     {modalState && (
//       <div>
//         <div className='photo-details-modal__photographer-details'>
//           <img className="photo-details-modal__photographer-profile" src={user.profile} alt="Profile Image" />
//           <div className="photo-details-modal__photographer-info">
//             {user.name}
//             <span className="photo-details-modal__photographer-location">{city}, {country}</span>
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
// );
// };


export default PhotoListItem;

