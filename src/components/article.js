import React from 'react';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';


const Article = (props) => {
  return (
    <Card>
      <CardMedia>
        <img alt="article-thumbnail" src={props.data.multimedia[0] ? props.data.multimedia[4].url : ''} />
      </CardMedia>
      <CardTitle
        title={props.data.title}
        subtitle={props.data.subsection}
      />
      <CardText>{props.data.abstract}</CardText>
    </Card>
  )
}

export default Article;
