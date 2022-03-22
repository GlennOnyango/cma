<?php
session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$payment = new Payment($db);

// dee05abc230c51161f953a239074177d

// $payment->checkPayment();

if(isset($_POST['refrence'])){
    $payment->registerPayment($_POST);

}
if(isset($_GET['payment'])){
    $payment->getPayment();
}
if(isset($_GET['check_cart_id']) && $_GET['token1'] == $_SESSION['token']){
    $payment->checkCartPayment($_GET['check_cart_id']);
}

if(isset($_GET['receipt'])){
    $payment->checkMpesa($_GET['receipt']);
}




class Payment{

    public function __construct($db) {
        $this->db = $db;

    }

    public function addRm(){
        $query = "INSERT INTO rm (client_id,advocate_id,status) VALUES(".$_SESSION['id'].",0,'open')";
    
        $result = $this->db->query($query);
    }
    public function registerPayment($data){
        $next_step = 0;

        if($data['type_paid'] == "subscriptions"){
            $this->addRm();
            $query = "SELECT subscriptions_name,downloads_limit,review_limit FROM subscriptions_new WHERE id = ".$data['product_id'];
            

            $result = $this->db->query($query);
            $row = $result->fetch_assoc();


            $next_step = $this->subscriptionsSetUp($data['product_id'],$row['subscriptions_name'],$row['downloads_limit'],$row['review_limit']);


            if($next_step == 0){
                echo json_encode(array("result" => "failed","value" => "Something went wrong contact Us for help"));
                exit();
            }
            else{
    
                    $query ="INSERT INTO `payment`(user_id,refrence_number,amount,type_paid,billing_type,product_id) VALUES 
                (".$_SESSION['id'].",'".$data['refrence']."',".$data['amount'].",'".$data['type_paid']."','".$data['billing_type']."','".$data['product_id']."') ";
    
                $result = $this->db-> query( $query);
    
                if(!$result){
    
                    echo json_encode(array("result" => "failed","value" => $this->db->error));
            
                }
                else{
    
                    $query = "SELECT email FROM users WHERE id = ".$_SESSION['id'];
                    $result = $this->db->query($query);
                    $row = $result->fetch_assoc();
    
                    $body = "<h2>Thank for purchasing our products</h2><p>You have purchased ".$data['type_paid']."--".$data['billing_type']." </p>";
    
                    
                    if(libs::mail_template ($row['email'],"Product Purchase","CMA product purchase",$body)){
    
                        // echo json_encode(array("result" => "sent","value" => "Check your email for the password."));
                
                    }
                
                    echo json_encode(array("result" => "success","value" => "Payment Recorded"));
            
                }
    
            }

        }
        else{


            $query ="INSERT INTO `payment`(user_id,refrence_number,amount,type_paid,billing_type,product_id) VALUES 
            (".$_SESSION['id'].",'".$data['refrence']."',".$data['amount'].",'".$data['type_paid']."','".$data['billing_type']."','".$data['product_id']."') ";

            $result = $this->db-> query( $query);

            if(!$result){

                echo json_encode(array("result" => "failed","value" => $this->db->error));
        
            }
            else{

                $query = "SELECT email FROM users WHERE id = ".$_SESSION['id'];
                $result = $this->db->query($query);
                $row = $result->fetch_assoc();

                $body = "<h2>Thank for purchasing our products</h2><p>You have purchased ".$data['type_paid']."--".$data['billing_type']." </p>";

                
                if(libs::mail_template ($row['email'],"Product Purchase","CMA product purchase",$body)){

                    // echo json_encode(array("result" => "sent","value" => "Check your email for the password."));
            
                }
            
                echo json_encode(array("result" => "success","value" => "Payment Recorded"));
        
            }




        }

              
    }

    
    public function subscriptionsSetUp($sub_id,$sub_name,$download_limit,$review_limit){
       $fold = $_SERVER["DOCUMENT_ROOT"]."/controller/usersDirectories/".MD5($_SESSION['email'])."/";
       $sub_name = str_replace(" ","",$sub_name);
       $folderName = $fold."".$sub_name;
       if(!is_dir($folderName))
       {
            mkdir($folderName,  0777, true);
            return $this->uploadDocu($sub_id,$folderName,$download_limit,$review_limit);
        
       }else{
            return $this->uploadDocu($sub_id,$folderName,$download_limit,$review_limit);
       }
    }
    public function uploadDocu($sub_id,$fold,$download_limit,$review_limit){
        $query = " SELECT document,id FROM vw_document WHERE subscription_id = $sub_id";
        
        $result = $this->db-> query($query);

        if(mysqli_num_rows($result) < 1){
            return 2;
        }
        while($row = $result->fetch_assoc()){
            $file = $row['document'];
            $newfile = $fold;
            
           $copy_to_file = $file;
           $left_wing =  str_replace("./uploadDocuments","",$copy_to_file); 
           str_replace(".",$_SERVER["DOCUMENT_ROOT"]."/controller",$file);
          
           $newfile = $newfile."".$left_wing;
          
           
           $myfile = fopen($newfile, "w");
           fclose($myfile);


           $this->insertJob($row['id'],$download_limit,$review_limit);

            if (!copy($file, $newfile)) {
                return 0;
            }else{
                return 1;
            }
        }
    }

