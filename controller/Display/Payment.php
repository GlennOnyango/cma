<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$payment = new Payment($db);




if(isset($_POST['refrence'])){
    $payment->registerPayment($_POST);

}
if(isset($_GET['payment'])){
    $payment->getPayment();
}




class Payment{

    public function __construct($db) {
        $this->db = $db;

    }

    public function registerPayment($data){

        $query ="INSERT INTO `payment`
        (user_id,refrence_number,amount,
        type_paid,billing_type,product_id) VALUES 
        (".$_SESSION['id'].",
        '".$data['refrence']."',
        ".$data['amount'].",
        '".$data['type_paid']."',
        '".$data['billing_type']."',
        '".$data['product_id']."'
        ) ";

        $result = $this->db-> query( $query);

        if(!$result){

            echo json_encode(array("result" => "failed","value" => $this->db->error));
    
        }
        else{
        
            echo json_encode(array("result" => "success","value" => "Payment Recorded"));
    
        }
              
    }

    public function getPayment(){
        $query = "SELECT * FROM payment WHERE user_id = ".$_SESSION['id'];

        $result = $this->db-> query($query);
        $payment = array();
        if (mysqli_num_rows($result) < 1) {
      
            echo json_encode(array("result" => "error","value" => "No certificate"));

            exit();

        }else {
           while($row=$result -> fetch_assoc()){
               
            array_push($payment,array("id"=>$row["id"],"reg"=>$row["refrence_number"],
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