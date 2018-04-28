import React from "react";
import RaisedButton from "material-ui/RaisedButton";

export default function StartPausePomoButton(props) {
  const text = props.isRunning ? "Pause" : "Start";
  const clickHandler = props.isRunning ? props.pause : props.start;
  return <RaisedButton onClick={clickHandler} primary={true} label={text} />;
}
