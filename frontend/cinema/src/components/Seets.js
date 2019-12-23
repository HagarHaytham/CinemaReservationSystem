import React, { Component } from "react";
import "../css/Login.css";

class Seets extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp(){
    this.props.history.push("/signup");
  }

  render(){
    return (
      <div className="Seets">
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
export default Seets;