<?php
session_start();
require_once('../../controller/Connection.php');

$document = new Documents($db);



//Documents

if(isset($_GET['getDocument']) ){
    $document->getDocuments();
}
if(isset($_GET['getDocumentsTypes']) ){
    $document->getDocumentsTypes($_GET);
}
if(isset($_GET['getServiceDocuments']) ){
    $document->getServiceDocuments($_GET['getServiceDocuments']);
}

if(isset($_GET['getDocumentsService']) ){
    $document->getDocumentsService($_GET['getDocumentsService']);
}

if(isset($_GET['getid']) && isset($_GET['catid'])){
    $document->getDocumentsTypesCategories($_GET);
}

if(isset($_GET['getid']) && isset($_GET['searchid'])){
    $document->getDocumentsTypesSearch($_GET);
}
if(isset($_GET['id_single'])){
    $document->getDocumentsSingle($_GET['id_single']);
}

if(isset($_GET['getPurchasedDocuments']) ){
    
    $document->getPurchasedDocuments();
}
if(isset($_GET['category_id'])){
    $document->getDocumentsCategories($_GET['category_id']);
}





if(isset($_POST['documents_edit']) && $_POST['token'] == $_SESSION['token']){
    $document->editDocument($_POST);
}
if(isset($_POST['search_document'])){

    $document->listDocumentsSearch($_POST);
}



class Documents{
 
    public function __construct($db) {
        $this->db = $db;
        }




