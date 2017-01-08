import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import PomoProgressBar from '../containers/pomo-progress-bar';

describe('Simple smoke tests', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Pomo container renders without crashing', () => {
    const pomo = document.createElement('pomo');
    ReactDOM.render(<PomoProgressBar />, pomo);
  });

  it('Pomo progress bar component renders without crashing');
  it('Timer form component renders without crashing');
  it('Start  / Pause component renders without crashing');
});
