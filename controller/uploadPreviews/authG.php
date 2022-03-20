<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
include ("lib/Mandrill.php");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

$mood = new Auth($db);
$user = new User($db);
$lawyer = new Lawyers($db);
$product = new Products($db);
$subscriptions = new Subscriptions($db);
$payment_terms = new Payment_terms($db);
$category = new Category($db);
$service = new Service($db);
$document = new Documents($db);
$country = new Country($db);
$pa = new PracticeArea($db);
$ss = new SkillSet($db);
$lawyer_type = new LawyerType($db);
$video = new Videos($db);
$cons = new Consultation($db);
$busi = new BusinessUnit($db);
$hub = new Hub($db);
$member = new Member($db);

//$mood->logOut();
//print_r($_SESSION);

//$busi->alterBusinessUnit();
//$hub->create_view();
//$mood->forgotPassword("glenntedd@gmail.com");
if(empty($_SESSION['token']) && (empty($_POST['log-email']) && empty($_POST['email']) && empty($_POST['forgot_email'])) ){
    
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

//User
if(isset($_POST['myname']) && $_POST['token'] == $_SESSION['token']){
	$user->updateme($_POST);
    
    }

if(isset($_GET['update_user']) && $_POST['token'] == $_SESSION['token']){
	$user->getUser($_SESSION['id']);
    }

if(isset($_GET['user_profile']) && $_GET['token1'] == $_SESSION['token']){
    $user->profile();

    }
if(isset($_POST['emailp']) && $_POST['tokenp'] == $_SESSION['token']){
    $user->updateProfile($_POST);
}    
    //Lawyer
    
if(isset($_POST['lawyer_email']) && $_POST['token'] == $_SESSION['token']){
	$lawyer->addLawyer($_POST);
    
    }

if(isset($_GET['lawyers']) && $_GET['token1'] == $_SESSION['token']){
    $lawyer->listLawyers();
}
//Lawyer
if(isset($_POST['app_lawyer'])){
    $lawyer->approveLawyer($_POST);
}

if(isset($_POST['dec_lawyer'])){
    $lawyer->declineLawyer($_POST);
}

if(isset($_POST['lawyer_edit_email'])){

    $lawyer->editlawyer($_POST);
}
if(isset($_POST['search'])){

    $lawyer->listLawyersSearch($_POST);
}

//Product

if(isset($_POST['add_product_name'])){
    $product->addProduct($_POST);
}
if(isset($_GET['getproducts']) && $_GET['token1'] == $_SESSION['token']){
    $product->listProducts();
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


//Subscriptions
if(isset($_POST['sub_name'])){
    $subscriptions->addSubscriptions($_POST);
}
if(isset($_GET['getSubscriptions']) && $_GET['token1'] == $_SESSION['token']){
    $subscriptions->getSubscriptions($_POST);
}
if(isset($_POST['edit_sub_name'])){
    $subscriptions->editSubscriptions($_POST);
}

if(isset($_POST['search_sub'])){

    $subscriptions->listSubscriptionSearch($_POST);
}
//payments
if(isset($_POST['addpaymentterms']) && $_POST['token'] == $_SESSION['token']){
    $payment_terms->addPaymentTerms($_POST);
}
if(isset($_GET['getpaymentterms']) && $_GET['token1'] == $_SESSION['token']){
    $payment_terms->getPaymentTerms($_GET);
}

if(isset($_POST['edit_name_pyterms']) && $_POST['token'] == $_SESSION['token']){
    $payment_terms->editPaymentTerms($_POST);
}
if(isset($_POST['delete_pytm'])){
    $payment_terms->deletepytm($_POST);
}

if(isset($_POST['search_pytm'])){

    $payment_terms->listpytmSearch($_POST);
}

//category

if(isset($_POST['categoryName']) && $_POST['token'] == $_SESSION['token']){
    $category->addCategory($_POST);
}

if(isset($_GET['getCategories']) && $_GET['token1'] == $_SESSION['token']){
    $category->getCategories($_GET);
}

if(isset($_POST['editcategoryName']) && $_POST['token'] == $_SESSION['token']){
    $category->editCategories($_POST);
}
if(isset($_POST['search_cat'])){

    $category->listCategoriesSearch($_POST);
}


//Subcategory

if(isset($_POST['subcategoryName']) && $_POST['token'] == $_SESSION['token']){
    $category->addSubCategory($_POST);
}

if(isset($_GET['getsubCategories']) && $_GET['token1'] == $_SESSION['token']){
    
    $category->getSubCategories($_GET);
}
if(isset($_GET['getsubCategoriesSpec']) && $_GET['token1'] == $_SESSION['token']){
    $category->getsubCategoriesSpec($_GET);
}
if(isset($_POST['editsubcategoryname']) && $_POST['token'] == $_SESSION['token']){
    $category->editSubCategories($_POST);
}
if(isset($_POST['search_sub_category'])){

    $category->listSubCategoriesSearch($_POST);
}


//Service


if(isset($_POST['serviceName']) && $_POST['token'] == $_SESSION['token']){
    $service->addService($_POST);
}

if(isset($_GET['getService']) && $_GET['token1'] == $_SESSION['token']){
    $service->getService($_GET);
}
if(isset($_GET['getAllService']) && $_GET['token1'] == $_SESSION['token']){
    $service->getAllService();
}

if(isset($_POST['editserviceName']) && $_POST['token'] == $_SESSION['token']){
    $service->editService($_POST);
}

if(isset($_POST['search_serv'])){

    $service->listservSearch($_POST);
}
//Documents
if(isset($_POST['document_name']) && $_POST['token'] == $_SESSION['token']){
   
    $document->addDocument($_POST);
}
if(isset($_GET['getDocument']) && $_GET['token1'] == $_SESSION['token']){
    $document->getDocuments();
}
if(isset($_GET['getServiceDocuments']) && $_GET['token1'] == $_SESSION['token']){
    $document->getServiceDocuments($_GET['getServiceDocuments']);
}

if(isset($_POST['documents_edit']) && $_POST['token'] == $_SESSION['token']){
    $document->editDocument($_POST);
}
if(isset($_POST['search_document'])){

    $document->listDocumentsSearch($_POST);
}
//Country
if(isset($_POST['country_name']) && $_POST['token'] == $_SESSION['token']){
   
    $country->addCountry($_POST);
}
if(isset($_GET['getCountries']) && $_GET['token1'] == $_SESSION['token']){
    $country->getCountries();
}
if(isset($_POST['country_name_edit']) && $_POST['token'] == $_SESSION['token']){
    $country->editCountry($_POST);
}
if(isset($_POST['search_country'])){

    $country->listCountriesSearch($_POST);
}


//Practice Area
if(isset($_POST['pa_name']) && $_POST['token'] == $_SESSION['token']){

    $pa->addPracticeArea($_POST);
}

if(isset($_GET['getPracticeArea']) && $_GET['token1'] == $_SESSION['token']){
    $pa->getPracticeArea();
}

if(isset($_POST['edit_practise_name']) && $_POST['token'] == $_SESSION['token']){
    $pa->editPracticeArea($_POST);
}

if(isset($_POST['search_practise_area'])){

    $pa->listPracticeSearch($_POST);
}

//Skill Set
if(isset($_POST['skillset_name']) && $_POST['token'] == $_SESSION['token']){

    $ss->addSkillSet($_POST);
}

if(isset($_GET['getSkillSet']) && $_GET['token1'] == $_SESSION['token']){
    $ss->getSkillSet();
}

if(isset($_POST['edit_skillSet']) && $_POST['token'] == $_SESSION['token']){
    $ss->editSkillSet($_POST);
}

if(isset($_POST['search_skill_set'])){

    $ss->listSkillsetSearch($_POST);
}


//Lawyer_type
if(isset($_POST['lawyer_type_name']) && $_POST['token'] == $_SESSION['token']){

    $lawyer_type->addLawyerType($_POST);
}

if(isset($_GET['getLawyerType']) && $_GET['token1'] == $_SESSION['token']){
    $lawyer_type->getLawyerType();
}

if(isset($_POST['edit_lawyer_type_name']) && $_POST['token'] == $_SESSION['token']){
    $lawyer_type->editLawyerType($_POST);
}

if(isset($_POST['search_lawyer_type'])){

    $lawyer_type->listlawyertypeSearch($_POST);
}

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

if(isset($_POST['editvideoname']) && $_POST['token'] == $_SESSION['token']){
    $video->editVideo($_POST);
    
}

if(isset($_POST['search_video'])){

    $video->listVideoSearch($_POST);
}


//Business Units
if(isset($_POST['bunith']) && $_POST['token'] == $_SESSION['token']){

    $busi->addBusinessUnit($_POST);
}

if(isset($_GET['getBusinessUnits']) && $_GET['token1'] == $_SESSION['token']){
    $busi->getBusinessUnit();
}

if(isset($_POST['editbunith']) && $_POST['token'] == $_SESSION['token']){
    $busi->editBusinessUnit($_POST);
    
}


//Consultation
if(isset($_POST['lawtype']) && $_POST['token'] == $_SESSION['token']){

    $cons->addConsultation($_POST);
}

if(isset($_GET['getConsultations']) && $_GET['token1'] == $_SESSION['token']){
    $cons->getConsultations();
}

if(isset($_POST['editlawtype']) && $_POST['token'] == $_SESSION['token']){
    $cons->editConsultation($_POST);
    
}

if(isset($_POST['search_cons'])){

    $cons->listconsSearch($_POST);
}


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


//Members
if(isset($_POST['member_name']) && $_POST['token'] == $_SESSION['token']){
    $member->addMember($_POST);
}

if(isset($_GET['getmembers']) && $_GET['token1'] == $_SESSION['token']){
    $member->getMember();
}

if(isset($_POST['edit_member_name']) && $_POST['token'] == $_SESSION['token']){
    $member->editMember($_POST);
    
}

if(isset($_POST['search_members'])){

    $member->listMemberSearch($_POST);
}


class Auth{

    public function __construct($db) {
        $this->db = $db;

        }

    public function registerAcount($data){

        $query = "INSERT INTO users(roleId,userName,email,businessName,registrationNumber,physicalAddress,subscribeToNewsletter,user_password,contactemail,contactPhoneNumber,active) VALUES (3,'".libs::test_input($data['username'])."','".libs::test_input($data['email'])."','".libs::test_input($data['bssname'])."','".libs::test_input($data['regnumber'])."','".libs::test_input($data['phyadd'])."','".libs::test_input($data['sns'])."','".MD5($data['password'])."','".libs::test_input($data['contemail'])."','".libs::test_input($data['contnumber'])."','1')";


        $result = $this->db-> query( $query);

        if(!$result){

            echo json_encode(array("result" => "alert-danger","value" => "Error During registration"));
            
        }
        else{
                echo json_encode(array("result" => "alert-success","value" => "Registration complete.Login to continue"));
                
            }
        
        }

    public function loginAcount($data){

        $query = "SELECT * FROM users WHERE email = '".$data["log-email"]."' AND user_password = '".md5($data['password'])."'";

        $result = $this->db-> query($query);

        if (mysqli_num_rows($result) != 1) {
      
            echo json_encode(array("result" => "alert-danger","value" => "Error Login Failed"));

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

    public function forgotPassword($data){

        
            //$mail->Password   = "0w_xRVTpxJg5aoFWWHR5IQ";
            //$mail->Password   = "ewgSvy-bxAKon6BjxFe4UA";
        $mandrill = new Mandrill('0w_xRVTpxJg5aoFWWHR5IQ');
        $sen_name = "Glenn";
        $sen_email = "law@cmadvocates.com";
        $rec_name = "Tedd";
        $rec_email = "glenntedd@gmail.com";
        $email_type = "to";
        $email_sub = "Trial";
        $msg_type = "html";
        $box_msg = "<p>Trial</p>";
        $message = array();
        $to = array();

        $to[] = array(
        'email' => $rec_email,
        'name' => $rec_name,
        'type' => $email_type
        );
        $message['subject'] = $email_sub;
        $message[$msg_type] = $box_msg;
        $message['from_email'] = $sen_email;
        $message['from_name'] = $sen_name;
        $message['to'] = $to;
        if(isset($to[0]['email']) && $to[0]['email'] !== ""){
        $result = $mandrill->messages->send($message);
        print_r($result);
        }else{
            echo "error";
        }

        //echo $data;
       // echo libs::mail_template($data,"Password recovery","CMA email recovery","Ypasadeq12313");
      
        
        /*$query = "SELECT email from users WHERE email = '".$data."'";
        $result = $this->db->query($query);

        if (!$result) {
      
            echo json_encode(array("result" => "error","value" => "Email does not exist"));
          
        }else {
            
            while($row=$result -> fetch_assoc()){

                if(libs::mail_template ($row["email"],"Password recovery","CMA email recovery","Ypasadeq12313")){

            
                    echo json_encode(array("result" => "sent","value" => "Check your email for the password."));
               
                }
                else{
                    
                    echo json_encode(array("result" => "error","value" => "Email not sent.Contact Us at ....."));
                
                }
         
           }
        
         }
               

        */}

        
        
    
    

    public function logOut(){

        session_unset();

        // destroy the session
        session_destroy();
        echo json_encode(array("result" => $_SESSION,"path" => 'https://cmversiontwo.cmadvocates.com/'));

      }

}


    
class User{
    public function __construct($db) {
        $this->db = $db;
      
        }

    public function updateme($data){
		$query ="UPDATE users SET userName='".libs::test_input($data['myname'])."',email = '".libs::test_input($data['mymail'])."' WHERE id = ".$_SESSION['id'];

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Error Updating"));
        
       }
	   else{
		   $this->getUser($_SESSION['id']);
	   }
    }

	public function getUser($id){
		$query = "SELECT * FROM users WHERE id = ".$id;

        $result = $this->db->query($query);

        if (mysqli_num_rows($result) != 1) {
      
            echo json_encode(array("result" => "alert-danger","value" => "Error User Not found"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                $_SESSION['username'] = $row['userName'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['role'] = $row['roleId'];
                $_SESSION['id'] = $row['id'];
				echo json_encode(array("result" => "alert-success","value" => "User Updated"));
                
           }

          }
       
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
    public function profile(){
        $query = "SELECT * FROM users WHERE id = ".$_SESSION['id'];

        $result = $this->db->query($query);
        $profile = array();

        if (mysqli_num_rows($result) != 1) {
      
            echo json_encode(array("result" => "alert-danger","value" => "Error User Not found"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                array_push($profile,array("email"=>$row['email'],"businessName"=>$row['businessName'],"registrationNumber"=>$row['registrationNumber'],"physicalAddress"=>$row['physicalAddress'],"contactPhoneNumber"=>$row['contactPhoneNumber'],"userName"=>$row['userName']));
               
                
           }
           echo json_encode(array("profile" => $profile));

          }

    }

    public function updateProfile($data){
        $query = "SELECT * FROM users WHERE id = ".$_SESSION['id'];

        $result = $this->db->query($query);
        $profile = array();

            while($row=$result -> fetch_assoc()){
                
          
              $profile[0] =  $row['email'];
              $profile[1] = $row['businessName'];
              $profile[2] =  $row['registrationNumber'];
              $profile[3] = $row['physicalAddress'];
              $profile[4] =  $row['contactPhoneNumber'];
              $profile[5] = $row['userName'];
                
           }
        
           if(strcmp($data['emailp'], $profile[0]) == 0 ){
           $query = "UPDATE users SET 
            businessName = '".libs :: check($data['businessName'],$profile[1])."',
            registrationNumber = '".libs :: check($data['registrationNumber'],$profile[2])."',
            physicalAddress = '".libs :: check($data['physicalAddress'],$profile[3])."',
            contactPhoneNumber = '".libs :: check($data['phoneNumber'],$profile[4])."',
            userName = '".libs :: check($data['contactFirstName'],$profile[5])."'

            WHERE id = 
            ".$_SESSION['id'];    
           }else{
            $query = "UPDATE users SET 
            email = '".libs :: check($data['emailp'],$profile[0])."',
            businessName = '".libs :: check($data['businessName'],$profile[1])."',
            registrationNumber = '".libs :: check($data['registrationNumber'],$profile[2])."',
            physicalAddress = '".libs :: check($data['physicalAddress'],$profile[3])."',
            contactPhoneNumber = '".libs :: check($data['phoneNumber'],$profile[4])."',
            userName = '".libs :: check($data['contactFirstName'],$profile[5])."'
            
            WHERE id = 
            ".$_SESSION['id'];
           }
   
   
           $result = $this->db-> query( $query);

           if(!$result){
    
            echo json_encode(array("result" => "fail","value" => $this->db->error));
    
           }
           else{
    
            echo json_encode(array("result" => "success","value" => "Profile updated"));
    
            } 
    
 
    }

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
            $mail->AddAddress($email, "recipient-name");
            $mail->SetFrom("glenntedd@gmail.com", "from-name");
            $mail->AddReplyTo("glenntedd@gmail.com", "reply-to-name");
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
        ini_set('upload_max_filesize', '500M');
        ini_set('post_max_size', '500M');
        ini_set('max_input_time', 300000);
        ini_set('max_execution_time', 300000);

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
        ini_set('upload_max_filesize', '500M');
        ini_set('post_max_size', '500M');
        ini_set('max_input_time', 300000);
        ini_set('max_execution_time', 300000);
                
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
class Lawyers{

        public function __construct($db) {
            $this->db = $db;
    
            }
    
        public function addLawyer($data){

            $pass = md5(password_hash(rand(3,1000000000000), PASSWORD_DEFAULT));
    
            $query = "INSERT INTO users(roleId,userName,email,user_password, businessName, registrationNumber,physicalAddress, `contactemail`, `contactPhoneNumber`) VALUES (2,'','".libs::test_input($data['lawyer_email'])."','".$pass."','','','','','')";
    
    
           $result = $this->db-> query( $query);
    
           if(!$result){
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error."Error adding user"));
        
           }
           else{
            $query = "INSERT INTO advocates_details(id, lawyer_type, lawyer_status) VALUES (".User::getUserId($data['lawyer_email'],$this->db).",'holder','holder')";
            $result = $this->db-> query( $query);
    
            if(!$result){
     
             echo json_encode(array("result" => "alert-danger","value" => $query));
         
            }
            else{
                $body = "<p>Welcome to CMA. To access you portal</p><p>username : ".$data['lawyer_email']."</p> <p>password :". $pass."</p>";
            if(libs::mail_template ($data['lawyer_email'],"Welcome to CMA","CMA Join",$body)){

            
                echo json_encode(array("result" => "alert-success","value" => "Check your email for the password."));
           
            }
            else{
                
                echo json_encode(array("result" => "alert-danger","value" => "Email not sent.Contact Us at ....."));
            
            }

    
            }  
            

            
            }
           
        }
    
        public function advocatesDetails($id,$type,$status){
    
            $query = "INSERT INTO users(id,lawyer_type,lawyer_status) VALUES ($id,$type,$status)";
    
    
           $result = $this->db-> query( $query);
    
           if(!$result){
    
            echo json_encode(array("result" => "error","value" => "Error Adding Advocate"));
            
           }
           else{
           echo json_encode(array("result" => "success","value" => "Advocate added"));
      
           }
    
        }

        public function listLawyers(){
      
            $query = "SELECT * FROM vw_lawyers";

            $result = $this->db->query($query);

            $lawyer = array();

            if (!$result) {
        
                echo json_encode(array("result" => "alert-danger","value" => "Error Login Failed"));

                exit();

            }else {
                while($row=$result -> fetch_assoc()){
                    
                     array_push($lawyer,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"type"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
                   
                    
            }
            echo json_encode(array("lawyers" => $lawyer));

            }
        
        }
        
        
        public function listLawyersSearch($data){
      
            $query = "SELECT * FROM vw_lawyers WHERE userName LIKE '%".$data['search']."%' OR email LIKE '%".$data['search']."%' OR lawyer_type LIKE '%".$data['search']."%' OR lawyer_status LIKE '%".$data['search']."%'";

            $result = $this->db->query($query);

            $lawyer = array();

            if (!$result) {
        
                echo json_encode(array("result" => "alert-danger","value" => "User not found"));

                exit();

            }else {
                while($row=$result -> fetch_assoc()){
                    
                     array_push($lawyer,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"type"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
                   
                    
            }
            echo json_encode(array("lawyers" => $lawyer));

            }
        
        }
        
        public function approveLawyer($data){

            $query="UPDATE advocates_details SET lawyer_status='approved' WHERE id =".$data['app_lawyer'];

            
           $result = $this->db-> query( $query);
    
           if(!$result){
    
            echo json_encode(array("result" => "alert-danger","value" => "Advocate not approved"));
        
           }
           else{

            echo json_encode(array("result" => "alert-success","value" => "Advocate approved"));
        
           }
    
        }

        public function declineLawyer($data){
            $query="UPDATE advocates_details SET lawyer_status='declined' WHERE id =".$data['dec_lawyer'];

            
           $result = $this->db-> query( $query);
    
           if(!$result){
    
            echo json_encode(array("result" => "alert-danger","value" => "Advocate not declined"));
        
           }
           else{

            echo json_encode(array("result" => "alert-success","value" => "Advocate Declined"));
        
           }
    
        }
        public function editlawyer($data){
            
            $query="UPDATE users SET email='".$data['lawyer_edit_email']."' WHERE id =".$data['lawyer_id'];

            
            $result = $this->db-> query( $query);
     
            if(!$result){
     
             echo json_encode(array("result" => "alert-danger","value" => "Advocate not Edited"));
         
            }
            else{
 
             echo json_encode(array("result" => "alert-success","value" => "Advocate Edited"));
         
            }
     
        }
        
      
    
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

    
    public function listProducts(){
  
        $query = "SELECT * FROM product";

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
  

}

class Subscriptions{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addSubscriptions($data){

     $query ="INSERT INTO `subscriptions`(`subscriptions_name`, `product_id`, `service_id`, 
     `limit_users`, `discount_applicable`, `offer_applicable`,
      `sub_status`, `validity`, `downloads`,
       `con_hours`,`payment_terms_id`, `document_bundle`,
       `city`,`description`, `benefits`) VALUES
        ('".$data['sub_name']."','".$data['prod']."','".$data['serv']."',
        '".$data['limit_user']."','".$data['discount']."','".$data['offer']."',
        '".$data['status']."','".$data['validity']."','".$data['nodd']."',
        '".$data['cons_hours']."','".$data['payment_terms']."','".$data['dbundle']."',
        '".$data['city']."','".$data['description']."','".$data['benefit']."'
        )";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Subscription not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Subscription added"));
    
        }
       
    }

    public function getSubscriptions(){
        
        
        $query = "SELECT id, subscriptions_name, validity, product_name,sub_status,description FROM vw_subscriptions";

        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"valid"=>$row['validity'],"product_name"=>$row['product_name'],"status"=>$row['sub_status'],"desc"=>$row['description']));
               
                
        }
        echo json_encode(array("subscriptions" => $subscription));

        }
    }

    public function editSubscriptions($data){
       $query = "UPDATE subscriptions SET subscriptions_name='".$data['edit_sub_name']."',
       product_id=".$data['prod'].",service_id=".$data['serv'].",
       limit_users='".$data['limit_user']."',discount_applicable='".$data['discount']."',
       offer_applicable='".$data['offer']."',sub_status='".$data['status']."',
       validity='".$data['validity']."',downloads='".$data['nodd']."',
       payment_terms_id=".$data['payment_terms'].",
       document_bundle='".$data['dbundle']."',city='".$data['city']."',
       description='".$data['description']."',benefits='".$data['benefit']."' WHERE id = ".$data['id']; 
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Subscription updated"));
    
        } 
    }

    public function listSubscriptionSearch($data){
        $query = "SELECT * FROM vw_subscriptions WHERE subscriptions_name LIKE '%".$data['search_sub']."%' OR validity LIKE '%".$data['search_sub']."%' OR sub_status LIKE '%".$data['search_sub']."%'  OR product_name LIKE '%".$data['search_sub']."%'";

        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"valid"=>$row['validity'],"product_name"=>$row['product_name'],"status"=>$row['sub_status']));
               
                
        }
        echo json_encode(array("subscriptions" => $subscription));

        }
    }
    
}

