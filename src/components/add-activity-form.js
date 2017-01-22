import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const AddActivityForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <TextField id="add-activity-text" type="text" placeholder="New Activity" onChange={props.handleTextChange} value={props.value}/>
      <RaisedButton type="submit" label="Add" primary={true} />
    </form>
  )
}

export default AddActivityForm
