<?php


require_once('../../controller/Connection.php');

$comp = new Advocates($db);

if(!empty($_GET['advocates'])){
    $comp->getProfiles();
}
if(!empty($_GET['lawyer_id'])){

    $comp->getProfile($_GET['lawyer_id']);
}

if(!empty($_GET['all'])){

    $comp->getProfiles();
}


class Advocates 
{
    
    public function __construct($db) {
        $this->db = $db;

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
            
            array_push($advocates,array("id"=>$row["id"],"name"=>$row["userName"],"user_image"=>$row["user_image"],"skillset"=>json_decode($row["skill_set"]),
            "country"=>$row["country"],"lawyergroup"=>$row["lawyer_group"],"practieArea"=>json_decode($row["practice_area"]) 
         ));
           
      }
          echo json_encode(array("advocates" => $advocates));
   
       
       }

    }

    
    public function getProfile($data){
        $query = "SELECT * FROM vw_advocates WHERE id =".$data;
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
    

    
}


?>