class Payment_terms{

    
    public function __construct($db) {
        $this->db = $db;

        }

    public function addPaymentTerms($data){

     $query ="INSERT INTO `payment_terms`(`payment_terms_name`, `payment_term_status`, `payment_term_text`) VALUES ('".$data['addpaymentterms']."','".$data['paystatus']."','".$data['paymenttermtextarea']."') ";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Payment Terms not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Payment Terms added"));
    
        }
       
    }

    public function getPaymentTerms($data){
        
        
        $query = "SELECT `id`, `payment_terms_name`, `payment_term_status`, `payment_term_text` FROM `payment_terms`";

        $result = $this->db->query($query);

        $pyterm = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pyterm,array("id"=>$row['id'],"Name"=>$row['payment_terms_name'],"status"=>$row['payment_term_status'],"txt"=>$row['payment_term_text']));
               
                
        }
        echo json_encode(array("pyterms" => $pyterm));

        }
    }

    public function editPaymentTerms($data){
       $query = "UPDATE `payment_terms` SET `payment_terms_name`='".$data['edit_name_pyterms']."',`payment_term_status`='".$data['edit_payment_terms_status']."',`payment_term_text`='".$data['edit_text_pyterms']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Subscription not updated"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Subscription updated"));
    
        } 
    }
    
    public function deletepytm($data){
        
        $query="DELETE FROM payment_terms WHERE id = ".$data['delete_pytm'];

        $result = $this->db-> query( $query);
 
        if(!$result){
 
         echo json_encode(array("result" => "alert-danger","value" => $query));
     
        }
        else{

         echo json_encode(array("result" => "alert-success","value" => "Payment term deleted"));
     
        }
        
    }

    

    public function listpytmSearch($data){
        $query = "SELECT * FROM payment_terms WHERE payment_terms_name LIKE '%".$data['search_pytm']."%' OR payment_term_status LIKE '%".$data['search_pytm']."%' OR payment_term_text LIKE '%".$data['search_pytm']."%'";

        $result = $this->db->query($query);

        $pyterm = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pyterm,array("id"=>$row['id'],"Name"=>$row['payment_terms_name'],"status"=>$row['payment_term_status'],"txt"=>$row['payment_term_text']));
                
        }
        echo json_encode(array("pyterms" => $pyterm));
     }
    } 
}


