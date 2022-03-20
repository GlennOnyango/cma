<?php
require_once('../../controller/Connection.php');


$pa = new PracticeArea($db);

//Practice Area


if(!empty($_GET['all'])){
    
$pa->getPracticeArea();
}

if(!empty($_GET['id'])){
    $pa->getPracticeAreaById($_GET['id']);
}

class PracticeArea{

    public function __construct($db) {
        $this->db = $db;

        }

    public function getPracticeArea(){
        
        
        $query = "SELECT `id`, `pa_name` FROM `practice_area`";
        $result = $this->db->query($query);
        $pa = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pa,array("id"=>$row['id'],"Name"=>$row['pa_name']));
               
                
        }
        echo json_encode(array("pas" => $pa));
        }
    }
    
    public function getPracticeAreaById($id){
        
        
        $query = "SELECT `id`, `pa_name` FROM `practice_area` WHERE id = $id";
        $result = $this->db->query($query);
        $pa = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pa,array("id"=>$row['id'],"Name"=>$row['pa_name']));
               
                
        }
        echo json_encode(array("pas" => $pa));
        }
    }
    
}

?>