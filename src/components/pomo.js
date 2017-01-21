import React from 'react';
import ActivityListContainer from '../containers/activity-list-container';
import PomoProgressBar from '../containers/pomo-progress-bar';

const Pomo = () => {
  return (
    <div className="container">
      <PomoProgressBar className="col-md-6"/>
      <ActivityListContainer className="col-md-6"/>
    </div>
  )
}

export default Pomo;
