import React from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
        <div className='rowC'>
          {/* <img src={require("./images/mac.jpg")} className="background" alt="cinma" /> */}
          <Login />
        </div>
    </div>
  );
}

export default App;
