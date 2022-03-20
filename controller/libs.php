<?php

if(empty($_SESSION['token']) && (empty($_POST['log-email']) && empty($_POST['email']) && empty($_POST['forgot_email'])) ){
    
       echo json_encode(array("result" => "session","value" => "Session Ended.Loggin to access details"));
   
       exit();
   }
   
  
class libs{
    static function test_input($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
    }
    
    static function check($new,$old){
                if(empty($new)){
                    return $old;
                }
                return $new;
        
    }     
    
	static function getUserId($email,$db){
		$query = "SELECT id FROM users WHERE email = '".$email."'";

        $result = $db->query($query);

        if (mysqli_num_rows($result) != 1) {
      
            return "No user";
            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                return $row['id'];
				
           }

          }
       
	}   
    static function mail_template($email,$subject,$title,$body){
        
        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        
        // More headers
        $headers .= 'From: <cma@cm-portal-version-2-vs>' . "\r\n";
        
        if(mail($email,$subject,$body,$headers)){
        
            return 1;
        
        }else{
         
            return 0;
        }
    }
    static function uploadFiles($name,$folder){
       
        $files = array_filter($name['name']); //Use something similar before processing files.
            $path = array();
            $total_count = count($name['name']);
            
            for( $i=0 ; $i < $total_count ; $i++ ) {
               //The temp file path is obtained
               $tmpFilePath = $name['tmp_name'][$i];
               
               //A file path needs to be present
               if ($tmpFilePath != ""){
                  //Setup our new file path
                  $newFilePath = "./".$folder."/" . $name['name'][$i];
                 
                  if(move_uploaded_file($tmpFilePath, $newFilePath)) {
                     //Other code goes here
                     array_push($path,$newFilePath);
                  }
               }
            }
            return $path;
    }
          
    static function uploadFile($name,$folder){

       
        //The temp file path is obtained
               $tmpFilePath = $name['tmp_name'];
               
               //A file path needs to be present
               if ($tmpFilePath != ""){
                
                  //Setup our new file path
                  $newFilePath = "./".$folder."/" . $name['name'];
                  //File is uploaded to temp dir
                  if(move_uploaded_file($tmpFilePath, $newFilePath)) {
                     //Other code goes here
                     return $newFilePath;
                  }
               }

              // return $name['error'];
    }
}
?>