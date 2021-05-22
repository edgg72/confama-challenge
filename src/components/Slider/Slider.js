import React from 'react';
import Carousel from "react-elastic-carousel";
import { useStyles } from './styles';
import CardComponent from '../Cards/CardComponent/CardComponent';

const Slider = ({ results }) => {

  const classes = useStyles();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <div className={classes.carousel} >
        <Carousel className={classes.carouselInner} breakPoints={breakPoints}>
          { results.map((cardInfo, index) => <CardComponent key={index} title={cardInfo.title} image_url={cardInfo.image_url} score={cardInfo.score} />) }
        </Carousel>
    </div>
  )
}

export default Slider
