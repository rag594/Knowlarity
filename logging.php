<?php
include_once 'db_connect.php';
include_once 'login.php';
include_once 'connection.php';
 
session_start();
if (login_check($db) == true) {
    $logged = 'in';
} else {
    $logged = 'out';
}
?>