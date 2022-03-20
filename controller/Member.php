<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');


$member = new Member($db);

//Members
if(isset($_POST['member_name']) && $_POST['token'] == $_SESSION['token']){
    $member->addMember($_POST);
}

if(isset($_GET['getmembers']) && $_GET['token1'] == $_SESSION['token']){
    $member->getMember();
}

if(isset($_GET['getmemberbyid']) && $_GET['token1'] == $_SESSION['token']){
    $member->getMemberById($_GET['getmemberbyid']);
}

if(isset($_POST['edit_member_name']) && $_POST['token'] == $_SESSION['token']){
    $member->editMember($_POST);
    
}

if(isset($_POST['search_members'])){

    $member->listMemberSearch($_POST);
}


class Member{
 
    public function __construct($db) {
        $this->db = $db;
        }



    public function addMember($data){
        $user_image = libs :: uploadFile($_FILES['user_image'],"userImage");

        
        $query ="INSERT INTO `members`(
            `userName`, `userRole`, `email`, 
        `contact_number`, `status`, `description`,`user_image`) VALUES ". 
        "('".$data['member_name']."','".$data['member_role']."',
        '".$data['member_email']."','".$data['member_phone']."'
        ,'".$data['member_status']."','".$data['member_description']."','".$user_image."')";

          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Member added"));
       
           }
      
    } 
    public function getMember(){
      
        
        $query = "SELECT `id`,`userName`,`email`,`contact_number`,`user_image`,`status` FROM `members`";
        $result = $this->db->query($query);
        $member = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($member,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"number"=>$row['contact_number'],"user_image" => $row['user_image'],"status"=>$row['status']));
               
                
        }
        echo json_encode(array("members" => $member));
        }  
    }
    public function getMemberById($id){
      
        
        $query = "SELECT `id`,`userName`,`email`,`contact_number`,`user_image`,`status` FROM `members` WHERE id = ".$id;
        $result = $this->db->query($query);
        $member = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                array_push($member,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"number"=>$row['contact_number'],"user_image" => $row['user_image'],"status"=>$row['status']));
               
                
        }
        echo json_encode(array("members" => $member));
        }  
    }
     
    public function editMember($data){
        
        if(empty($_FILES['user_image']['name'])){
            $query ="UPDATE TABLE `members` SET `userName` = '".$data['edit_member_name']."', 
            userRole = '".$data['rolename']."'
            ,`email` = '".$data['email']."',
            `contact_number`='".$data['phone']."',
            `status`='".$data['exampleRadios']."',
            `description`='".$data['des']."'
            WHERE id =".$data['id'];
    
        }
        else{
            $user_image = libs :: uploadFile($_FILES['user_image'],"userImage");
            $query ="UPDATE TABLE `members` SET `userName` = '".$data['edit_member_name']."', 
            userRole = '".$data['rolename']."'
            ,`email` = '".$data['email']."',
            `contact_number`='".$data['phone']."',
            `status`='".$data['exampleRadios']."',
            `description`='".$data['des']."',`user_image`='".$user_image."'
            WHERE id =".$data['id'];
    
        }    
        


        $result = $this->db-> query($query);

        if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
    
        }
        else{
        
        echo json_encode(array("result" => "alert-success","value" => "Member Edited"));
    
        }
    
   
        
            } 

    
    public function listMemberSearch($data){

        $query = "SELECT * FROM `members` WHERE userName LIKE '%".$data['search_members']."%' OR userRole LIKE '%".$data['search_members']."%' OR email LIKE '%".$data['search_members']."%' OR status LIKE '%".$data['search_members']."%' ";

        $result = $this->db->query($query);
        $member = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
      
                array_push($member,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"number"=>$row['contact_number'],"status"=>$row['status']));
                         
        }
        echo json_encode(array("members" => $member));
        }  
    }
}

?>