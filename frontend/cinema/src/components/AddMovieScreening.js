import React, { Component } from 'react'

class AddMovieScreening extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            moviename :'',
            screens:[],
            errorMsg:''
        }
    }
    // {this.props.match.params.id} ---------------------------> MovieName
    // only executed once in the life cycle of the component
    componentDidMount(){
        this.setState({moviename:this.props.match.params.id})
        axios.get('http://localhost:8089/CinemaReservationSystem/backend/getscreens.php')
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
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default AddMovieScreening
