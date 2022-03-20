<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$service = new Service($db);

//Service


if(isset($_POST['serviceName']) && $_POST['token'] == $_SESSION['token']){
    $service->addService($_POST);
}

if(isset($_GET['getService'])){
    $service->getService();
}
if(isset($_GET['getServicefordoc'])){
    $service->getServiceForDoc();
}
if(isset($_GET['getServiceforvid'])){
    $service->getServiceForVid();
}



if(isset($_GET['getServicewithid'])){
    $service->getServiceWitdId($_GET['getServicewithid']);
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

    public function addService($data){

     $query ="INSERT INTO `service`(`service_name`, `service_status`,`service_type`,`service_validity`,`service_downloads`,`service_reviews`) VALUES 
     ('".$data['serviceName']."','".$data['serviceStatus']."','".$data['service_type']."','".$data['service_validity']."','".$data['service_downloads']."','".$data['service_reviews']."') ";
                                                                                                                                                                                                                                                                                                                               

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Service not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Service added"));
    
        }
       
    }

    public function getService(){
        
        
        $query = "SELECT `id`, `service_name`, `service_status`,`service_type`,`service_validity`,`service_downloads` FROM `service`";

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
    public function getServiceForDoc(){
        
        
        $query = "SELECT `id`, `service_name` FROM `service` WHERE `service_type` = 'documents'";

        $result = $this->db->query($query);

        $service = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Service"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($service,array("id"=>$row['id'],"Name"=>$row['service_name']));
               
                
        }
        echo json_encode(array("services" => $service));

        }

    }
    public function getServiceForVid(){
        
        
        $query = "SELECT `id`, `service_name` FROM `service` WHERE `service_type` = 'videos'";

        $result = $this->db->query($query);

        $service = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Service"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($service,array("id"=>$row['id'],"Name"=>$row['service_name']));
               
                
        }
        echo json_encode(array("services" => $service));

        }

    }


    public function getServiceWitdId($id){
        
        
        $query = "SELECT * FROM `service` WHERE id = $id";

        $result = $this->db->query($query);

        $service = array();

        $row = $result->fetch_assoc();
        
        array_push($service,$row);
                
        echo json_encode(array("services" => $service));
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
        $query = "SELECT * FROM `service` WHERE id=".$data['id'];
        $result = $this->db->query($query);
            while($row=$result -> fetch_assoc()){
                
               $service_name = $row['service_name'];
               $service_type = $row['service_type'];
               $service_validity = $row['service_validity'];
               $service_downloads = $row['service_downloads'];
               $service_reviews = $row['service_reviews'];
               $service_status = $row['service_status'];

        }



       $query = "UPDATE `service` SET `service_name`='".libs :: check($data['editserviceName'],$service_name)."',
       `service_type`='".libs :: check($data['service_type'],$service_type)."',
       `service_status`='".libs :: check($data['editserviceStatus'],$service_status)."',
       `service_validity`='".libs :: check($data['service_validity'],$service_validity)."',
       `service_downloads`='".libs :: check($data['service_downloads'],$service_downloads)."'
       ,`service_reviews`='".libs :: check($data['service_reviews'],$service_reviews)."' WHERE id = ".$data['id']; 
      
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