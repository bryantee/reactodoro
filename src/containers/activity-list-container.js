import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

//components
import ActivityList from '../components/activity-list';

export class ActivityListContainer extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   activities: ['Testing', 'Reading', 'Drinking Water'],
    //   selected: 0,
    //   addActivityText: ''
    // };

    this.selectActivity = this.selectActivity.bind(this);
    this.handleActivitySubmit = this.handleActivitySubmit.bind(this);
    this.handleActivityTextChange = this.handleActivityTextChange.bind(this);
  }

  selectActivity(event) {
    const id = parseInt(event.target.id, 10);
    this.props.dispatch(actions.selectActivity(id));
    // this.setState({
    //   selected: id
    // });
  }

  handleActivitySubmit(event) {
    event.preventDefault();
    const newArr = this.state.activities.concat(this.state.addActivityText);
    // this.setState({
    //   activities: newArr,
    //   addActivityText: ''
    // });
  }

  handleActivityTextChange(event) {
    // this.setState({
    //   addActivityText: event.target.value
    // });
  }

  render () {
    return (
      <ActivityList
        selected={this.props.selectedActivity}
        handler={this.selectActivity}
        list={this.props.activities}
        handleSubmit={this.handleActivitySubmit}
        handleTextChange={this.handleActivityTextChange}
        addActivityText={this.props.addActivityText}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  selectedActivity: state.selectedActivity,
  addActivityText: state.addActivityText,
  activities: state.activities
});

export default connect(mapStateToProps)(ActivityListContainer);
