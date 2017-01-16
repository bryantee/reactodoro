import React, { Component } from 'react';
import PomoProgressBar from './containers/pomo-progress-bar';
import ActivityListContainer from './containers/activity-list-container';
import Title from './components/title';

export class App extends Component {
  render() {
    return (
      <div className="App row">
        <Title />
        {this.props.children}
      </div>
    );
  }
}

export default App;