    public function insertJob($doc_id,$download_limit,$review_limit){

        $query ="INSERT INTO `documents_review`(document_id,user_id,review_status,review_count) VALUES 
        (".$doc_id.",".$_SESSION['id'].",'none',".$review_limit.") ";

        $result = $this->db-> query( $query);


        $query ="INSERT INTO `documents_download`(document_id,user_id,download_count) VALUES 
        (".$doc_id.",".$_SESSION['id'].",".$download_limit.") ";

        $result = $this->db-> query( $query);


    }

    public function getPayment(){
        $query = "SELECT  id,( CASE
        WHEN type_paid = 'subscriptions' THEN (SELECT subscriptions_name FROM subscription_main WHERE id = product_id)
        WHEN type_paid = 'videos' THEN (SELECT video_name FROM videos WHERE id = product_id)
        WHEN type_paid = 'documents' THEN  (SELECT document_name FROM documents WHERE id = product_id)
       END) AS name,
       refrence_number,date(dateCreated) as dateCreated,amount, type_paid,billing_type, product_id,status FROM payment WHERE user_id = ".$_SESSION['id'];


        $result = $this->db-> query($query);
        $payment = array();
        if (mysqli_num_rows($result) < 1) {
      
            echo json_encode(array("result" => "error","value" => $this->db->error));

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
            "type_paid"=>$row["type_paid"],"status"=>$row["status"]));
            
            
       }
           echo json_encode(array("payments" => $payment));
    
        
        }

    }

    public function checkCartPayment($data){
        $query = "SELECT * FROM payment WHERE user_id = ".$_SESSION['id']." AND product_id = ".$data." AND status = 'active'";
        //SELECT * from cma_data.payment WHERE user_id = 29 AND product_id = 12 AND status = 'active';
        //echo $query;
        $result = $this->db-> query($query);
        $check = array();
        if (mysqli_num_rows($result) > 0 ) {
      
            array_push($check,array("id"=>$data,"check"=>"true"));
            

        }else {
               
            array_push($check,array("id"=>$data,"check"=>"false"));
           
        }
        echo json_encode(array("check" => $check));

    }

    public function killPayment($id){
        $query = "UPDATE payment SET status = 'inactive' WHERE id = $id";
        $result = $this->db-> query($query);
        if($result){
            echo"Payment deactivated";
        }
        
    }
    

    public function checkPayment(){
        $query = "SELECT id,product_id,type_paid,dateCreated,billing_type FROM payment";
        $result = $this->db-> query($query);
        $today = date("Y-m-d");
        while ($row = $result -> fetch_assoc()) {
            # code...
        
            if($row['billing_type'] == "annually"){
                $new_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 365 days') );
                $mail_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 360 days') );
               
                if(strtotime($new_date) < strtotime($today)){

                    $this->killPayment($row['id']);

                }elseif(strtotime($new_date) > strtotime($today) && strtotime($mail_date) < strtotime($today)){
                    echo "mail me";

                }


            }
            elseif($row['billing_type'] == "monthly"){
                $new_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 30 days') );
                $mail_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 25 days') );
               
                if(strtotime($new_date) < strtotime($today)){

                    $this->killPayment($row['id']);

                }elseif(strtotime($new_date) > strtotime($today) && strtotime($mail_date) < strtotime($today)){
                    echo "mail me";

                } 
            }else{
                if($row['type_paid'] == "videos"){
                    $query = "SELECT service_validity FROM vw_videos_service WHERE id = ".$row["product_id"];
                    $resultt = $this->db-> query($query);
                    $row1 = $resultt -> fetch_assoc();
                    if($row1['service_validity'] == 'quarterly'){
                        $new_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 91 days') );
                        $mail_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 85 days') );
                    
                        if(strtotime($new_date) < strtotime($today)){

                            $this->killPayment($row['id']);

                        }elseif(strtotime($new_date) > strtotime($today) && strtotime($mail_date) < strtotime($today)){
                            echo "mail me";

                        }
                    }elseif ($row1['service_validity'] == 'half') {
                        # code...
                        $new_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 186 days') );
                        $mail_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 180 days') );
                    
                        if(strtotime($new_date) < strtotime($today)){

                            $this->killPayment($row['id']);

                        }elseif(strtotime($new_date) > strtotime($today) && strtotime($mail_date) < strtotime($today)){
                            echo "mail me";

                        }
                    }else{

                        $new_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 365 days') );
                        $mail_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 360 days') );
               
                        if(strtotime($new_date) < strtotime($today)){

                            $this->killPayment($row['id']);

                        }elseif(strtotime($new_date) > strtotime($today) && strtotime($mail_date) < strtotime($today)){
                            echo "mail me";

                        }
                    }
                }
                elseif ($row['type_paid'] == "documents") {
                    # code...
                    $query = "SELECT service_validity FROM vw_document_service WHERE id = ".$row["product_id"];
                    $resultt = $this->db-> query($query);
                    $row1 = $resultt -> fetch_assoc();
                    if($row1['service_validity'] == 'quarterly'){
                        $new_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 91 days') );
                        $mail_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 85 days') );
                    
                        if(strtotime($new_date) < strtotime($today)){

                            $this->killPayment($row['id']);

                        }elseif(strtotime($new_date) > strtotime($today) && strtotime($mail_date) < strtotime($today)){
                            echo "mail me";

                        }
                    }elseif ($row1['service_validity'] == 'half') {
                        # code...
                        $new_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 186 days') );
                        $mail_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 180 days') );
                    
                        if(strtotime($new_date) < strtotime($today)){

                            $this->killPayment($row['id']);

                        }elseif(strtotime($new_date) > strtotime($today) && strtotime($mail_date) < strtotime($today)){
                            echo "mail me";

                        }
                    }else{

                        $new_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 365 days') );
                        $mail_date = date('Y-m-d', strtotime($row['dateCreated'] . ' + 360 days') );
                    
                        if(strtotime($new_date) < strtotime($today)){

                            $this->killPayment($row['id']);

                        }elseif(strtotime($new_date) > strtotime($today) && strtotime($mail_date) < strtotime($today)){
                            echo "mail me";

                        }
                    }
                }

            }
        }

    }

    public function checkMpesa($receipt){
        $query = "SELECT * FROM mpesa WHERE reciept_number = '".$receipt."'";
        $result = $this->db-> query($query);
        
        if (mysqli_num_rows($result) != 1) {
      
            echo json_encode(array("result" => "error","value" => "0"));

            exit();

        }else {
            echo json_encode(array("result" => "success","value" => "1"));

            exit();

        }

    }    

        

}

    ?>