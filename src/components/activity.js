import React from 'react';
import { ListItem } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {darkBlack} from 'material-ui/styles/colors';

const Activity = (props) => {
  const className = props.isSelected ? 'selected' : null;

  const styles={
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center"
  }

  // Setup menus

  const iconButtonElement = (
    <IconButton touch={true}>
      <MoreVertIcon color={darkBlack} />
    </IconButton>
  )

  const leftIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement} >
      <MenuItem
        primaryText='Edit'
        onTouchTap={(e) => console.log('Edit clicked')}
      ></MenuItem>
      <MenuItem
        primaryText='Delete'
        onTouchTap={props.deleteActivity.bind(this, props.name)}
      ></MenuItem>
    </IconMenu>
  )

  return (
      <ListItem
        onClick={props.onClick.bind(this, props.id)}
        id={props.id}
        className={className}
        primaryText={props.name}
        rightIcon={leftIconMenu}
        leftIcon={<Chip id={props.id} style={styles}>{props.completedSessions}</Chip>}
      >
      </ListItem>

  )
}

export default Activity
