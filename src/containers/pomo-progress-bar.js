import React, { PropTypes } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class PomoProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSeconds: 0,
      totalSeconds: (props.totalMinutes * 60),
      percentage: 0,
      complete: false
    }

    this.startPomo = this.startPomo.bind(this);
  }

  startPomo() {
    setInterval( () => {
      // check if pomo is complete
      if (this.state.currentSeconds === this.state.totalSeconds + 1) {
        this.setState({ complete: true });
        return;
      }
      this.setState({
        currentSeconds: (this.state.currentSeconds + 1),
        percentage: ((this.state.currentSeconds / this.state.totalSeconds) * 100)
      });
    }, 1000);
  }

  render () {
    return (
      <div className="pomodoro-progress-bar">
        <CircularProgressbar
          percentage={this.state.percentage}
          initialAnimation={true}
          textForPercentage={(percentage) => `${Math.ceil((((100 - percentage) / 100) * this.state.totalSeconds) / 60)}`}
        />
        <button className="start-pomo-btn" onClick={this.startPomo}>Start Pomo</button>
      </div>
    )
  }
}

export default PomoProgressBar;
