
export const COMPLETE_POMO = 'COMPLETE_POMO';
export const completePomo = activity => {
  return {
    type: COMPLETE_POMO,
    activity
  };
};

export const GET_ARTICLES = 'GET_ARTICLES';
export const getArticles = () => {

}

export const GET_ACTIVITY_DETAILS = 'GET_ACTIVITY_DETAILS';
export const getActivityDETAILS = () => {

}

export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const addActivity = (activity) => {
  return {
    type: ADD_ACTIVITY,
    activity
  }
}

export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const removeActivity = () => {

}

export const SELECT_ACTIVITY = 'SELECT_ACTIVITY';
export const selectActivity = (index) => {
  return {
    type: SELECT_ACTIVITY,
    index
  }
}

export const START_POMO = 'START_POMO';
export const startPomo = () => {
  return {
    type: START_POMO,
  }
}

export const PAUSE_POMO = 'PAUSE_POMO';
export const pausePomo = () => {
  return {
    type: PAUSE_POMO
  }
}

export const SET_POMO_SECONDS = 'SET_POMO_SECONDS';
export const setPomoSeconds = (totalSeconds) => {
  return {
    type: SET_POMO_SECONDS,
    totalSeconds
  }
}

export const INCREMENT_SECOND = 'INCREMENT_SECOND';
export const incrementSecond = () => {
  return {
    type: INCREMENT_SECOND
  }
}

export const RUN_POMO = 'RUN_POMO';
export const runPomo = () => {
  return {
    type: RUN_POMO
  }
}
