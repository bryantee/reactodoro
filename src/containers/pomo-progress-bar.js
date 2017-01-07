import React, { PropTypes } from 'react';
import CircularProgress from '../components/circular-progress';

class PomoProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSeconds: 0,
      totalSeconds: null,
      percentage: 0,
      complete: false,
      isRunning: false
    }

    this.startPomo = this.startPomo.bind(this);
    this.pausePomo = this.pausePomo.bind(this);
  }

  startPomo() {

    // set correct state each time startPomo is called
    this.setState({
      isRunning: true
    });

    // start setInterval for timer and return ID
    // so that it can be cleared at anytime
    let intervalId = setInterval( () => {
      if (!this.state.isRunning) {
        clearInterval(intervalId);
        return;
      }
      // check if pomo is complete, return if it is
      if (this.state.currentSeconds === this.state.totalSeconds + 1) {
        this.setState({ complete: true, isRunning: false });
        clearInterval(intervalId);
        return;
      }
      // set the state for percentage during each loop through
      this.setState({
        currentSeconds: (this.state.currentSeconds + 1),
        percentage: ((this.state.currentSeconds / this.state.totalSeconds) * 100)
      });
    }, 1000);
  }

  pausePomo() {
    console.log('Pause function called');
    this.setState({ isRunning: false });
  }

  render () {
    return (
      <div className="pomodoro-progress-bar">
        <CircularProgress percentage={this.state.percentage} totalSeconds={this.state.totalSeconds}/>
        <button className="start-pomo-btn" onClick={this.state.isRunning ? this.pausePomo : this.startPomo}>{this.state.isRunning ? 'Pause' : 'Start'}</button>
        <input type="text" placeholder="Enter a value in minutes" value={this.state.totalSeconds / 60} onChange={ (event) => this.setState({ totalSeconds: (event.target.value * 60)}) }></input>
      </div>
    )
  }
}

export default PomoProgressBar;
