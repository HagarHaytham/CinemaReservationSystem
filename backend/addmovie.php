<?php
$server="localhost";
$username="testuser";
$password="123456";
$databaseName="cinema";
$conn = mysqli_connect($server,$username,$password,$databaseName);
$moviename = $_POST['Moviename'];
$genre  = $_POST['Genre'];
$movielength = $_POST['Movielength'];

$query ="INSERT INTO movie (`moviename`, `genre`, `movielength`)VALUES ('$moviename', '$genre', '$movielength')";
if(mysqli_query($conn,$query)){
    echo 'movie added';
}
else{
    echo 'This movie already exists';
}
?>