class Category{

    
    public function __construct($db) {
        $this->db = $db;

        }

    public function alterTable(){
           
        $query = "ALTER TABLE category ADD COLUMN `category_code` varchar(255) NOT NULL DEFAULT '0';";

        $result = $this->db->query($query);

        $category = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($category,array("id"=>$row['id'],"Name"=>$row['category_name'],"code"=>$row['category_code'],"status"=>$row['category_status']));
               
                
        }
        echo json_encode(array("categories" => $category));

        } 
        }

    public function addCategory($data){

     $query ="INSERT INTO `category`(`category_name`,`category_code` ,`category_status`) VALUES ('".$data['categoryName']."','".$data['category_code']."','".$data['categoryStatus']."') ";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Category not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Category added"));
    
        }
       
    }

    public function getCategories($data){
        
        
        $query = "SELECT `id`, `category_name`,`category_code` ,`category_status` FROM `category` ";

        $result = $this->db->query($query);

        $category = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Categories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($category,array("id"=>$row['id'],"Name"=>$row['category_name'],"code"=>$row['category_code'],"status"=>$row['category_status']));
               
                
        }
        echo json_encode(array("categories" => $category));

        }
    }

    public function editCategories($data){
       $query = "UPDATE `category` SET `category_name`='".$data['editcategoryName']."',`category_code`='".$data['category_code']."',`category_status`='".$data['exampleRadios']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Categories not edited"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Categories updated"));
    
        } 
    }


    public function addSubCategory($data){

     $query ="INSERT INTO `sub_category`(`sub_category_name`, `categoryid`, `sub_category_status`) VALUES ('".$data['subcategoryName']."','".$data['catid']."','".$data['categorysubStatus']."') ";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Sub-Category not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Sub-Category added"));
    
        }
       
    }

    public function getSubCategories($data){
        
        
        $query = "SELECT `id`, `sub_category_name`,`categoryid` ,`sub_category_status` FROM `sub_category` ";

        $result = $this->db->query($query);

        $subcategory = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscategories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subcategory,array("id"=>$row['id'],"Name"=>$row['sub_category_name'],"catid"=>$row['categoryid'],"status"=>$row['sub_category_status']));
               
                
        }
        echo json_encode(array("subcategories" => $subcategory));

        }
    }
    
    public function getsubCategoriesSpec($data){
        
        
        $query = "SELECT `id`, `sub_category_name`, `sub_category_status` FROM `sub_category` WHERE `id` =".$data['id'];

        $result = $this->db->query($query);

        $subcategory = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscategories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subcategory,array("id"=>$row['id'],"Name"=>$row['sub_category_name'],"status"=>$row['sub_category_status']));
               
                
        }
        echo json_encode(array("subcategories" => $subcategory));

        }
    }

    public function editSubCategories($data){
       $query = "UPDATE `sub_category` SET `sub_category_name`='".$data['editsubcategoryname']."',`categoryid`='".$data['id']."',`sub_category_status`='".$data['exampleRadios']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Sub-Categories not edited"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Sub-Categories updated"));
    
        } 
    }

    public function listCategoriesSearch($data){


        $query = "SELECT * FROM category WHERE category_name LIKE '%".$data['search_cat']."%' OR category_status LIKE '%".$data['search_cat']."%'";

        $result = $this->db->query($query);

        $category = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($category,array("id"=>$row['id'],"Name"=>$row['category_name'],"status"=>$row['category_status']));
               
                
        }
        echo json_encode(array("categories" => $category));

        }

    }

    
    public function listSubCategoriesSearch($data){


        $query = "SELECT * FROM sub_category WHERE sub_category_name LIKE '%".$data['search_sub_category']."%' OR sub_category_status LIKE '%".$data['search_sub_category']."%' ";

        $result = $this->db->query($query);

        $subcategory = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscategories"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subcategory,array("id"=>$row['id'],"Name"=>$row['sub_category_name'],"status"=>$row['sub_category_status']));
               
                
        }
        echo json_encode(array("subcategories" => $subcategory));

        }

    }
}
class Service{

    
    public function __construct($db) {
        $this->db = $db;

        }

