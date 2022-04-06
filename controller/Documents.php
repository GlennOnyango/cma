<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$document = new Documents($db);


if(isset($_POST['document_name']) && $_POST['token'] == $_SESSION['token']){
   
    $document->addDocument($_POST);
}
if(isset($_POST['id'])){
   
    $document->countDownloads($_POST['id']);
}
if(isset($_POST['rem_id'])){
   $document->countDownloadsrem($_POST['rem_id'],$_POST['service_id']);
}

if(isset($_POST['review'])){
   
    $document->DocumentReview($_POST['review'],$_POST["review_title"],$_POST["review_description"]);
}

if(isset($_GET['getDocument']) && $_GET['token1'] == $_SESSION['token']){
    $document->getDocuments();
}
if(isset($_GET['getDocumentsTypes']) ){
    $document->getDocumentsTypes($_GET);
}
if(isset($_GET['getServiceDocuments']) && $_GET['token1'] == $_SESSION['token']){
    $document->getServiceDocuments($_GET['getServiceDocuments']);
}

if(isset($_GET['getDocumentsService']) && $_GET['token1'] == $_SESSION['token']){
    $document->getDocumentsService($_GET['getDocumentsService']);
}

if(isset($_GET['getPurchasedDocuments']) && $_GET['token1'] == $_SESSION['token']){
    
    $document->getPurchasedDocuments();
}

if(isset($_GET['getPurchasedDocumentsOnReview']) && $_GET['token1'] == $_SESSION['token']){
    
    $document->getPurchasedDocumentsOnReview();
}
if(isset($_POST['documents_edit']) && $_POST['token'] == $_SESSION['token']){
    $document->editDocument($_POST);
}
if(isset($_POST['search_document'])){

    $document->listDocumentsSearch($_POST);
}
if(isset($_GET['getDoc'])){

    $document->getDocumentWithId($_GET['getDoc'],$_GET['client_id'],$_GET['assingeeId'],$_GET['rm_id']);
}
if(isset($_POST['token_upload'])){
    $document->replaceDocument($_POST['token_upload'],$_POST['document_id'],$_POST['client_id'],$_FILES['upload_document'],$_POST['assignee'],$_POST['rm_id']);
}



class Documents{
 
    public function __construct($db) {
        $this->db = $db;
        }


    public function addDocument($data){
        $preview = libs :: uploadFile($_FILES['preview'],"uploadPreviews");
        $document = libs :: uploadFile($_FILES['docu_master'],"uploadDocuments");


        $query ="INSERT INTO `documents`(`document_name`,`document_price`, `document_preview`, `document`,`category_id`, `sub_category_id` , `toc_number`,`toc_introduction`,`document_description`) VALUES ". 
        "('".$data['document_name']."',".$data['document_price'].",'".$preview."','".$document."',".$data['cat'].",".$data['subcat'].",'".json_encode($data['prefix'])."','".json_encode($data['topics'])."','".$data['description']."')";
  
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{

            $last_id = $this->db->insert_id;

            
            if(isset($data['sub'])){
                foreach ($data['sub'] as $key => $value) {
                
                    $query ="INSERT INTO `documents_subscription`(`document_id`,`subscription_id`) VALUES (".$last_id.",".$value.")";
                    $result = $this->db-> query($query);
    
                }
            }
            

            if(isset($data['serv'])){
                foreach ($data['serv'] as $key => $value) {
                    $query ="INSERT INTO `documents_service`(`document_id`,`service_id`) VALUES (".$last_id.",".$value.")";
                    $result = $this->db-> query($query);
                }
            }

           echo json_encode(array("result" => "alert-success","value" => "Document  added"));
       
           }
      
    }
    public function DocumentReview($data,$review_title,$review_description){

        $query = "SELECT review_count FROM documents_review WHERE document_id = $data AND user_id = ".$_SESSION['id'];
        $result = $this->db->query($query);

        while($row = $result->fetch_assoc()){

            $count = 0;
            $count = $row['review_count'];
            $count = $count - 1;

            $rw_dec = libs :: test_input($review_description);
            $query = "UPDATE documents_review SET review_count = $count, review_status='review',title = '".$review_title."', description = '".$rw_dec."'  WHERE document_id = $data AND user_id = ".$_SESSION['id'];
            if($this->db->query($query)){
                echo json_encode(array("result"=>"success"));
            }else{
                echo json_encode(array("result"=>$query));
            }

        }
    }

