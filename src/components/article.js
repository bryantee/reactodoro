import React from 'react';
import { Card, CardTitle, CardText, CardMedia, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Article = (props) => {
  const image = props.data.multimedia[0] ? props.data.multimedia[4].url : null;
  return (
    <Card className="panel article">
      <CardMedia>
        {image && <img src={image} /> }
      </CardMedia>
      <CardTitle
        title={props.data.title}
        subtitle={props.data.subsection}
      />
      <CardText>{props.data.abstract}</CardText>
      <CardActions>
        <FlatButton>Read More</FlatButton>
      </CardActions>
    </Card>
  )
}

export default Article;
