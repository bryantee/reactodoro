import React from 'react'
import {Link} from 'react-router';
import {RaisedButton} from 'material-ui';

const BreakButton = (props) => {
  return (
    <Link to={props.to}>
      <RaisedButton backgroundColor="#a4c639" label="Take a Break" />
    </Link>
  )
}

export default BreakButton
