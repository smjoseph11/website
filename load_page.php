<?php

if(!$_POST['page']) die("0");

$page = $_POST['page'];

if(file_exists('pages/'.$page.'.html'))
echo file_get_contents('pages/'.$page.'.html');

else echo $page.'.html not found';
?>
