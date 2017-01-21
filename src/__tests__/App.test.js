import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../App';
import { shallow, render } from 'enzyme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

// components
import { PomoProgressBar } from '../containers/pomo-progress-bar';
import CircularProgress from '../components/circular-progress';
import ChangeTimeForm from '../components/change-time-form';
import StartPausePomoButton from '../components/start-pause-pomo-button';
import Activity from '../components/activity';
import ActivityList from '../components/activity-list';
import { ActivityListContainer } from '../containers/activity-list-container';
import AddActivityForm from '../components/add-activity-form';
import CircularProgressbar from '../components/circular-progress';
import About from '../components/about';
import ArticlesList from '../components/articles-list';
import Article from '../components/article';
import { NewsArticles } from '../containers/news-articles';
import BreakButton from '../components/break-button';
import { RaisedButton } from 'material-ui';
import { ListItem, List } from 'material-ui';

//
import store from '../store';
import * as actions from '../actions/index';

const should = chai.should();

describe('Smoke tests', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.lengthOf(1);
  });
  it('Pomo container renders without crashing', () => {
    shallow(<PomoProgressBar />);
  });
  it('Circular progress bar component renders without crashing', () => {
    shallow(<CircularProgress percentage={50} />);
  });
  it('ChangeTimeForm component renders without crashing', () => {
    shallow(<ChangeTimeForm onChange={() => {1+1}} />);
  });
  it('Start Button component renders without crashing', () => {
    const wrapper = shallow(<StartPausePomoButton />);
    expect(wrapper).to.have.lengthOf(1);
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
    const wrapper = shallow(<ActivityListContainer />);
  });
  it('Add activity form component renders without crashing', () => {
    const form = document.createElement('div');
    ReactDOM.render(<AddActivityForm />, form);
  });
  it('About component renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
  });
  it('Articles List component renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArticlesList />, div);
  });
  it('Article component renders', () => {
    const props = {
      title: 'title',
      abstract: 'abstract',
      short_url: 'short url',
      url: 'url',
      multimedia: 'multi'
    };

    const wrapper = shallow(<Article data={props} />);
    expect(wrapper).to.exist;
  });
  it('News Articles container renders', () => {
    const wrapper = shallow(<NewsArticles />);
    expect(wrapper.name()).to.equal('div');
  });
  it('Break Button renders without crashing', () => {
    const wrapper = shallow(<BreakButton />);
    expect(wrapper).to.exist;
  })
});
describe('Shallow Components', ()=> {
  describe('Circular progress bar', ()=> {
    it('renders with props', () => {
      const totalSeconds = 120;
      const percentage = 50;

      const renderer = TestUtils.createRenderer();
      renderer.render(<CircularProgress totalSeconds={totalSeconds} percentage={percentage} />);
      const result = renderer.getRenderOutput();

      result.props.percentage.should.equal(50);
    });
  });

  // TODO: Refactor to actually test contents of button based on redux state
  // Use beforeEach functions?

  describe('Start button', () => {
    it('renders button w/ proper text when running', () => {
      const props = {};
      props.isRunning = true;

      const renderer = TestUtils.createRenderer();
      renderer.render(<StartPausePomoButton {...props} />);
      const result = renderer.getRenderOutput();

      result.type.should.equal(RaisedButton);
      // result.props.children.should.equal('Pause');
    });
    it('renders props text when not running', () => {
      const props = {};
      props.isRunning = false;

      const renderer = TestUtils.createRenderer(RaisedButton);
      renderer.render(<StartPausePomoButton {...props} />);
      const result = renderer.getRenderOutput();

      result.type.should.equal(RaisedButton);
      // result.props.children.should.equal('Start');
    });
    it('calls handler function on click', () => {
      const props = {
        isRunning: true,
        pause: () => {},
        start: () => {}
      };

      const renderer = TestUtils.createRenderer();
      renderer.render(<StartPausePomoButton {...props} />);
      const result = renderer.getRenderOutput();

      result.props.onClick.should.equal(props.pause);
    });
  });
  describe('Pomo Progress Bar', ()=> {
    it('renders all child components', ()=> {
      const renderer = TestUtils.createRenderer();
      renderer.render(<PomoProgressBar />);
      const result = renderer.getRenderOutput();

      result.type.should.equal('div');
      result.props.className.should.equal('pomodoro-progress-bar');
      result.props.children.length.should.be.above(1);
    });
    it('renders "take break" button when state is complete');
  });
  describe('Acitivty List', () => {
    const props = {};
    props.list = [1, 2, 3];

    it('renders AddActivityForm and renders list of Activities', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<ActivityList {...props} />);
      const result = renderer.getRenderOutput();

      result.props.children.length.should.equal(2);
      result.props.children[0].type.should.equal(AddActivityForm);
      result.props.children[1].type.should.equal(List);

      result.props.children[1].props.children.length.should.equal(3);
    });
  });
  describe('Acitivity', () => {
    it('Renders a single ListItem component', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<Activity onClick={() => {}}/>);

      const result = renderer.getRenderOutput();
      result.type.should.equal(ListItem);
    });
  });
  describe('Add Activity Form', () => {
    it('renders form and children greater than 0', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<AddActivityForm />);
      const result = renderer.getRenderOutput();
      result.type.should.equal('form');
      result.props.children.length.should.be.above(0);
    });
  });
  describe('Change Time form', () => {
    it('renders a form', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<ChangeTimeForm />);
      const result = renderer.getRenderOutput();
      result.type.should.equal('form');
    });
  });
  describe('Activity List Container', () => {
    it('render Activity List component', () => {
      const renderer = TestUtils.createRenderer();
      renderer.render(<ActivityListContainer />);
      const result = renderer.getRenderOutput();
      result.type.should.equal(ActivityList);
    });
  });
});
describe('Reducers (by action type)', () => {
  it('ADD_ACTIVITY', () => {
    store.dispatch(actions.addActivity('test activity'));
    store.getState().activities.length.should.equal(3);
  });
  it('SELECT_ACTIVITY', () => {
    store.dispatch(actions.selectActivity(1));
    store.getState().selectedActivity.should.equal(1);
  });
  it('RUN_POMO', () => {
    store.dispatch(actions.runPomo());
    store.getState().isRunning.should.equal(true);
  });
  it('PAUSE_POMO', () => {
    store.dispatch(actions.pausePomo());
    store.getState().isRunning.should.equal(false);
  });
  it('COMPLETE_POMO', () => {
    const testActivity = 'Coding';
    let currentStateActivity;

    const getActivityInfo = (activity) => {
      store.getState().activities.forEach((a) => {
        if (a.name === testActivity) {
          currentStateActivity = a;
        }
      });
    };

    getActivityInfo(testActivity);
    currentStateActivity.completedSessions.should.equal(0);

    store.dispatch(actions.completePomo(testActivity));
    getActivityInfo(testActivity);
    currentStateActivity.completedSessions.should.equal(1);
  });
  it('INCREMENT_SECOND', () => {
    const startingSeconds = store.getState().currentSeconds;
    store.dispatch(actions.incrementSecond());
    store.getState().currentSeconds.should.equal(startingSeconds + 1)
  });
  it('SET_POMO_SECONDS', () => {
    const seconds = 100;
    store.dispatch(actions.setPomoSeconds(seconds));
    store.getState().totalSeconds.should.equal(seconds);
  });
  it('GET_ACTIVITY_DETAILS');
  it('GET_ARTICLES');
  it('RESET_POMO');
});
