import React, { PropTypes } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class PomoProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSeconds: 0,
      totalSeconds: (props.totalMinutes * 60),
      percentage: 0,
      complete: false,
      isRunning: false,
      isPaused: false
    }

    this.startPomo = this.startPomo.bind(this);
    this.pausePomo = this.pausePomo.bind(this);
  }

  startPomo() {

    // set correct state each time startPomo is called
    this.setState({
      isRunning: true,
      isPaused: false
    });

    // start setInterval for timer and return ID
    // so that it can be cleared at anytime
    let intervalId = setInterval( () => {
      if (this.state.isPaused) {
        clearInterval(intervalId);
        return this.setState({ isRunning: false });
      }
      // check if pomo is complete, return if it is
      if (this.state.currentSeconds === this.state.totalSeconds + 1) {
        this.setState({ complete: true });
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
    this.setState({ isPaused: true });
  }

  render () {
    return (
      <div className="pomodoro-progress-bar">
        <CircularProgressbar
          percentage={this.state.percentage}
          initialAnimation={true}
          textForPercentage={(percentage) => `${Math.ceil((((100 - percentage) / 100) * this.state.totalSeconds) / 60)}`}
        />
        <button className="start-pomo-btn" onClick={this.state.isRunning ? this.pausePomo : this.startPomo}>{this.state.isRunning ? 'Pause' : 'Start'}</button>
      </div>
    )
  }
}

export default PomoProgressBar;
