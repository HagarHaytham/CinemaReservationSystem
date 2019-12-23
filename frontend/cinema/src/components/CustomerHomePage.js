import React, { Component } from 'react'
import {Link } from 'react-router-dom'

class CustomerHomePage extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <Link to='viewmovies'>
                        <button className="btn btn btn-outline-success" type="button">View Movies</button>
                        </Link>
                    </form>
                </nav>
            </div>
        )
    }
}

export default CustomerHomePage
