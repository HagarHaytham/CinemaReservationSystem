<?php 
    $server="localhost";
    $username="root";
    $password="";
    $databaseName="cinema";
    $conn = mysqli_connect($server,$username,$password,$databaseName);

    $screenID = $_POST['screenID'];
    $row = $_POST['row'];
    $col = $_POST['col'];
    echo $col ;
    $query =  "UPDATE  `screenseats` SET Value='1' where ScreenID={$screenID} and Row={$row} and Col={$col} ";
    mysqli_query($conn,$query);

?>