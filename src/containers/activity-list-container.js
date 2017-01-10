import React, { PropTypes } from 'react'
import ActivityList from '../components/activity-list';

class ActivityListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activties: ['Testing', 'Reading', 'Drinking Water'],
      selected: 0
    };

    this.selectActivity = this.selectActivity.bind(this);
  }

  selectActivity(event) {
    console.log('Item selected', event.target.id);
    const id = parseInt(event.target.id);
    this.setState({
      selected: id
    })
  }

  render () {
    return (
      <ActivityList selected={this.state.selected} handler={this.selectActivity} list={this.state.activties} />
    );
  }
}

export default ActivityListContainer;
