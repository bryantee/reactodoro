import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Paper from "material-ui/Paper";
import Snackbar from "material-ui/Snackbar";

// components
import CircularProgress from "../components/circular-progress";
import ChangeTimeForm from "../components/change-time-form";
import StartPausePomoButton from "../components/start-pause-pomo-button";
import ResetPomoButton from "../components/reset-button";
import BreakButton from "../components/break-button";

import tomato from "../assets/tomato.png";

export class PomoProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.startPomo = this.startPomo.bind(this);
    this.pausePomo = this.pausePomo.bind(this);
    this.setPomoMinutes = this.setPomoMinutes.bind(this);
    this.resetPomo = this.resetPomo.bind(this);
    this.notify = this.notify.bind(this);
    this.startBreak = this.startBreak.bind(this);
  }

  startPomo() {
    // set correct state each time startPomo is called
    this.props.dispatch(actions.runPomo());

    // start setInterval for timer and return ID
    // so that it can be cleared at anytime
    let intervalId = setInterval(() => {
      if (!this.props.isRunning) {
        clearInterval(intervalId);
        return;
      }

      // check if pomo is complete, return if it is
      if (this.props.currentSeconds === this.props.totalSeconds + 1) {
        this.props.dispatch(
          actions.completePomo(
            this.props.activities[this.props.selectedActivity].name
          )
        );

        this.props.dispatch(actions.startBreakTimer(300));
        this.notify(
          "Pomo Complete! Take a break...",
          this.props.activities[this.props.selectedActivity].name
        );

        clearInterval(intervalId);
        return;
      }
      // set the state for percentage during each loop through
      this.props.dispatch(actions.incrementSecond());
    }, 1000);
  }

  startBreak() {
    // dispatch event
    // run timer
    // clean timer
  }

  pausePomo() {
    console.log("Pause function called");
    this.props.dispatch(actions.pausePomo());
  }

  setPomoMinutes(event, value) {
    this.props.dispatch(actions.setPomoSeconds(value * 60));
  }

  resetPomo() {
    console.log("resetPomo called from function");
    this.props.dispatch(actions.resetPomo());
  }

  notify(body, title, icon = tomato, sticky = true, image = "") {
    const options = {
      body,
      icon,
      sticky,
      image
    };

    new Notification(title, options);
  }

  render() {
    let buttons = [
      <StartPausePomoButton
        key="1"
        className="btn"
        isRunning={this.props.isRunning}
        pause={this.pausePomo}
        start={this.startPomo}
      />,
      <ResetPomoButton key="2" className="btn" reset={this.resetPomo} />
    ];

    if (this.props.isComplete) {
      buttons.push(
        <BreakButton key={buttons.length + 2} className="btn" to="articles" />
      );
    }

    let snackbar = [];
    if (this.props.displayMessage) {
      snackbar.push(
        <Snackbar
          key={1}
          autoHideDuration={this.props.displayMessage.autoHideDuration}
          open={this.props.displayMessage.open}
          message={this.props.displayMessage.message}
          onRequestClose={this.props.displayMessage.onRequestClose}
        />
      );
    }

    return (
      <Paper zDepth={2} className="pomodoro-progress-bar panel">
        <CircularProgress
          percentage={this.props.percentage}
          totalSeconds={this.props.totalSeconds}
        />
        <ChangeTimeForm
          onChange={this.setPomoMinutes}
          value={this.props.totalSeconds}
        />
        <div className="buttons">{buttons}</div>
        {snackbar}
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isRunning: state.isRunning,
  totalSeconds: state.totalSeconds,
  percentage: state.percentage,
  currentSeconds: state.currentSeconds,
  activities: state.activities,
  isComplete: state.isComplete,
  selectedActivity: state.selectedActivity,
  displayMessage: state.displayMessage
});

export default connect(mapStateToProps)(PomoProgressBar);
