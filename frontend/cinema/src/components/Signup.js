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
        axios.post('http://localhost:8089/CinemaReservationSystem/backend/signup.php',this.state).then(response=>{
            console.log(response)
        }).catch(error=>{
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
