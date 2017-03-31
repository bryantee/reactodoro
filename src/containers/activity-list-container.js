import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

//components
import ActivityList from '../components/activity-list';

export class ActivityListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addActivityText: ''
    };

    this.selectActivity = this.selectActivity.bind(this);
    this.handleActivitySubmit = this.handleActivitySubmit.bind(this);
    this.handleActivityTextChange = this.handleActivityTextChange.bind(this);
    this.deleteActivity = this.deleteActivity.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  selectActivity(id, event) {
    this.props.dispatch(actions.selectActivity(id));
  }

  handleActivitySubmit(event) {
    event.preventDefault();
    this.props.dispatch(actions.addActivity(this.state.addActivityText));
    // manage localstate of input through component
    this.setState({
      addActivityText: ''
    });
  }

  handleActivityTextChange(event) {
    // Again, managing state in component here
    this.setState({
      addActivityText: event.target.value
    });
  }

  handleRequestClose() {
    this.props.dispatch(actions.displayMessage({
      open: false,
      durationToHide: null,
      message: '',
      onRequestClose: null
    }));
  }

  deleteActivity(activity) {
    // check if activity to delete is currently selected & running
    if (this.props.activities[activity] === this.props.activities[this.props.selectedActivity.name] && this.props.isRunning) {
      // dispatch display message and prevent removal
      this.props.dispatch(actions.displayMessage({
        open: true,
        autoHideDuration: 5000,
        message: `Cannot delete activity while selected & Running`,
        onRequestClose: this.handleRequestClose
      }));
    } else {
      // good to go, remove activity from state
      this.props.dispatch(actions.removeActivity(activity));
    }
  }

  render () {
    return (
      <ActivityList
        selected={this.props.selectedActivity}
        handler={this.selectActivity}
        list={this.props.activities}
        handleSubmit={this.handleActivitySubmit}
        handleTextChange={this.handleActivityTextChange}
        addActivityText={this.state.addActivityText}
        deleteActivity={this.deleteActivity}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  selectedActivity: state.selectedActivity,
  activities: state.activities,
  isRunning: state.isRunning
});

export default connect(mapStateToProps)(ActivityListContainer);
