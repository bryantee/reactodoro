import React, { PropTypes } from 'react';
import Activity from './activity';

const ActivityList = (props) => {
  const activityList = props.list.map((activity, index) => {
    return <Activity isSelected={ index === props.selected ? true : false} name={activity} key={index} id={index} onClick={props.handler} />;
  });
  return (
    <div onClick={props.handler}>
      {activityList}
    </div>
  );
}

export default ActivityList;
