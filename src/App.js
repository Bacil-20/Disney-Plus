import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login'
import MoviesList from './components/MoviesList';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:MovieName">
          <Detail />
        </Route>
        <Route path="/movies">
          <MoviesList />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </ div >
  );
}

export default App;
