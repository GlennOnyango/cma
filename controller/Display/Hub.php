<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');


$hub = new Hub($db);

//Knowledge HUb
if(isset($_POST['article_name']) && $_POST['token'] == $_SESSION['token']){
    $hub->addHub($_POST);
}

if(isset($_GET['getHub']) && $_GET['token1'] == $_SESSION['token']){
    $hub->getHub();
}

if(isset($_POST['edit_article_name']) && $_POST['token'] == $_SESSION['token']){
    $hub->editHub($_POST);
    
}

if(isset($_POST['search_hubs'])){

    $hub->listHubSearch($_POST);
}


class Hub{
 
    public function __construct($db) {
        $this->db = $db;
        }


    public function create_view(){
            $query ="SELECT * from knowledge_hub";
      
            $result = $this->db-> query($query);
       
              if(!$result){
       
               echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
           
              }
              else{
                while($row=$result -> fetch_assoc()){
                
            print_r($row);      
                   
           }
               }
            
    }

    public function addHub($data){
       if(!empty($_FILES['preview']['name']) && !empty($_FILES['articles']['name'][0]) ){
            $pre = "preview ->";
            $preview = libs::uploadFiles($_FILES['preview'],"uploadPreviewshub");

            if(!empty($preview)){
                
                foreach ($preview as  $value) {
                    $pre = $pre.",".$value;
                }
            }
            else{
            echo json_encode(array("result" => "alert-danger","value" => "preview is null1"));
            exit();
            }
            
            $art = "articles ->";
            $preview1 = libs :: uploadFiles($_FILES['articles'],"uploadarticles");
            
            if(!empty($preview1)){
                foreach ($preview1 as  $value) {
                    $art = $art.",".$value;
                }
        
            }else{
            
                
                echo json_encode(array("result" => "alert-danger","value" => "article is null1"));
                exit();        
            }
            

            $query ="INSERT INTO `knowledge_hub`(
                `article_name`, `article_category`, `article_sub_category`, 
            `image_preview`, `articles`, `status`,
            `description`) VALUES ". 
            "('".$data['article_name']."','".$data['article_category']."','".$data['article_sub_category']."',
            '".$pre."','".$art."','".$data['status']."','".$data['desc']."')";
            
         
       }
       elseif(!empty($_FILES['preview']['name'])){
            $pre = "preview ->";
            $preview = libs::uploadFiles($_FILES['preview'],"uploadPreviewshub");

            if(!empty($preview)){
                
            foreach ($preview as  $value) {
                $pre = $pre.",".$value;
            }
            }else{
            
                
            echo json_encode(array("result" => "alert-danger","value" => "preview is null2"));
             exit();
            }
                
            
            $query ="INSERT INTO `knowledge_hub`(
                `article_name`, `article_category`, `article_sub_category`, 
            `image_preview`, `articles`, `status`,
            `description`) VALUES ". 
            "('".$data['article_name']."','".$data['article_category']."','".$data['article_sub_category']."',
            '".$pre."','','".$data['status']."','".$data['desc']."')";
    
       }
       elseif(!empty($_FILES['articles']['name'][0]) ){
            $art = "articles ->";
            $preview1 = libs :: uploadFiles($_FILES['articles'],"uploadarticles");
            
            if(!empty($preview1)){
                foreach ($preview1 as  $value) {
                    $art = $art.",".$value;
                }
        
            }else{
            
                echo json_encode(array("result" => "alert-danger","value" => "article is null"));
                exit();        
            }
                
            
            $query ="INSERT INTO `knowledge_hub`(
                `article_name`, `article_category`, `article_sub_category`, 
            `image_preview`, `articles`, `status`,
            `description`) VALUES ". 
            "('".$data['article_name']."','".$data['article_category']."','".$data['article_sub_category']."',
            '','".$art."','".$data['status']."','".$data['desc']."')";
    
       }
       else{
   
        
        $query ="INSERT INTO `knowledge_hub`(
            `article_name`, `article_category`, `article_sub_category`, 
        `image_preview`, `articles`, `status`,
         `description`) VALUES ". 
        "('".$data['article_name']."','".$data['article_category']."','".$data['article_sub_category']."',
        '','','".$data['status']."','".$data['desc']."')";

       }


       
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Hub added"));
       
           }
      
    } 
    public function getHub(){
      
        
        $query = "SELECT `id`,`article_name`,`article_category`,`article_sub_category`,`status` FROM `knowledge_hub`";
        $result = $this->db->query($query);
        $hub = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($hub,array("id"=>$row['id'],"Name"=>$row['article_name'],"category"=>$row['article_category'],"sub_cat"=>$row['article_sub_category'],"status"=>$row['status']));
               
                
        }
        echo json_encode(array("hubs" => $hub));
        }  
    }
      
    public function editHub($data){
       
        
        
        if(!empty($_FILES['preview']['name']) && !empty($_FILES['articles']['name'])){
            $pre = "preview ->";
            $preview = libs::uploadFiles($_FILES['preview'],"uploadPreviewshub");

            if(!empty($preview)){
                
                foreach ($preview as  $value) {
                    $pre = $pre.",".$value;
                }
            }else{
            echo json_encode(array("result" => "alert-danger","value" => "preview is null"));
            exit();
            }
            
            $art = "articles ->";
            $preview1 = libs :: uploadFiles($_FILES['articles'],"uploadarticles");
            
            if(!empty($preview1)){
                foreach ($preview1 as  $value) {
                    $art = $art.",".$value;
                }
        
            }else{
            
                
                echo json_encode(array("result" => "alert-danger","value" => "article is null"));
                exit();        
            }
            

            $query ="UPDATE TABLE `knowledge_hub` SET `article_name` = '".$data['edit_article_name']."', article_category = '".$data['article_category']."'
            ,`article_sub_category` = '".$data['article_sub_category']."',`image_preview` = '".$pre."',
            ,`articles`='".$art."',`status`='".$data['status']."',`description`='".$data['description']."'
            WHERE id =".$data['id'];

        
    }
    elseif(!empty($_FILES['preview']['name'])){
        $pre = "preview ->";
        $preview = libs::uploadFiles($_FILES['preview'],"uploadPreviewshub");

        if(!empty($preview)){
            
        foreach ($preview as  $value) {
            $pre = $pre.",".$value;
        }
        }else{
        
            
        echo json_encode(array("result" => "alert-danger","value" => "preview is null"));
            exit();
        }
            
        
        $query ="UPDATE TABLE `knowledge_hub` SET `article_name` = '".$data['edit_article_name']."', article_category = '".$data['article_category']."'
        ,`article_sub_category` = '".$data['article_sub_category']."',`image_preview` = '".$pre."',
        ,`status`='".$data['status']."',`description`='".$data['description']."'
        WHERE id =".$data['id'];

    }
    elseif(!empty($_FILES['articles']['name'])){
        $art = "articles ->";
        $preview1 = libs :: uploadFiles($_FILES['articles'],"uploadarticles");
        
        if(!empty($preview1)){
            foreach ($preview1 as  $value) {
                $art = $art.",".$value;
            }
    
        }else{
        
            echo json_encode(array("result" => "alert-danger","value" => "article is null"));
            exit();        
        }
            
        
        $query ="UPDATE TABLE `knowledge_hub` SET `article_name` = '".$data['edit_article_name']."', article_category = '".$data['article_category']."'
        ,`article_sub_category` = '".$data['article_sub_category']."',
        ,`articles`='".$art."',`status`='".$data['status']."',`description`='".$data['description']."'
        WHERE id =".$data['id'];

    }
    else{

        $query ="UPDATE TABLE `knowledge_hub` SET `article_name` = '".$data['edit_article_name']."', article_category = '".$data['article_category']."'
        ,`article_sub_category` = '".$data['article_sub_category']."',`status`='".$data['status']."',`description`='".$data['description']."'
        WHERE id =".$data['id'];


    }
        $result = $this->db-> query($query);

        if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
    
        }
        else{
        
        echo json_encode(array("result" => "alert-success","value" => "Hub added"));
    
        }
    
   
            } 

    
    public function listHubSearch($data){


        $query = "SELECT * FROM `knowledge_hub` WHERE article_name LIKE '%".$data['search_hubs']."%' OR article_category LIKE '%".$data['search_hubs']."%' OR article_sub_category LIKE '%".$data['search_hubs']."%' OR status LIKE '%".$data['search_hubs']."%' ";

        $result = $this->db->query($query);
        $hub = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($hub,array("id"=>$row['id'],"Name"=>$row['article_name'],"category"=>$row['article_category'],"sub_cat"=>$row['article_sub_category'],"status"=>$row['status']));
               
                
        }
        echo json_encode(array("hubs" => $hub));
        }  
    }
}

?>