import React from 'react';
import { Link } from 'react-router-dom'

import Carousel from "react-elastic-carousel";
import { useStyles } from './styles';

const Slider = ({ results }) => {

  const classes = useStyles();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  let message;


  if (results.score <= 4) {
    message = "I do not recommend it."
  } else if (results.score >= 5 && results.score <= 7) {
    message = "You may have fun"
  } else {
    message = "Great, this is one of the best anime."
  }

  return (
    <div className={classes.carousel} >
        <Carousel className={classes.carouselInner} breakPoints={breakPoints}>
          {/* { results.map((cardInfo, index) => <CardComponent key={index} title={cardInfo.title} image_url={cardInfo.image_url} score={cardInfo.score} />) } */}
          { results.map((cardInfo, index) =>  (
            <Link key={index} to={{
          pathname: "/animedetail",
          props: {
            title: cardInfo.title,
            image_url: cardInfo.image_url,
            score: cardInfo.score,
            synopsis: cardInfo.synopsis
          }
        }} style={{ textDecoration: 'none' }} >
            <div  className={classes.sliderCard} >
              <img className={classes.sliderCard__image} src={cardInfo.image_url} alt="anime" />
              <h1 className={classes.sliderCard__title} >{cardInfo.title}</h1>
              <h3 className={classes.sliderCard__score} >  {cardInfo.score} </h3>
              <p className={classes.sliderCard__message} >{message}</p>
            </div>
            </Link>
          ))}
        </Carousel>
    </div>
  )
}

export default Slider
