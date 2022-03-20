<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$stats = new Stats($db);

if(isset($_GET['documents_number'])){
    $stats -> documentsPurchased();

}
if(isset($_GET['subscription_number'])){
    $stats -> subscriptionsBought();

}

class Stats{

    public function __construct($db) {
        $this->db = $db;

        }

    public function documentsPurchased(){
        $number = 0;
        $query = "SELECT type_paid,product_id FROM `payment` WHERE user_id =".$_SESSION['id']." AND (type_paid = 'documents' OR type_paid ='subscriptions') AND status ='active'";
        $result = $this->db->query($query);
        while($data = $result -> fetch_assoc()){


            if($data['type_paid'] == "documents"){
                 $number++;
            }
            else if($data['type_paid'] == "subscriptions"){

                $query1 = "SELECT count(*) AS total FROM `vw_document` WHERE subscription_id = ".$data['product_id'];
                $ressult = $this->db->query($query1);
                $row = $ressult -> fetch_assoc();
                $number = $number + intval($row['total']);
           }

        }
       echo json_encode(array("result" => "number_of_documnets_purchased","value_doc" => $number ));

    }    
    
    public function subscriptionsBought(){
        $query = "SELECT count(*) AS total FROM `payment` WHERE user_id =".$_SESSION['id']." AND type_paid ='subscriptions'";
        $result = $this->db->query($query);
        $data = $result -> fetch_assoc();
        echo json_encode(array("result" => "number_of_subscriptions_purchased","value_sub" => $data['total']));

    }    
}

?>