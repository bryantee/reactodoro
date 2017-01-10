import React, { Component } from 'react';
import PomoProgressBar from './containers/pomo-progress-bar';
import ActivityListContainer from './containers/activity-list-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PomoProgressBar />
        <ActivityListContainer />
      </div>
    );
  }
}

export default App;
