<?php

require_once(__DIR__ . '/../controller/Connection.php');

$mood = new Auth($db);


if($_POST['reg-consultation-email']){
    $mood->registerAcount($_POST);

}
if($_GET['reg-consultation-email']){

}


class Billing{

    public function __construct($db) {
        $this->db = $db;

        }

    public function billMpesa($data){
     
    }
    public function billVisa($data){
     
    }
    //Need an api
    public function booking($data){}
}


?>