<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');

require_once(__DIR__ . '/../controller/libs.php');

$ss = new SkillSet($db);

//Skill Set
if(isset($_POST['skillset_name']) && $_POST['token'] == $_SESSION['token']){

    $ss->addSkillSet($_POST);
}

if(isset($_GET['getSkillSet']) && $_GET['token1'] == $_SESSION['token']){
    $ss->getSkillSet();
}

if(isset($_POST['edit_skillSet']) && $_POST['token'] == $_SESSION['token']){
    $ss->editSkillSet($_POST);
}

if(isset($_POST['search_skill_set'])){

    $ss->listSkillsetSearch($_POST);
}


class SkillSet{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addSkillSet($data){

     $query ="INSERT INTO `skill_set`(`skill_set_name`, `pa_id`, `skill_set_status`, `skill_set_brief_description`) VALUES ('".$data['skillset_name']."','".$data['pa_id']."','".$data['status']."','".$data['desc']."')";


       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Skill Set not added"));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Skill Set added"));

        }

    }
    public function getSkillSet(){
        
        
        $query = "SELECT `id`, `skill_set_name`,`skill_set_status` FROM `skill_set`";
        $result = $this->db->query($query);
        $ss = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($ss,array("id"=>$row['id'],"Name"=>$row['skill_set_name'],"status"=>$row['skill_set_status']));
               
                
        }
        echo json_encode(array("sss" => $ss));
        }
    }


    public function editSkillSet($data){


        $query = "SELECT * FROM `skill_set` WHERE id =".$data['id'];
        $result = $this->db->query($query);
            while($row=$result -> fetch_assoc()){
                
                 $pa_id = $row['pi_id'];
                 $skill_set_status = $row['skill_set_status'];
                 $desc = $row['skill_set_brief_description'];
               
                
        }

        $query = "UPDATE skill_set SET
        skill_set_name =  '".$data['edit_skillSet']."',
        pa_id = '".libs :: check($data['pa_id'],$pa_id)."',
        skill_set_status='".libs :: check($data['status'],$skill_set_status)."',
        skill_set_brief_description='".libs :: check($data['skill_set_brief_description'],$desc)."'
        WHERE id = ".$data['id']; 

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Skill Set updated"));

        } 
    }
    
    public function listSkillsetSearch($data){


        $query = "SELECT * FROM skill_set WHERE skill_set_name LIKE '%".$data['search_skill_set']."%' OR skill_set_status LIKE '%".$data['search_skill_set']."%' ";
        $result = $this->db->query($query);
        $ss = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($ss,array("id"=>$row['id'],"Name"=>$row['skill_set_name'],"status"=>$row['skill_set_status']));
               
                
        }
        echo json_encode(array("sss" => $ss));
        }
    }

    
}
?>