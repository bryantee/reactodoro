import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

// components
import CircularProgress from '../components/circular-progress';
import ChangeTimeForm from '../components/change-time-form';
import StartPausePomoButton from '../components/start-pause-pomo-button';
import ResetPomoButton from '../components/reset-button';
import BreakButton from '../components/break-button';

export class PomoProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.startPomo = this.startPomo.bind(this);
    this.pausePomo = this.pausePomo.bind(this);
    this.setPomoMinutes = this.setPomoMinutes.bind(this);
    this.resetPomo = this.resetPomo.bind(this);
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
        this.props.dispatch(actions.completePomo(this.props.activities[this.props.selectedActivity].name));
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

  setPomoMinutes(event, value) {
    this.props.dispatch(actions.setPomoSeconds(value * 60));
  }

  resetPomo() {
    console.log('resetPomo called from function');
    this.props.dispatch(actions.resetPomo());
  }

  render () {
    let buttons = [
      <StartPausePomoButton className="btn" isRunning={this.props.isRunning} pause={this.pausePomo} start={this.startPomo} />,
      <ResetPomoButton className='btn' reset={this.resetPomo} />
    ];

    if (this.props.isComplete) {
      buttons.push(<BreakButton className="btn" to="articles" key="1"/>);
    }

    return (
      <div className="pomodoro-progress-bar">
        <CircularProgress percentage={this.props.percentage} totalSeconds={this.props.totalSeconds}/>
        <ChangeTimeForm onChange={this.setPomoMinutes} value={this.props.totalSeconds}/>
        <div className="buttons">
          {buttons}
        </div>
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
  isComplete: state.isComplete,
  selectedActivity: state.selectedActivity
});

export default connect(mapStateToProps)(PomoProgressBar);
