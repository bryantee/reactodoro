import React from 'react'
import ActivityList from '../components/activity-list';

class ActivityListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: ['Testing', 'Reading', 'Drinking Water'],
      selected: 0,
      addActivityText: ''
    };

    this.selectActivity = this.selectActivity.bind(this);
    this.handleActivitySubmit = this.handleActivitySubmit.bind(this);
    this.handleActivityTextChange = this.handleActivityTextChange.bind(this);
  }

  selectActivity(event) {
    const id = parseInt(event.target.id, 10);
    this.setState({
      selected: id
    });
  }

  handleActivitySubmit(event) {
    event.preventDefault();
    const newArr = this.state.activities.concat(this.state.addActivityText);
    this.setState({
      activities: newArr,
      addActivityText: ''
    });
  }

  handleActivityTextChange(event) {
    this.setState({
      addActivityText: event.target.value
    });
  }

  render () {
    return (
      <ActivityList
        selected={this.state.selected}
        handler={this.selectActivity}
        list={this.state.activities}
        handleSubmit={this.handleActivitySubmit}
        handleTextChange={this.handleActivityTextChange}
        addActivityText={this.state.addActivityText}
      />
    );
  }
}

export default ActivityListContainer;
