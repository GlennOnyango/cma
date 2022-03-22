<?php


require_once('../../controller/Connection.php');



$busi = new BusinessUnit($db);


if(isset($_GET['getBusinessUnitsHead']) ){
    $busi->getBusinessUnitWithHead($_GET['getBusinessUnitsHead']);
}

if(isset($_GET['getBusinessUnitsMembers']) ){
    $busi->getBusinessUnitWithMembers($_GET['getBusinessUnitsMembers']);
}

class BusinessUnit{
    
    public function __construct($db) {
        $this->db = $db;
        }
   
    public function getBusinessUnitWithHead($data){
      
        
        $query = "SELECT * FROM `business_unit_diplay` WHERE id = $data";
        $result = $this->db->query($query);
        $busi = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No business Unit"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($busi,array("id"=>$row['id'],"Name"=>$row['userName'],"user_image"=>$row['user_image'],"description"=>$row['business_brief_description'],"preview_video"=>$row['preview_video'],"title"=>$row['pa_name']));
               
                
        }
        echo json_encode(array("busis" => $busi));
        }  
    }
    public function getBusinessUnitWithMembers($data){
      
        
        $query = "SELECT * FROM `business_unit_members` WHERE id = $data";
        $result = $this->db->query($query);
        $busi = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No business Unit"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($busi,array("id"=>$row['id'],"Name"=>$row['userName'],"user_image"=>$row['user_image'],"business_unit_member"=>$row['business_unit_member']));
               
                
        }
        echo json_encode(array("busis" => $busi));
        }  
    }
      
}
?>