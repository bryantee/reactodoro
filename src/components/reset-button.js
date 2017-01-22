import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const ResetPomoButton = ({ reset }) => {
  return (
    <RaisedButton onClick={reset} secondary={true} label="RESET" />
  );
}

export default ResetPomoButton;
