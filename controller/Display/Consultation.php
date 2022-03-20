<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$cons = new Consultation($db);

//Consultation
if(isset($_POST['lawtype']) && $_POST['token'] == $_SESSION['token']){

    $cons->addConsultation($_POST);
}

if(isset($_GET['getConsultations']) && $_GET['token1'] == $_SESSION['token']){
    $cons->getConsultations();
}

if(isset($_POST['editlawtype']) && $_POST['token'] == $_SESSION['token']){
    $cons->editConsultation($_POST);
    
}

if(isset($_POST['search_cons'])){

    $cons->listconsSearch($_POST);
}


class Consultation{
    
    public function __construct($db) {
        $this->db = $db;
        }
    public function addConsultation($data){
               
         $query = "INSERT INTO `consultation`(`lawyer_type_id`, `practise_area_id`, `lawyers_tobe_consulted`,".
         " `duration`, `billing`, `consultation_status`, `sub_id`) VALUES ('".$data['lawtype']."',".
         "'".$data['pa']."','".$data['lawyer']."','".$data['duration']."','".$data['billing']."','".$data['constatus']."','".$data['sub']."')";
   
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => "Consultation Not added"));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Consultaion added"));
       
           }
      
    } 
    public function getConsultations(){
      
        
        $query = "SELECT `id`, `consultation_status`, `duration`, `billing`, `lawyer_type`, `pa_name`, `subscriptions_name` FROM `vw_consultation`";
        $result = $this->db->query($query);
        $con = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Consultation"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($con,array("id"=>$row['id'],"duration"=>$row['duration'],"status"=>$row['consultation_status'],"billing"=>$row['billing'],"lawyer_type"=>$row['lawyer_type'],"pa_name"=>$row['pa_name'],"sub"=>$row['subscriptions_name']));
               
                
        }
        echo json_encode(array("cons" => $con));
        }  
    }
      
    public function editConsultation($data){

        $query = "UPDATE `consultation` SET `lawyer_type_id`='".$data['editlawtype']."',`practise_area_id`='".$data['editpa']."',".
        "`duration`='".$data['editduration']."',`billing`='".$data['editbilling']."',".
        "`consultation_status`='".$data['editstatus']."',`sub_id`='".$data['editsub']."'";

          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => "consultation is not edited"));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "consultation is edited"));
       
           }
      
    } 

    
    public function listconsSearch($data){
        $query = "SELECT * FROM vw_consultation WHERE consultation_status LIKE '%".$data['search_cons']."%' OR subscriptions_name LIKE '%".$data['search_cons']."%' OR pa_name LIKE '%".$data['search_cons']."%'";
        $result = $this->db->query($query);
        $con = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Consultation"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($con,array("id"=>$row['id'],"duration"=>$row['duration'],"status"=>$row['consultation_status'],"billing"=>$row['billing'],"lawyer_type"=>$row['lawyer_type'],"pa_name"=>$row['pa_name'],"sub"=>$row['subscriptions_name']));
               
                
        }
        echo json_encode(array("cons" => $con));
        }  
    } 


}
?>