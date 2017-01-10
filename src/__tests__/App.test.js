import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import PomoProgressBar from '../containers/pomo-progress-bar';
import CircularProgress from '../components/circular-progress';
import ChangeTimeForm from '../components/change-time-form';
import StartPausePomoButton from '../components/start-pause-pomo-button';

describe('Simple smoke tests', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('Pomo container renders without crashing', () => {
    const pomo = document.createElement('div');
    ReactDOM.render(<PomoProgressBar />, pomo);
  });
  it('Pomo progress bar component renders without crashing', () => {
    const totalSeconds = 120;
    const percentage = 50;
    const circularProgress = document.createElement('circularProgress');
    ReactDOM.render(<CircularProgress totalSeconds={totalSeconds} percentage={percentage} />, circularProgress);
  });
  it('ChangeTimeForm component renders without crashing', () => {
    const form = document.createElement('div');
    ReactDOM.render(<ChangeTimeForm onChange={() => {1+1}} />, form);
  });
  it('Start  / Pause component renders without crashing', () => {
    const button = document.createElement('div');
    ReactDOM.render(<StartPausePomoButton />, button);
  });
});
