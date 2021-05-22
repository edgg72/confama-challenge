import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { TextField, Container } from '@material-ui/core';

import { useStyles } from './styles';


const Input = ({ setInput, input, f }) => {

  const classes = useStyles();

  const keyPressHandler = (e) => {
    if(e.key ==='Enter') {
      clickSearchHandler(e);
    }
  }

  const clickSearchHandler = (e) => {
    e.preventDefault();
    f(input)
  }

  return (
    <Container className={classes.container} >
      <TextField
        variant="outlined"
        className={classes.searchInput}
        value={input}
        placeholder="Search for anime titles"
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={keyPressHandler}
      />
      <SearchIcon className={classes.searchIcon} onClick={clickSearchHandler} />
    </Container>
  )
}

export default Input
