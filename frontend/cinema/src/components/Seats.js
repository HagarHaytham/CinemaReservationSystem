import React, { Component, View } from "react";
// import queryString from 'query-string'
// import Seatmap from 'react-seatmap';
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
  // const values = queryString.parse(this.props.location.search)
  // console.log(values.filter) // "top"
  // console.log(values.origin) // "im"
  // this.getScreen();
  var apiBaseUrl = "http://localhost/backend/seats.php";
  var payload= 'screenID='+ this.state.screenID;
  // alert(payload);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", apiBaseUrl, true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");     
  xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          var res = this.responseText.split(",");
          this.setState({
            rows : res[0],
            cols : res[1],
          });


          for( let i = 0 ;i<this.rows;i++){
            this.AllSeats.push( new  Array(this.cols).fill('btn-primary'));
        }


        //--------------2.setting our reserved seats-------------//
        for(let i = 0; i<this.reservedSeats.length; i++){
            let resrvedRow = this.reservedSeats[i].row
            let resrvedCol = this.reservedSeats[i].col
            console.log(resrvedRow)

            console.log(resrvedCol)
            this.AllSeats[resrvedRow-1][resrvedCol-1] ='btn-danger';

            console.log(this.AllSeats)
        }
// Convert data string to an object
// var data = JSON.parse(xhr.responseText);
// // Get the first item
// var firstPost = data[0];

// // Loop through each post
// data.forEach(function (post) {
// 	console.log(post);
// });
}

getScreen(){
  var apiBaseUrl = "http://localhost/backend/seats.php";
  var payload= 'screenID='+ this.state.screenID;
  // alert(payload);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", apiBaseUrl, true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");     
  xhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
      var res = this.responseText.split(",");
      this.setState({
        rows : res[0],
        cols : res[1],
      });
    }
  };
  xhttp.send(payload);
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
    return (
      <div className="Seats">
        <div className="grid">
          <Group></Group>
          <button className="seat"> </button>
          <button className="seat"> </button>

          <button className="seat"> </button>
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