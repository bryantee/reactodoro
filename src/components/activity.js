import React, { PropTypes } from 'react'

const Activity = (props) => {
  const className = props.isSelected ? 'selected' : null;
  return (
    <div id={props.id} className={className}> Activity {props.name} </div>
  )
}

export default Activity
