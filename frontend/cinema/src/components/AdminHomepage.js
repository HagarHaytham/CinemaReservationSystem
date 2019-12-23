import React, { Component } from 'react'
import {Link } from 'react-router-dom'

class AdminHomepage extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <Link to='/addmovie'>
                            <button class="btn btn-outline-success" type="button">View Movies</button>
                        </Link>
                        <Link to='viewmovies'>
                        <button class="btn btn btn-outline-success" type="button">Add Movie</button>
                        </Link>
                    </form>
                </nav>
            </div>
            // <div className="navbar navbar-expand-lg navbar-light bg-light">
            //     <nav > 
            //         <h3>Amin Home Page</h3>
            //         <ul className="navbar-nav">
            //             <li className="nav-item">View Movies</li>
            //             <li>Add Movie</li>
            //         </ul>
            //     </nav>
            //  </div>
        )
    }
}

export default AdminHomepage
