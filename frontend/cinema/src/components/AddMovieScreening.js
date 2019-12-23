import React, { Component } from 'react'
import axios from 'axios'

class AddMovieScreening extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            moviename :'',
            screens:[],
            screenno:'0',
            errorMsg:''
        }
    }
    // {this.props.match.params.id} ---------------------------> MovieName
    // only executed once in the life cycle of the component
    componentDidMount(){
        this.setState({moviename:this.props.match.params.id})
        console.log(this.state.moviename)
        axios.get('http://localhost:8089/CinemaReservationSystem/backend/getscreens.php')
        .then(response=>{
            console.log(response.data)
            this.setState({screens:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errorMsg:'Error retreiving data'})
        })
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    
    render() {
        const {moviename,screens,screenno,errorMsg} = this.state
        return (
            <div>
                <div>
                    {moviename}
                    {/* {this.props.match.params.id} */}
                </div>
                <div>
                    <label>Screen Number</label>
                    <select 
                    value ={screenno}
                    onChange={this.changeHandler}
                    >
                        {
                    screens.map(screen=> 
                        <option 
                        key={screen.screenno} 
                        value={screen.screenno}
                        name='screenno'>
                        {screen.screenno}
                        </option>
                        )}
                    </select>
                </div>
            
            </div>
        )
    }
}

export default AddMovieScreening
