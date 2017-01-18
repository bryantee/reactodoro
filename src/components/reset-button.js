import React from 'react'

const ResetPomoButton = ({ reset }) => {
  console.log('reset callback:', reset);
  return (
    <button onClick={reset} className="btn btn-secondary">Reset</button>
  );
}

export default ResetPomoButton;
