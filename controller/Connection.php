<?php

header("Access-Control-Allow-Origin: 102.37.100.187");
$db = new mysqli("localhost","root","r00t","cma_data");

// Check connection
if ($db -> connect_errno) {
  echo "Failed to connect to MySQL: " . $db -> connect_error;
  exit();
}
?>
