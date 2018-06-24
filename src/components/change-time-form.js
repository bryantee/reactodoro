import React from "react";
import { Slider } from "material-ui";

export default function ChangeTimeForm(props) {
  return (
    <form className="">
      <Slider
        min={15}
        max={30}
        defaultValue={25}
        value={props.value / 60}
        onChange={props.onChange}
      />
    </form>
  );
}
