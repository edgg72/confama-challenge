import React, { useState } from 'react'
import CardComponent from './CardComponent/CardComponent';
import { Container, Grid } from '@material-ui/core'

import { useStyles } from './styles';

const Cards = ({results}) => {

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md" >

      {/* { viewSelector === 'slide' ? (

      ) : (

      )} */}

      <Grid container spacing={4} >
        { results.map((cardInfo, index) => <CardComponent key={index} title={cardInfo.title} image_url={cardInfo.image_url} score={cardInfo.score} />) }
      </Grid>
    </Container>
  )
}


export default Cards
