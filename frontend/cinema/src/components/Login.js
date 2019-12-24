import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../css/Login.css";
import axios from 'axios'
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      type:0,
      logged_in: false
    }
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
   // console.log(data['Username'])
    var data = new FormData()
    
    data.append('username',this.state.username)
    data.append('password',this.state.password)
    axios.post("http://localhost:8089/CinemaReservationSystem/backend/login.php",data).then(response=>{
        // var jsonData = JSON.parse(response);
        // alert(jsonData.message);
        // alert(response.data)
        console.log(response.data)
        if ( response.data ==1 ||  response.data ==2)
        {
          // alert(this.responseText);
          this.setState({ logged_in: true })
          this.setState({ type: response.data })
        }
        else{
            console.log("LEEH")
            console.log(response.data)
            console.log("LEEH")
            alert(response.data)
        }
    }).catch(error=>{
        alert(error)
        console.log(error)
    })
  }

  componentDidMount(){

  }

  render(){
    if (this.state.logged_in && this.state.type==1){
      return <Redirect to='/adminhomepage' />
  }
  if (this.state.logged_in && this.state.type==2){
    return <Redirect to='/customerhomepage' />
}
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