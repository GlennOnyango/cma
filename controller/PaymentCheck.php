<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$payment = new Payment($db);


if(empty($_SESSION['id'])){
    header("Location: https://www.codegrepper.com/my-redirect-page.php");
    exit();
}


$payment->getPayment();




class Payment{

    public function __construct($db) {
        $this->db = $db;

    }

    public function getPayment(){
        $query = "SELECT  id,( CASE
        WHEN type_paid = 'subscriptions' THEN (SELECT subscriptions_name FROM subscriptions WHERE id = product_id)
        WHEN type_paid = 'videos' THEN (SELECT video_name FROM videos WHERE id = product_id)
        WHEN type_paid = 'documents' THEN  (SELECT document_name FROM Documents WHERE id = product_id)
       END) AS name,
       refrence_number,date(dateCreated) as dateCreated,amount, type_paid,billing_type, product_id,status FROM payment WHERE user_id = ".$_SESSION['id'];


        $result = $this->db-> query($query);
        $payment = array();
        if (mysqli_num_rows($result) < 1) {
      
            echo json_encode(array("result" => "error","value" => "No Billing history"));

            exit();

        }else {
           while($row=$result -> fetch_assoc()){
            array_push($payment,array("id"=>$row["id"],
            "name"=>$row["name"],
            "reg"=>$row["refrence_number"],
            "date"=>$row["dateCreated"],
            "amount"=>$row["amount"],
            "product_id"=>$row["product_id"],
            "billing_type"=>$row["billing_type"],
            "type_paid"=>$row["type_paid"]));
            
       }
           echo json_encode(array("payments" => $payment));
    
        
        }

    }
        

    }

    ?>