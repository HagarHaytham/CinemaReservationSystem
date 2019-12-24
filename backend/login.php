<?php
    include 'connect.php';
    header("Access-Control-Allow-Origin: *");
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $stmt = $con->prepare("SELECT type, firstname FROM user WHERE username=? and password=?");
    $stmt->execute([$username,$password]); 
    $user = $stmt->fetch();
    if ($user) {
        // go to your page
        echo $user['type'];
      } else {
        echo "please cheak your username and password and try again";
      }
// $con->close();
?>