import React, { Component } from 'react'
import axios from 'axios'


class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username:'',
             Password:'',
             Firstname:'',
             Lastname:'',
             Birthday:'',
             Email:'',
             Type:2
        }
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleSubmit =(event)=>{
        // alert(`Hello ${this.state.Username}`)
        event.preventDefault()
        console.log(this.state)
        // var data = { Username: this.state.Username, Password: this.state.Password,Firstname:this.state.Firstname, Lastname:this.state.Lastname,Birthday:this.state.Birthday,Email:this.state.Email,Type:this.state.Type}
        // console.log(data['Username'])
        var data = new FormData()
        data.append('Username', this.state.Username)
        data.append('Password', this.state.Password)
        data.append('Firstname',this.state.Firstname)
        data.append('Lastname',this.state.Lastname)
        data.append('Birthday',this.state.Birthday)
        data.append('Email',this.state.Email)
        data.append('Type',this.state.Type)
        axios.post('http://localhost:8089/CinemaReservationSystem/backend/signup.php',data).then(response=>{
            // var jsonData = JSON.parse(response);
            // alert(jsonData.message);
            alert(response)
            console.log(response)
        }).catch(error=>{
            alert(error)
            console.log(error)
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="jumbotron">
                    <h1>Sign Up For The Best Cinema Experience!</h1>
                    <p> Tell us about yourself</p>
                </div>
                <div>
                    {/* <label>Username</label> */}
                    <input required autoFocus
                    className="form-control"
                    placeholder="Username"
                    type='text' 
                    name = 'Username'
                    value={this.state.username} 
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <div>
                    {/* <label>Password</label> */}
                    <input required
                    className="form-control"
                    placeholder="Password"
                    type='password'
                    name='Password'
                    value={this.state.Password}
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <div>
                    {/* <label>FirstName</label> */}
                    <input required
                    className="form-control"
                    placeholder="First name"
                    type='text'
                    name='Firstname'
                    value={this.state.Firstname}
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <div>
                    {/* <label>LastName</label> */}
                    <input required
                    className="form-control"
                    placeholder="Last name"
                    type='text'
                    name='Lastname'
                    value={this.state.Lastname}
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <div>
                    <label>Birthday</label>
                    <input required
                    className="form-control"
                    placeholder="Birthday"
                    type='date'
                    name='Birthday'
                    value={this.state.Birthday}
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <div>
                    {/* <label>Email</label> */}
                    <input required
                    className="form-control"
                    placeholder="Email"
                    type='email'
                    name='Email'
                    value={this.state.Email}
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <button 
                className="btn btn-success"
                type="submit"
                >Sign UP</button>
            </form>
        )
    }
}

export default Signup
