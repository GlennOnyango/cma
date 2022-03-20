<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');


$lawyer = new Lawyers($db);


 //Lawyer
    
 if(isset($_POST['lawyer_email']) && $_POST['token'] == $_SESSION['token']){
	$lawyer->addLawyer($_POST);
    
    }

if(isset($_GET['lawyers']) && $_GET['token1'] == $_SESSION['token']){
    $lawyer->listLawyers();
}
//Lawyer
if(isset($_POST['app_lawyer'])){
    $lawyer->approveLawyer($_POST);
}

if(isset($_POST['dec_lawyer'])){
    $lawyer->declineLawyer($_POST);
}

if(isset($_POST['lawyer_edit_email'])){

    $lawyer->editlawyer($_POST);
}
if(isset($_POST['search'])){

    $lawyer->listLawyersSearch($_POST);
}

class Lawyers{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addLawyer($data){

        $pass_to_be = password_hash(rand(3,1000000000000), PASSWORD_DEFAULT);
        $pass = md5($pass_to_be);

        $query = "INSERT INTO users(roleId,userName,email,user_password, businessName, registrationNumber,physicalAddress, `contactemail`, `contactPhoneNumber`) VALUES (2,'','".libs::test_input($data['lawyer_email'])."','".$pass."','','','','','')";


       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error."Error adding user"));
    
       }
       else{
        $query = "INSERT INTO advocates_details(id, lawyer_type, lawyer_status) VALUES (".libs::getUserId($data['lawyer_email'],$this->db).",'holder','holder')";
        $result = $this->db-> query( $query);

        if(!$result){
 
         echo json_encode(array("result" => "alert-danger","value" => $query));
     
        }
        else{
            $body = "<p>Welcome to CMA. To access you portal</p><p>username : ".$data['lawyer_email']."</p> <p>password :". $pass_to_be."</p>";
        if(libs::mail_template ($data['lawyer_email'],"Welcome to CMA","CMA Join",$body)){

        
            echo json_encode(array("result" => "alert-success","value" => "Check your email for the password."));
       
        }
        else{
            
            echo json_encode(array("result" => "alert-danger","value" => "Email not sent.Contact Us at ....."));
        
        }


        }  
        

        
        }
       
    }

    public function advocatesDetails($id,$type,$status){

        $query = "INSERT INTO users(id,lawyer_type,lawyer_status) VALUES ($id,$type,$status)";


       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "error","value" => "Error Adding Advocate"));
        
       }
       else{
       echo json_encode(array("result" => "success","value" => "Advocate added"));
  
       }

    }

    public function listLawyers(){
  
        $query = "SELECT * FROM vw_lawyers";

        $result = $this->db->query($query);

        $lawyer = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "Error Login Failed"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($lawyer,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"type"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
               
                
        }
        echo json_encode(array("lawyers" => $lawyer));

        }
    
    }
    
    
    public function listLawyersSearch($data){
  
        $query = "SELECT * FROM vw_lawyers WHERE userName LIKE '%".$data['search']."%' OR email LIKE '%".$data['search']."%' OR lawyer_type LIKE '%".$data['search']."%' OR lawyer_status LIKE '%".$data['search']."%'";

        $result = $this->db->query($query);

        $lawyer = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "User not found"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($lawyer,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"type"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
               
                
        }
        echo json_encode(array("lawyers" => $lawyer));

        }
    
    }
    
    public function approveLawyer($data){

        $query="UPDATE advocates_details SET lawyer_status='approved' WHERE id =".$data['app_lawyer'];

        
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Advocate not approved"));
    
       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Advocate approved"));
    
       }

    }

    public function declineLawyer($data){
        $query="UPDATE advocates_details SET lawyer_status='declined' WHERE id =".$data['dec_lawyer'];

        
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Advocate not declined"));
    
       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Advocate Declined"));
    
       }

    }
    public function editlawyer($data){
        
        $query="UPDATE users SET email='".$data['lawyer_edit_email']."' WHERE id =".$data['lawyer_id'];

        
        $result = $this->db-> query( $query);
 
        if(!$result){
 
         echo json_encode(array("result" => "alert-danger","value" => "Advocate not Edited"));
     
        }
        else{

         echo json_encode(array("result" => "alert-success","value" => "Advocate Edited"));
     
        }
 
    }
    
  

}

?>