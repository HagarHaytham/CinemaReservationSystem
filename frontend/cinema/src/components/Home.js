import React, { Component } from "react";
import "../css/Login.css";

class Home extends Component {
  constructor(props){
    super(props);
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  signUp(){
    this.props.history.push("/signup");
  }

  logIn(){
    this.props.history.push("/login");
  }

  render(){
    return (
      <div className="Home">
        <div>
          <button className="bttn" onClick={this.signUp}> Sign Up </button >
        </div>
       
        <div>
          <button className="bttn" onClick={this.logIn}> Log In </button >
        </div> 
      </div>
    );
  }
}
export default Home;