    public function addService($data){

     $query ="INSERT INTO `service`(`service_name`, `service_status`) VALUES ('".$data['serviceName']."','".$data['serviceStatus']."') ";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Service not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Service added"));
    
        }
       
    }

    public function getService($data){
        
        
        $query = "SELECT `id`, `service_name`, `service_status` FROM `service` ";

        $result = $this->db->query($query);

        $service = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Service"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($service,array("id"=>$row['id'],"Name"=>$row['service_name'],"status"=>$row['service_status']));
               
                
        }
        echo json_encode(array("services" => $service));

        }
    }

    public function getAllService(){
        
        
        $query = "SELECT * FROM `all_services` ";

        $result = $this->db->query($query);

        $service = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Service"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($service,array("id"=>$row['id'],"Name"=>$row['name'],"service_name"=>$row['service_name'],"service_type"=>$row['service_type'],"price"=>$row['price'],"desc"=>$row['description']));
               
                
        }
        echo json_encode(array("services" => $service));

        }
    }


    public function editService($data){
       $query = "UPDATE `service` SET `service_name`='".$data['editserviceName']."',`service_status`='".$data['editserviceStatus']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "services not edited"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "services updated"));
    
        } 
    }

    
    public function listservSearch($data){
        $query = "SELECT * FROM `service` WHERE service_status LIKE '%".$data['search_serv']."%' OR service_name LIKE '%".$data['search_serv']."%'";
        
        $result = $this->db->query($query);

        $service = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Service"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($service,array("id"=>$row['id'],"Name"=>$row['service_name'],"status"=>$row['service_status']));
               
                
        }
        echo json_encode(array("services" => $service));

        }
    } 


}