    public function getDocuments(){
      
        
        $query = "SELECT * FROM `vw_document`";
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"subscription"=>$row['subscriptions_name'],"status"=>$row['status']));
               
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }
    public function getDocumentWithId($id,$client_id,$assingeeId,$rm_id){

        if($assingeeId != 0){
            $query = "SELECT `document_name`,`title`,`description`,document,client_email,subscriptions_name
             FROM `vw_documents_review` WHERE user_id = ".$client_id." AND document_id = ".$id." AND advocate_assigned_id=".$assingeeId." AND rm_id = ".$rm_id;
        
        }else{
            $query = "SELECT `document_name`,`title`,`description`,document,client_email,subscriptions_name
             FROM `vw_documents_review` WHERE user_id = ".$client_id." AND document_id = ".$id." AND advocate_assigned_id=".$assingeeId." AND rm_id = ".$_SESSION['id'];
        
        }
      
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $query));
            exit();
        }
        else {
            while($row=$result -> fetch_assoc()){
                
                $doc_name = str_replace("./uploadDocuments/","",$row['document']);
                $sub_name = str_replace(" ","",$row['subscriptions_name']);
                
                $url = "https://cmversiontwo.cmadvocates.com/controller/usersDirectories/".MD5($row['client_email'])."/".$sub_name."/".$doc_name;

                 array_push($document,array("Name"=>$row['document_name'],"document_description"=>$row['description'],"document"=>$url,"title"=>$row['title']));
               
                
        }
        echo json_encode(array("document" => $document));
        }
          
    }
    
    public function getDocumentsTypes($data){
      
        
        $query = "SELECT `id`, `document_name`,`document_price`, `toc`, `document_description`, `subscriptions_name` FROM `vw_document` WHERE id=".$data['getDocumentsTypes']." AND document_type = '".$data['type']."'";
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
    public function getDocumentsService($data){
      
        
        $query = "SELECT `id`, `document_name`,`document_price`, `category_name`,`service_id` FROM `vw_document_service` WHERE service_id =".$data;
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                 $query = "SELECT id,billing_type,service_id FROM payment WHERE type_paid ='documents' AND product_id = ".$row['id']." AND  user_id = ".$_SESSION['id']." AND service_id =".$row['service_id'];

          $resultt = $this->db->query($query);

          if(mysqli_num_rows($resultt) != 1){
            array_push($document,array("id"=>$row['id'],"service_id"=>$row['service_id'],"Name"=>$row['document_name'],"price"=>$row['document_price'],"category"=>$row['category_name'],"payment_id" =>"null"));
               
          }
          else{
              while($roww=$resultt -> fetch_assoc()){
                array_push($document,array("id"=>$row['id'],"service_id"=>$row['service_id'],"Name"=>$row['document_name'],"price"=>$row['document_price'],"category"=>$row['category_name'],"payment_id" =>$roww['id']));
              }
            }
                
        }
        echo json_encode(array("documents" => $document));
        }  
    }
    public function getPurchasedDocuments(){
        $query = "SELECT `product_id`,type_paid FROM `payment` WHERE user_id =".$_SESSION['id']." AND (type_paid ='documents' OR type_paid ='subscriptions') AND status = 'active'";
        $result = $this->db->query($query);
        $document = array();
        if(mysqli_num_rows($result) < 1){
            array_push($document,array("id"=>"null"));
               
          }
        else{
              while($row=$result -> fetch_assoc()){
                  //

                  if($row['type_paid'] == "documents"){
                      
                    
                    $query = "SELECT ref_no, `id`, `document_name`,`document`,`category_name`, `service_downloads` AS download_count,`service_id`,`user_id` FROM
                     `vw_document_service_bought` WHERE id = ".$row['product_id']." AND user_id = ".$_SESSION['id'];
                    
                  $my_type = "solo";

                  }
                  elseif($row['type_paid'] == "subscriptions") {
                    
                    $query = "SELECT `id`, `document_name`, `category_name`,`document`,`download_count`,`review_count`,
                    `subscriptions_name`,`review_status` FROM `document_subscription_bought`
                     WHERE subscription_id = ".$row['product_id']." AND user_id =".$_SESSION['id'];
                    
                    $my_type = "subscriptions";
                  }
                //   echo $query;

                  $resulttt = $this->db->query($query);

                
                  while($roww=$resulttt -> fetch_assoc()){
                    
                    $download_count = $roww['download_count'];  
                    if($my_type == 'solo'){

                        
                    $review_count = 0;
                    $review_status = 'none';

                    $doc_name = str_replace("./","https://cmversiontwo.cmadvocates.com/controller/",$roww['document']);
                    $url = $doc_name;
                    $service_id =$roww['service_id'];

                      }else{
                        $review_count = $roww['review_count'];
                        $review_status = $roww['review_status'];
                        $doc_name = str_replace("./uploadDocuments/","",$roww['document']);
                        $sub_name = str_replace(" ","",$roww['subscriptions_name']);
                        $service_id = null;
    
                        $url = "https://cmversiontwo.cmadvocates.com/controller/usersDirectories/".MD5($_SESSION['email'])."/".$sub_name."/".$doc_name;

                      }
                    
                    array_push($document,array("id"=>$roww['id'],"Name"=>$roww['document_name'],"category"=>$roww['category_name'],"review_count"=>$review_count,"download_count"=>$download_count,"type"=>$my_type,"review_status"=>$review_status,"document"=>$url,"service_id"=>$service_id));
                      
                      
                    }
          


                  //
                }
        }
            echo json_encode(array("documents" => $document));
    }
    public function getuserformail($id){
        $query = "SELECT userName FROM users WHERE id = ".$id;
        $result = $this->db-> query( $query);
        $row = $result->fetch_assoc();
        return $row["userName"];

    }
    
    public function getusermail($id){
        $query = "SELECT email FROM users WHERE id = ".$id;
        $result = $this->db-> query( $query);
        $row = $result->fetch_assoc();
        return $row["email"];

    }


    public function getPurchasedDocumentsOnReview(){
        $query = "SELECT `product_id` FROM `payment` WHERE user_id =".$_SESSION['id']." AND  type_paid ='subscriptions' AND status = 'active'";
        $result = $this->db->query($query);
        $document = array();
        if(mysqli_num_rows($result) < 1){
            array_push($document,array("id"=>"null"));
               
          }
        else{
              while($row=$result -> fetch_assoc()){
                  //
                  $query = "SELECT `id`, `document_name`,`review_status`, `category_name`,`subscription_id` FROM `document_subscription_bought` WHERE subscription_id = ".$row['product_id']." AND review_status = 'review' ";
                  
                  $resulttt = $this->db->query($query);

                  if(!$resulttt){

                  }
                  else{

                      while($roww=$resulttt -> fetch_assoc()){
                      array_push($document,array("id"=>$roww['id'],"sub_id" => $roww['subscription_id'],"review_status"=>$roww['review_status'],"Name"=>$roww['document_name'],"category"=>$roww['category_name'],"type"=>"subscriptions"));

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
        $query = "SELECT download_count FROM documents_download WHERE document_id = $id AND user_id = ".$_SESSION['id'];
        $result = $this->db->query($query);

        while($row = $result->fetch_assoc()){

            $count = 0;
            $count = $row['download_count'];
            $count = $count - 1;

            $query = "UPDATE documents_download SET download_count = $count WHERE document_id = $id AND user_id = ".$_SESSION['id'];
            if($this->db->query($query)){
                echo json_encode(array("result"=>"success"));
            }else{
                echo json_encode(array("result"=>$this->db->error));
            }

        }

    }

    public function countDownloadsrem($id,$service_id){
        $query = "SELECT download_count FROM documents_bought_service WHERE document_id = $id AND service_id = $service_id AND user_id = ".$_SESSION['id'];
        
        $result = $this->db->query($query);

        while($row = $result->fetch_assoc()){

            $count = 0;
            $count = $row['download_count'];
            $count = $count - 1;

            $query = "UPDATE documents_bought_service SET download_count = $count WHERE document_id = $id AND service_id = $service_id AND user_id = ".$_SESSION['id'];
            
            if($this->db->query($query)){
                echo json_encode(array("result"=>"success"));
            }else{
                echo json_encode(array("result"=>$this->db->error));
            }

        }

    }

    public function editDocument($data){
       $pre = "preview ->";
       if(!empty($_FILES['preview']['name']) && !empty($_FILES['docu']['name'])){
        $document = libs :: uploadFile($_FILES['docu'],"uploadDocuments");
       $preview = libs :: uploadFiles($_FILES['preview'],"uploadPreviews");
        foreach ($preview as  $value) {
            $pre = $pre.",".$value;
        }
        $query = "UPDATE `Documents` SET `document_name`='".$data['document_name']."',`document_price`='".$data['document_price']."',`document_preview`='".$pre."',".
        "`subscription_id`='".$data['sub']."',`document_type`='".$data['document_type']."',`service_id`='".$data['serv']."',".
        "`category_id`='".$data['cat']."',`sub_category_id`='".$data['subcat']."',`document`='".$document."',".
        "`toc`='".$data['table_of_contents']."',`document_description`='".$data['document_description']."' WHERE id =".$data['id'];
           
       }elseif (!empty($_FILES['preview']['name']) && empty($_FILES['docu']['name'])) {
           # code...
           $preview = libs :: uploadFiles($_FILES['preview'],"uploadPreviews");
        foreach ($preview as  $value) {
            $pre = $pre.",".$value;
        }
           $query = "UPDATE `Documents` SET `document_name`='".$data['document_name']."',`document_price`='".$data['document_price']."',`document_preview`='".$pre."',".
           "`subscription_id`='".$data['sub']."',`document_type`='".$data['document_type']."',`service_id`='".$data['serv']."',".
           "`category_id`='".$data['cat']."',`sub_category_id`='".$data['subcat']."',".
           "`toc`='".$data['table_of_contents']."',`document_description`='".$data['document_description']."' WHERE id =".$data['id'];
   
       }elseif (empty($_FILES['preview']['name']) && !empty($_FILES['docu']['name'])) {
        # code...
        
        $document = libs :: uploadFile($_FILES['docu'],"uploadDocuments");
        $query = "UPDATE `Documents` SET `document_name`='".$data['document_name']."',`document_price`='".$data['document_price']."',".
        "`subscription_id`='".$data['sub']."',`document_type`='".$data['document_type']."',`service_id`='".$data['serv']."',".
        "`category_id`='".$data['cat']."',`sub_category_id`='".$data['subcat']."',`document`='".$document."',".
        "`toc`='".$data['table_of_contents']."',`document_description`='".$data['document_description']."' WHERE id =".$data['id'];
        }else
       {
        $query = "UPDATE `Documents` SET `document_name`='".$data['document_name']."',`document_price`='".$data['document_price']."',".
        "`subscription_id`='".$data['sub']."',`document_type`='".$data['document_type']."',`service_id`='".$data['serv']."',".
        "`category_id`='".$data['cat']."',`sub_category_id`='".$data['subcat']."',".
        "`toc`='".$data['table_of_contents']."',`document_description`='".$data['document_description']."' WHERE id =".$data['id'];
       }
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $query));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Document  Edited"));
       
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
    //The following method will be used for reuploading reviewed documents
    public function replaceDocument($token,$doc_id,$client_id,$file,$assignee,$rm_id){


        if($token == $_SESSION['token']){
            
            $query = "SELECT document_name,document,client_email,subscriptions_name FROM document_subscription_bought WHERE
            user_id = $client_id AND id = $doc_id AND advocate_assigned_id= $assignee AND rm_id = ".$rm_id;

            $result = $this->db->query($query);
   
            while($row=$result -> fetch_assoc()){
                # code...
                $document_name = str_replace("./uploadDocuments/", "", $row['document']);

                if ($document_name != $file['name']) {
                    echo json_encode(array("result" => "alert-danger","value" => "You must upload file with same name"));
                    exit();
                }
                $sub_name = str_replace(" ","",$row["subscriptions_name"]);
      
                $link = "usersDirectories/".MD5($row['client_email'])."/".$sub_name;
                $document = libs :: uploadFile($_FILES['upload_document'],$link);

                if ($document == "") {
                    echo json_encode(array("result" => "alert-danger","value" => "Document not uploaded.Contact support."));
                    exit();
                }

                
                $mail_of_rm = "<h4>Review Submission</h4><p>You have submitted a review for document [".$row["document_name"]."]</p>";
               
                libs::mail_template ($this->getusermail($_SESSION['id']),"Document Review","CMA document review",$mail_of_rm);
               
                
                if($assignee == 0){
                    $mail_of_user = "<h4>Review Submission</h4>
                    <p>Review for document [".$row["document_name"]."] is complete.</p>";
    
                    libs::mail_template ($row['client_email'],"Document Review","CMA document review",$mail_of_user);

                    $query = "UPDATE documents_review SET review_status = 'none',title ='',description='' WHERE 
                    user_id = $client_id AND document_id = $doc_id AND advocate_assigned_id= $assignee AND rm_id = ".$_SESSION['id'];
                    
                    $result = $this->db-> query($query);

                    if(!$result){
                    
                        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
                        exit();

                    }else{

                            echo json_encode(array("result" => "alert-success","value" => "Document Marked as done"));
                            exit();
                    
                    }
                
           
    
                }else{
                    $query = "UPDATE documents_review SET review_status = 'completed' WHERE 
                    user_id = $client_id AND document_id = $doc_id AND advocate_assigned_id= $assignee AND rm_id = ".$rm_id;
                    $result = $this->db->query($query);
                    if(!$result){
            
                        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
                        exit();
        
                    }else{
                            echo json_encode(array("result" => "alert-success","value" => "Document added as complete"));
                            exit();
                    
                    }
                
                }


            }



        }else{
            echo json_encode(array("result" => "alert-danger","value" => "Access Denied"));
            exit();

        }
    }
}

?>