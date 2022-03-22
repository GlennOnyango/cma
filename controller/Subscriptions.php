<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$subscriptions = new Subscriptions($db);
$sub_upgrade = new Subscription_update($db);

//Subscriptions
if(isset($_POST['sub_name'])){
    $sub_upgrade->createSubscription($_POST);
    //$subscriptions->addSubscriptions($_POST);
}
if(isset($_GET['getSubscriptions']) && $_GET['token1'] == $_SESSION['token']){
    //$subscriptions->getSubscriptions($_GET);
    $sub_upgrade->getSubscriptions();
}

if(isset($_GET['getSubscriptionsforuse']) && $_GET['token1'] == $_SESSION['token']){
    //$subscriptions->getSubscriptions($_GET);
    $sub_upgrade->getSubscriptionsForUse();
}



if(isset($_GET['getSubscriptionsNext']) && $_GET['token1'] == $_SESSION['token']){
    $subscriptions->getSubscriptionsNext($_GET);
}



if(isset($_POST['edit_sub_name'])){
    $subscriptions->editSubscriptions($_POST);
}

if(isset($_POST['search_sub'])){

    $subscriptions->listSubscriptionSearch($_POST);
}
if(isset($_GET['sub_id'])){
    $subscriptions->SubscriptionL($_GET['sub_id']);
}


///SubsUpgrade
if(isset($_GET['getSubscriptionswithid']) && $_GET['token1'] == $_SESSION['token']){
    $sub_upgrade->getSubscriptionWithId($_GET['getSubscriptionswithid']);
}



class Subscriptions{

    public function __construct($db) {
        $this->db = $db;

        }

    public function addSubscriptions($data){

     $query ="INSERT INTO `subscriptions`(`subscriptions_name`,`price`,`product_id`, `service_id`, 
     `limit_users`, `discount_applicable`, `offer_applicable`,
      `sub_status`, `validity`, `downloads`,
       `con_hours`,`payment_terms_id`, `document_bundle`,
       `city`,`description`, `benefits`) VALUES
        ('".$data['sub_name']."',".$data['sub_price'].",'".$data['prod']."','".$data['serv']."',
        '".$data['limit_user']."','".$data['discount']."','".$data['offer']."',
        '".$data['status']."','".$data['validity']."','".$data['nodd']."',
        '".$data['cons_hours']."','".$data['payment_terms']."','".$data['dbundle']."',
        '".$data['city']."','".$data['description']."','".$data['benefit']."'
        )";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

       $result = $this->db-> query( $query);

       if(!$result){

        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
    
       }
       else{
        
        echo json_encode(array("result" => "alert-success","value" => "Subscription added"));
    
        }
       
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
        
        
        $query = " SELECT * FROM subscription_with_features ";

        $result = $this->db->query($query);

        $subscription = array();
        
        while($row=$result -> fetch_assoc()){

            $query = "SELECT id,billing_type FROM payment WHERE type_paid ='subscriptions' AND product_id = ".$row['id']." AND  user_id = ".$_SESSION['id'];

            $resultt = $this->db->query($query);


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

            if(mysqli_num_rows($resultt) != 1){

                
                array_push($subscription,
                array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"price"=>$row['price'],"billing_type"=>"null","payment_id"=>"null","features"=>json_encode(array("features" => $subscription_features)),"discount"=>$row['discount_applicable'],"annual_price"=>intval($ann_price))
            );
                
            }
            else{
                

                while($roww=$resultt -> fetch_assoc()){
                array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"price"=>$row['price'],"billing_type"=>$roww['billing_type'],"payment_id"=>$roww['id'],"features"=>json_encode(array("features" => $subscription_features)),"discount"=>$row['discount_applicable'],"annual_price"=>intval($ann_price)));
                }
            }
        }

                
        
        echo json_encode(array("subscriptions" => $subscription));

    }
    
    
    public function editSubscriptions($data){
       $query = "UPDATE subscriptions SET 
       subscriptions_name='".$data['edit_sub_name']."',
       price = ".$data['sub_price'].",
       product_id=".$data['prod'].",
       service_id=".$data['serv'].",
       limit_users='".$data['limit_user']."',
       discount_applicable='".$data['discount']."',
       offer_applicable='".$data['offer']."',
       sub_status='".$data['status']."',
       validity='".$data['validity']."',
       downloads='".$data['nodd']."',
       payment_terms_id=".$data['payment_terms'].",
       document_bundle='".$data['dbundle']."',
       city='".$data['city']."',
       description='".$data['description']."',
       benefits='".$data['benefit']."' WHERE id = ".$data['id']; 
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
    public function SubscriptionL($data){
        $query = "SELECT * FROM subscription_for_products WHERE product_id = $data";

        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscription"));

            exit();

        }else {

            while($row=$result -> fetch_assoc()){

                $query = "SELECT id,billing_type FROM payment WHERE type_paid ='subscriptions' AND product_id = ".$row['id']." AND  user_id = ".$_SESSION['id'];
    
                $resultt = $this->db->query($query);
    
    
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
    
                if(mysqli_num_rows($resultt) != 1){
    
                    
                    array_push($subscription,
                    array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"price"=>$row['price'],"billing_type"=>"null","payment_id"=>"null","features"=>json_encode(array("features" => $subscription_features)),"discount"=>$row['discount_applicable'],"annual_price"=>intval($ann_price))
                );
                    
                }
                else{
                    
    
                    while($roww=$resultt -> fetch_assoc()){
                    array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"price"=>$row['price'],"billing_type"=>$roww['billing_type'],"payment_id"=>$roww['id'],"features"=>json_encode(array("features" => $subscription_features)),"discount"=>$row['discount_applicable'],"annual_price"=>intval($ann_price)));
                    }
                }
            }
    


         
        echo json_encode(array("subscriptions" => $subscription));

        }
    }
    
}

