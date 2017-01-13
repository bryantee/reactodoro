import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../App';
import { PomoProgressBar } from '../containers/pomo-progress-bar';
import CircularProgress from '../components/circular-progress';
import ChangeTimeForm from '../components/change-time-form';
import StartPausePomoButton from '../components/start-pause-pomo-button';
import Activity from '../components/activity';
import ActivityList from '../components/activity-list';
import { ActivityListContainer } from '../containers/activity-list-container';
import AddActivityForm from '../components/add-activity-form';


const should = chai.should();

describe('Simple smoke tests', () => {
  it('App renders without crashing'
    // , () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);}
  );
  it('Pomo container renders without crashing', () => {
    const pomo = document.createElement('div');
    ReactDOM.render(<PomoProgressBar />, pomo);
  });
  it('Circular progress bar component renders without crashing', () => {
    const circularProgress = document.createElement('div');
    ReactDOM.render(<CircularProgress percentage={50} />, circularProgress);
  });
  it('ChangeTimeForm component renders without crashing', () => {
    const form = document.createElement('div');
    ReactDOM.render(<ChangeTimeForm onChange={() => {1+1}} />, form);
  });
  it('Start Button component renders without crashing', () => {
    const button = document.createElement('div');
    ReactDOM.render(<StartPausePomoButton />, button);
  });
  it('Activity component renders without crashing', () => {
    const activity = document.createElement('div');
    ReactDOM.render(<Activity />, activity);
  });
  it('Activity list component renders without crashing', () => {
    const activityList = document.createElement('div');
    const list = ['tennis', 'golf', 'bowling'];
    ReactDOM.render(<ActivityList list={list} />, activityList);
  });
  it('Activity List Container component renders without crashing', () => {
    const container = document.createElement('div');
    ReactDOM.render(<ActivityListContainer />, container);
  });
  it('Add activity form component renders without crashing', () => {
    const form = document.createElement('div');
    ReactDOM.render(<AddActivityForm />, form);
  });
});

describe('Shallow Component Tests', ()=> {
  it('Circular progress bar component renders with props', ()=> {
    const totalSeconds = 120;
    const percentage = 50;

    const renderer = TestUtils.createRenderer();
    renderer.render(<CircularProgress totalSeconds={totalSeconds} percentage={percentage} />);
    const result = renderer.getRenderOutput();

    result.props.percentage.should.equal(50);
  });
  it('Start button renders with proper text');
});
