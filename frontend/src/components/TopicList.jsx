import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ( { topics, fetchPhotoByTopic } ) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem topicData={topicData} key={topicData.id} fetchPhotoByTopic={fetchPhotoByTopic} />
      ))}
    </div>
  );
};

export default TopicList;
