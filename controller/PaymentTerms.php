<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$payment_terms = new Payment_terms($db);


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

?>