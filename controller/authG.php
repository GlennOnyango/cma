<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$mood = new Auth($db);
//$mood->logOut();
if(empty($_SESSION['token']) && (empty($_POST['log-email']) && empty($_POST['email']) && empty($_POST['forgot_email'])) ){

    
if(isset($_POST['log_me_out'])){
    $mood->logOut();
    exit();
}
    echo json_encode(array("result" => "session","value" => "Session Ended.Loggin to access details"));

    exit();
}


if(isset($_POST['email'])){
    $mood->registerAcount($_POST);

}
if(isset($_POST['log-email'])){
    $mood->loginAcount($_POST);
}
if(isset($_POST['forgot_email'])){
    $mood->forgotPassword($_POST['forgot_email']);
}
if(isset($_POST['kra'])){
    $mood->addCert($_POST);
}

if(isset($_GET['user_cert']) && $_GET['token1'] == $_SESSION['token']){
    $mood->getCert();

 }
 if(isset($_GET['user_cert_admin']) && $_GET['token1'] == $_SESSION['token']){
    $mood->getAllCert();

 }
 if(isset($_POST['user_id'])){
     $mood->updateCert($_POST);
 }
 

if(isset($_GET['token'])){
    if(!empty($_SESSION["token"])){
        if($_SESSION['token'] == $_GET['token']){
            echo json_encode(array("result" => $_SESSION['token'],"path" => $_SESSION['path']));
        }
        else{
            $_SESSION['path'] = "/login.html";

            echo json_encode(array("result" => "authenticate","path" => $_SESSION['path'] ));
        }
        
        }
    else{
        echo json_encode(array("result" => "authenticate","path" => $_SESSION['path'] ));
    }    
        
}
if(isset($_GET['mydetails'])){
    echo json_encode(array("username" => $_SESSION["username"],"email" => $_SESSION['email']));
  

}
if(isset($_POST['log_me_out'])){
    $mood->logOut();
}





class Auth{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addCert($data){

        $reg_cer = libs :: uploadFile($_FILES['cert_of_reg'],"uploadDocuments");
        $kra = libs :: uploadFile($_FILES['kra'],"uploadDocuments");
        if(!empty($_FILES['cert_of_reg']['name']) && !empty($_FILES['kra']['name'])){

            $query = "INSERT INTO user_cert(user_id,reg,kpin) VALUES (".$_SESSION['id'].",'".$reg_cer."','".$kra."')";

        }else{
            echo json_encode(array("result" => "alert-success","value" => "Make sure all fields are not empty"));
                
            exit();
        }
       

        $result = $this->db-> query( $query);

        if(!$result){

            echo json_encode(array("result" => "error","value" => "Error During CERT Add"));
            
        }
        else{
                echo json_encode(array("result" => "success","value" => "CERT added"));
                
            }
        
    }
    public function getCert(){
        $query = "SELECT * FROM user_cert WHERE user_id = '".$_SESSION['id']."'";

        $result = $this->db-> query($query);
        $state = array();
        if (mysqli_num_rows($result) != 1) {
      
            echo json_encode(array("result" => "error","value" => "No certificate"));

            exit();

        }else {
            while($row=$result -> fetch_row()){
                array_push($state,array("result"=>"success","st"=>$row[4]));
               
           }
           echo json_encode(array("states" => $state));
    
        
        }
      
 
    }
    public function getAllCert(){

        $query = "SELECT * FROM user_cert_all";

        $result = $this->db-> query($query);
        $state = array();
        if (mysqli_num_rows($result) < 1) {
      
            echo json_encode(array("result" => "error","value" => "No certificate"));

            exit();

        }else {
           while($row=$result -> fetch_assoc()){
               
            array_push($state,array("id"=>$row["id"],"name"=>$row["name"],"reg"=>$row["reg"],"kra"=>$row["kra"],"status"=>$row["status"]));
            
       }
           echo json_encode(array("states" => $state));
    
        
        }

    }

    public function updateCert($data){
        $query="UPDATE user_cert SET status='".$data['status']."' WHERE user_id =".$data['user_id'];

            
        $result = $this->db-> query( $query);
 
        if(!$result){
 
         echo json_encode(array("result" => "alert-danger","value" => "Certficate not changed"));
     
        }
        else{

         echo json_encode(array("result" => "alert-success","value" => "Certificate changed"));
     
        }

    }

    public function registerAcount($data){

            $sns = 'null';

            if(!empty($data['sns'])){
                $sns = $data['sns'];

            }
        
            $query = "INSERT INTO users(
            roleId,userName,email,businessName,
            registrationNumber,physicalAddress,subscribeToNewsletter,user_password,
            contactemail,contactPhoneNumber,active,user_image) 
            VALUES (3,'".libs::test_input($data['username'])."','".libs::test_input($data['email'])."','".libs::test_input($data['bssname'])."',
            '".libs::test_input($data['regnumber'])."','".libs::test_input($data['phyadd'])."','".libs::test_input($sns)."','".MD5($data['password'])."',
            '".libs::test_input($data['contemail'])."','".libs::test_input($data['contnumber'])."','1','null'
            )";
     


