import React, { Component } from 'react'

class CustomerHomePage extends Component {
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
        )
    }
}

export default CustomerHomePage
