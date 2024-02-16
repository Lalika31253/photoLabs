import React from "react";

import "../styles/PhotoList.scss";


const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {
  return (
    <ul className="photo-list">
        {sampleDataForPhotoList.map(photo => (
        <div key = { photo.id } className="photo-list__item">
          <img className="photo-list__image" src={photo.urls.regular} alt="User image" />

          <div className="photo-list__user-details">
            <img className="photo-list__user-profile" src={photo.user.profile} alt="User profile" />
            <div className="photo-list__user-info">
              {photo.user.username}
              <div className="photo-list__user-location">
                {photo.location.city},
                {photo.location.country}
              </div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default PhotoList;
