import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
// import Signup from './components/Signup'
import Login from './components/Login'
import Seats from './components/Seats'
import EnsureLoggedInContainer from './auth'
import './index.css';

// import '../bootstrap/bootstrap.min.css';
// import '../bootstrap/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      {/* <Route path="/signup" component={Signup} /> */}
      {/* <Route component={EnsureLoggedInContainer}></Route> */}
      <Route path="/seats" component={Seats} />
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
