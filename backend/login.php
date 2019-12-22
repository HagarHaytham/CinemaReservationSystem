
<?php
//  include '../init.php';
	
    $dsn = 'mysql:host=localhost;dbname=cinema';
    $user = 'root';
    $pass = '';
    $option =  array(
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    );
    try{
        $con = new PDO($dsn, $user, $pass, $option);
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
        echo 'Failed To Connect to DB' . $e->getMessage();
    }
    // include 'connect.php';
    header("Access-Control-Allow-Origin: *");

    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];

// $sql = "SELECT username, firstname FROM user";
// $result = $con->query($sql);
    // $users = $con->query("SELECT type, firstname FROM user")->fetchAll();
    // foreach ($users as $row) {
    //     echo "hellooo ". $row[0]['firstname']."\n";
    // }

    $stmt = $con->prepare("SELECT type, firstname FROM user WHERE username=? and password=?");
    $stmt->execute([$username,$password]); 
    $user = $stmt->fetch();
    echo $user;
// if ($result) {
//     // output data of each row
//     while($row = $result->fetch()) {
//         echo "username: " . $row["username"]. " - firstname: " . $row["firstname"];
//     }
// } 
// if(!$result){
//     // echo "0 results";
//     die('Could not query:' . mysql_error());
// }
// echo mysql_result($result);
// $row = mysqli_fetch_row($result);
//   return $row[0];
// $con->close();

?>