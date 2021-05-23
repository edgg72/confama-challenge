import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

const AnimeDetail = (props) => {

  const {title, image_url, score, synopsis} =  props.location.props;

  const classes = useStyles();
  return (
    <section className={classes.container__outer} >
      <section className={classes.container__inner} >
        <div className={classes.left__section} ></div>
        <div >
          <img className={classes.image__section} src={image_url} alt="anime" />
        </div>
        <div className={classes.right__section}>
          <div className={classes.title__section}>
            {title}
          </div>
          <div className={classes.score__section}>
            Average Score: <strong>{score}</strong>
          </div>
          <div className={classes.synopsis__section}>
            {synopsis}
          </div>
          <Link className={classes.goBack} to="/" >Go Back</Link>
        </div>
      </section>
    </section>
  )
}

export default AnimeDetail
