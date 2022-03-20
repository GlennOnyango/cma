<?php
require_once('../../controller/Connection.php');


$lawyer_type = new LawyerType($db);
//Lawyer_type

if(!empty($_GET['all'])){
    $lawyer_type->getLawyerType();

}
if(!empty($_GET['id'])){
    $lawyer_type->getLawyerTypeById($_GET['id']);
}
    
class LawyerType{

    public function __construct($db) {
        $this->db = $db;

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
                
                 array_push($lt,array("id"=>$row['id'],"Name"=>$row['lawyer_type']));
               
                
        }
        echo json_encode(array("lts" => $lt));
        }
    }
    public function getLawyerTypeById($id){
        
        
        $query = "SELECT `id`, `lawyer_type`, `lawyer_status` FROM `lawyer_type` WHERE id = $id";
        $result = $this->db->query($query);
        $lt = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($lt,array("id"=>$row['id'],"Name"=>$row['lawyer_type']));
               
                
        }
        echo json_encode(array("lts" => $lt));
        }
    }


}

?>