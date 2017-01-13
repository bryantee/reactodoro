import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

// components
import CircularProgress from '../components/circular-progress';
import ChangeTimeForm from '../components/change-time-form';
import StartPausePomoButton from '../components/start-pause-pomo-button';

export class PomoProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.startPomo = this.startPomo.bind(this);
    this.pausePomo = this.pausePomo.bind(this);
    this.setPomoMinutes = this.setPomoMinutes.bind(this);
  }

  startPomo() {

    // set correct state each time startPomo is called
    this.props.dispatch(actions.runPomo());

    // start setInterval for timer and return ID
    // so that it can be cleared at anytime
    let intervalId = setInterval( () => {
      if (!this.props.isRunning) {
        clearInterval(intervalId);
        return;
      }
      // check if pomo is complete, return if it is
      if (this.props.currentSeconds === this.props.totalSeconds + 1) {
        this.props.dispatch(actions.completePomo('Coding'));
        clearInterval(intervalId);
        return;
      }
      // set the state for percentage during each loop through
      this.props.dispatch(actions.incrementSecond());
    }, 1000);
  }

  pausePomo() {
    console.log('Pause function called');
    this.props.dispatch(actions.pausePomo());
  }

  setPomoMinutes(event) {
    this.props.dispatch(actions.setPomoSeconds(event.target.value * 60));
  }

  render () {
    return (
      <div className="pomodoro-progress-bar">
        <CircularProgress percentage={this.props.percentage} totalSeconds={this.props.totalSeconds}/>
        <ChangeTimeForm onChange={this.setPomoMinutes} value={this.props.totalSeconds}/>
        <StartPausePomoButton className="start-pomo-btn" isRunning={this.props.isRunning} pause={this.pausePomo} start={this.startPomo} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  isRunning: state.isRunning,
  totalSeconds: state.totalSeconds,
  percentage: state.percentage,
  currentSeconds: state.currentSeconds,
  activities: state.activities,
  isComplete: state.isComplete
});

export default connect(mapStateToProps)(PomoProgressBar);