class Subscription_update{
    
    public function __construct($db) {
        $this->db = $db;

        }
    
    public function createSubscription($data){


     $query ="INSERT INTO `subscriptions_new`(`subscriptions_name`,`price`,`product_id`,`discount_applicable`,`status`, `percentage_discount`,`downloads_limit`,
     `consultaion_hours`,`review_limit`,`payment_terms_id`,`description`) VALUES
        ('".$data['sub_name']."',".$data['sub_price'].",".$data['prod'].",'".$data['discount']."','".$data['status']."',".$data['per_discount'].",'".$data['nodd']."',
        '".$data['cons_hours']."',".$data['review_limit'].",'".$data['payment_terms']."','".$data['description']."')";
         

       $result = $this->db-> query($query);

       if($result === TRUE){
            $last_id = $this->db->insert_id;
            if(sizeof($data['has']) > 0){
                
                foreach ($data['has'] as $key => $value) {
                    # code...
                    $query="INSERT INTO `subscription_features`(`id`,`feature_name`,`presence`)VALUES($last_id,'$value',1)";
                    $result = $this->db-> query($query);
                }
            }

            if(sizeof($data['hasNot']) > 0){
                
                foreach ($data['hasNot'] as $key => $value) {
                    # code...
                    $query="INSERT INTO `subscription_features`(`id`,`feature_name`,`presence`)VALUES($last_id,'$value',0)";
                    $result = $this->db-> query($query);
                }
            }

            echo json_encode(array("result" => "alert-success","value" => empty($data['has'])." Subscription added ".$last_id));
    
       }
       else{
       
        echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
        
       }

    } 
    
    public function getSubscriptions(){
        $query = "SELECT * FROM subscription_main WHERE status = 'active' AND product_status = 'active'";

        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"product_name"=>$row['product_name'],"status"=>$row['status'],"product_status"=>$row['product_status']));
               
                
        }
        echo json_encode(array("subscriptions" => $subscription));

        }

    }

    
    public function getSubscriptionsForUse(){
        $query = "SELECT id,subscriptions_name FROM subscription_main WHERE status = 'active' AND product_status = 'active'";

        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name']));
               
        }
        echo json_encode(array("subscriptions" => $subscription));

        }

    }

    public function getSubscriptionWithId($id){
        $query = "SELECT * FROM subscriptions_new WHERE id = $id";
        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No subscriptions"));

            exit();

        }
        else {
            while($row=$result -> fetch_assoc()){
                 
                array_push($subscription,array($row));
            }   
            
            echo json_encode(array("subscriptions" => $subscription));

            
        }



    }

    public function getSubscriptionFeatures($id){
        $query = "SELECT * FROM subscriptions_features WHERE id = $id";
        
        $result = $this->db->query($query);

        $subscription = array();

        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => "No Subscriptions"));

            exit();

        }else {
            while($row=$result -> fetch_assoc()){
                
                 array_push($subscription,array("id"=>$row['id'],"Name"=>$row['subscriptions_name'],"product_name"=>$row['product_name'],"status"=>$row['status'],"product_status"=>$row['product_status']));
            }   
                
        }


    }


}
?>