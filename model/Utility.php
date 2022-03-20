<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once(__DIR__ . '/../config/Database.php');
require(__DIR__ . '/../lib/phpmailer/PHPMailer.php');
require(__DIR__ . '/../lib/phpmailer/SMTP.php');
require(__DIR__ . '/../lib/phpmailer/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
class Utility {
	private $conn;
    // Constructor
    public function __construct(){
      $database = new Database();
      $db = $database->initiateConnection();
      $this->conn = $db;
    }

    // Execute queries SQL
    public function runQuery($sql){
      $stmt = $this->conn->prepare($sql);
      return $stmt;
    }

    public function getColumns($inputArray){
    	return implode(", ",array_keys($inputArray));
    }

    public function getValues($inputArray){
      foreach ($inputArray as $key=>$input) {
        if($key == 'password'){
          $input = password_hash($input, PASSWORD_DEFAULT);
        }
        if (is_numeric($input))
          $escapedValues[] = $input;
        else
          $escapedValues[] = "'".$input."'"; 

      }
      return implode(", ", $escapedValues);
    }

    public function getUserByCondition($id, $email){
      $condition = '';
      if($id){
        $condition.='id = :id';
      }
      if($email){
        if($condition){          
          $condition.='AND email = :email';
        }else{
          $condition.='email = :email';
        }
      }
      return $condition;
    }

    public function getUpdateCondition($id, $email){
      $condition = '';
      if($id){
        $condition.='id = :id';
      }
      if($email){
        if($condition){          
          $condition.='AND email = :email';
        }else{
          $condition.='email = :email';
        }
      }
      return $condition;
    }
    
    public function getUserUpdateCondition($updateDetails){
      $firstKey = array_key_first($updateDetails);
      $condition = '';
      $condition.="$firstKey = :$firstKey ";
      unset($updateDetails[$firstKey]);
      foreach($updateDetails as $k=>$val){
          $condition.=", $k = :$k ";
      }
      return $condition;
    }
    
    public function getStatusClassLabel($status){
        switch ($status) {
            case 'Admissible':
                return "label-success";
                break;
            case 'Not admissible':
                return "label-info";
                break;
            case 'approved':
                return "label-success";
                break;
            case 'Before committee':
                return "label-info";
                break;
            case 'Tabled':
                return "label-warning";
                break;
            case 'New':
                return "label-danger";
                break;
            case 'Not approved':
                return "label-warning";
                break;
            case 'Assigned':
                return "label-info";
                break;
            case 'House':
                return "label-info";
                break;
            case 'Closed':
                return "label-default";
                break;
            default:
                return "label-info";
                break;
        }
    }
    
    public function getRandomNotificationMessage(){
        $randomMessage = [
            'was changed to',
            'was recently changed to',
            'changed to',
            'has changed'
        ];
        $randomKey = array_rand($randomMessage, 1);
      return $randomMessage[$randomKey];
    }
    
    function timeElapsedString($datetime, $full = false) {
        $now = new DateTime;
        $ago = new DateTime($datetime);
        $diff = $now->diff($ago);
    
        $diff->w = floor($diff->d / 7);
        $diff->d -= $diff->w * 7;
    
        $string = array(
            'y' => 'year',
            'm' => 'month',
            'w' => 'week',
            'd' => 'day',
            'h' => 'hour',
            'i' => 'minute',
            's' => 'second',
        );
        foreach ($string as $k => &$v) {
            if ($diff->$k) {
                $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
            } else {
                unset($string[$k]);
            }
        }
    
        if (!$full) $string = array_slice($string, 0, 1);
        return $string ? implode(', ', $string) . ' ago' : 'just now';
    }
    
    function getMailConfig(){
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = 'mail.planetmediasystems.com';
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure='tls';
        $mail->Username = 'test@planetmediasystems.com';
        $mail->Password   = 'k@ubC4Z-4X&X';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 26;
        return $mail;
    }

    public function getEditUserBindParams($userDetails, $stmt){
            if(isset($userDetails['surname'])){
                $stmt->bindparam(":surname", $userDetails['surname']);    
            }
            if(isset($userDetails['firstName'])){
              echo "firstName";
              echo "<br>";
                $stmt->bindparam(":firstName", $userDetails['firstName']);
            }
            if(isset($userDetails['middleName'])){
                $stmt->bindparam(":middleName", $userDetails['middleName']);
            }
            if(isset($userDetails['email'])){
                $stmt->bindparam(":email", $userDetails['email']);
            }
            if(isset($userDetails['password'])){
                $stmt->bindparam(":password", password_hash($userDetails['password'], PASSWORD_DEFAULT));
            }
            if(isset($userDetails['idNumber'])){
                $stmt->bindparam(":idNumber", $userDetails['idNumber']);
            }
            if(isset($userDetails['phoneNumber'])){
                $stmt->bindparam(":phoneNumber", $userDetails['phoneNumber']);
            }
             if(isset($userDetails['contactFirstName'])){
                $stmt->bindparam(":contactFirstName", $userDetails['contactFirstName']);
            }
            if(isset($userDetails['contactLastName'])){
                $stmt->bindparam(":contactLastName", $userDetails['contactLastName']);
            }
            if(isset($userDetails['contactPhoneNumber'])){
                $stmt->bindparam(":contactPhoneNumber", $userDetails['contactPhoneNumber']);
            }
            if(isset($userDetails['businessName'])){
                $stmt->bindparam(":businessName", $userDetails['businessName']);
            }
            if(isset($userDetails['registrationNumber'])){
                $stmt->bindparam(":registrationNumber", $userDetails['registrationNumber']);
            }
            if(isset($userDetails['physicalAddress'])){
                $stmt->bindparam(":physicalAddress", $userDetails['physicalAddress']);
            }
            return $stmt;
    }
    
}