import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AnimeDetail from './components/AnimeDetail/AnimeDetail'


function App() {
  return(
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/animedetail" exact component={AnimeDetail} />
    </Switch>
  </Router>
  )
}

export default App;
