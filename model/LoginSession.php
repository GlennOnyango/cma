<?php
require_once(__DIR__ . '/../config/Database.php');
class LoginSession {
	private $conn;
    // Constructor
    public function __construct(){
      $database = new Database();
      $db = $database->initiateConnection();
      $this->conn = $db;
    }

    public function saveLoginSession($userId,$sessionId){
      $ipAddress = $_SERVER['REMOTE_ADDR'];
      $dateExpires = date("Y-m-d H:i:s", strtotime("+24 hours"));
      try{
          $stmt = $this->conn->prepare("INSERT INTO login_sessions (userId,sessionId,ipAddress,dateExpires) VALUES(:userId,:sessionId,:ipAddress,:dateExpires)");
          $stmt->bindparam(":userId", $userId);
          $stmt->bindparam(":sessionId", $sessionId);
          $stmt->bindparam(":ipAddress", $ipAddress);
          $stmt->bindparam(":dateExpires", $dateExpires);
          return $stmt->execute();
      }catch(Exception $e){
        return $e->getMessage();
      }
    	return implode(", ",array_keys($inputArray));
    }

    public function getLoginSession($sessionId){
      $stmt = $this->conn->prepare("SELECT * FROM login_sessions WHERE sessionId=:sessionId ORDER BY dateCreated DESC LIMIT 1");
      $stmt->bindparam(":sessionId", $sessionId);
      $stmt->execute();
      return $stmt->fetchAll();
    }

    public function deactivateUser($sessionId){
      try{
          $stmt = $this->conn->prepare("UPDATE login_sessions SET active = false WHERE sessionId = :sessionId");
          $stmt->bindparam(":sessionId", $sessionId);          
          return $stmt->execute();
        }catch(PDOException $e){
          echo $e->getMessage();
        }
    }
    
    
}