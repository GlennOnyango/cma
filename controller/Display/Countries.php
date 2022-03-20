<?php

require_once('../../controller/Connection.php');

$countries = new Countries($db);

    $countries->getAllCountries();


class Countries 
{
    
    public function __construct($db) {
        $this->db = $db;
        }


    public function getAllCountries(){
        
        $query = "SELECT * FROM countries";

        $result = $this->db-> query($query);
        $countries = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }
        else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($countries,array("id"=>$row['id'],"name"=>$row['name']));
               
                
            }
            echo json_encode(array("countries" => $countries));
        }

    }

    
}


?>