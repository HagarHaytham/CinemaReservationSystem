import React, { Component, View } from "react";
// import queryString from 'query-string'
import Seatmap from 'react-seatmap';
import axios from 'axios'
import {Link} from 'react-router-dom'
import "../css/Login.css";
import "../css/seats.css";
import "../css/screen.css";

class Seats extends Component {
  index = 1; // global variable
  constructor(props){
    super(props);
    this.state={
      // username: '',
      screenID: 0,  
      // {this.props.match.params.id}
      rows: 0,
      cols: 0,
      seats: [],
      seats_styles: [["btn btn-success","btn btn-success","btn btn-success"], ["btn btn-success","btn btn-success","btn btn-success"]],
      reserved: [],
      selected_row: '',
      selected_col: ''
    };
  }

  componentDidMount() {
    this.setState({screenID: this.props.match.params.id})
    this.getScreenInfo()
  }

  getReservedSeats()
  {
    var data = new FormData()
    data.append('screenID', this.state.screenID)
    axios.post('http://localhost/backend/reservedSeats.php', data)
    .then(response=>{
        this.setState({reserved:response.data})
        this.updateStyle()
    })
    .catch(error=>{
        console.log(error)
        this.setState({errorMsg:'Error retreiving data'})
    })
  }

  getScreenInfo(){
    var data = new FormData()
    data.append('screenID', this.state.screenID)
     axios.post("http://localhost/backend/screenInfo.php",data)
    .then(response=>{
        this.setState({rows:response.data.rows, cols:response.data.columns})
         this.createScreen()   
    })
    .catch(error=>{
        console.log(error)
        this.setState({errorMsg:'Error retreiving data'})
    })
  }

  createScreen(){
    this.setState({seats_styles: []})
    for( let i = 0 ;i<this.state.rows;i++){
      // temp.push( new  Array(this.state.cols).fill('btn-primary'))
      // this.state.seats.push( new  Array(this.state.cols).fill('btn-primary'));
      let seats = [...this.state.seats];
      seats.push(Array.from({length: this.state.cols}, (_, j) => <button ></button>)); 
      this.setState({seats})

      let seats_styles = [...this.state.seats_styles];
      seats_styles.push(Array.from({length: this.state.cols}, (_, j) => "btn btn-primary")); 
      this.setState({seats_styles}) 
    }
    
    console.log(this.state.seats_styles)
    this.getReservedSeats()
  }

  updateStyle(){
    for( let i = 0; i < this.state.reserved.length; i++){
        let row_res = this.state.reserved[i].Row;
        let col_res = this.state.reserved[i].Col;
        this.state.seats_styles[row_res-1][col_res-1]='btn btn-danger';
    }
  }

  handleSeatClick(row, col, event){
    console.log(row, col)
    // this.state.seats_styles[row][col]='btn btn-success';
      for( let i = 0; i < this.state.reserved.length; i++){
        let row_res = this.state.reserved[i].Row;
        let col_res = this.state.reserved[i].Col;
        if(row_res == row && col_res == col){
          alert("Sorry, this is a reserved seat")
        }
        else{
          alert("OK will reserve it for you")
          var data = new FormData()
          data.append('screenID', this.state.screenID)
          data.append('row', row)
          data.append('col', col)
          // console.log( this.state.row, this.state.col)
          axios.post("http://localhost/backend/reserve.php",data)
          .then(response=>{
            console.log(response.data)
            this.getReservedSeats()
              // this.setState({rows:response.data.rows, cols:response.data.columns})  
          })
          .catch(error=>{
              console.log(error)
              this.setState({errorMsg:'Error retreiving data'})
          })
        }
  }

}
  render(){
    const {seats,errorMsg} = this.state
    return (
      <div className="Seats">
        <div className="grid">
          <div className='row'>
            <ol className="cabin fuselage">
            {this.state.seats.map((row, row_index) => {
                console.log(this.state.seats)
                return (
                  <li className="row"  key={(1+row_index)*1}>
                    <ol className="seats" key={(1+row_index)*2}>
                      {row.map((col, col_index) => {
                        console.log(this.state.seats_styles)
                        return (
                          <li className="seat" key={(1+col_index)*1}>
                            <button key={(1+col_index)*2} 
                            className = "seat_btn"
                            // className={ this.state.seats_styles[row_index][col_index]}
                             onClick={this.handleSeatClick.bind(this, row_index, col_index)}
                            //  ref={(thisItem) => this[`item-${i}`] = thisItem}
                            ></button>
                            {/* <label className="seat_label" key={(1+col_index)*3}> 2A</label> */}
                          </li>
                        );}
                      )}
                    </ol>
                  </li>
                );}
              )}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
// styles = StyleSheet.create({
//     container: {
//         marginTop: 65,
//         flex: 1,
//     },
// })
export default Seats;