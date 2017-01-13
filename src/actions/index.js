
export const COMPLETE_POMO = 'COMPLETE_POMO';
export const completePomo = activity => {
  return {
    type: COMPLETE_POMO,
    payload: {
      activity
    }
  };
};

export const GET_ARTICLES = 'GET_ARTICLES';
export const getArticles = () => {

}

export const GET_ACTIVITY_DETAILS = 'GET_ACTIVITY_DETAILS';
export const getActivityDETAILS = () => {

}

export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const addActivity = () => {

}

export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const removeActivity = () => {

}

export const SELECT_ACTIVITY = 'SELECT_ACTIVITY';
export const selectActivity = () => {

}

export const START_POMO = 'START_POMO';
export const startPomo = () => {

}

export const PAUSE_POMO = 'PAUSE_POMO';
export const pausePomo = () => {

}

export const SET_POMO_SECONDS = 'SET_POMO_SECONDS';
export const setPomoSeconds = (totalSeconds) => {
  return {
    type: SET_POMO_SECONDS,
    totalSeconds
  }

}
