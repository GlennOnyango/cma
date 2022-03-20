<?php
session_start();

require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');


$country = new Country($db);



//Country
if(isset($_POST['country_name']) && $_POST['token'] == $_SESSION['token']){
   
    $country->addCountry($_POST);
}
if(isset($_GET['getCountries']) && $_GET['token1'] == $_SESSION['token']){
    $country->getCountries();
}
if(isset($_POST['country_name_edit']) && $_POST['token'] == $_SESSION['token']){
    $country->editCountry($_POST);
}
if(isset($_POST['search_country'])){

    $country->listCountriesSearch($_POST);
}


class Country{
    public function __construct($db) {
        $this->db = $db;
        }
    public function addCountry($data){
     $query ="INSERT INTO `contries`(`country_name`, `country_code`, `applicable_to_seller`, `country_status`) VALUES ('".$data['country_name']."','".$data['country_code']."','".$data['exampleRadios']."','".$data['status']."') ";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                
       $result = $this->db-> query( $query);
       if(!$result){
        echo json_encode(array("result" => "alert-danger","value" => "Country not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Country added"));
    
        }
       
    }
    public function getCountries(){
        
        
        $query = "SELECT `id`, `country_name`, `country_code`, `applicable_to_seller`, `country_status` FROM `contries`";
        $result = $this->db->query($query);
        $country = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($country,array("id"=>$row['id'],"Name"=>$row['country_name'],"code"=>$row['country_code'],"app_seller"=>$row['applicable_to_seller'],"status"=>$row['country_status']));
               
                
        }
        echo json_encode(array("countries" => $country));
        }
    }
    public function editCountry($data){
       $query = "UPDATE `contries` SET `country_name`='".$data['country_name_edit']."',`country_code`='".$data['country_code']."',`applicable_to_seller`='".$data['exampleRadios']."',`country_status`='".$data['status']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);
       if(!$result){
        echo json_encode(array("result" => "alert-danger","value" => "Country not edited"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Country updated"));
    
        } 
    }

    
    public function listCountriesSearch($data){


        $query = "SELECT * FROM contries WHERE country_name LIKE '%".$data['search_country']."%' OR country_status LIKE '%".$data['search_country']."%' ";
        $result = $this->db->query($query);
        $country = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($country,array("id"=>$row['id'],"Name"=>$row['country_name'],"code"=>$row['country_code'],"app_seller"=>$row['applicable_to_seller'],"status"=>$row['country_status']));
               
                
        }
        echo json_encode(array("countries" => $country));
        }
    }
}

?>