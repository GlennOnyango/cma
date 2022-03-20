<?php
require_once('../../controller/Connection.php');


$video = new Videos($db);

//video

if(isset($_GET['getvideos'])){
    $video->getvideos();
}

if(isset($_GET['getServicevideos'])){

    if($_GET['getServicevideos'] == 0){
        $video->getvideos();
    }else{
        $video->getServicevideos($_GET['getServicevideos']);
    
    }
    
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
        }
    public function getvideos(){
        
        $query = "SELECT `id`,`video_name`,`video_preview`,`price`,`video` FROM `vw_videos_service`";
        $result = $this->db->query($query);
        $video = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                array_push($video,array("id"=>$row['id'],"Name"=>$row['video_name'],"preview"=>$row['video_preview'],"price" => $row['price']));
                
        }
        echo json_encode(array("videos" => $video));
        }  
    }
    
    public function getServicevideos($data){
        
        $query = "SELECT `id`,`video_name`,`video_preview`,`price`,`video` FROM `vw_videos_service` WHERE service_id = ".$data;
        $result = $this->db->query($query);
        $video = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Video"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
        
          //
          array_push($video,array("id"=>$row['id'],"Name"=>$row['video_name'],"preview"=>$row['video_preview'],"price" => $row['price']));
            

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
                    

                  $query = "SELECT `id`,`video_name`,`video` FROM `vw_videos` WHERE id = ".$row['product_id'];
                  
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