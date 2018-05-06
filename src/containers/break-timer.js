import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import LinearProgress from "material-ui/LinearProgress";
import Card from "material-ui/Card";
import CardTitle from "material-ui/Card/CardTitle";
import CardText from "material-ui/Card/CardText";

import { Duration } from "luxon";

export const BreakTimer = ({ breakTimeRemaining, breakTimeTotal }) => {
  const getTime = timeInSeconds => {
    const duration = Duration.fromObject({
      seconds: breakTimeRemaining,
      numberingSystem: "latn"
    });
    return `${duration.minutes}:${duration.seconds}`;
  };

  return (
    <Card className="panel">
      <CardTitle
        title={
          breakTimeRemaining === 0
            ? `Time's up! Get back to work!`
            : "Time Remaining on Break"
        }
        subtitle={getTime(breakTimeRemaining)}
      />
      <LinearProgress
        mode="determinate"
        value={breakTimeRemaining / breakTimeTotal * 100}
      />
    </Card>
  );
};
