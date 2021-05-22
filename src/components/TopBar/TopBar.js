import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import LogoComponent from '../LogoComponent/LogoComponent';


const TopBar = () => {
  return (
    <AppBar position="relative">
        <Toolbar>
          <LogoComponent color='#e1ebe4' fontSize='2rem' imgSize='50px' />
        </Toolbar>
    </AppBar>
  )
}

export default TopBar
