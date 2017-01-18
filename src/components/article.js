import React from 'react'

const Article = (props) => {
  return (
    <div>
      <a href={props.data.url}>
        <h1>{props.data.title}</h1>
      </a>
      <p>{props.data.abstract}</p>
      <img alt="article" src={props.data.multimedia[0] ? props.data.multimedia[0].url : ''} />
    </div>
  )
}

export default Article;