class Documents{
 
    public function __construct($db) {
        $this->db = $db;
        }


        public function create_view(){
            $query ="CREATE VIEW vw_document AS SELECT Documents.id,Documents.document_name,Documents.document_price,Documents.toc,Documents.document_description,
            product.product_name,subscriptions.subscriptions_name FROM Documents 
            JOIN subscriptions ON Documents.subscription_id = subscriptions.id
            JOIN product ON Documents.product_id = product.id
            JOIN category ON Documents.category_id = category.id
            JOIN sub_category ON Documents.sub_category_id = sub_category.id
            JOIN service ON Documents.service_id = service.id;
            ";
      
            $result = $this->db-> query($query);
       
              if(!$result){
       
               echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
           
              }
              else{
               
               echo json_encode(array("result" => "alert-success","value" => "Document  added"));
           
               }
            
        }

    public function addDocument($data){
        $document = libs :: uploadFile($_FILES['docu'],"uploadDocuments");
       $pre = "preview ->";
       if(!empty($_FILES['preview']['name']) ){
        $preview = libs :: uploadFiles($_FILES['preview'],"uploadPreviews");
       
        foreach ($preview as  $value) {
            $pre = $pre.",".$value;
        }
           
         $query ="INSERT INTO `Documents`(`document_name`, `document_price`, `document_preview`, `subscription_id`,".
         " `service_id`, `product_id`, `category_id`, `sub_category_id`,".
         " `document`, `toc`, `document_description`) VALUES ". 
         "('".$data['document_name']."','".$data['document_price']."','".$pre."','".$data['sub']."',".
         "'".$data['serv']."','".$data['prod']."','".$data['cat']."','".$data['subcat']."',".
         "'".$document."','".$data['table_of_contents']."','".$data['document_description']."')";
   
       }else{
   
        
        $query ="INSERT INTO `Documents`(`document_name`, `document_price`, `document_preview`, `subscription_id`,".
        " `service_id`, `product_id`, `category_id`, `sub_category_id`,".
        " `document`, `toc`, `document_description`) VALUES ". 
        "('".$data['document_name']."','".$data['document_price']."','No preview','".$data['sub']."',".
        "'".$data['serv']."','".$data['prod']."','".$data['cat']."','".$data['subcat']."',".
        "'".libs :: uploadFile($_FILES['docu'],"uploadDocuments")."','".$data['table_of_contents']."','".$data['document_description']."')";
  
       }
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Document  added"));
       
           }
      
    } 
    public function getDocuments(){
      
        
        $query = "SELECT `id`, `document_name`, `product_name`,`document_price`, `toc`, `document_description`, `subscriptions_name` FROM `vw_document`";
        $result = $this->db->query($query);
        $document = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"product"=>$row['product_name'],"subscription"=>$row['subscriptions_name'],"price"=>$row['document_price'],"toc"=>$row['toc'],"document_description"=>$row['document_description']));
               
                
        }
        echo json_encode(array("documents" => $document));
        }  
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
      
    public function editDocument($data){
       $pre = "preview ->";
       if(!empty($_FILES['preview']['name']) && !empty($_FILES['docu']['name'])){
        $document = libs :: uploadFile($_FILES['docu'],"uploadDocuments");
       $preview = libs :: uploadFiles($_FILES['preview'],"uploadPreviews");
        foreach ($preview as  $value) {
            $pre = $pre.",".$value;
        }
        $query = "UPDATE `Documents` SET `document_name`='".$data['document_name']."',`document_price`='".$data['document_price']."',`document_preview`='".$pre."',".
        "`subscription_id`='".$data['sub']."',`service_id`='".$data['serv']."',`product_id`='".$data['prod']."',".
        "`category_id`='".$data['cat']."',`sub_category_id`='".$data['subcat']."',`document`='".$document."',".
        "`toc`='".$data['table_of_contents']."',`document_description`='".$data['document_description']."' WHERE id =".$data['id'];
           
       }elseif (!empty($_FILES['preview']['name']) && empty($_FILES['docu']['name'])) {
           # code...
           $preview = libs :: uploadFiles($_FILES['preview'],"uploadPreviews");
        foreach ($preview as  $value) {
            $pre = $pre.",".$value;
        }
           $query = "UPDATE `Documents` SET `document_name`='".$data['document_name']."',`document_price`='".$data['document_price']."',`document_preview`='".$pre."',".
           "`subscription_id`='".$data['sub']."',`service_id`='".$data['serv']."',`product_id`='".$data['prod']."',".
           "`category_id`='".$data['cat']."',`sub_category_id`='".$data['subcat']."',".
           "`toc`='".$data['table_of_contents']."',`document_description`='".$data['document_description']."' WHERE id =".$data['id'];
   
       }elseif (empty($_FILES['preview']['name']) && !empty($_FILES['docu']['name'])) {
        # code...
        
        $document = libs :: uploadFile($_FILES['docu'],"uploadDocuments");
        $query = "UPDATE `Documents` SET `document_name`='".$data['document_name']."',`document_price`='".$data['document_price']."',".
        "`subscription_id`='".$data['sub']."',`service_id`='".$data['serv']."',`product_id`='".$data['prod']."',".
        "`category_id`='".$data['cat']."',`sub_category_id`='".$data['subcat']."',`document`='".$document."',".
        "`toc`='".$data['table_of_contents']."',`document_description`='".$data['document_description']."' WHERE id =".$data['id'];
        }else
       {
        $query = "UPDATE `Documents` SET `document_name`='".$data['document_name']."',`document_price`='".$data['document_price']."',".
        "`subscription_id`='".$data['sub']."',`service_id`='".$data['serv']."',`product_id`='".$data['prod']."',".
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
                
                 array_push($document,array("id"=>$row['id'],"Name"=>$row['document_name'],"product"=>$row['product_name'],"subscription"=>$row['subscriptions_name'],"price"=>$row['document_price'],"toc"=>$row['toc'],"document_description"=>$row['document_description']));
               
                
        }
        echo json_encode(array("documents" => $document));
        }
    }
}
class Country{
    public function __construct($db) {
        $this->db = $db;
        }
    public function addCountry($data){
     $query ="INSERT INTO `contries`(`country_name`, `country_code`, `applicable_to_seller`, `country_status`) VALUES ('".$data['country_name']."','".$data['country_code']."','".$data['exampleRadios']."','".$data['status']."') ";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                
       $result = $this->db-> query( $query);
       if(!$result){
        echo json_encode(array("result" => "alert-danger","value" => "Country not added"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Country added"));
    
        }
       
    }
    public function getCountries(){
        
        
        $query = "SELECT `id`, `country_name`, `country_code`, `applicable_to_seller`, `country_status` FROM `contries`";
        $result = $this->db->query($query);
        $country = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($country,array("id"=>$row['id'],"Name"=>$row['country_name'],"code"=>$row['country_code'],"app_seller"=>$row['applicable_to_seller'],"status"=>$row['country_status']));
               
                
        }
        echo json_encode(array("countries" => $country));
        }
    }
    public function editCountry($data){
       $query = "UPDATE `contries` SET `country_name`='".$data['country_name_edit']."',`country_code`='".$data['country_code']."',`applicable_to_seller`='".$data['exampleRadios']."',`country_status`='".$data['status']."' WHERE id = ".$data['id']; 
      
       $result = $this->db-> query( $query);
       if(!$result){
        echo json_encode(array("result" => "alert-danger","value" => "Country not edited"));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Country updated"));
    
        } 
    }

    
    public function listCountriesSearch($data){


        $query = "SELECT * FROM contries WHERE country_name LIKE '%".$data['search_country']."%' OR country_status LIKE '%".$data['search_country']."%' ";
        $result = $this->db->query($query);
        $country = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($country,array("id"=>$row['id'],"Name"=>$row['country_name'],"code"=>$row['country_code'],"app_seller"=>$row['applicable_to_seller'],"status"=>$row['country_status']));
               
                
        }
        echo json_encode(array("countries" => $country));
        }
    }
}

