<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');


$pa = new PracticeArea($db);

//Practice Area
if(isset($_POST['pa_name']) && $_POST['token'] == $_SESSION['token']){

    $pa->addPracticeArea($_POST);
}

if(isset($_GET['getPracticeArea']) && $_GET['token1'] == $_SESSION['token']){
    $pa->getPracticeArea();
}

if(isset($_POST['edit_practise_name']) && $_POST['token'] == $_SESSION['token']){
    $pa->editPracticeArea($_POST);
}

if(isset($_POST['search_practise_area'])){

    $pa->listPracticeSearch($_POST);
}

class PracticeArea{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addPracticeArea($data){

     $query ="INSERT INTO `practice_area`(`pa_name`, `pa_status`,`pa_description`) VALUES ('".$data['pa_name']."','".$data['status']."','".$data['desc']."')";


       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Country not added"));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Country added"));

        }

    }
    public function getPracticeArea(){
        
        
        $query = "SELECT `id`, `pa_name`, `pa_status` FROM `practice_area`";
        $result = $this->db->query($query);
        $pa = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pa,array("id"=>$row['id'],"Name"=>$row['pa_name'],"status"=>$row['pa_status']));
               
                
        }
        echo json_encode(array("pas" => $pa));
        }
    }
    

    public function editPracticeArea($data){
       
        
        
        $query = "SELECT `id`, `pa_name`, `pa_status`,`pa_description` FROM `practice_area` WHERE id=".$data['id'];
        $result = $this->db->query($query);
            while($row=$result -> fetch_assoc()){
                
               $pa_status = $row['pa_status'];
               $pa_desc = $row['pa_description'];
                
        }
       
        $query = "UPDATE `practice_area` SET 
        `pa_name`='".$data['edit_practise_name']."',
        `pa_status`='".libs :: check($data['edit_pa_status'],$pa_status)."',
        `pa_description` = '".libs :: check($data['desc'],$pa_desc)."'
         WHERE id = ".$data['id']; 

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Practice Area updated"));

        } 
    }
    public function listPracticeSearch($data){
        $query = "SELECT * FROM practice_area WHERE pa_name LIKE '%".$data['search_practise_area']."%' OR pa_status LIKE '%".$data['search_practise_area']."%' ";
        $result = $this->db->query($query);
        $pa = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pa,array("id"=>$row['id'],"Name"=>$row['pa_name'],"status"=>$row['pa_status']));
               
                
        }
        echo json_encode(array("pas" => $pa));
        }
    }
}

?>