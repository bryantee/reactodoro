import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../App';
import { shallow, render } from 'enzyme';
import { PomoProgressBar } from '../containers/pomo-progress-bar';
import CircularProgress from '../components/circular-progress';
import ChangeTimeForm from '../components/change-time-form';
import StartPausePomoButton from '../components/start-pause-pomo-button';
import Activity from '../components/activity';
import ActivityList from '../components/activity-list';
import { ActivityListContainer } from '../containers/activity-list-container';
import AddActivityForm from '../components/add-activity-form';
import CircularProgressbar from '../components/circular-progress';

//
import store from '../store';
import * as actions from '../actions/index';

const should = chai.should();

describe('Shallow smoke tests', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.name()).to.equal('div');
  });
  it('Pomo container renders without crashing', () => {
    shallow(<PomoProgressBar />);
  });
  it('Circular progress bar component renders without crashing', () => {
    shallow(<CircularProgress percentage={50} />);
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
    shallow(<ActivityListContainer />);
  });
  it('Add activity form component renders without crashing', () => {
    const form = document.createElement('div');
    ReactDOM.render(<AddActivityForm />, form);
  });
});

describe('Additional Tests', ()=> {
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

describe('Action Tests', () => {

});

describe('Reducer Tests', () => {
  it('ADD_ACTIVITY reducer', () => {
    store.dispatch(actions.addActivity('test activity'));
    store.getState().activities.length.should.equal(3);
  });
});
