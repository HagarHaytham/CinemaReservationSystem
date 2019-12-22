import React, { Component } from 'react'

export class Signup extends Component {
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
    handleUsernameChange =(event)=> {
        this.setState({
            Username: event.target.value
        })
    }

    handlePasswordChange=(event)=>{
        this.setState({
            Password: event.target.value
        })
    }
    handleFirstnameChange =(event)=>{
        this.setState({
            Firstname: event.target.value
        })
    }
    handleLastnameChange =(event)=>{
        this.setState({
            Lastname: event.target.value
        })
    }
    handleBirthdayChange =(event)=>{
        this.setState({
            Birthday: event.target.value
        })
    }
    handleEmailChange = (event)=>{
        this.setState({
            Email: event.target.value
        })
    }
    handleSubmit =(event)=>{
        alert(`Hello ${this.state.username}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input required
                    type='text' 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange}
                    ></input>
                </div>
                <div>
                    <label>Password</label>
                    <input required
                    type='password'
                    value={this.state.Password}
                    onChange={this.handlePasswordChange}
                    ></input>
                </div>
                <div>
                    <label>FirstName</label>
                    <input required
                    type='text'
                    value={this.state.Firstname}
                    onChange={this.handleFirstnameChange}
                    ></input>
                </div>
                <div>
                    <label>LastName</label>
                    <input required
                    type='text'
                    value={this.state.Lastname}
                    onChange={this.handleLastnameChange}
                    ></input>
                </div>
                <div>
                    <label>Birthday</label>
                    <input required
                    type='text'
                    value={this.state.Birthday}
                    onChange={this.handleBirthdayChange}
                    ></input>
                </div>
                <div>
                    <label>Email</label>
                    <input required
                    type='email'
                    value={this.state.Email}
                    onChange={this.handleEmailChange}
                    ></input>
                </div>
                <button type="submit">Sign UP</button>
            </form>
        )
    }
}

export default Signup
