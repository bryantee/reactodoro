import React from 'react';
import { ListItem } from 'material-ui/List';

const Activity = (props) => {
  const className = props.isSelected ? 'selected' : null;
  return (
      <ListItem
        onClick={props.onClick.bind(this, props.id)}
        id={props.id}
        className={className}
      >
        {props.name}  -- {props.completedSessions}
      </ListItem>

  )
}

export default Activity
