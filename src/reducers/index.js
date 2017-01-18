import * as actions from '../actions/index';
import { handle } from 'redux-pack';
// import { combineReducers } from 'redux';

export const initialState = {
  isRunning: false,
  totalSeconds: 1500,
  percentage: 0,
  isComplete: false,
  currentSeconds: 0,
  selectedActivity: 0,
  articles: [],
  activities: [
    // Mock activities for testing
    {
      name: 'Coding',
      completedSessions: 0
    },
    {
      name: 'Writing blog posts',
      completedSessions: 1
    }
  ]
};

export const pomoReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.COMPLETE_POMO:
      // Look for activity name
      // If exists, increment completedSessions++ and return state
      const index = state.activities.findIndex(activity => {
        return activity.name === action.activity;
      });

      if (index === -1) throw new Error('Somehow can\'t find activity', action.activity);

      // build new state
      const incrementedActivity = Object.assign({}, {name: action.activity}, {completedSessions: state.activities[index].completedSessions + 1});
      const before = state.activities.slice(0, index);
      const after = state.activities.slice(index + 1);
      const newActivities = [...before, incrementedActivity, ...after];
      return {...state, activities: newActivities};

    case actions.SET_POMO_SECONDS:
      return {...state, totalSeconds: parseInt(action.totalSeconds, 10)}

    case actions.INCREMENT_SECOND:
      const newSeconds = state.currentSeconds + 1;
      const newPercentage = (state.currentSeconds / state.totalSeconds) * 100;
      return {...state, currentSeconds: newSeconds, percentage: newPercentage}

    case actions.RUN_POMO:
      return {...state, isRunning: true}

    case actions.PAUSE_POMO:
      return {...state, isRunning: false}

    case actions.SELECT_ACTIVITY:
      return {...state, selectedActivity: action.index}

    case actions.ADD_ACTIVITY:
    const newActivity = { name: action.activity, completedSessions: 0};
    const addedActivities = state.activities.concat(newActivity);
      return {...state, activities: addedActivities}

    case actions.GET_ARTICLES:
      console.log('get articles payload:', action.payload);
      return handle(state, action, {
        start: s => ({ ...s }),
        finish: s => ({ ...s }),
        failure: s => ({ ...s, error: action.payload }),
        success: s => ({ ...s, articles: action.payload.results })
      });

      case actions.RESET_POMO:
        console.log('RESET CALLED');
        return {
          ...state,
          isRunning: false,
          totalSeconds: 1500,
          percentage: 0,
          isComplete: false,
          currentSeconds: 0,
        }

    default:
      return state;
    }
}
