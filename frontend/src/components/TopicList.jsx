import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ( { topics } ) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem topicData={topicData} key={topicData.id} />
      ))}
    </div>
  );
};

export default TopicList;
