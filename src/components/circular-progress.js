import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const CircularProgress = (props) => {
  return (
    <CircularProgressbar
      percentage={props.percentage}
      initialAnimation={true}
      textForPercentage={(percentage) => `${Math.ceil((((100 - percentage) / 100) * props.totalSeconds) / 60)}`}
    />
  );
};

export default CircularProgress;
