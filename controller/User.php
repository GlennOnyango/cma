<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$user = new User($db);
// $user->sortUserDirectory();
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
 if(isset($_GET['getPaymentDetails']) && $_GET['token1'] == $_SESSION['token']){
    $user->getPaymentDetails();
 }   
if(isset($_POST['emailp']) && $_POST['tokenp'] == $_SESSION['token']){
    $user->updateProfile($_POST);
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

    
	public function getPaymentDetails(){
		$query = "SELECT userName,email,contactPhoneNumber FROM users WHERE id = ".$_SESSION['id'];

        $result = $this->db->query($query);

        $profile = array(); 
        if (mysqli_num_rows($result) != 1) {
      
            echo json_encode(array("result" => "alert-danger","value" => "Error User Not found"));

            exit();

        }else {
            while($row=$result->fetch_assoc()){
                array_push($profile,array("result"=>"success","email"=>$row['email'],
                "name"=>$row['userName'],
                "phone_number"=>$row['contactPhoneNumber']));
               
                
           }
           echo json_encode(array("profile" => $profile));


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
                
                array_push($profile,array("email"=>$row['email'],"businessName"=>$row['businessName'],"registrationNumber"=>$row['registrationNumber'],"physicalAddress"=>$row['physicalAddress'],"contactPhoneNumber"=>$row['contactPhoneNumber'],"userName"=>$row['userName'],"user_image"=>$row['user_image']));
               
                
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

    
	public function sortUserDirectory(){
		$query = " Select id,email from users WHERE roleid = 3";
        $result = $this->db->query($query);

        while($row=$result -> fetch_assoc()){
             $row['email'];
             $row['id'];

             echo $row['email']."<br>";


             $fold = $_SERVER["DOCUMENT_ROOT"]."/controller/usersDirectories/";
        
             $folderName = $fold."". MD5($row['email']);
             $config['upload_path'] = $folderName;
             if(!is_dir($folderName))
             {
                 mkdir($folderName,  0777, true);
                 $query1 = "UPDATE users SET user_directory = '$folderName' WHERE id = ".$row['id'];
                 $result1 = $this->db->query($query1);
                 if(!$result1){echo "Directory not made";}
                 else{echo "Directory made";}
             }else{
                 echo "Directory exist";
             }
            
        }
	}

}

?>