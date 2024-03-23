import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, fetchPhotoByTopic }) => {

  return (
    <div className="topic-list__item">
      <div onClick={() => fetchPhotoByTopic(topic.id)} className="topic-list__item span ">{topic.title}</div>
    </div>
  );
};

export default TopicListItem;
