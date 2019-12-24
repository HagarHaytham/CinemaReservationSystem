<?php 
    $server="localhost";
    $username="root";
    $password="";
    $databaseName="cinema";
    $conn = mysqli_connect($server,$username,$password,$databaseName);

    $screenID = $_POST['screenID'];
    $sql =  "SELECT `Row`, `Col`, `Value`,`ScreenNo` FROM screenseats WHERE ScreenID=($screenID)";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $screen_no = $row['ScreenNo'];

    $sql = "SELECT `rows`, `columns` FROM screen WHERE screenno=($screen_no)";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    echo  json_encode($row);
?>