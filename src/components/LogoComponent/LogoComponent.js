import React from 'react'
import { Typography } from '@material-ui/core'
import SeekAnimeLogo from '../../images/SeekAnimeLogo.svg'
import { useStyles } from './styles';

const LogoComponent = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.logo} >
      <img className={classes.logoImage} height={props.imgSize} width={props.imgSize} src={SeekAnimeLogo} alt="gundamLogo" />
      <Typography className={classes.logoText} style={{ color: props.color, fontSize: props.fontSize }} >
        SeekAnime
      </Typography>
    </div>
  )
}

export default LogoComponent
