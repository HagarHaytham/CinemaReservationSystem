import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ViewMoviesCustomers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies:[],
             ereorMsg:''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8089/CinemaReservationSystem/backend/viewmoviescustomers.php')
        .then(response=>{
            console.log(response)
            this.setState({movies:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errorMsg:'Error retreiving data'})
        })
    }
    
    render() {
        const {movies,errorMsg} = this.state
        return (
            <div>
                <div className="jumbotron">
                    <h1>Our Movies </h1>
                    <p>To see available seats for a movie click on its name, Enjoy!</p>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover"  >
                        <thead >
                            <tr>
                                <th>Movie name</th>
                                <th>Date and time</th>
                                <th> Screen No</th>
                                <th>Genre</th>
                                <th>Movie Length</th>
                            </tr>
                        </thead>
                        <tbody >
                    {
                        movies.length ?
                        movies.map(movie=> 
                        <tr key={movie.ScreenID}>
                            <Link to={`/viewmoviescustomers/${movie.ScreenID}`}>
                                <td>  {movie.moviename} </td> 
                            </Link>
                            <td> {movie.dateandtime}</td>
                            <td> {movie.ScreenNo}</td>
                            <td> {movie.genre}</td>
                            <td> {movie.movielength}</td>
                            
                        </tr>
                        ) :
                        null
                    } 
                    </tbody>
                    </table>
                    {errorMsg ? <div>{errorMsg}</div> :null} 
                </div>
            </div>
        )
    }
}

export default ViewMoviesCustomers
