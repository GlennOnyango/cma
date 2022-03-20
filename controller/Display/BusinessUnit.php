<?php


require_once('../../controller/Connection.php');


$busi = new BusinessUnit($db);


if(isset($_GET['getBusinessUnits']) && $_GET['token1'] == $_SESSION['token']){
    $busi->getBusinessUnit();
}


class BusinessUnit{
    
    public function __construct($db) {
        $this->db = $db;
        }
   
    public function getBusinessUnit(){
      
        
        $query = "SELECT `id`, `business_unit_head`, `business_unit_status` FROM `business_unit`";
        $result = $this->db->query($query);
        $busi = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No business Unit"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($busi,array("id"=>$row['id'],"Name"=>$row['business_unit_head'],"status"=>$row['business_unit_status']));
               
                
        }
        echo json_encode(array("busis" => $busi));
        }  
    }
      
}
?>