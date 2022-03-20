<?php
session_start();
require_once('../../controller/Connection.php');

$service = new Service($db);

//Service


if(isset($_GET['getService'])){
    $service->getService();
}
if(isset($_GET['getAllService']) && $_GET['token1'] == $_SESSION['token']){
    $service->getAllService();
}

if(isset($_POST['editserviceName']) && $_POST['token'] == $_SESSION['token']){
    $service->editService($_POST);
}

if(isset($_POST['search_serv'])){

    $service->listservSearch($_POST);
}


class Service{

    
    public function __construct($db) {
        $this->db = $db;

        }


    public function getService(){
        
        
        $query = "SELECT `id`, `service_name`, `service_status`,`service_type`,`service_validity`,`service_downloads` FROM `service` WHERE service_status = 'active'";
        SELECT `id`, `service_name`, `service_status`,`service_type`,`service_validity`,`service_downloads` FROM `service`
        $result = $this->db->query($query);

        $service = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Service"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
              
                array_push($service,array("id"=>$row['id'],"Name"=>$row['service_name'],"status"=>$row['service_status'],"service_type"=>$row['service_type'],"service_validity"=>$row['service_validity'],"service_downloads"=>$row['service_downloads']));
                
                
        }
        echo json_encode(array("services" => $service));

        }
    }

    public function getAllService(){
        
        
        $query = "SELECT * FROM `all_services` ";

        $result = $this->db->query($query);

        $service = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Service"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($service,array("id"=>$row['id'],"Name"=>$row['name'],"service_name"=>$row['service_name'],"service_type"=>$row['service_type'],"price"=>$row['price'],"desc"=>$row['description']));
               
                
        }
        echo json_encode(array("services" => $service));

        }
    }


    public function editService($data){
       $query = "UPDATE `service` SET `service_name`='".$data['editserviceName']."',`service_status`='".$data['editserviceStatus']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "services not edited"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "services updated"));
    
        } 
    }

    
    public function listservSearch($data){
        $query = "SELECT * FROM `service` WHERE service_status LIKE '%".$data['search_serv']."%' OR service_name LIKE '%".$data['search_serv']."%'";
        
        $result = $this->db->query($query);

        $service = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Service"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($service,array("id"=>$row['id'],"Name"=>$row['service_name'],"status"=>$row['service_status']));
               
                
        }
        echo json_encode(array("services" => $service));

        }
    } 


}
?>