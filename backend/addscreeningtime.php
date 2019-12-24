<?php
if($_POST){
    $server="localhost";
    $username="testuser";
    $password="123456";
    $databaseName="cinema";
    $conn = mysqli_connect($server,$username,$password,$databaseName);
    // print($_POST);
    $moviename = $_POST['moviename'];
    $screenno = $_POST['screenno'];
    $datetime =$_POST['datetime'];
    $date=date("Y-m-d H:i:s",strtotime($datetime));
    // $screenno = 1;
    // $moviename ='Alaadin';
    // $date ='2019-12-17 05:11:00';
    $r =1;
    $c =1;
    $v=0;
    $sql1 = "INSERT INTO screenseats VALUES(NULL,'$screenno', '$r', '$c', '$v')";
    if (mysqli_query($conn,$sql1))
    {
        $sql2="SELECT MAX(ScreenID) FROM screenseats ";
        $result = mysqli_query($conn, $sql2);
        $data = mysqli_fetch_row($result);
        $screenid = $data[0];
        // printf ("%s \n",$screenid);
        $sql3="INSERT INTO movietimes (`MovieName`, `dateandtime`, `ScreenId`) VALUES ('$moviename', '$date', '$screenid')";
        if (mysqli_query($conn,$sql3))
        {
            $sql4 = "SELECT * FROM screen WHERE screenno ='$screenno'";
            $result2 = mysqli_query($conn, $sql4);
            $data = mysqli_fetch_row($result2);
            $row = $data[1];
            $col = $data[2];
            // printf ("%s %s\n",$row,$col);
            $val=0;
            for ($i=1;$i<=$row;$i++){
                for($j=1;$j<=$col;$j++){
                    $sql5 ="INSERT INTO screenseats VALUES ('$screenid','$screenno','$row','$col','$val')";
                    mysqli_query($conn,$sql5);
                    // echo $i;
                }
            }
            echo 1;
        }
        else{
            echo 'something went wrong1';
        }
    }
    else{
        echo 'something went wrong2';
    }
}
else
    echo 'Eh el klaam';
?>

