import React from "react";

const Badge = props => {
  const style = {
    backgroundColor: props.color,
    color: "white",
    fontSize: "1em",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    alignContent: "center",
    alignItems: "center"
  };
  return (
    <span style={style} className="badge">
      {props.number}
    </span>
  );
};

export default Badge;