    public function getDocuments(){
      
        
        $query = "SELECT `id`, `document_name`,`document_price`, `toc`, `document_description`, `subscriptions_name` FROM `vw_document`";
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"subscription"=>$row['subscriptions_name'],"price"=>$row['document_price'],"toc"=>$row['toc'],"document_description"=>$row['document_description']));
               
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }
    
    public function getDocumentsTypes($data){
      
        $query = "SELECT `id`, `document_name`,`document_price`, `document_description`,`category_name` FROM `vw_document_service` WHERE service_id=".$data['getDocumentsTypes'];
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"price"=>$row['document_price'],"category"=>$row['category_name'],"document_description"=>$row['document_description']));
               
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }
    public function getDocumentsSingle($data){
      
        $query = "SELECT `id`, `document_name`,`document_price`, `document_description`,`category_name` FROM `vw_document_service` WHERE id = ".$data;

        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"price"=>$row['document_price'],"category"=>$row['category_name'],"document_description"=>$row['document_description']));
               
        }
        echo json_encode(array("documents" => $document));
        }  
    }
    
    //search Category
    public function getDocumentsTypesCategories($data){
        
            
        $query = "SELECT `id`, `document_name`,`document_price`, `toc`, `document_description`, `subscriptions_name`,`category_name` FROM `vw_document` WHERE  service_id=".$data['getid']." AND category_name ='".$data['catid']."'" ;
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {

            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"subscription"=>$row['subscriptions_name'],"price"=>$row['document_price'],"toc"=>$row['toc'],"category"=>$row['category_name'],"document_description"=>$row['document_description']));
            
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }

     //get Category
     public function getDocumentsCategories($data){
        
            
        $query = "SELECT `id`, `document_name`,`document_price`, `document_description`,`category_name` FROM `vw_document_service` WHERE category_id = $data" ;
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {

            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"price"=>$row['document_price'],"category"=>$row['category_name'],"document_description"=>$row['document_description']));
            
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }

    public function getDocumentsTypesSearch($data){
        
            
        $query = "SELECT * FROM `vw_document` WHERE  service_id=".$data['getid']." AND category_name LIKE '%".$data['searchid']."%' OR subscriptions_name LIKE '%".$data['searchid']."%' OR document_name LIKE '%".$data['searchid']."%'" ;
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {

            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"subscription"=>$row['subscriptions_name'],"price"=>$row['document_price'],"toc"=>$row['toc'],"category"=>$row['category_name'],"document_description"=>$row['document_description']));
            
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }
    //search Category
    public function getDocumentsService($data){
      
        
        $query = "SELECT `id`, `document_name`,`document_price`, `category_name` FROM `vw_document` WHERE service_id =".$data;
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                 $query = "SELECT id,billing_type FROM payment WHERE type_paid ='documents' AND product_id = ".$row['id']." AND  user_id = ".$_SESSION['id'];

          $resultt = $this->db->query($query);

          if(mysqli_num_rows($resultt) != 1){
            array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"price"=>$row['document_price'],"category"=>$row['category_name'],"payment_id" =>"null"));
               
          }
          else{
              while($roww=$resultt -> fetch_assoc()){
                array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"price"=>$row['document_price'],"category"=>$row['category_name'],"payment_id" =>$roww['id']));
              }
            }
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }
    public function getPurchasedDocuments(){
        $query = "SELECT `product_id`,type_paid FROM `payment` WHERE user_id =".$_SESSION['id']." AND (type_paid ='documents' OR type_paid ='subscriptions')";
        $result = $this->db->query($query);
        $document = array();
        if(mysqli_num_rows($result) < 1){
            array_push($document,array("id"=>"null"));
               
          }
        else{
              while($row=$result -> fetch_assoc()){
                  //

                  if($row['type_paid'] == "documents"){
                      

                    $query = "SELECT `id`, `document_name`,`document_price`, `category_name`,`document` FROM `vw_document_payment` WHERE id = ".$row['product_id'];
                    

                    $resultt = $this->db->query($query);

                    if(!$resultt){

                    }else{

                        while($roww=$resultt -> fetch_assoc()){
                            array_push($document,array("id"=>$roww['id'],"Name"=>$roww['document_name'],"category"=>$roww['category_name'],"type"=>"solo","price"=>$roww['document_price'],"document"=>$roww['document']));
                          }
                    }
          
                  }elseif($row['type_paid'] == "subscriptions") {
                    
                    $query = "SELECT `id`, `document_name`,`document_price`, `category_name`,`document`,`downloads`,`download_count` FROM `vw_document` WHERE subscription_id = ".$row['product_id'];
                     $resulttt = $this->db->query($query);

                    if(!$resulttt){

                    }else{

                        while($roww=$resulttt -> fetch_assoc()){
                            array_push($document,array("id"=>$roww['id'],"Name"=>$roww['document_name'],"category"=>$roww['category_name'],"download_count"=>$roww['download_count'],"type"=>"subscriptions","downloads"=>$roww['downoloads'],"price"=>$roww['document_price'],"document"=>$roww['document']));
                          }
                    }
          

                  }

                 


                  //
                }
        }
            echo json_encode(array("documents" => $document));
    }
    public function getServiceDocuments($data){
         
        $query = "SELECT `id`, `document_name`,`document_price`,`category_name`,`sub_category_name` FROM `vw_document` WHERE service_id  =".$data;
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"price"=>$row['document_price'],"category_name"=>$row['category_name'],"sub_category_name"=>$row['sub_category_name']));
               
                
        }
        echo json_encode(array("documents" => $document));
        } 
    }

    public function countDownloads($id){
        $query = "SELECT download_count FROM Documents WHERE id = ".$id;
        $result = $this->db->query($query);
        
        if(mysqli_num_rows($result) != 1){
            echo json_encode(array("result"=>"error"));
               
          }
        else{

            while($row = $result->fetch_assoc()){

                $query = "UPDATE Documents SET download_count = ".$row['download_count'] + 1;
                if($this->db->query($query)){
                    
                    echo json_encode(array("result"=>"success"));
                }else{
                    
                    echo json_encode(array("result"=>$this->db->error));
                }

            }

        }
    }

    
    public function listDocumentsSearch($data){


        $query = "SELECT * FROM vw_document WHERE document_name LIKE '%".$data['search_document']."%' OR subscriptions_name LIKE '%".$data['search_document']."%' ";

        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Documents"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"subscription"=>$row['subscriptions_name'],"price"=>$row['document_price'],"toc"=>$row['toc'],"document_description"=>$row['document_description']));
               
                
        }
        echo json_encode(array("documents" => $document));
        }
    }
}

?>