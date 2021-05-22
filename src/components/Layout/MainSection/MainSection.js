import React from 'react';
import { Button, Grid, Container, Typography } from '@material-ui/core';
import { useStyles } from './styles';

import Input from '../../Input/Input';
import LogoComponent from '../../LogoComponent/LogoComponent';


const MainSection = ({ setInput, input, f }) => {

  const classes = useStyles();
  return (
    <div className={classes.container} >
      <Container className={classes.innerContainer} maxWidth="sm"  >
        <LogoComponent color='#3f51b5' fontSize='6.5vw' imgSize='80px' />
        <Typography  variant="body2" align="center" color="textSecondary" >First, search for a title, then, select how to view results</Typography>
        <Input setInput={setInput} input={input} f={f} /> {/*   Input Component   */}
        <div className={classes.button} >
          <Grid container spacing={2} justify="center" >
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default MainSection
