import React from 'react';
import { Card, CardTitle, CardText, CardMedia, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Article = (props) => {
  const { multimedia } = props.data;
  let image;
  const imageRez = 4;
  if (multimedia.length > 0) {
    if (multimedia[imageRez]) {
      image = multimedia[imageRez].url;
    } else {
      image = multimedia[multimedia.length - 1].url;
    }
  }

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