        $result = $this->db-> query( $query);

        if(!$result){

            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            
        }
        else{

            $this->createDirect($data['email']);
            
                
            }
        
    }
    public function createDirect($mail){
        $query = " Select id,email from users WHERE roleid = 3 AND email ='$mail'";
        $result = $this->db->query($query);

        while($row=$result -> fetch_assoc()){
             $row['email'];
             $row['id'];

             $fold = $_SERVER["DOCUMENT_ROOT"]."/controller/usersDirectories/";
        
             $folderName = $fold."". MD5($row['email']);
             $config['upload_path'] = $folderName;
             if(!is_dir($folderName))
             {
                 mkdir($folderName,  0777, true);
                 mkdir($folderName."/service",  0777, true);
                 $query1 = "UPDATE users SET user_directory = '$folderName' WHERE id = ".$row['id'];
                 $result1 = $this->db->query($query1);

                 //echo  MD5($row['email'])."<br>";
                 
                 if(!$result1){echo json_encode(array("result" => "alert-danger","value" => "Could not create directory.Contact Us for more info"));}
                 else{echo json_encode(array("result" => "alert-success","value" => "Registration complete.Login to continue"));}
             }
             else{
                echo json_encode(array("result" => "alert-danger","value" => "Directory Exists.Contact Us for more info"));
              
             }
            
        }
    }

    public function loginAcount($data){

        $query = "SELECT * FROM users WHERE email = '".$data["log-email"]."' AND user_password = '".md5($data['password'])."'";

        $result = $this->db-> query($query);

        if (mysqli_num_rows($result) != 1) {
      
            echo json_encode(array("result" => "alert-danger","value" => "An error occured"));

            exit();

        }else {
            while($row=$result -> fetch_row()){
                $_SESSION['username'] = $row[2];
                $_SESSION['token'] = md5(password_hash(rand(3,1000000000000), PASSWORD_DEFAULT));
                $_SESSION['email'] = $row[3];
                $_SESSION['role'] = $row[1];
                $_SESSION['id'] = $row[0];

           }

           if($_SESSION['role'] === "1"){
                $url = '/admin';
           }elseif ($_SESSION['role'] === "2") {
                $url = '/advocates';
           }elseif ($_SESSION['role'] === "3") {
                $url = '/profile.html';
           }else{
               $url ='';  
           }
           
       $_SESSION['path'] = $url;
       echo json_encode(array("result" => "logged","value" => $_SESSION['token'],"role" => $_SESSION['role'],"path" => $_SESSION['path']));
          
        
        }
       
    }
    public function randomPassword() {
        $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        $pass = array(); //remember to declare $pass as an array
        $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
        for ($i = 0; $i < 8; $i++) {
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
        }
        return implode($pass); //turn the array into a string
    }

    public function forgotPassword($data){
       
        $query = "SELECT id,email from users WHERE email = '".$data."'";
        $result = $this->db->query($query);

        if (mysqli_num_rows($result) != 1) {
      
            echo json_encode(array("result" => "error","value" => "Email does not exist"));
          
        
        }
        else {
            $row = $result->fetch_assoc();

            $user_id = $row['id'];

            $body = "<h2>Password Recovery</h2><a href='https://cmversiontwo.cmadvocates.com/controller/UpdatePassword.php?user_request=".MD5($user_id)."&email=$data'>Click this link to reset your password</a>";
            

            if(libs::mail_template ($data,"Password recovery","CMA email recovery",$body)){

                echo json_encode(array("result" => "sent","value" => "Check your email for the password."));
           
            }
            else{
                
                echo json_encode(array("result" => "error","value" => "Email not sent.Contact Us at ....."));
            
            }    
            // $password = $this->randomPassword();
            // $query = "UPDATE users SET user_password =  '".MD5($password)."' WHERE email = '".$data."'";
            // $result = $this->db->query($query);

            // if(!$result){
                
            // echo json_encode(array("result" => "error","value" => "Contact Us for more details"));
            //     exit();
            // }

            // if(libs::mail_template ($data,"Password recovery","CMA email recovery",$password)){

            //     echo json_encode(array("result" => "sent","value" => "Check your email for the password."));
           
            // }
            // else{
                
            //     echo json_encode(array("result" => "error","value" => "Email not sent.Contact Us at ....."));
            
            // }        
        }
               

    }

    public function logOut(){

        session_unset();

        // destroy the session
        session_destroy();
        echo json_encode(array("result" => $_SESSION,"path" => 'https://cmversiontwo.cmadvocates.com/'));

      }

}


    

    
 

 



    ?>