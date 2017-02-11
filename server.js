'use strict';

const express = require('express');

const app = express();

// microphone check
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// get all user info
app.get('/user/:userId', (req, res) => {

});

// add activity
app.post('/user/:userId/activity/:activityId', (req, res) => {

});

// delete activity
app.delete('/user/:userId/activity/:activityId', (req, res) => {

});

// complete pomo session triggered
app.put('/user/:userId/activity:/activityId', (req, res) => {

});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
