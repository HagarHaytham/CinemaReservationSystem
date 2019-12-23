  import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className='App'>
          {/* <Login /> */}
          <Signup></Signup>
        </div>
    );
  }
}

export default App;
