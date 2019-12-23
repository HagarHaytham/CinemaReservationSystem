import React, { Component } from 'react'
import {Link } from 'react-router-dom'

class CustomerHomePage extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <Link to='viewmovies'>
                        <button class="btn btn btn-outline-success" type="button">View Movies</button>
                        </Link>
                    </form>
                </nav>
            </div>
        )
    }
}

export default CustomerHomePage
