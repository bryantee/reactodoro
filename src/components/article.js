import React, { PropTypes } from 'react'

const Article = (props) => {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.abstract}</p>
      <img src={props.data.multimedia[0].url} />
      <p>{props.data.url}</p>
      <p>{props.data.short_url}</p>
    </div>
  )
}

export default Article;
