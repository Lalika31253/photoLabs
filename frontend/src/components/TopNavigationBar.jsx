import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favourite, fetchPhotoByTopic }) => {
  return (
    <div className="top-nav-bar">
      <a href="http://localhost:3000/" className="top-nav-bar__logo">PhotoLabs</a>
      <div><TopicList topics={topics} fetchPhotoByTopic={fetchPhotoByTopic} /></div>
      <div><FavBadge favourite={favourite} redHeart={true}/></div>
    </div>
  );
};

export default TopNavigation;

