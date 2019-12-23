<?php
if($_POST){
    $server="localhost";
    $username="testuser";
    $password="123456";
    $databaseName="cinema";
    $conn = mysqli_connect($server,$username,$password,$databaseName);
    // print($_POST);
    $username = $_POST['Username'];
    $password = $_POST['Password'];
    $firstname =$_POST['Firstname'];
    $lastname =$_POST['Lastname'];
    $birthday=$_POST['Birthday'];
    $email = $_POST['Email'];
    $type = $_POST['Type'];

    $date=date("Y-m-d H:i:s",strtotime($birthday));

    $query ="INSERT INTO user VALUES('$username','$password','$firstname','$lastname','$date','$email','$type')";
    if(mysqli_query($conn,$query)){
        echo 'you signed in successfully';
    }
    else{
        echo 'Username exists, please choose another username';
    }
}
else
    echo 'Eh el klaam';
?>

