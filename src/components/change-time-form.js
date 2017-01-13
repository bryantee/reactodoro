import React from 'react';


export default function ChangeTimeForm(props) {
  return (
    <form className="">
      <div className="form-group">
        <label>Number of minutes for pomodoro</label>
        <input type="number" placeholder={25} onChange={props.onChange} value={props.value / 60} />
      </div>
    </form>
  );
}
