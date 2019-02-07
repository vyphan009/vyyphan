<?php
 $username = filter_input(INPUT_POST, 'username');
 if (!empty($username)){
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "lab4";
    // Create connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
    if (mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
        }
        else{
        $sql = "INSERT INTO name (username)
        values ('$username')";
            if ($conn->query($sql)){
            echo "New record is inserted sucessfully";
            }
    
        $conn->close();
        }
    }
    
    else{
    echo "Username should not be empty";
    die();
    }
?>