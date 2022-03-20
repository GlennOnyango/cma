<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$category = new Category($db);

//category

if(isset($_POST['categoryName']) && $_POST['token'] == $_SESSION['token']){
    $category->addCategory($_POST);
}

if(isset($_GET['getCategories']) && $_GET['token1'] == $_SESSION['token']){
    $category->getCategories($_GET);
}

if(isset($_POST['editcategoryName']) && $_POST['token'] == $_SESSION['token']){
    $category->editCategories($_POST);
}
if(isset($_POST['search_cat'])){

    $category->listCategoriesSearch($_POST);
}


//Subcategory

if(isset($_POST['subcategoryName']) && $_POST['token'] == $_SESSION['token']){
    $category->addSubCategory($_POST);
}

if(isset($_GET['getsubCategories']) && $_GET['token1'] == $_SESSION['token']){
    
    $category->getSubCategories($_GET);
}
if(isset($_GET['getsubCategoriesSpec']) && $_GET['token1'] == $_SESSION['token']){
    $category->getsubCategoriesSpec($_GET);
}
if(isset($_POST['editsubcategoryname']) && $_POST['token'] == $_SESSION['token']){
    $category->editSubCategories($_POST);
}
if(isset($_POST['search_sub_category'])){

    $category->listSubCategoriesSearch($_POST);
}


class Category{

    
    public function __construct($db) {
        $this->db = $db;

        }

    public function alterTable(){
           
        $query = "ALTER TABLE category ADD COLUMN `category_code` varchar(255) NOT NULL DEFAULT '0';";

        $result = $this->db->query($query);

        $category = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($category,array("id"=>$row['id'],"Name"=>$row['category_name'],"code"=>$row['category_code'],"status"=>$row['category_status']));
               
                
        }
        echo json_encode(array("categories" => $category));

        } 
        }

    public function addCategory($data){

     $query ="INSERT INTO `category`(`category_name`,`category_code` ,`category_status`) VALUES ('".$data['categoryName']."','".$data['category_code']."','".$data['categoryStatus']."') ";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Category not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Category added"));
    
        }
       
    }

    public function getCategories($data){
        
        
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

    public function editCategories($data){
       $query = "UPDATE `category` SET `category_name`='".$data['editcategoryName']."',`category_code`='".$data['category_code']."',`category_status`='".$data['exampleRadios']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Categories not edited"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Categories updated"));
    
        } 
    }


    public function addSubCategory($data){

     $query ="INSERT INTO `sub_category`(`sub_category_name`, `categoryid`, `sub_category_status`) VALUES ('".$data['subcategoryName']."','".$data['catid']."','".$data['categorysubStatus']."') ";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Sub-Category not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Sub-Category added"));
    
        }
       
    }

    public function getSubCategories($data){
        
        
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
    
    public function getsubCategoriesSpec($data){
        
        
        $query = "SELECT `id`, `sub_category_name`, `sub_category_status` FROM `sub_category` WHERE `id` =".$data['id'];

        $result = $this->db->query($query);

        $subcategory = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscategories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subcategory,array("id"=>$row['id'],"Name"=>$row['sub_category_name'],"status"=>$row['sub_category_status']));
               
                
        }
        echo json_encode(array("subcategories" => $subcategory));

        }
    }

    public function editSubCategories($data){
       $query = "UPDATE `sub_category` SET `sub_category_name`='".$data['editsubcategoryname']."',`categoryid`='".$data['id']."',`sub_category_status`='".$data['exampleRadios']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Sub-Categories not edited"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Sub-Categories updated"));
    
        } 
    }

    public function listCategoriesSearch($data){


        $query = "SELECT * FROM category WHERE category_name LIKE '%".$data['search_cat']."%' OR category_status LIKE '%".$data['search_cat']."%'";

        $result = $this->db->query($query);

        $category = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($category,array("id"=>$row['id'],"Name"=>$row['category_name'],"status"=>$row['category_status']));
               
                
        }
        echo json_encode(array("categories" => $category));

        }

    }

    
    public function listSubCategoriesSearch($data){


        $query = "SELECT * FROM sub_category WHERE sub_category_name LIKE '%".$data['search_sub_category']."%' OR sub_category_status LIKE '%".$data['search_sub_category']."%' ";

        $result = $this->db->query($query);

        $subcategory = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscategories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subcategory,array("id"=>$row['id'],"Name"=>$row['sub_category_name'],"status"=>$row['sub_category_status']));
               
                
        }
        echo json_encode(array("subcategories" => $subcategory));

        }

    }
}

?>