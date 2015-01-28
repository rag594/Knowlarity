<?php
require 'cors.php';
require 'db_connect.php';
require 'connection.php';

cors();

$query = "Select * from cat1";

$st = $db->query($query);
        //$items=array();
		$quant=array();
		$price=array();
		$cat=array();

		$myarray = array();

		//var_dump($st);

if($st)
{
	while($row = $st->fetch_assoc())
	{
		//echo var_dump($row['item']);
		array_push($myarray,$row['cat']);
		
	}
	array_unique($myarray);
	echo json_encode($myarray);

	}

else
{
 http_response_code(400);
}
?>