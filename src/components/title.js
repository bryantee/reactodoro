import React from "react";
// import { Link } from 'react-router';
import { AppBar } from "material-ui";

const Title = props => {
  return (
    <AppBar
      title="Reactodoro"
      onLeftIconButtonTouchTap={props.onLeftIconButtonTouchTap}
      showMenuIconButton={true}
    />
  );
};

export default Title;
