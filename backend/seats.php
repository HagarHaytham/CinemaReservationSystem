<?php 
    $server="localhost";
    $username="root";
    $password="";
    $databaseName="cinema";
    $conn = mysqli_connect($server,$username,$password,$databaseName);

    $screenID = $_POST['screenID'];
    $sql =  "SELECT `Row`, `Col`, `Value`,`ScreenNo` FROM screenseats WHERE ScreenID=($screenID)";
    $result = mysqli_query($conn, $sql);
    $arr =[];
    for ($i=0; $i < $result->num_rows; $i++){
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        array_push($arr, $row);
        $screen_no = $row['ScreenNo'];
    }
  //   $sql = "SELECT `rows`, `columns` FROM screen WHERE screenno=($screen_no)";
  //   $result = mysqli_query($conn, $sql);
  //   for ($i=0; $i < $result->num_rows; $i++){
  //       $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
  //       array_push($arr, $row);
  // }
    echo json_encode($arr);
