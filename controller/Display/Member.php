<?php
require_once('../../controller/Connection.php');


$member = new Member($db);

if(!empty($_GET['all'])){

    $member->getMembers();
}
if(!empty($_GET['member_id'])){

    $member->getMember($_GET['member_id']);
}


class Member{
 
    public function __construct($db) {
        $this->db = $db;
        }



    public function getMembers(){
      
        
        $query = "SELECT `id`,`userName`,`email`,`contact_number`,`user_image`,`status` FROM `members`";
        $result = $this->db->query($query);
        $member = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($member,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"number"=>$row['contact_number'],"user_image"=>$row["user_image"],"status"=>$row['status']));
               
                
        }
        echo json_encode(array("members" => $member));
        }  
    }

    public function getMember($data){
      
        
        $query = "SELECT `id`,`userName`,`user_image`,`userRole`,`description` FROM `members` WHERE id = $data";
        $result = $this->db->query($query);
        $member = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($member,array("id"=>$row['id'],"Name"=>$row['userName'],"user_image"=>$row["user_image"],"role"=>$row['userRole'],"description"=>$row['description']));
               
                
        }
        echo json_encode(array("members" => $member));
        }  
    }
     
}

?>