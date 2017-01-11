import React, { PropTypes } from 'react';
import CircularProgress from '../components/circular-progress';
import ChangeTimeForm from '../components/change-time-form';
import StartPausePomoButton from '../components/start-pause-pomo-button';

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
    this.setPomoMinutes = this.setPomoMinutes.bind(this);
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

  setPomoMinutes(event) {
    this.setState({ totalSeconds: (event.target.value * 60)});
  }

  render () {
    return (
      <div className="pomodoro-progress-bar">
        <CircularProgress percentage={this.state.percentage} totalSeconds={this.state.totalSeconds}/>
        <ChangeTimeForm onChange={this.setPomoMinutes} value={this.state.totalSeconds}/>
        <StartPausePomoButton className="start-pomo-btn" isRunning={this.state.isRunning} pause={this.pausePomo} start={this.startPomo} />
      </div>
    )
  }
}

export default PomoProgressBar;
