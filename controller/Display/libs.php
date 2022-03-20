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
            $mail = new PHPMailer();
            $mail->IsSMTP();
            $mail->Mailer = "smtp";


            $mail->SMTPDebug  = 1;  
            $mail->SMTPAuth   = TRUE;
            $mail->SMTPSecure = "tls";
            $mail->Port       = 587;
            $mail->Host       = "smtp.mandrillapp.com";

            $mail->SMTPAuth = true;

            $mail->Username   = "CM ADVOCATES LLP";
            //$mail->Password   = "0w_xRVTpxJg5aoFWWHR5IQ";
            $mail->Password   = "ewgSvy-bxAKon6BjxFe4UA";
            $mail->IsHTML(true);
            $mail->AddAddress($email);
            $mail->SetFrom("law@cmadvocates.com");
            $mail->AddReplyTo("law@cmadvocates.com");
            $mail->Subject = $subject;
            $content = $body;
            $mail->MsgHTML($content); 
            print_r($mail->Send());
            /*if(!$mail->Send()) {
                //var_dump($mail);
                echo "Mail not sent";
            exit();
            } else {
            echo "Mail sent";
            }*/
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
    }
}
?>