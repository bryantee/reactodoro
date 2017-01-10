import React, { Component } from 'react';
import PomoProgressBar from './containers/pomo-progress-bar';
import ActivityListContainer from './containers/activity-list-container';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <PomoProgressBar className="col-md-6"/>
        <ActivityListContainer className="col-md-6"/>
      </div>
    );
  }
}

export default App;
