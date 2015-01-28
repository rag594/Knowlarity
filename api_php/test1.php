<?php
$public_key = hash('sha1',hash('md5',substr(uniqid(mt_rand(1, rand()), true),3,5)));
echo $public_key;
//1ed89e5765d7d3fa3337
?>