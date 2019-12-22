<?php

$server="localhost";
$username="testuser";
$password="123456";
$databaseName="cinema";
$conn = mysqli_connect($server,$username,$password,$databaseName);

$username = $_POST['Username'];
$password = $_POST['Password'];
$firstname =$_POST['Firtname'];
$lastname =$_POST['Lastname'];
$birthday=$_POST['Birthday'];
$email = $_POST['Email'];
$type = $_POST['Type'];
echo($username);

$query ="INSERT INTO user VALUES('$username','$password','$firstname','$lastname','2019-12-03','$email','$type')";
if(mysqli_query($conn,$query)){
    echo "HEEEEEEEEEH";
}
else{
    echo "ERROR :(";
}
?>