class PracticeArea{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addPracticeArea($data){

     $query ="INSERT INTO `practice_area`(`pa_name`, `pa_status`,`pa_description`) VALUES ('".$data['pa_name']."','".$data['status']."','".$data['desc']."')";


       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Country not added"));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Country added"));

        }

    }
    public function getPracticeArea(){
        
        
        $query = "SELECT `id`, `pa_name`, `pa_status` FROM `practice_area`";
        $result = $this->db->query($query);
        $pa = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pa,array("id"=>$row['id'],"Name"=>$row['pa_name'],"status"=>$row['pa_status']));
               
                
        }
        echo json_encode(array("pas" => $pa));
        }
    }
    

    public function editPracticeArea($data){
       
        
        
        $query = "SELECT `id`, `pa_name`, `pa_status`,`pa_description` FROM `practice_area` WHERE id=".$data['id'];
        $result = $this->db->query($query);
            while($row=$result -> fetch_assoc()){
                
               $pa_status = $row['pa_status'];
               $pa_desc = $row['pa_description'];
                
        }
       
        $query = "UPDATE `practice_area` SET 
        `pa_name`='".$data['edit_practise_name']."',
        `pa_status`='".libs :: check($data['edit_pa_status'],$pa_status)."',
        `pa_description` = '".libs :: check($data['desc'],$pa_desc)."'
         WHERE id = ".$data['id']; 

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Practice Area updated"));

        } 
    }
    public function listPracticeSearch($data){
        $query = "SELECT * FROM practice_area WHERE pa_name LIKE '%".$data['search_practise_area']."%' OR pa_status LIKE '%".$data['search_practise_area']."%' ";
        $result = $this->db->query($query);
        $pa = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($pa,array("id"=>$row['id'],"Name"=>$row['pa_name'],"status"=>$row['pa_status']));
               
                
        }
        echo json_encode(array("pas" => $pa));
        }
    }
}


class SkillSet{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addSkillSet($data){

