<?php
include_once 'db_connect.php';
include_once 'login.php';
include_once 'connection.php';
include_once 'cors.php';

cors();
 
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);
$email = $request->email;
$password = $request->pass;
 	if(!empty($email) && !empty($password))
	{ 
    if (login_pro($email, $password, $db) == true) {
		//session_start();
       // echo "Hello";
    } 
	else 
	{
		
        header('HTTP/1.0 403 Unauthorized');
} 
	}
	else
	{
		header('HTTP/1.0 403 Unauthorized');
	}
?>
