<?php
session_start();
require_once('../../controller/Connection.php');

$product = new Products($db);

//Product

if(isset($_POST['add_product_name'])){
    $product->addProduct($_POST);
}
if(isset($_GET['getproducts']) ){
    $product->listProducts();
}
if(isset($_GET['getproductsSpec']) && $_GET['token1'] == $_SESSION['token']){
    $product->listProductsSpec($_GET);
}
if(isset($_POST['edit_product_name'])){

    $product->editproduct($_POST);
}
if(isset($_POST['delete_product'])){
    $product->deleteproduct($_POST);
}
if(isset($_POST['search_product'])){

    $product->listProductsSearch($_POST);
}
if(isset($_POST['get_products'])){

    $product->ProductsSearch($_POST);
}

   
class Products{

public function __construct($db) {
    $this->db = $db;

    }

public function addProduct($data){


    $query = "INSERT INTO `product`( `product_name`, `product_status`) VALUES ('".$data['add_product_name']."','".$data['status']."')";
    
    

   $result = $this->db-> query( $query);

   if(!$result){

    echo json_encode(array("result" => "alert-danger","value" => "Product not added"));

   }
   else{
    
    echo json_encode(array("result" => "alert-success","value" => "Product added"));

    }
   
}

public function listProductsSpec($data){
    $query = "SELECT * FROM product WHERE id = ".$data['id'];

    $result = $this->db->query($query);

    $product = array();

    if (!$result) {

        echo json_encode(array("result" => "alert-danger","value" => "No products"));

        exit();

    }else {
        while($row=$result -> fetch_assoc()){
            
             array_push($product,array("id"=>$row['id'],"Name"=>$row['product_name'],"status"=>$row['product_status']));
           
            
    }
    echo json_encode(array("products" => $product));

    }

}

public function listProducts(){

    $query = "SELECT * FROM product WHERE product_status = 'active'";

    $result = $this->db->query($query);

    $product = array();

    if (!$result) {

        echo json_encode(array("result" => "alert-danger","value" => "No products"));

        exit();

    }else {
        while($row=$result -> fetch_assoc()){
            
             array_push($product,array("id"=>$row['id'],"Name"=>$row['product_name'],"status"=>$row['product_status']));
           
            
    }
    echo json_encode(array("products" => $product));

    }

}


public function listProductsSearch($data){

    $query = "SELECT * FROM product WHERE product_name LIKE '%".$data['search_product']."%' OR product_status LIKE '%".$data['search_product']."%'";

    $result = $this->db->query($query);

    $product = array();

    if (!$result) {

        echo json_encode(array("result" => "alert-danger","value" => $query));

        exit();

    }else {
        while($row=$result -> fetch_assoc()){
            
             array_push($product,array("id"=>$row['id'],"Name"=>$row['product_name'],"status"=>$row['product_status']));
           
            
    }
    echo json_encode(array("products" => $product));

    }

}
public function tester(){
    
    $query = "SELECT * FROM subscription";
    

    $result = $this->db->query($query);
    if (!$result) {

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

        exit();

    }else {
        while($row=$result -> fetch_assoc()){
    
          print_r($row);
        }        
    }
}
public function getsub($id){
    
    $query = "SELECT * FROM subscriptions WHERE product_id =".$id;
    $price = 0;

    $result = $this->db->query($query);
    if (!$result) {

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

        exit();

    }else {
        while($row=$result -> fetch_assoc()){
    
            $price = $price + $row['price'];
        }        
    }
    return $price;
}
public function ProductsSearch($data){

    $query = "SELECT * FROM product WHERE id = ".$data['get_products'];

    $result = $this->db->query($query);

    $product = array();

    if (!$result) {

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

        exit();

    }else {
        while($row=$result -> fetch_assoc()){


             array_push($product,array("id"=>$row['id'],"Name"=>$row['product_name'],"price"=>$this->getsub($data['get_products']),"status"=>$row['product_status']));
           
            
    }
    echo json_encode(array("products" => $product));

    }

}
public function editproduct($data){
    
    $query="UPDATE product SET product_name='".$data['edit_product_name']."',product_status='".$data['edit_product_status']."' WHERE id = ".$data['product_id'];

    
    
    $result = $this->db-> query( $query);

    if(!$result){

     echo json_encode(array("result" => "alert-danger","value" => "Product not edit"));
 
    }
    else{

     echo json_encode(array("result" => "alert-success","value" => "Product edited"));
 
    }

}
public function deleteproduct($data){
    
    $query="DELETE FROM product WHERE id = ".$data['delete_product'];

    $result = $this->db-> query( $query);

    if(!$result){

     echo json_encode(array("result" => "alert-danger","value" => $query));
 
    }
    else{

     echo json_encode(array("result" => "alert-success","value" => "Product deleted"));
 
    }
    
}


}?>