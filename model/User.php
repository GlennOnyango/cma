<?php
require_once(__DIR__ . "/../config/Database.php");
require_once(__DIR__ . '/Utility.php');
require_once(__DIR__ . '/LoginSession.php');
class User {
    private $conn;
    private $utilityModel;
    // Constructor
    public function __construct(){
      $database = new Database();
      $db = $database->initiateConnection();
      $this->conn = $db;
      $this->utilityModel = new Utility();
      $this->loginSession = new LoginSession();
    }
    

	 // Get all users
    public function getAllUsers(){
      try{
        $stmt = $this->conn->prepare("SELECT * FROM users ORDER BY dateUpdated DESC");
        $stmt->execute();
        return $stmt->fetchAll();
      }catch(PDOException $e){
          echo $e->getMessage();
      }
    }

    // Get all users
    public function getUser($id=false, $email=false){
      $getCondition = $this->utilityModel-> getUserByCondition($id, $email);
      try{
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE $getCondition ORDER BY dateUpdated DESC");
        if($id){
          $stmt->bindparam(":id", $id);
        }
        if($email){
          $stmt->bindparam(":email", $email);
        }
        $stmt->execute();
        return $stmt->fetchAll();
      }catch(PDOException $e){
          echo $e->getMessage();
      }
    }
    
    // Get committee clerks
    public function getCommitteeClerks($committeeAssigned){
      try{
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE committee=:committee AND roleId=5 ORDER BY dateUpdated DESC");
        $stmt->bindparam(":committee", $committeeAssigned);
        $stmt->execute();
        return $stmt->fetchAll();
      }catch(PDOException $e){
          echo $e->getMessage();
      }
    }
    
    // Get admin users
    public function getAdminUsers(){
      try{
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE roleId=1 ORDER BY dateUpdated DESC");
        $stmt->execute();
        return $stmt->fetchAll();
      }catch(PDOException $e){
          echo $e->getMessage();
      }
    }
    // add new user
    public function addUser($userDetails){		
      	$columns = $this->utilityModel->getColumns($userDetails);
      	$values = $this->utilityModel->getValues($userDetails);
      	try{           
        	$stmt = $this->conn->prepare("INSERT INTO `users`($columns) VALUES ($values)");        	
        	return $stmt->execute();
      	}catch(PDOException $e){
        	echo $e->getMessage();
      	}
    }
    // Update user details
    public function editUser($id,$userDetails){
        $condition = $this->utilityModel-> getUserUpdateCondition($userDetails);

        try{
            $stmt = $this->conn->prepare("UPDATE users SET $condition WHERE id = :id");
            $stmt->bindparam(":id", $id);
            $stmt = $this->utilityModel->getEditUserBindParams($userDetails, $stmt);   
            $stmt->execute();
            return $stmt;
        }catch(PDOException $e){
          echo $e->getMessage();
        }
    }
   
    // Delete user
    public function deleteUser($userId){
      try{
        $stmt = $this->conn->prepare("DELETE FROM users WHERE id = :id");
        $stmt->bindparam(":id", $userId);
        $stmt->execute();
        return $stmt;
      }catch(PDOException $e){
          echo $e->getMessage();
      }
    }
    
    // Get logged in user details
    public function getLoggedInUserDetails(){
        $sessionDetails = $this->loginSession->getLoginSession($_COOKIE['SESSID']);
      try{
        $stmt = $this->conn->prepare("SELECT * FROM users WHERE id=:id ORDER BY dateUpdated DESC");
        $stmt->bindparam(":id", $sessionDetails[0]['userId']);
        $stmt->execute();
        return $stmt->fetch();
      }catch(PDOException $e){
          echo $e->getMessage();
      }
    }
}
?>