     $query ="INSERT INTO `skill_set`(`skill_set_name`, `pa_id`, `skill_set_status`, `skill_set_brief_description`) VALUES ('".$data['skillset_name']."','".$data['pa_id']."','".$data['status']."','".$data['desc']."')";


       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Skill Set not added"));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Skill Set added"));

        }

    }
    public function getSkillSet(){
        
        
        $query = "SELECT `id`, `skill_set_name`,`skill_set_status` FROM `skill_set`";
        $result = $this->db->query($query);
        $ss = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($ss,array("id"=>$row['id'],"Name"=>$row['skill_set_name'],"status"=>$row['skill_set_status']));
               
                
        }
        echo json_encode(array("sss" => $ss));
        }
    }


    public function editSkillSet($data){


        $query = "SELECT * FROM `skill_set` WHERE id =".$data['id'];
        $result = $this->db->query($query);
            while($row=$result -> fetch_assoc()){
                
                 $pa_id = $row['pi_id'];
                 $skill_set_status = $row['skill_set_status'];
                 $desc = $row['skill_set_brief_description'];
               
                
        }

        $query = "UPDATE skill_set SET
        skill_set_name =  '".$data['edit_skillSet']."',
        pa_id = '".libs :: check($data['pa_id'],$pa_id)."',
        skill_set_status='".libs :: check($data['status'],$skill_set_status)."',
        skill_set_brief_description='".libs :: check($data['skill_set_brief_description'],$desc)."'
        WHERE id = ".$data['id']; 

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Skill Set updated"));

        } 
    }
    
    public function listSkillsetSearch($data){


        $query = "SELECT * FROM skill_set WHERE skill_set_name LIKE '%".$data['search_skill_set']."%' OR skill_set_status LIKE '%".$data['search_skill_set']."%' ";
        $result = $this->db->query($query);
        $ss = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($ss,array("id"=>$row['id'],"Name"=>$row['skill_set_name'],"status"=>$row['skill_set_status']));
               
                
        }
        echo json_encode(array("sss" => $ss));
        }
    }

    
}


class LawyerType{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addLawyerType($data){

     $query ="INSERT INTO `lawyer_type`(`lawyer_type`, `lawyer_status`) VALUES ('".$data['lawyer_type_name']."','".$data['status']."')";


       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Lawyer Type not added"));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Lawyer Type added"));

        }

    }
    public function getLawyerType(){
        
        
        $query = "SELECT `id`, `lawyer_type`, `lawyer_status` FROM `lawyer_type`";
        $result = $this->db->query($query);
        $lt = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($lt,array("id"=>$row['id'],"Name"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
               
                
        }
        echo json_encode(array("lts" => $lt));
        }
    }
    

    public function editLawyerType($data){
       $query = "UPDATE `lawyer_type` SET `lawyer_type`='".$data['edit_lawyer_type_name']."',`lawyer_status`='".$data['status']."' WHERE id = ".$data['id']; 

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => "Lawyer Type not edited"));

       }
       else{

        echo json_encode(array("result" => "alert-success","value" => "Lawyer Type updated"));

        } 
    }

    public function listlawyertypeSearch($data){
        $query = "SELECT * FROM `lawyer_type` WHERE lawyer_status LIKE '%".$data['search_lawyer_type']."%' OR lawyer_type LIKE '%".$data['search_lawyer_type']."%'";
        $result = $this->db->query($query);
        $lt = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Contries"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($lt,array("id"=>$row['id'],"Name"=>$row['lawyer_type'],"status"=>$row['lawyer_status']));
               
                
        }
        echo json_encode(array("lts" => $lt));
        }
    } 

}


class Videos{
 
    public function __construct($db) {
        $this->db = $db;
        }
    public function addvideo($data){
       $video = libs :: uploadFile($_FILES['videofile'],"uploadVideo");
       
       if(!empty($_FILES['videopreview']['name'])){
        $preview = libs :: uploadFile($_FILES['videopreview'],"uploadPreviews"); 
               
         $query = "INSERT INTO `videos`(`video_name`, `video`, `video_preview`, `service_id`,".
         " `product_id`, `subscription_id`, `video_status`, `video_brief_description`) ".
         "VALUES ('".$data['videoname']."','".$video."','".$preview."','".$data['serv']."'".
         ",'".$data['prod']."','".$data['sub']."','".$data['video_status']."','".$data['desc']."')";
   
       }else{
   
        
        $query = "INSERT INTO `videos`(`video_name`, `video`, `video_preview`, `service_id`,".
        " `product_id`, `subscription_id`, `video_status`, `video_brief_description`) ".
        "VALUES ('".$data['videoname']."','".$video."','No preview','".$data['serv']."'".
        ",'".$data['prod']."','".$data['sub']."','".$data['video_status']."','".$data['desc']."')";
  
        
       }
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => "Video Not added"));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Video  added"));
       
           }
      
    } 
    public function getvideos(){
      
        
        $query = "SELECT `id`, `video_name`, `subscriptions_name`, `video_status` FROM `vw_videos`";
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
    
    public function getServicevideos($data){
        
        
        $query = "SELECT `id`,`video_name`,`video_preview` FROM `vw_videos` WHERE service_id = ".$data;
        $result = $this->db->query($query);
        $video = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Documents"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
        array_push($video,array("id"=>$row['id'],"Name"=>$row['video_name'],"preview"=>$row['video_preview']));
               
                
        }
        echo json_encode(array("videos" => $video));
        }  
    }
      
    public function editVideo($data){
       if(!empty($_FILES['editPreview']['name']) && !empty($_FILES['editVideo']['name'])){
        
        
       
        $video = libs :: uploadFile($_FILES['editVideo'],"uploadVideo");
        $preview = libs :: uploadFile($_FILES['editPreview'],"uploadVideoPreview"); 
       
        $query = "UPDATE `videos` SET `video_name`='".$data['editvideoname']."',`video`='".$video."',`video_preview`='".$preview."',".
        "`service_id`='".$data['serv']."',`product_id`='".$data['prod']."',`subscription_id`='".$data['sub']."',`video_status`='".$data['stat']."',".
        "`video_brief_description`='".$data['breif']."' WHERE id =".$data['id'];

        


       }
       elseif (!empty($_FILES['editPreview']['name']) && empty($_FILES['editVideo']['name'])) {
           # code...
           $preview = libs :: uploadFile($_FILES['editPreview'],"uploadVideoPreview"); 
           
        $query = "UPDATE `videos` SET `video_name`='".$data['editvideoname']."',`video_preview`='".$preview."',".
        "`service_id`='".$data['serv']."',`product_id`='".$data['prod']."',`subscription_id`='".$data['sub']."',`video_status`='".$data['stat']."',".
        "`video_brief_description`='".$data['breif']."' WHERE id =".$data['id'];


       }
       elseif (empty($_FILES['editPreview']['name']) && !empty($_FILES['editVideo']['name'])) {
        # code...
        
        $video = libs :: uploadFile($_FILES['editVideo'],"uploadVideo");
       
        $query = "UPDATE `videos` SET `video_name`='".$data['editvideoname']."',`video`='".$video."',".
        "`service_id`='".$data['serv']."',`product_id`='".$data['prod']."',`subscription_id`='".$data['sub']."',`video_status`='".$data['stat']."',".
        "`video_brief_description`='".$data['breif']."' WHERE id =".$data['id'];


        }
        else{
           
       
        $query = "UPDATE `videos` SET `video_name`='".$data['editvideoname']."',`service_id`='".$data['serv']."',".
        "`product_id`='".$data['prod']."',`subscription_id`='".$data['sub']."',`video_status`='".$data['stat']."',".
        "`video_brief_description`='".$data['breif']."' WHERE id =".$data['id'];

       }
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => "video is not edited"));
       
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

