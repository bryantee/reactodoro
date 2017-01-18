import React from 'react';
import Activity from './activity';
import AddActivityForm from './add-activity-form';

const ActivityList = (props) => {
  let activityList;
  if (props.list) {
    activityList = props.list.map((activity, index) => {
      return <Activity isSelected={ index === props.selected ? true : false} name={activity.name} completedSessions={activity.completedSessions} key={index} id={index} onClick={props.handler} />;
    });
  }


  return (
    <div>
      <AddActivityForm handleSubmit={props.handleSubmit} handleTextChange={props.handleTextChange} value={props.addActivityText}/>
      <ul onClick={props.handler}>
        {activityList}
      </ul>
    </div>
  );
}

export default ActivityList;
