<?php
include_once("db_connect.php");
$db=new mysqli(HOST,USERNAME,PASSWORD,DB_NAME);
if ($db->connect_errno) {
    echo "Failed to connect to MySQL: " . $db->connect_error;
}
else
{
	
}
?>