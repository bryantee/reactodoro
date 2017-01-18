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
  }

  selectActivity(event) {
    const id = parseInt(event.target.id, 10);
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

  render () {
    return (
      <ActivityList
        selected={this.props.selectedActivity}
        handler={this.selectActivity}
        list={this.props.activities}
        handleSubmit={this.handleActivitySubmit}
        handleTextChange={this.handleActivityTextChange}
        addActivityText={this.state.addActivityText}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  selectedActivity: state.selectedActivity,
  activities: state.activities
});

export default connect(mapStateToProps)(ActivityListContainer);
