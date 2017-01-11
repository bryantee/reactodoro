import React from 'react'

const Activity = (props) => {
  const className = props.isSelected ? 'selected' : null;
  return (
    <li id={props.id} className={className}> Activity {props.name} </li>
  )
}

export default Activity
