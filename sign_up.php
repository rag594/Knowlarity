<?php
include_once  'cors.php';
include_once 'db_connect.php';
include_once 'connection.php';

cors();

$postdata = file_get_contents('php://input');
$request = json_decode($postdata);
$email = $request->email;
$username = $request->unmae;
$password = $request->pass;

	$e = true;
	$prep_stmt = "SELECT id FROM login WHERE email = ?";
    $stmt = $db->prepare($prep_stmt);
    if ($stmt) {
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->store_result();
 
        if ($stmt->num_rows == 1) {
           //error message
            			$e = false;
                        $stmt->close();
						$arr = array('error_msg'=>"email exists!!");
						echo json_encode($arr);
        }
                $stmt->close();
    } else {
        //database error
		$e = false;
                $stmt->close();
				$arr = array('error_msg'=>"Database error!!");
						echo json_encode($arr);
    }
 
    $u = true;
    $prep_stmt = "SELECT id FROM login WHERE usename = ? LIMIT 1";
    $stmt = $db->prepare($prep_stmt);
 
    if ($stmt) {
        $stmt->bind_param('s', $username);
        $stmt->execute();
        $stmt->store_result();
 
                if ($stmt->num_rows == 1) {
                      //username exists
					  $u = false;
                        $stmt->close();
						$arr = array('error_msg'=>"Username exists!!");
						echo json_encode($arr);
                }
                $stmt->close();
        } else {
//database error
					$u = false;
                $stmt->close();
				$arr = array('error_msg'=>"Database error!!");
						echo json_encode($arr);
        }
		
		if($u == true  &&  $e ==  true)
		{
			$random_salt =substr(hash('sha1', substr(uniqid(mt_rand(1, rand()), true),3,5)),5,10);
			
			$password = hash('sha1', $password . $random_salt);
			
			 if ($insert_stmt = $db->prepare("INSERT INTO login (usename, email, password, salt) VALUES (?, ?, ?, ?)"))
			  {
            $insert_stmt->bind_param('ssss', $username, $email, $password, $random_salt);
            if (! $insert_stmt->execute()) 
			{
                //failiure
				 header('HTTP/1.0 403 Unauthorized');
            }
        }
       header('Location: process.php');
		}
		
 
?>