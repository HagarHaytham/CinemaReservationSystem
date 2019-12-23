import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from "react-router-dom";

class AddMovie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Moviename:'',
             Genre:'',
             Movielength:'',
             MovieAdded:false
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
        data.append('Moviename', this.state.Moviename)
        data.append('Genre', this.state.Genre)
        data.append('Movielength',this.state.Movielength)
        axios.post('http://localhost:8089/CinemaReservationSystem/backend/addmovie.php',data).then(response=>{
            // var jsonData = JSON.parse(response);
            // alert(jsonData.message);
            // alert(response)
            console.log(response.data)
            if(response.data ==1){
                alert("Movie added successfully")
                this.setState({ MovieAdded: true })
            }
            else{
                alert(response.data)
            }

        }).catch(error=>{
            alert(error)
            console.log(error)
        })
    }
    
    render() {
        if(this.state.MovieAdded){
            return <Redirect to='adminhomepage' />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="jumbotron">
                    <h1>Add a new Movie </h1>
                </div>
                <div>
                    <input required autoFocus
                    className="form-control"
                    placeholder="Movie name"
                    type='text' 
                    name = 'Moviename'
                    value={this.state.Moviename} 
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <div>
                    <input required
                    className="form-control"
                    placeholder="Genre"
                    type='text' 
                    name = 'Genre'
                    value={this.state.Genre} 
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <div >
                    <input required
                    class="form-control"  
                    type="time"
                    step="2"
                    name = 'Movielength'
                    value={this.state.Movielength} 
                    onChange={this.changeHandler}/>
                </div>
                <br></br>
                <button 
                className="btn btn-success"
                type="submit"
                >Add Movie</button>
             </form>
        )
    }
}

export default AddMovie
