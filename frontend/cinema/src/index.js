import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import './index.css';

import AddMovie from './components/AddMovie'
import ViewMovies from './components/ViewMovies'
import AdminHomepage from './components/AdminHomepage'
import AddMovieScreening from './components/AddMovieScreening'

// import '../bootstrap/bootstrap.min.css';
// import '../bootstrap/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path='/adminhomepage' component={AdminHomepage}/>
      <Route path='/addmovie' component={AddMovie}/>
      <Route path='/viewmovies' exact component={ViewMovies}/>
      <Route path='/viewmovies/:id' component={AddMovieScreening} />

    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
