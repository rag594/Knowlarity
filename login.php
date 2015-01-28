<?php
include_once 'connection.php';
function login_pro($email,$password,$db)
{
	if($query=$db->prepare("Select id,usename,password,salt from login where email=?"))
	{
		$query->bind_param('s',$email);
		$query->execute();
		$query->store_result();
		$query->bind_result($user_id,$username,$p_word,$salt);
		$query->fetch();
		
		$password=hash('sha1',$password.$salt);
		 if ($query->num_rows > 0)
		  {
 
            if (bruteforce($user_id, $db) == true) 
			{
                // Account is locked 
				header('HTTP/1.0 402 Unauthorized');
            }
			 else
			  {
                // Check if the password in the database matches
                // the password the user submitted.
                if ($p_word == $password) {
					if(ins_token($db,$email))
					{
					return true;
					}
					else
					{
						header('HTTP/1.0 403 Forbidden');
					}
	
               }
			    else
				 {
                    // Password is not correct
                    // We record this attempt in the database
                    $now = time();
                   $db->query("INSERT INTO attempts(user_id, time)
                                    VALUES ('$user_id', '$now')");
                    return false;
                }
            }
        } else {
            // No user exists.
            return false;
        }
    }
}
function ins_token($db,$email)
{
					$public_key = hash('sha1',hash('md5',substr(uniqid(mt_rand(1, rand()), true),3,5)));										                    $private_key =hash('md5', uniqid(mt_rand(1, rand()), true));
					$stmt=$db->prepare("UPDATE login SET public_key = ?,private_key=? WHERE email = ?");
					$stmt->bind_param('sss',$public_key , $private_key , $email);
					$stmt1=$db->prepare("Select usename from login where email=?");
					
					$stmt1->bind_param('s',$email);
					$stmt1->execute();
					$stmt1->store_result();
					$stmt1->bind_result($username);
					$stmt1->fetch();
					
					if($stmt->execute())
					{
					
						$arr = array('pub'=>$public_key , 'priv'=>$private_key ,'uname'=>$username);
						echo json_encode($arr);
					return true;
					}
					else
					{
						return false;
					}
					
}
function bruteforce($user_id, $db) {
    $now = time();
    $valid_attempts = $now - ( 2* 60 * 60);
 
    if ($query = $db->prepare("SELECT time FROM attempts WHERE user_id = ? 
                            AND time > '$valid_attempts'")) {
        $query->bind_param('i', $user_id);
        $query->execute();
        $query->store_result();
 
        if ($query->num_rows > 3) {
            return true;
        } else {
            return false;
        }
    }
}
/*function login_check($db) {
    if (isset($_SESSION['user_id'], 
                        $_SESSION['username'], 
                        $_SESSION['login_string'])) {
 
        $user_id = $_SESSION['user_id'];
        $login_string = $_SESSION['login_string'];
        $username = $_SESSION['username'];
 
        
        $user_browser = $_SERVER['HTTP_USER_AGENT'];//if user leaves the browser
 
        if ($query = $db->prepare("SELECT password 
                                      FROM login 
                                      WHERE id = ? LIMIT 1")) {
           
            $query->bind_param('i', $user_id);
            $query->execute();   
            $query->store_result();
 
            if ($query->num_rows == 1) {
                $query->bind_result($password);
                $query->fetch();
                $login_check = hash('sha1', $password . $user_browser);
 
                if ($login_check == $login_string) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}*/
?>
