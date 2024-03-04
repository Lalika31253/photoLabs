import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ( { topics, favourite } ) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="top-nav-bar"><TopicList topics={topics}/></span>
      <span className="top-nav-bar"><FavBadge favourite={favourite}/></span>
    </div>
  )
}

export default TopNavigation;