class BusinessUnit{
    
    public function __construct($db) {
        $this->db = $db;
        }
    public function alterBusinessUnit(){
                   
             $query = "ALTER TABLE business_unit ADD preview_video varchar(255)";
       
              $result = $this->db-> query($query);
       
              if(!$result){
       
               echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
           
              }
              else{
               
               echo json_encode(array("result" => "alert-success","value" => "Table altered"));
           
               }
          
        } 
    public function addBusinessUnit($data){
               
         $query = "INSERT INTO `business_unit`(`business_unit_head`, `business_unit_member`,business_unit_preview,".
         " `practice_id`, `category_id`, `subcat_id`, `business_unit_status`, `business_brief_description`)".
         " VALUES ('".$data['bunith']."','".$data['bunitm']."','".$data['preview_image']."','".$data['pa']."','".$data['cat']."','".$data['subcat']."','".$data['stat']."','".$data['paymenttermtextarea']."')";
   
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Video  added"));
       
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

class Consultation{
    
    public function __construct($db) {
        $this->db = $db;
        }
    public function addConsultation($data){
               
         $query = "INSERT INTO `consultation`(`lawyer_type_id`, `practise_area_id`, `lawyers_tobe_consulted`,".
         " `duration`, `billing`, `consultation_status`, `sub_id`) VALUES ('".$data['lawtype']."',".
         "'".$data['pa']."','".$data['lawyer']."','".$data['duration']."','".$data['billing']."','".$data['constatus']."','".$data['sub']."')";
   
          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => "Consultation Not added"));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Consultaion added"));
       
           }
      
    } 
    public function getConsultations(){
      
        
        $query = "SELECT `id`, `consultation_status`, `duration`, `billing`, `lawyer_type`, `pa_name`, `subscriptions_name` FROM `vw_consultation`";
        $result = $this->db->query($query);
        $con = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Consultation"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($con,array("id"=>$row['id'],"duration"=>$row['duration'],"status"=>$row['consultation_status'],"billing"=>$row['billing'],"lawyer_type"=>$row['lawyer_type'],"pa_name"=>$row['pa_name'],"sub"=>$row['subscriptions_name']));
               
                
        }
        echo json_encode(array("cons" => $con));
        }  
    }
      
    public function editConsultation($data){

        $query = "UPDATE `consultation` SET `lawyer_type_id`='".$data['editlawtype']."',`practise_area_id`='".$data['editpa']."',".
        "`duration`='".$data['editduration']."',`billing`='".$data['editbilling']."',".
        "`consultation_status`='".$data['editstatus']."',`sub_id`='".$data['editsub']."'";

          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => "consultation is not edited"));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "consultation is edited"));
       
           }
      
    } 

    
    public function listconsSearch($data){
        $query = "SELECT * FROM vw_consultation WHERE consultation_status LIKE '%".$data['search_cons']."%' OR subscriptions_name LIKE '%".$data['search_cons']."%' OR pa_name LIKE '%".$data['search_cons']."%'";
        $result = $this->db->query($query);
        $con = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Consultation"));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($con,array("id"=>$row['id'],"duration"=>$row['duration'],"status"=>$row['consultation_status'],"billing"=>$row['billing'],"lawyer_type"=>$row['lawyer_type'],"pa_name"=>$row['pa_name'],"sub"=>$row['subscriptions_name']));
               
                
        }
        echo json_encode(array("cons" => $con));
        }  
    } 


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
            

            $query ="INSERT INTO `knowledge_hub`(
                `article_name`, `article_category`, `article_sub_category`, 
            `image_preview`, `articles`, `status`,
            `description`) VALUES ". 
            "('".$data['article_name']."','".$data['article_category']."','".$data['article_sub_category']."',
            '".$pre."','".$art."','".$data['status']."','".$data['description']."')";
            
         
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
                
            
            $query ="INSERT INTO `knowledge_hub`(
                `article_name`, `article_category`, `article_sub_category`, 
            `image_preview`, `articles`, `status`,
            `description`) VALUES ". 
            "('".$data['article_name']."','".$data['article_category']."','".$data['article_sub_category']."',
            '".$pre."','','".$data['status']."','".$data['description']."')";
    
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
                
            
            $query ="INSERT INTO `knowledge_hub`(
                `article_name`, `article_category`, `article_sub_category`, 
            `image_preview`, `articles`, `status`,
            `description`) VALUES ". 
            "('".$data['article_name']."','".$data['article_category']."','".$data['article_sub_category']."',
            '','".$art."','".$data['status']."','".$data['description']."')";
    
       }
       else{
   
        
        $query ="INSERT INTO `knowledge_hub`(
            `article_name`, `article_category`, `article_sub_category`, 
        `image_preview`, `articles`, `status`,
         `description`) VALUES ". 
        "('".$data['article_name']."','".$data['article_category']."','".$data['article_sub_category']."',
        '','','".$data['status']."','".$data['description']."')";

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

class Member{
 
    public function __construct($db) {
        $this->db = $db;
        }



    public function addMember($data){
        $query ="INSERT INTO `members`(
            `userName`, `userRole`, `email`, 
        `contact_number`, `status`, `description`) VALUES ". 
        "('".$data['member_name']."','".$data['member_role']."',
        '".$data['member_email']."','".$data['member_phone']."'
        ,'".$data['member_status']."','".$data['member_description']."')";

          $result = $this->db-> query($query);
   
          if(!$result){
   
           echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
       
          }
          else{
           
           echo json_encode(array("result" => "alert-success","value" => "Member added"));
       
           }
      
    } 
    public function getMember(){
      
        
        $query = "SELECT `id`,`userName`,`email`,`contact_number`,`status` FROM `members`";
        $result = $this->db->query($query);
        $member = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($member,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"number"=>$row['contact_number'],"status"=>$row['status']));
               
                
        }
        echo json_encode(array("members" => $member));
        }  
    }
      
    public function editMember($data){
        $query ="UPDATE TABLE `members` SET `userName` = '".$data['edit_member_name']."', 
        userRole = '".$data['rolename']."'
        ,`email` = '".$data['email']."',
        `contact_number`='".$data['phone']."',
        `status`='".$data['exampleRadios']."',
        `description`='".$data['des']."'
        WHERE id =".$data['id'];


        $result = $this->db-> query($query);

        if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
    
        }
        else{
        
        echo json_encode(array("result" => "alert-success","value" => "Member added"));
    
        }
    
   
        
            } 

    
    public function listMemberSearch($data){

        $query = "SELECT * FROM `members` WHERE userName LIKE '%".$data['search_members']."%' OR userRole LIKE '%".$data['search_members']."%' OR email LIKE '%".$data['search_members']."%' OR status LIKE '%".$data['search_members']."%' ";

        $result = $this->db->query($query);
        $member = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
      
                array_push($member,array("id"=>$row['id'],"Name"=>$row['userName'],"email"=>$row['email'],"number"=>$row['contact_number'],"status"=>$row['status']));
                         
        }
        echo json_encode(array("members" => $member));
        }  
    }
}
    ?>