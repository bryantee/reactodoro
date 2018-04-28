export const COMPLETE_POMO = "COMPLETE_POMO";
export const completePomo = activity => {
  return {
    type: COMPLETE_POMO,
    activity
  };
};

export const GET_ARTICLES = "GET_ARTICLES";
export const getArticles = () => {
  return {
    type: GET_ARTICLES,
    promise: fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5fded6fe162843dc870e0ac80c6d41d0"
    ).then(response => {
      return response.json();
    })
  };
};

export const GET_ACTIVITY_DETAILS = "GET_ACTIVITY_DETAILS";
export const getActivityDETAILS = () => {};

export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const addActivity = activity => {
  return {
    type: ADD_ACTIVITY,
    activity
  };
};

export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const removeActivity = activity => {
  return {
    type: REMOVE_ACTIVITY,
    activity
  };
};

export const SELECT_ACTIVITY = "SELECT_ACTIVITY";
export const selectActivity = index => {
  return {
    type: SELECT_ACTIVITY,
    index
  };
};

export const START_POMO = "START_POMO";
export const startPomo = () => {
  return {
    type: START_POMO
  };
};

export const PAUSE_POMO = "PAUSE_POMO";
export const pausePomo = () => {
  return {
    type: PAUSE_POMO
  };
};

export const SET_POMO_SECONDS = "SET_POMO_SECONDS";
export const setPomoSeconds = totalSeconds => {
  return {
    type: SET_POMO_SECONDS,
    totalSeconds
  };
};

export const INCREMENT_SECOND = "INCREMENT_SECOND";
export const incrementSecond = () => {
  return {
    type: INCREMENT_SECOND
  };
};

export const RUN_POMO = "RUN_POMO";
export const runPomo = () => {
  return {
    type: RUN_POMO
  };
};

export const RESET_POMO = "RESET_POMO";
export const resetPomo = () => {
  return {
    type: RESET_POMO
  };
};

export const DISPLAY_MESSAGE = "DISPLAY_MESSAGE";
export const displayMessage = displayMessage => {
  return {
    type: DISPLAY_MESSAGE,
    displayMessage
  };
};
