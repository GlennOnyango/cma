<?php
require_once('../../controller/Connection.php');

$category = new Category($db);

//category

if(isset($_GET['getCategories'])){
    $category->getCategories();
}


//Subcategory

if(isset($_GET['getsubCategories'])){
    
    $category->getSubCategories();
}


class Category{

    
    public function __construct($db) {
        $this->db = $db;

        }

    public function getCategories(){
        
        
        $query = "SELECT `id`, `category_name`,`category_code` ,`category_status`,`image_cat` FROM `category` ";

        $result = $this->db->query($query);

        $category = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Categories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($category,array("id"=>$row['id'],"Name"=>$row['category_name'],"image_cat"=>$row["image_cat"]));
               
                
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
                
                 array_push($subcategory,array("id"=>$row['id'],"Name"=>$row['sub_category_name']));
               
                
        }
        echo json_encode(array("subcategories" => $subcategory));

        }
    }
    


    
}

?>