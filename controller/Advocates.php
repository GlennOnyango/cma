<?php

session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');
$comp = new Advocates($db);



if(!empty($_POST['profile_email'])){
$comp->completeProfile($_POST);
}

if(!empty($_GET['advocates'])){
    $comp->getProfiles();
}
if(!empty($_GET['token'])){

    $comp->getProfile($_GET['token']);
}

if(!empty($_GET['token1']) && !empty($_GET['all'])){

    $comp->getProfiles();
}
if(!empty($_GET['token_available_assignee']) && !empty($_GET['all'])){

    $comp->getProfilesassign();
}
if(!empty($_POST['old_password']) && !empty($_POST['new_password'])){
    $comp->changePassword($_POST['token'],$_POST['old_password'],$_POST['new_password']);
}
if(!empty($_POST['advocate_id']) && !empty($_POST['client_id'])){
    //print_r($_POST); 
    $comp->addRm($_POST['advocate_id'],$_POST['client_id']);
}
if(!empty($_GET['rm'])){ 
    $comp->getRm();
}


class Advocates 
{
    
    public function __construct($db) {
        $this->db = $db;

    }

    public function completeProfile($data){

        if(!empty($_FILES['name']['profile_image'])){
            $image = libs :: uploadFile($_FILES['profile_image'],"userImage");
        }else{
            $image = "";
        }


        $query ="UPDATE users SET 
        email = '".libs::test_input($data['profile_email'])."',
        userName = '".libs::test_input($data['profile_name'])."',
        user_image = '".$image."',contactPhoneNumber = '".libs::test_input($data['profile_number'])."' 
        WHERE id = ".$_SESSION['id'];


        
        $result = $this->db-> query( $query);

        if(!$result){

            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            
        }
        else{
            
                $query = "UPDATE advocates_details SET skill_set = '".json_encode($data['skill_set'])."',country_id = ".$data['country'].",lawyer_group = '".libs::test_input($data['lawyer_group'])."',qualifications = '".json_encode($data['qualifications'])."',descriptions =  '".json_encode($data['descriptions'])."',practice_area = '".json_encode($data['practice_area'])."' WHERE id = ".$_SESSION['id']; 
        
                            
                     $result = $this->db-> query( $query);


                            if(!$result){

                                echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
                                
                            }else{
                                echo json_encode(array("result" => "alert-success","value" => "Profile Updated"));

                            }
                
        }
        

    }

    public function changePassword($token,$old_password,$new_password){

        if($token == $_SESSION['token']){

            $query = "SELECT user_password FROM users WHERE id = ".$_SESSION['id']." AND user_password = '".MD5($old_password)."'";
            $result = $this->db-> query($query);

            if (mysqli_num_rows($result) != 1) {
      
                echo json_encode(array("result" => "error","value" => $query."".md5($old_password)));
     
                exit();
     
            }
            else{
                $query ="UPDATE users SET user_password = '".MD5($new_password)."' WHERE id = ".$_SESSION['id'];

                $result = $this->db-> query( $query);

                if(!$result){

                    echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
                    
                }else{
                    echo json_encode(array("result" => "alert-success","value" => 1));

                }
                
            }

        }

    }


    public function getProfiles(){
       $query = "SELECT * FROM vw_advocates WHERE userName != ''";
       $result = $this->db-> query($query);
       $advocates = array();
       if (mysqli_num_rows($result) < 1) {
     
           echo json_encode(array("result" => "error","value" => $this->db->error));

           exit();

       }else {
          while($row=$result -> fetch_assoc()){
            
            array_push($advocates,array("id"=>$row["id"],"phone"=>$row["phone"],"email"=>$row["email"],"name"=>$row["userName"],"user_image"=>$row["user_image"],"skillset"=>json_decode($row["skill_set"]),
            "country"=>$row["country"],"lawyergroup"=>$row["lawyer_group"],"qualifications"=>json_decode($row["qualifications"]),"descriptions"=>json_decode($row["descriptions"]),"practieArea"=>json_decode($row["practice_area"]) 
         ));
           
      }
          echo json_encode(array("advocates" => $advocates));
   
       
       }

    }

    public function getProfilesassign(){
        $query = "SELECT * FROM vw_advocates WHERE userName != '' AND id != ".$_SESSION['id'];
        $result = $this->db-> query($query);
        $advocates = array();
        if (mysqli_num_rows($result) < 1) {
      
            echo json_encode(array("result" => "error","value" => $this->db->error));
 
            exit();
 
        }else {
           while($row=$result -> fetch_assoc()){
             
             array_push($advocates,array("id"=>$row["id"],"name"=>$row["userName"]));
            
       }
           echo json_encode(array("advocates" => $advocates));
    
        
        }
 
    }
    
    public function getProfile($data){
        $query = "SELECT * FROM vw_advocates WHERE id =".$_SESSION['id'];
        $result = $this->db-> query($query);
        $advocate = array();
        if (mysqli_num_rows($result) < 1) {
      
            echo json_encode(array("result" => "error","value" => $this->db->error));
 
            exit();
 
        }else {
           while($row=$result -> fetch_assoc()){
             
            array_push($advocate,array("id"=>$row["id"],"phone"=>$row["phone"],"email"=>$row["email"],"name"=>$row["userName"],"user_image"=>$row["user_image"],"skillset"=>json_decode($row["skill_set"]),
            "country"=>$row["country"],"lawyergroup"=>$row["lawyer_group"],"qualifications"=>json_decode($row["qualifications"]),"descriptions"=>json_decode($row["descriptions"]),"practieArea"=>json_decode($row["practice_area"])
         ));
            
       }
           echo json_encode(array("advocate" => $advocate));
    
        
        }
  
    }

    private function getAllAdvocates(){
        $query = "SELECT * FROM advocate_profile";

        $result = $this->db-> query($query);
        $advocates = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($advocates,array("Name"=>$row['username'],"lawyer_type"=>$row['lawyer_group'],"practice_area"=>$row['practice_area'],"skill_set"=>$row['skill_set'],"phone"=>$row['p_number'],"image"=>$row['user_image']));
               
                
        }
        }
    }
    
    public function addRm($advocate_id,$client_id){

        $query = "UPDATE rm SET advocate_id = $advocate_id WHERE client_id = $client_id";
        
        $result = $this->db-> query( $query);

        if(!$result){

            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            
        }
        else{
  
            $query = "UPDATE documents_review SET  rm_id = $advocate_id WHERE user_id = $client_id";
  
  
            $result = $this->db-> query( $query);

            if(!$result){
    
                echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
                
            }
            else{
                echo json_encode(array("result" => "alert-success","value" => "Rm added"));
           
            }
  
        }
    }

    public function getRm(){
        $query = "SELECT * FROM vw_rm";
        $result = $this->db-> query($query);
        $rms = array();
          
        while($row=$result ->fetch_assoc()){
            array_push($rms,array("id"=>$row["id"],"advocate"=>$row["advocate"],"client"=>$row["client"],"client_id"=>$row['client_id']));
        }

           
       echo json_encode(array("rms" => $rms));
          
        
    }

    
}


?>