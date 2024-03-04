import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="top-nav-bar"><TopicList topics={props.topics}/></span>
      <span className="top-nav-bar"><FavBadge /></span>
    </div>
  )
}

export default TopNavigation;