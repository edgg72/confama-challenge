import React from 'react'
import { Typography, Card, CardContent, CardMedia,  Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { useStyles } from './styles';

const CardComponent = ({ title, image_url, score, synopsis }) => {

  let message;

  if (score <= 4) {
    message = "I do not recommend it."
  } else if (score >= 5 && score <= 7) {
    message = "You may have fun"
  } else {
    message = "Great, this is one of the best anime."
  }

  const classes = useStyles();
    return (

      <Grid item xs={12} sm={6} md={4} >
        <Link to={{
          pathname: "/animedetail",
          props: {
            title: title,
            image_url: image_url,
            score: score,
            synopsis: synopsis
          }
        }} style={{ textDecoration: 'none' }} >
        <Card raised elevation={6} className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={image_url}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="subtitle2" >
              {title}
            </Typography>
            <Typography variant="h6" align="center" color="primary" >
              {score}
            </Typography>
            <Typography variant="caption" align="center" >
              {message}
            </Typography>
          </CardContent>
        </Card>
        </Link>
      </Grid>
  )
}

export default CardComponent
