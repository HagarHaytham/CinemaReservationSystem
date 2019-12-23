import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../css/Login.css";

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();
    var apiBaseUrl = "http://localhost/backend/login.php";
    var payload= 'username='+ this.state.username+ '&password='+this.state.password;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", apiBaseUrl, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");     
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert(this.responseText);
        }
    };
    xhttp.send(payload);
  }

  componentDidMount(){

  }

  render(){
    return (
      <div className="Login">
        {/* <form onSubmit={handleSubmit}> */}
        <form  className="form" onSubmit={(event) => this.handleSubmit(event)} method="POST">
          <FormGroup controlId="username" bssize="large">
            <FormLabel className="FormLabel"> Username </FormLabel>
            <FormControl
              autoFocus
              type="text"
              required="required"
              name="username"
              onChange={(event) => this.setState({username:event.target.value})}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel className="FormLabel"> Password </FormLabel>
            <FormControl
              required="required"
              name="password"
              type="password"
              onChange={(event) => this.setState({password:event.target.value})}   
            />
          </FormGroup>
          <Button type="submit">  Login </Button>
          {/* disabled={!validateForm()} */}
        </form>
      </div>
    );
  }
}
export default Login;