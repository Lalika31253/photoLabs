import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="top-nav-bar"><TopicList /> <FavIcon /></span>
    </div>
  )
}

export default TopNavigation;