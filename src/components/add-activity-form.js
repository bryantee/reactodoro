import React from 'react'

const AddActivityForm = (props) => {
  return (
    <form className="form-inline" onSubmit={props.handleSubmit}>
      <input type="text" className="form-control" placeholder="New Activity" onChange={props.handleTextChange} value={props.value}/>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddActivityForm
