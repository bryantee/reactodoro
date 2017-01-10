import React, { PropTypes } from 'react';
import Activity from './activity';
import AddActivityForm from './add-activity-form';

const ActivityList = (props) => {
  const activityList = props.list.map((activity, index) => {
    return <Activity isSelected={ index === props.selected ? true : false} name={activity} key={index} id={index} onClick={props.handler} />;
  });
  return (
    <div>
      <AddActivityForm handleSubmit={props.handleSubmit} handleTextChange={props.handleTextChange} value={props.addActivityText}/>
      <div onClick={props.handler}>
        {activityList}
      </div>
    </div>
  );
}

export default ActivityList;
