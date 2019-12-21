import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Great from './components/Signup'
import Login from './components/Login'
class App extends Component {
  render() {
    return (
      <div className='rowC'>
          {/* <img src={require("./images/mac.jpg")} className="background" alt="cinma" /> */}
          <Login />
        </div>
    //   <div className="App">
    //     {/* <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p> */}
    //   {/* <Great></Great> */}
    // <Login></Login>
    //   </div>
    );
  }
}

export default App;
