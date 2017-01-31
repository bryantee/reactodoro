import React from 'react';
import { Card, CardTitle, CardText, CardMedia, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Article = (props) => {
  const image = props.data.multimedia[0] ? props.data.multimedia[4].url : null;
  return (
    <Card className="panel article">
      <CardMedia>
        {image && <img alt="article thumb" src={image} /> }
      </CardMedia>
      <CardTitle
        title={props.data.title}
        subtitle={props.data.subsection}
      />
      <CardText>{props.data.abstract}</CardText>
      <CardActions>
        <FlatButton
          primaryText='Read More'
          href={props.data.url}
          target="_blank"
        >
        Read More
      </FlatButton>
      </CardActions>
    </Card>
  )
}

export default Article;
