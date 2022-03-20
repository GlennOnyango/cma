<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');

$pa = new PracticeArea($db);
$document = new Documents($db);
$video = new Videos($db);
$service = new Service($db);
$category = new Category($db);
$lawyer = new Lawyers($db);
$busi = new BusinessUnit($db);

if(isset($_GET['getCategories'])){
    $category->getCategories($_GET);
}
if(isset($_GET['getBusinessUnits'])){
    $busi->getBusinessUnit($_GET['getBusinessUnits']);
}


if(isset($_GET['getsubCategories'])){
    
    $category->getSubCategories($_GET);
}
if(isset($_GET['getsubCategoriesSpec'])){
    $category->getsubCategoriesSpec($_GET);
}


if(isset($_GET['getService'])){
    $service->getService($_GET);
}


if(isset($_GET['getDocument'])){
    $document->getDocuments();
}


if(isset($_GET['getPracticeArea'])){
    $pa->getPracticeArea();
}


if(isset($_GET['getvideos'])){
    $video->getvideos();
}


class PracticeArea{

    public function __construct($db) {
        $this->db = $db;

        }
    public function getPracticeArea(){
        
        
        $query = "SELECT `id`, `pa_name`, `pa_status`,`pa_description` FROM `practice_area`";
        $result = $this->db->query($query);
        $pa = array();
        if (!$result) {
    
            echo json_encode(array("result" => "null","value" => "No Practice Area"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pa,array("id"=>$row['id'],"Name"=>$row['pa_name'],"pa_description"=>$row['pa_description']));
               
                
        }
        echo json_encode(array("pas" => $pa));
        }
    }

}


class Documents{
 
    public function __construct($db) {
        $this->db = $db;
        }
    public function getDocuments(){
      
        
        $query = "SELECT `id`, `document_name`, `product_name`,`document_price`, `toc`, `document_description`, `subscriptions_name` FROM `vw_document`";
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"product"=>$row['product_name'],"subscription"=>$row['subscriptions_name'],"price"=>$row['document_price'],"toc"=>$row['toc'],"document_description"=>$row['document_description']));
               
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }
}

class Videos{
 
    public function __construct($db) {
        $this->db = $db;
        }
    public function getvideos(){
      
        
        $query = "SELECT `id`, `video_name`, `subscriptions_name`, `video_status` FROM `vw_videos`";
        $result = $this->db->query($query);
        $video = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Documents"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($video,array("id"=>$row['id'],"Name"=>$row['video_name'],"subscription"=>$row['subscriptions_name'],"status"=>$row['video_status']));
               
                
        }
        echo json_encode(array("videos" => $video));
        }  
    }
 
}
class Service{

    
    public function __construct($db) {
        $this->db = $db;

        }


    public function getService(){
        
        
        $query = "SELECT `id`, `service_name`, `service_status` FROM `service` ";

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


class Category{

    
    public function __construct($db) {
        $this->db = $db;

        }
    public function getCategories(){
        
        
        $query = "SELECT `id`, `category_name`,`category_code` ,`category_status` FROM `category` ";

        $result = $this->db->query($query);

        $category = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Categories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($category,array("id"=>$row['id'],"Name"=>$row['category_name'],"code"=>$row['category_code'],"status"=>$row['category_status']));
               
                
        }
        echo json_encode(array("categories" => $category));

        }
    }

    public function getSubCategories(){
        
        
        $query = "SELECT `id`, `sub_category_name`,`categoryid` ,`sub_category_status` FROM `sub_category` ";

        $result = $this->db->query($query);

        $subcategory = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscategories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subcategory,array("id"=>$row['id'],"Name"=>$row['sub_category_name'],"catid"=>$row['categoryid'],"status"=>$row['sub_category_status']));
               
                
        }
        echo json_encode(array("subcategories" => $subcategory));

        }
    }
    
}

class Lawyers{

    public function __construct($db) {
        $this->db = $db;

        }

    public function listLawyers(){
  
        $query = "SELECT * FROM vw_lawyers";

        $result = $this->db->query($query);

        $lawyer = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "Error Login Failed"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($lawyer,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"type"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
               
                
        }
        echo json_encode(array("lawyers" => $lawyer));

        }
    
    }
    

}
class BusinessUnit{
    
    public function __construct($db) {
        $this->db = $db;
        }
    public function getBusinessUnit($data){
        
            
            $query = "SELECT `id`, `business_unit_head`, `business_brief_description` FROM `business_unit`
            WHERE practice_id = 
            ".$data;
            $result = $this->db->query($query);
            $busi = array();
            if (!$result) {
        
                echo json_encode(array("result" => "null","value" => "No business Unit"));
                exit();
            }else {
                while($row=$result -> fetch_assoc()){
                    
                    array_push($busi,array("id"=>$row['id'],"business_head"=>$row['business_unit_head'],"desc"=>$row['business_brief_description']));
                
                    
            }
            echo json_encode(array("busis" => $busi));
            }  
        }
        
}

 
    ?>