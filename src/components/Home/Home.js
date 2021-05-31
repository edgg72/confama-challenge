import React, { useState } from 'react';
import { Button,  CssBaseline } from '@material-ui/core'
import instance from '../../axiosInstance';
import { useStyles } from './styles';

import TopBar from '../Layout/TopBar/TopBar';
import Cards from '../Cards/Cards';
import Footer from '../Layout/Footer/Footer';
import MainSection from '../Layout/MainSection/MainSection';
import Slider from '../Slider/Slider';

const Home = () => {
  const [requestList, setRequestList] = useState([]);
  const [input, setInput] = useState('');
  const [view, setView] = useState('slides');
  const [initialPress, setInitialPress] = useState(null);

    async function fetchData(input){
      try{
        const request = await instance.get(`/search/anime?q=${input}`)
        setRequestList(request.data.results);
        return request;
      } catch (e) {
        console.log(`This error has occurred: ${e}`)
        alert("Sorry, that didn't get any titles");

      }

    }

    const viewButtonHandler = () => {
      setInitialPress(true)
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
        { view === 'grid' && initialPress !== null  ? (
          <Slider  results={requestList} />
          ) : (
          <Cards results={requestList}/>
        )}
      </main>
      <Footer />  {/* Footer component  */}
    </>
  )
}

export default Home
