<?php
require 'cors.php';
require 'db_connect.php';
require 'connection.php';

cors();
$postdata = file_get_contents('php://input');
$request = json_decode($postdata);
$cat= $request->cat;

$query = "Select item,quant,price from cat1 where cat=?";


        $myarray=array();
        $arr=array();

if($st = $db->prepare($query))
{
	    $st->bind_param('s', $cat);
        $st->execute();
        $st->get_result();
        $st->bind_result($item,$quant,$price);
 		$st->fetch();

	while($r)
	{
		//echo var_dump($row['item']);
		//$myarray = array('item'=>$item,'quant'=>$quant,'price'=>$price);
		//echo $myarray;
		$myarray[]=$r;
	}

	echo json_encode($myarray);
     
}

else
{
 http_response_code(400);
}
?>