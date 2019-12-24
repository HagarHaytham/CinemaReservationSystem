import React, { Component, View } from "react";
// import queryString from 'query-string'
import Seatmap from 'react-seatmap';
import axios from 'axios'
import {Link} from 'react-router-dom'
import "../css/Login.css";

class Seats extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      screenID: 1,
      rows: 0,
      cols: 0,
      seats: [],
      reserved: []
    };
  }

componentDidMount() {
  this.getScreenInfo();
  // this.getReservedSeats();
  

//  //--------------1.intializing our Array--------------//
//   for( let i = 0 ;i<this.state.rows;i++){
//     this.state.AllSeats.push( new  Array(this.state.cols).fill('btn-primary'));
// }


//     //--------------2.setting our reserved seats-------------//
//     for(let i = 0; i<this.state.reservedSeats.length; i++){
//         let resrvedRow = this.reservedSeats[i].row
//         let resrvedCol = this.reservedSeats[i].col
//         console.log(resrvedRow)

//         console.log(resrvedCol)
//         this.AllSeats[resrvedRow-1][resrvedCol-1] ='btn-danger';

//         console.log(this.AllSeats)
//     }

    // this.state = {
    //     AllSeats : this.AllSeats,
    //     // reserved seats recieved from db
    //     reservedSeats : this.reservedSeats,
    //     Myseats : []
    // }

}

getReservedSeats()
{
  var data = new FormData()
  data.append('screenID', this.state.screenID)
  axios.post('http://localhost/backend/seats.php', data)
  .then(response=>{
      console.log(response.data)
      this.setState({seats:response.data})
  })
  .catch(error=>{
      console.log(error)
      this.setState({errorMsg:'Error retreiving data'})
  })
}

getScreenInfo(){
  var apiBaseUrl = "http://localhost/backend/screenInfo.php";
  var payload= 'screenID='+ this.state.screenID;
  // alert(payload);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", apiBaseUrl, true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");     
  xhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
      // txt = "";
      // var x = this.responseXML.getElementsByTagName("rows")
      // alert(this.responseType);
      alert(this.getResponseHeader('content-type'));
      // for (i = 0; i< x.length; i++) {
      //   txt += x[i].childNodes[0].nodeValue + "<br>";
      // }
      // this.setState({
      //   rows : this.responseText.rows,
      //   columns : this.responseText.rows
      // });
    }
  };
  xhttp.send(payload);
}
createScreen(){
  // for( let i = 0 ;i<this.rows;i++){
  //   this.AllSeats.push( new  Array(this.cols).fill('btn-primary'));
  // }
  // //--------------2.setting our reserved seats-------------//
  // for(let i = 0; i<this.reservedSeats.length; i++){
  //     let resrvedRow = this.reservedSeats[i].row
  //     let resrvedCol = this.reservedSeats[i].col
  //     console.log(resrvedRow)

  //     console.log(resrvedCol)
  //     this.AllSeats[resrvedRow-1][resrvedCol-1] ='btn-danger';

  //     console.log(this.AllSeats)
  // }
}

// getCell(){
//   var apiBaseUrl = "http://localhost/backend/seats.php";
//   var payload= 'screenID='+ this.state.screenID+ '&row='+this.state.row+ '&col='+this.state.col;
//   var xhttp = new XMLHttpRequest();
//   xhttp.open("POST", apiBaseUrl, true);
//   xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");     
//   xhttp.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//           alert(this.responseText);
//       }
//   };
//   xhttp.send(payload);
// }

// handleSubmit() {
//   const itemsArray = this.state.userInput.split(','); // make it what comes from rows * cols
//   this.setState({
//     seats: itemsArray
//   });
// }
// handleChange(e) {
//   this.setState({
//     userInput: e.target.value
//   });
// }
// render() {
//   const items = this.state.seats.map(function(item){
//     return <li> {item} </li>;
//   });
//   return (
// render(){
//     return (
        // <View style={styles.container}>
            // {/* {this.renderButtons()} */}
        //     <view>
        //     {/* ({items}) */}
        // </View>
    // )
// }
// renderButtons(){
//     var list = myArray.map((item, index) => {
//         return (
//             <View key={index}>
//                 <TouchableHighlight
//                     style={styles.button}>
//                 </TouchableHighlight>
//             </View>
//         )
//     })
//     return list;
// }

  render(){
    const {seats,errorMsg} = this.state
    return (
      <div className="Seats">
        <div className="grid">
        <div className='row'>
                    <div className='col-md-12'>
                        <table className="table">
                            <thead></thead>
                            {/* -----convert each array element into ------- */}
                            {/* ----------map throw each element in 2d array we created--------*/}
                            <tbody>
                                {this.state.seats.map(row => {
                                    return (<tr key={row.Row}>
                                        {row.map((col, ColIndex) =>
                                            // storing our seatNumber With indxes I don not understand binding
                                            <td key={ColIndex}><button onClick={(e) =>
                                                this.Reserve(e, ColIndex + 1, row.Row + 1)}
                                                /* ------check if our seat is reserved or not----- */
                                                /* ----------TODO convert bt-danger && btn-primary into variable string */
                                                className={"btn  btn-block " + this.state.seats[row.Row][ColIndex]} 
                                                 value={this.index}>
                                                {this.index++}</button></td>
                                        )}
                                    </tr>);
                                }
                                )}
                            </tbody>

                        </table>
                        <div className='text-center mb-5'>
                            <button className='btn btn-success btn-lg' onClick={ (e) => this.SubmitReservation(e)}>Get your ticket</button>
                        </div>
                    </div>
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