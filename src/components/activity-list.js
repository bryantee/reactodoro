import React from 'react';
import Activity from './activity';
import AddActivityForm from './add-activity-form';
import { List } from 'material-ui/List';

const ActivityList = (props) => {
  let activityList;
  if (props.list) {
    activityList = props.list.map((activity, index) => {
      return <Activity isSelected={ index === props.selected ? true : false} name={activity.name} completedSessions={activity.completedSessions} key={index} id={index} onClick={props.handler} />;
    });
  }


  return (
    <div className="activity-box">
      <AddActivityForm handleSubmit={props.handleSubmit} handleTextChange={props.handleTextChange} value={props.addActivityText}/>
      <List>
        {activityList}
      </List>
    </div>
  );
}

export default ActivityList;
