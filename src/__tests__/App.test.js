import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import PomoProgressBar from '../containers/pomo-progress-bar';

describe('Simple smoke tests', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('Pomo progress bar renders without crashing', () => {
    const pomo = document.createElement('pomo');
    ReactDOM.render(<PomoProgressBar totalMinutes={10} />, pomo);
  });
});
