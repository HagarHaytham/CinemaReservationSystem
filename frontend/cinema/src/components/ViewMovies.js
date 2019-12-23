import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ViewMovies extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movies:[],
            errorMsg:''
             
        }
    }
    // putMovies(){
    //     for (var i = 0; i < this.state.movies.length; i++) {
    //         $("#moviesTable").append($(' <tr  " class="w3-hover-text-indigo"> <td>' + this.state.movies[i].moviename + '</td> <td>' + this.state.movies[i].genre + '</td> <td>' + this.state.movies[i].movielength + '</td> </tr>'));
    //     }
    // }

    // only executed once in the life cycle of the component
    componentDidMount(){
        axios.get('http://localhost:8089/CinemaReservationSystem/backend/viewmovies.php')
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
                </div>
                <div className="table-responsive">
                    <table className="table table-hover"  >
                        <thead >
                            <tr>
                                <th>Movie name</th>
                                <th>Genre</th>
                                <th>Movie Length</th>
                            </tr>
                        </thead>
                        <tbody >
                    {
                        movies.length ?
                        movies.map(movie=> 
                        <tr key={movie.moviename}>
                            <Link to={`/viewmovies/${movie.moviename}`}>
                                <td>  {movie.moviename} </td> 
                            </Link>
                            <td> {movie.genre} </td>
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

export default ViewMovies
