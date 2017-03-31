import React from 'react';
import Activity from './activity';
import AddActivityForm from './add-activity-form';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';

const ActivityList = (props) => {
  let activityList;
  if (props.list) {
    activityList = props.list.map((activity, index) => {
      return <Activity
        isSelected={ index === props.selected ? true : false}
        name={activity.name}
        completedSessions={activity.completedSessions}
        key={index}
        id={index}
        onClick={props.handler}
        deleteActivity={props.deleteActivity} />;
    });
  }

  return (
    <Paper zDepth={2} className="activity-box panel">
      <AddActivityForm
        handleSubmit={props.handleSubmit}
        handleTextChange={props.handleTextChange}
        value={props.addActivityText}/>
      <List>
        {activityList}
      </List>
    </Paper>
  );
}

export default ActivityList;
