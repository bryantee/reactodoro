import React, { Component } from 'react';
import PomoProgressBar from './containers/pomo-progress-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <PomoProgressBar totalMinutes={.1} />
      </div>
    );
  }
}

export default App;
