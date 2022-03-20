<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

// echo PHP_VERSION."<br>";
// echo "post_max_size->".ini_get('post_max_size')."<br>";
// echo "upload_max_filesize ->".ini_get('upload_max_filesize')."<br>";
// echo "max_input_time->".ini_get('max_input_time')."<br>";
// echo "max_execution_time ->".ini_get('max_execution_time')."<br>";

// ini_set('upload_max_filesize', '500M');
// ini_set('post_max_size', '500M');
// ini_set('max_input_time', 30000);
// ini_set('max_execution_time', 30000);

// echo "<br> <br>";


// echo ini_get('post_max_size')."<br>";
// echo ini_get('upload_max_filesize')."<br>";
// echo ini_get('max_input_time')."<br>";
// echo ini_get('max_execution_time')."<br>";



$busi = new BusinessUnit($db);

//Business Units
if(isset($_POST['head']) && $_POST['token'] == $_SESSION['token']){

    $busi->addBusinessUnit($_POST);
}

if(isset($_GET['getBusinessUnits']) && $_GET['token1'] == $_SESSION['token']){
    $busi->getBusinessUnit();
}

if(isset($_POST['editbunith']) && $_POST['token'] == $_SESSION['token']){
    $busi->editBusinessUnit($_POST);
    
}


class BusinessUnit{
    
    public function __construct($db) {
        $this->db = $db;
        
        }
    public function addBusinessUnit($data){
        
        $preview = libs :: uploadFile($_FILES['business_preview_hope'],"uploadPreviewBusinessUnit"); 
        
        
         $query = "INSERT INTO `business_unit`(preview_video, `practice_id`, `business_unit_status`, `business_brief_description`)".
         " VALUES ('".$preview."',".$data['pa'].",'".$data['stat']."','".$data['paymenttermtextarea']."')";
   
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{
           
            $last_id = $this->db->insert_id;

            foreach ($data['head'] as $key => $value) {
                
                $query ="INSERT INTO `business_heads`(`business_unit_id`,`business_unit_head`) VALUES (".$last_id.",".$value.")";
                $result = $this->db-> query($query);

            }

            foreach ($data['members'] as $key => $value) {
                $query ="INSERT INTO `business_members`(`business_unit_id`,`business_unit_member`) VALUES (".$last_id.",".$value.")";
                $result = $this->db-> query($query);
            }

           echo json_encode(array("result" => "alert-success","value" => "Business unit added"));
       
          }
      
    } 
    public function getBusinessUnit(){
      
        
        $query = "SELECT `id`, `business_unit_head`, `business_unit_status` FROM `business_unit`";
        $result = $this->db->query($query);
        $busi = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No business Unit"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($busi,array("id"=>$row['id'],"Name"=>$row['business_unit_head'],"status"=>$row['business_unit_status']));
               
                
        }
        echo json_encode(array("busis" => $busi));
        }  
    }
      
    public function editBusinessUnit($data){

        $query = "UPDATE `business_unit` SET `business_unit_head`='".$data['editbunith']."',`business_unit_member`='".$data['editbunitm']."',".
        "`practice_id`='".$data['pa']."',`category_id`='".$data['cat']."',`subcat_id`='".$data['subcat']."',".
        "`business_unit_status`='".$data['stat']."',`business_brief_description`='".$data['paymenttermtextarea']."'";

          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => "video is not edited"));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "video is edited"));
       
           }
      
    } 
}
?>