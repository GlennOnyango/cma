<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');


$lawyer_type = new LawyerType($db);
//Lawyer_type
if(isset($_POST['lawyer_type_name']) && $_POST['token'] == $_SESSION['token']){

    $lawyer_type->addLawyerType($_POST);
}

if(isset($_GET['getLawyerType']) && $_GET['token1'] == $_SESSION['token']){
    $lawyer_type->getLawyerType();
}

if(isset($_POST['edit_lawyer_type_name']) && $_POST['token'] == $_SESSION['token']){
    $lawyer_type->editLawyerType($_POST);
}

if(isset($_POST['search_lawyer_type'])){

    $lawyer_type->listlawyertypeSearch($_POST);
}

class LawyerType{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addLawyerType($data){

     $query ="INSERT INTO `lawyer_type`(`lawyer_type`, `lawyer_status`) VALUES ('".$data['lawyer_type_name']."','".$data['status']."')";


       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Lawyer Type not added"));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Lawyer Type added"));

        }

    }
    public function getLawyerType(){
        
        
        $query = "SELECT `id`, `lawyer_type`, `lawyer_status` FROM `lawyer_type`";
        $result = $this->db->query($query);
        $lt = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($lt,array("id"=>$row['id'],"Name"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
               
                
        }
        echo json_encode(array("lts" => $lt));
        }
    }
    

    public function editLawyerType($data){
       $query = "UPDATE `lawyer_type` SET `lawyer_type`='".$data['edit_lawyer_type_name']."',`lawyer_status`='".$data['status']."' WHERE id = ".$data['id']; 

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Lawyer Type not edited"));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Lawyer Type updated"));

        } 
    }

    public function listlawyertypeSearch($data){
        $query = "SELECT * FROM `lawyer_type` WHERE lawyer_status LIKE '%".$data['search_lawyer_type']."%' OR lawyer_type LIKE '%".$data['search_lawyer_type']."%'";
        $result = $this->db->query($query);
        $lt = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($lt,array("id"=>$row['id'],"Name"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
               
                
        }
        echo json_encode(array("lts" => $lt));
        }
    } 

}

?>