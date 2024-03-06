import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favourite }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div><TopicList topics={topics} /></div>
      <div><FavBadge favourite={favourite} /></div>
    </div>
  )
}

export default TopNavigation;