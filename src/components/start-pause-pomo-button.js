import React, {
  PropTypes,
} from 'react';

export default function StartPausePomoButton(props) {
  const text = props.isRunning ? 'Pause' : 'Start';
  const clickHandler = props.isRunning ? props.pause : props.start;
  return (
    <button className="btn btn-primary" onClick={clickHandler}>{text}</button>
  );
}
