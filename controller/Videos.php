<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');

require_once(__DIR__ . '/../controller/libs.php');

$video = new Videos($db);

//video
if(isset($_POST['videoname']) && $_POST['token'] == $_SESSION['token']){

    $video->addvideo($_POST);
}

if(isset($_GET['getvideos']) && $_GET['token1'] == $_SESSION['token']){
    $video->getvideos();
}

if(isset($_GET['getServicevideos']) && $_GET['token1'] == $_SESSION['token']){
    $video->getServicevideos($_GET['getServicevideos']);
    
}

if(isset($_GET['getPurchasedVideos']) && $_GET['token1'] == $_SESSION['token']){
    $video->getPurchasedVideos();
    
}


if(isset($_POST['editvideoname']) && $_POST['token'] == $_SESSION['token']){
    $video->editVideo($_POST);
    
}

if(isset($_POST['search_video'])){

    $video->listVideoSearch($_POST);
}


class Videos{
 
    public function __construct($db) {
        $this->db = $db;
           // changing the upload limits
        }
    public function addvideo($data){

       $video = libs :: uploadFile($_FILES['video_file_main'],"uploadVideo");
       
       $preview = libs :: uploadFile($_FILES['video_preview_main'],"uploadPreviews"); 
      
         $query = "INSERT INTO `videos`(`video_name`, `video`,`video_preview`, `video_brief_description`,`price`) ".
         "VALUES ('".$data['videoname']."','".$video."','".$preview."','".$data['desc']."',".$data['price'].")";
   
          $result = $this->db-> query($query);
   
          if(!$result){


           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{

            $last_id = $this->db->insert_id;

            if(isset($data['sub'])){
                foreach ($data['sub'] as $key => $value) {
                    $query ="INSERT INTO `videos_subscription`(`video_id`,`subscription_id`) VALUES (".$last_id.",".$value.")";
                    $result = $this->db-> query($query);
    
                }
            }

            if(isset($data['serv'])){
                foreach ($data['serv'] as $key => $value) {
                    $query ="INSERT INTO `videos_service`(`video_id`,`service_id`) VALUES (".$last_id.",".$value.")";
                    $result = $this->db-> query($query);
                }
            }
           echo json_encode(array("result" => "alert-success","value" => "Video  added"));
       
           }
      
    } 
    public function getvideos(){
        
        $query = "SELECT * FROM `vw_videos`";
        $result = $this->db->query($query);
        $video = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($video,array("id"=>$row['id'],"Name"=>$row['video_name'],"subscription"=>$row['subscriptions_name'],"status"=>$row['status']));
               
                
        }
        echo json_encode(array("videos" => $video));
        }  
    }
    
    public function getServicevideos($data){
        
        $query = "SELECT `id`,`video_name`,`video_preview`,`price`,`service_id`,`video` FROM `vw_videos_service` WHERE service_id = ".$data;
        $result = $this->db->query($query);
        $video = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Video"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
        
          //
          
          $query = "SELECT id,billing_type,service_id FROM payment WHERE type_paid ='videos' 
          AND product_id = ".$row['id']." AND  user_id = ".$_SESSION['id']." AND service_id =".$row['service_id'];

          $resultt = $this->db->query($query);

          if(mysqli_num_rows($resultt) != 1){
            array_push($video,array("id"=>$row['id'],"service_id"=>$row["service_id"],"Name"=>$row['video_name'],"preview"=>$row['video_preview'],"price" => $row['price'],"payment_id" =>"null"));
            
          }
          else{
              while($roww=$resultt -> fetch_assoc()){
                array_push($video,array("id"=>$row['id'],"service_id"=>$row["service_id"],"Name"=>$row['video_name'],"preview"=>$row['video_preview'],"video"=>$row['video'],"price" => $row['price'],"payment_id" =>$roww['id']));
              }
          }

        //        
        }
        echo json_encode(array("videos" => $video));
        }  
    }
      

    public function getPurchasedVideos(){
        $query = "SELECT `product_id`,type_paid FROM `payment` WHERE user_id =".$_SESSION['id']." AND (type_paid ='videos' OR type_paid ='subscriptions')";
        $result = $this->db->query($query);
        $video = array();
        if(mysqli_num_rows($result) < 1){
            array_push($document,array("id"=>"null"));
               
        }
        else{
            while($row=$result -> fetch_assoc()){
                //

                if($row['type_paid'] == "videos"){
                    

                  $query = "SELECT `id`,`video_name`,`video` FROM `vw_videos_service` WHERE id = ".$row['product_id'];
                  
                  $resultt = $this->db->query($query);

                  if(!$resultt){

                  }
                  else{

                      while($roww=$resultt -> fetch_assoc()){
                        array_push($video,array("id"=>$roww['id'],"Name"=>$roww['video_name'],"video"=>$roww["video"]));
                        
                    }
                 }
        
                }
                elseif($row['type_paid'] == "subscriptions") {
                  
                    $query = "SELECT `id`,`video_name`,`video` FROM `vw_videos` WHERE subscription_id = ".$row['product_id'];
                  
                    $resulttt = $this->db->query($query);

                  if(!$resulttt){

                  }else{

                      while($roww=$resulttt -> fetch_assoc()){
                        array_push($video,array("id"=>$roww['id'],"Name"=>$roww['video_name'],"video"=>$roww["video"]));
                        
                        }
                  }
        

                }

               


                //
        }
      }
      echo json_encode(array("videos" => $video));
    
    }
    
    
    public function editVideo($data){

        $query = "SELECT * FROM `videos` WHERE id=".$data['id'];
        $result = $this->db->query($query);
            while($row=$result -> fetch_assoc()){
                
               $video_name = $row['video_name'];
               $video = $row['video'];
               $video_preview = $row['video_preview'];
               $service_id = $row['service_id'];
               $subscription_id = $row['subscription_id'];
               $video_status = $row['video_status'];
               $video_brief_description = $row['video_brief_description'];
               $price = $row['price'];

        }


         $query = "UPDATE `videos` SET `video_name`='".libs :: check($data['editvideoname'],$video_name)."',`video`='".libs :: check(libs :: uploadFile($_FILES['editVideo'],"uploadVideo"),$video)."',
        `video_preview`='".libs :: check(libs :: uploadFile($_FILES['editPreview'],"uploadVideoPreview"),$video_preview)."',`service_id`=".libs :: check($data['serv'],$service_id).",
        `subscription_id`=".libs :: check($data['sub'],$subscription_id).",`video_status`='".libs :: check($data['stat'],$video_status)."',`price` = ".libs :: check($data['price'],$price).",`video_brief_description`='".libs :: check($data['breif'],$video_brief_description)."' WHERE id =".$data['id'];


          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "video is edited"));
       
           }
      
    } 
    public function listVideoSearch($data){
  
        $query = "SELECT `id`, `video_name`, `subscriptions_name`, `video_status` FROM `vw_videos` WHERE video_name LIKE '%".$data['search_video']."%' OR video_brief_description LIKE '%".$data['search_video']."%'";

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
?>