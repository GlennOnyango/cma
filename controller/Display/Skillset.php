<?php
require_once('../../controller/Connection.php');

$ss = new SkillSet($db);

//Skill Set
    
    if(!empty($_GET["all"])){
        $ss->getSkillSet();

    }

    if(!empty($_GET["id"])){
        $ss->getSkillSetById($_GET["id"]);
    }

class SkillSet{

    public function __construct($db) {
        $this->db = $db;

        }

    public function getSkillSet(){
        
        
        $query = "SELECT `id`, `skill_set_name` FROM `skill_set`";
        $result = $this->db->query($query);
        $ss = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($ss,array("id"=>$row['id'],"Name"=>$row['skill_set_name']));
               
                
        }
        echo json_encode(array("sss" => $ss));
        }
    }

    public function getSkillSetById($id){
        
        
        $query = "SELECT `id`, `skill_set_name` FROM `skill_set` WHERE id = $id";
        $result = $this->db->query($query);
        $ss = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($ss,array("id"=>$row['id'],"Name"=>$row['skill_set_name']));
               
                
        }
        echo json_encode(array("sss" => $ss));
        }
    }
    
}
?>