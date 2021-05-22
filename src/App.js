import React, { useState, useEffect } from 'react';
import './App.css';
import { Typography, Button,  CssBaseline, Grid, Container } from '@material-ui/core'
import instance from './axiosInstance';
import { useStyles } from './styles';


import TopBar from './components/TopBar/TopBar';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';
import Slider from './components/Slider/Slider';

function App() {
  const [requestList, setRequestList] = useState([]);
  const [input, setInput] = useState('');
  const [view, setView] = useState('slides');


    async function fetchData(input){
      const request = await instance.get(`/search/anime?q=${input}`);
      setRequestList(request.data.results);
      return request;
    }

    const viewButtonHandler = () => {
      if ( view === 'grid' ) {
        setView('slides')
      } else if ( view === 'slides' ) {
        setView('grid')
      }
    }



  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <TopBar />   {/* TopBar Component, the bar at the top  */}
      <main className={classes.main}>
        <MainSection setInput={setInput} input={input} f={fetchData} />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={viewButtonHandler}
        >
          {view}
        </Button>
        {/* selecting what kind of view to display */}
        { view === 'slides' ? (
          <Cards results={requestList}/>
        ) : (
          <Slider results={requestList} />
        )}
      </main>
      <Footer />  {/* Footer component  */}
    </>
  )
}

export default App;
