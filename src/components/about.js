import React from "react";
import Paper from "material-ui/Paper";

const About = () => {
  return (
    <Paper className="panel" zDepth={2}>
      <h1>About</h1>
      <p>
        This is a basic pomodoro app. To get started, click on the link in the
        upper left.
      </p>
      <p>Try:</p>
      <ul>
        <li>Adding an activity to the list</li>
        <li>Select an activity for your current pomodoro session</li>
        <li>Click start to begin your session</li>
        <li>
          When you're done, you'll be given the opportunity to take a break and
          catch up on some news
        </li>
        <li>
          To return, click back on the pomodoro link and then click 'reset'
        </li>
        <li>Rinse, repeat</li>
      </ul>
    </Paper>
  );
};

export default About;
