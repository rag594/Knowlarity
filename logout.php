<?php
include_once 'db_connect.php';
include_once 'connection.php';
include_once 'cors.php';

cors();

$postdata = file_get_contents('php://input');
$request = json_decode($postdata);
$token = $request->pub_tok;
$public_key="";
$private_key="";
                if(!empty($token))
				{
	$stmt1=$db->prepare("Select email from login where public_key = ?");
	$stmt1->bind_param('s',$token);
	$stmt1->execute();
		$stmt1->store_result();
		
		$stmt1->bind_result($email);
		$stmt1->fetch();
	
	$stmt=$db->prepare("UPDATE login SET public_key = ?,private_key=? WHERE email = ?");
					$stmt->bind_param('sss',$public_key , $private_key , $email);
					if($stmt->execute())
					{
						$arr = array('success'=>"Successfully logged out!!!");
						echo json_encode($arr);
					}
					else
					{
						header('HTTP/1.0 408 Unauthorized');
					}
				}
				else
				{
					header('HTTP/1.0 403 Unauthorized');
				}
?>