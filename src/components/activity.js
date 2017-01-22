import React from 'react';
import { ListItem } from 'material-ui/List';
import Chip from 'material-ui/Chip';

const Activity = (props) => {
  const className = props.isSelected ? 'selected' : null;
  const styles={
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center"
  }
  return (
      <ListItem
        onClick={props.onClick.bind(this, props.id)}
        id={props.id}
        className={className}
        primaryText={props.name}
        rightIcon={<Chip id={props.id} style={styles}>{props.completedSessions}</Chip>}
      >
      </ListItem>

  )
}

export default Activity
