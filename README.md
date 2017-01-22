[![Build Status](https://travis-ci.org/bryantee/reactodoro.svg?branch=develop)](https://travis-ci.org/bryantee/reactodoro)

# Reactodoro

> Be more productive

## About
Reactodoro is a React based web app that simulates a basic [pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique). There is some extended functionality, however. A user can keep track of their sessions for any given activity. In the activity pane, type in a new activity name and click 'ADD'. From there, select the activity you would like to use for the session. See the number of completed pomodoros for each activity to the right. To start a session, slide the slider on the timer pane to the desired time in minutes for the pomodoro session. Click 'START'. You can pause at any point in time if you need (though this is antithetical to the pomodoro technique :/) Once you're done, you'll get a chance to catch your breath and take a break. Read some news by clicking the 'BREAK' button. To return, use the hamburger in the upper left to navigate back to the Pomodoro page.

![Imgur](http://i.imgur.com/RSo883T.png)

### Technologies in use
- React
- Redux
- Redux-Pack
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- Enzyme / Chai / Jest
- redux-thunk
- React Router
- [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar)
- [material-ui](https://github.com/callemall/material-ui)

### To run locally
- Clone the repository
- Run `npm install` to install the dependencies
- Use `npm test` to run the test suite with watch
- Use `npm start` to run the create-react-app dev server
- You're all set! Now get to work helping me with the open issues...
