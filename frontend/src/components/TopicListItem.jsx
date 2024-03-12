import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topicData, fetchPhotoByTopic }) => {

  return (
    <div className="topic-list__item">
      <div onClick={() => fetchPhotoByTopic(topicData.id)} className="topic-list__item span ">{topicData.title}</div>
    </div>
  );
};

export default TopicListItem;
