import React from "react";
import LinearProgress from "material-ui/LinearProgress";
import Card from "material-ui/Card";
import CardTitle from "material-ui/Card/CardTitle";

import moment from "moment";

export const BreakTimer = ({ breakTimeRemaining, breakTimeTotal }) => {
  const getTime = timeInSeconds => {
    const duration = moment.duration(breakTimeRemaining, "seconds");
    return `${duration.minutes()}:${duration.seconds()}`;
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
