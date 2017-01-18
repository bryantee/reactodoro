import React from 'react'

const Activity = (props) => {
  const className = props.isSelected ? 'selected' : null;
  return (
    <li id={props.id} className={className}>{props.name} -- Complete: {props.completedSessions} </li>
  )
}

export default Activity
