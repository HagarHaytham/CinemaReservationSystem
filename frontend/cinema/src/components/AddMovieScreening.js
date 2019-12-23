import React, { Component } from 'react'

class AddMovieScreening extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    // {this.props.match.params.id}


    
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default AddMovieScreening
