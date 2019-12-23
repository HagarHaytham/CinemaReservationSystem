<?php
$server="localhost";
$username="testuser";
$password="123456";
$databaseName="cinema";
$conn = mysqli_connect($server,$username,$password,$databaseName);
$query ="SELECT * FROM movie ";
// if(mysqli_query($conn,$query)){
//     echo 'movie added';
// }
// else{
//     echo 'This movie already exists';
// }
?>