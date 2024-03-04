import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = ( {topicData}) => {

const {
  id, 
  slug,
  label
} = topicData

  return (
    <div className="topic-list__item">
      <div className="topic-list__item span ">{label}</div>
    </div>
  );
};

export default TopicListItem;
