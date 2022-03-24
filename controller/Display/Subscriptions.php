<?php
session_start();
require_once('../../controller/Connection.php');

$subscriptions = new Subscriptions($db);


//Subscriptions

if(isset($_GET['getSubscriptions']) && $_GET['token1'] == $_SESSION['token']){
    $subscriptions->getSubscriptions($_GET);
}
if(isset($_GET['getSubscriptionsNext']) && $_GET['token1'] == $_SESSION['token']){
    $subscriptions->getSubscriptionsNext($_GET);
}

if(isset($_GET['sub_id'])){
    $subscriptions->SubscriptionL($_GET['sub_id']);
}
if(isset($_GET['service_id'])){
    $subscriptions->ServiceL($_GET['service_id']);
}


class Subscriptions{

    public function __construct($db) {
        $this->db = $db;

        }


    public function getSubscriptions(){
        
        
        $query = "SELECT id, subscriptions_name, validity, product_name,sub_status,description FROM vw_subscriptions WHERE sub_status = 'active'";

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

    public function getSubscriptionsNext(){
        
        
        $query = " SELECT * FROM cma_data.subscriptions WHERE service_id = 6 AND product_id = 9";

        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $query));

            exit();

        }else {



            while($row=$result -> fetch_assoc()){

                $query = "SELECT id,billing_type FROM payment WHERE type_paid ='subscriptions' AND product_id = ".$row['id']." AND  user_id = ".$_SESSION['id'];

            $resultt = $this->db->query($query);

            if(mysqli_num_rows($resultt) != 1){
                array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"price"=>$row['price'],"billing_type"=>"null","payment_id"=>"null","annual_price"=>($row['price']*0.98)));
              
            }
            else{
                while($roww=$resultt -> fetch_assoc()){
                array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"price"=>$row['price'],"billing_type"=>$roww['billing_type'],"payment_id"=>$roww['id'],"annual_price"=>($row['price']*0.98)));
                }
            }

                
        }
        echo json_encode(array("subscriptions" => $subscription));

        }
    }
    
    

    public function SubscriptionL($data){
        $query = "SELECT * FROM subscription_for_products WHERE product_id = $data";

        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscription"));

            exit();

        }
        else {

            while($row=$result -> fetch_assoc()){

    
                $query1 = "SELECT feature_name, presence FROM subscription_features WHERE id =".$row['id'];
    
                $result_features = $this->db->query($query1);
                $subscription_features = array();
                while($row_features=$result_features -> fetch_assoc()){
                    array_push($subscription_features,array("feature"=>$row_features['feature_name'],"presence"=>$row_features['presence']));
    
                }
                
                $ann_price = $row['price'] * 12;
    
                if($row['discount_applicable'] == 'yes'){
                    $ann_price = $row['price'] * 12 * ((100 - intval($row['percentage_discount']))/100);
                    
                }
    
                    array_push($subscription,
                    array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"price"=>$row['price'],"billing_type"=>"null","payment_id"=>"null","features"=>json_encode(array("features" => $subscription_features)),"discount"=>$row['discount_applicable'],"annual_price"=>intval($ann_price))
                );
                    
    
            }
    


         
        echo json_encode(array("subscriptions" => $subscription));

        }
    }
    
    public function ServiceL($data){
        $query = "SELECT * FROM subscriptions WHERE service_id = ".$data;

        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $query));

            exit();

        }else {



            while($row=$result -> fetch_assoc()){
                array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"price"=>$row['price'],"annual_price"=>($row['price']*0.98)));

            }

                
        }
        echo json_encode(array("subscriptions" => $subscription));

    }
}
?>