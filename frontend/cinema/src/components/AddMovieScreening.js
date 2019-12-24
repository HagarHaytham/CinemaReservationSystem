import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from "react-router-dom";

class AddMovieScreening extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            moviename :'',
            screens:[],
            screenno:'0',
            datetime:'',
            MovieScreeningAdded:false,
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

    handleSubmit =(event)=>{
        event.preventDefault()
        var data = new FormData()
        data.append('moviename', this.state.moviename)
        data.append('screenno', this.state.screenno)
        data.append('datetime',this.state.datetime)
        axios.post('http://localhost:8089/CinemaReservationSystem/backend/addscreeningtime.php',data).then(response=>{
            // var jsonData = JSON.parse(response);
            // alert(jsonData.message);
            console.log(response.data)
            if(response.data ==1){
                alert("Movie added successfully")
                this.setState({ MovieScreeningAdded: true })
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
        const {moviename,screens,screenno,datetime,MovieScreeningAdded,errorMsg} = this.state
        if(this.state.MovieScreeningAdded){
            return <Redirect to='adminhomepage' />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="jumbotron">
                    <h1>Add screening time for {moviename} movie!</h1>
                    {/* {this.props.match.params.id} */}
                </div>

                <div>
                    <label className="label label-default">Screen Number</label>
                    <select className="form-control form-control-lg" required
                        value ={screenno}
                        onChange={this.changeHandler}>
                    {screens.map(screen=> 
                        <option 
                        key={screen.screenno} 
                        value={screen.screenno}
                        name='screenno'>
                        {screen.screenno}
                        </option>
                        )}
                    </select>
                </div>
                <br></br>
                <div>
                    <label>Birthday</label>
                    <input required
                    className="form-control"
                    type='datetime-local'
                    name='datetime'
                    value={datetime}
                    onChange={this.changeHandler}
                    ></input>
                </div>
                <br></br>
                <button 
                className="btn btn-success"
                type="submit"
                >Add screening Time </button>
            </form>
        )
    }
}

export default AddMovieScreening
