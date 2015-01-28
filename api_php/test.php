<?php
/*$user_id=01;
$user_id = preg_replace("/[^0-9]+/", "", $user_id);
echo $user_id;*/
/*$user_browser=$_SERVER['HTTP_USER_AGENT'];
$password
$user_browser=hash('sha1',$password.$user_browser);
echo $user_browser;*/
$password="abcd123";
$random_salt =substr(hash('sha1', substr(uniqid(mt_rand(1, rand()), true),3,5)),5,10);
echo $random_salt;
 $password=hash('sha1',$password."b0d2c18ffe");
 echo $password;
 /*$username="rag56h";
  $username = preg_replace("/[^a-zA-Z0-9_\-]+/", "", $username);
  echo $username;*/
  ?>