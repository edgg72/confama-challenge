import React from 'react'
import { Typography } from '@material-ui/core'
import { useStyles } from './styles';

const Footer = () => {

  const classes = useStyles();

  return (
    <footer className={classes.footer} >
      <Typography variant="body2" align="center" color="textSecondary" gutterBottom >
        By Ever Daniel Gonzalez
      </Typography>
      <ul className={classes.socialList}>
            <li className={classes.socialList__item}>
                <a href="https://www.linkedin.com/in/edgg72/" className={classes.socialList__item__link}>
                    <i class="fab fa-linkedin fa-2x"></i>
                </a>
            </li>
            <li className={classes.socialList__item}>
                <a href="https://twitter.com/edgg72" className={classes.socialList__item__link}>
                    <i class="fab fa-github-square fa-2x"></i>
                </a>
            </li>
            <li className={classes.socialList__item}>
                <a href="https://github.com/edgg72" className={classes.socialList__item__link}>
                    <i class="fab fa-twitter-square fa-2x"></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer
