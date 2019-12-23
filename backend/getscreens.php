<?php
$server="localhost";
$username="testuser";
$password="123456";
$databaseName="cinema";
$con = mysqli_connect($server,$username,$password,$databaseName);

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
} 

$sql =  "SELECT * FROM screen ";
$result = mysqli_query($con, $sql);

// echo "Returned rows are: " . $result -> num_rows;

$arr =[];
// Associative array
for ($i=0;$i<$result -> num_rows;$i++){
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    array_push($arr, $row);
    // printf ("%s %s %s\n", $row["moviename"], $row["genre"],$row["movielength"]);
}
echo json_encode($arr);
print_r($arr); 
?> 