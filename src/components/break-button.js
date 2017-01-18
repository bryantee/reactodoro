import React from 'react'
import {Link} from 'react-router';

const BreakButton = (props) => {
  return (
    <Link to={props.to}>
      <button className='btn btn-outline-success'>Take a Break</button>
    </Link>
  )
}

export default BreakButton
