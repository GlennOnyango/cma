<?php

session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

  $mood = new Mpayment($db);

//  $mood->initiateLipaNaMpesa(1,'glenn','254719458873');
if(isset($_POST['name'])){

  $mood->initiateLipaNaMpesa($_POST['amount'],$_POST['name'],$_POST['mpesa_number']);
}


  class Mpayment{
    public function __construct($db) {
        $this->db = $db;
        date_default_timezone_set("Africa/Nairobi");
        
        $this->access_token =  $this->getAuth();
        $this->timestamp = date("YmdHis");
        $this->company_name = "CMA_ADVOCATES"; 

        //echo $this->access_token;
        }
    
    public function getAuth(){
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
              
              'Authorization: Basic QXpzMktlalUxQVJ2SUw1SmRKc0FSYlYyZ0RyV21wT0I6aGlwR3ZGSmJPeHJpMzMwYw==',
              'Cookie: incap_ses_1022_2742146=we5QPQRWem0MXp3IP+AuDg/NKGIAAAAAxMhMTOwis+hmJdtx/UuE3w==; visid_incap_2742146=PaO8wtm+QyScaONQrU2qnw/NKGIAAAAAQUIPAAAAAAAjchx4LPi41mjx0q/skWWA'
            ),
          ));
          
          $response = curl_exec($curl);
          curl_close($curl);  
          $J = json_decode($response, true);
          return $J["access_token"];
          
    }    

    public function initiateLipaNaMpesa($price,$name,$phone){

      date_default_timezone_set('Africa/Nairobi');
      
      $consumerKey = 'toej0smpRrvoS7GOWz8TEO2OTQ2GEGZy'; //Fill with your app Consumer Key
      $consumerSecret = 'bS6aowqL1FBJUO3D'; // Fill with your app Secret
      # define the variales
      # provide the following details, this part is found on your test credentials on the developer account
      $BusinessShortCode = '174379';
      $Passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
      $PartyA = 254719458873; // This is your phone number,
      //$PartyA = '254701973394';
      //$PartyA = $phone;
      $AccountReference = '2255';
      $TransactionDesc = $name;
      $Amount = intval($price);
      $mobile = intval($phone);
      # Get the timestamp, format YYYYmmddhms -> 20181004151020
      $Timestamp = date('YmdHis');
      # Get the base64 encoded string -> $password. The passkey is the M-PESA Public Key
      $Password = base64_encode($BusinessShortCode.$Passkey.$Timestamp);
      # header for access token
      $headers = ['Content-Type:application/json; charset=utf8'];
          # M-PESA endpoint urls
      $initiate_url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
      $CallBackURL = 'https://cmversiontwo.cmadvocates.com/controller/callback.php?key=peng';
      
      # header for stk push
      $stkheader = ['Content-Type:application/json','Authorization:Bearer '.$this->access_token];
      # initiating the transaction
      


      $curl = curl_init();
      curl_setopt($curl, CURLOPT_URL, $initiate_url);
      curl_setopt($curl, CURLOPT_HTTPHEADER, $stkheader); //setting custom header
      $curl_post_data = array(
          //Fill in the request parameters with valid values
          'BusinessShortCode' => $BusinessShortCode,
          'Password' => $Password,
          'Timestamp' => $Timestamp,
          'TransactionType' => 'CustomerPayBillOnline',
          //'Amount' => $Amount,
          'Amount' => 1,
          'PartyA' => $mobile,
          'PartyB' => $BusinessShortCode,
          'PhoneNumber' => $mobile,
          'CallBackURL' => $CallBackURL,
          'AccountReference' => $AccountReference,
          'TransactionDesc' => $TransactionDesc

      );
      $data_string = json_encode($curl_post_data);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($curl, CURLOPT_POST, true);
      curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
      $curl_response = curl_exec($curl);
      
      $response = json_decode($curl_response, TRUE);
      // echo "=====================";
      // echo "<br />";
      echo $response["MerchantRequestID"];
      echo "<br />";
      echo $response["CheckoutRequestID"];
      echo "<br />";
      echo $response["ResponseCode"];
      echo "<br />";
      echo $response["ResponseDescription"];
      echo "<br />";
      echo $response["CustomerMessage"];
      echo "<br />";
      echo "<br />";



      if($response["ResponseCode"] == 0){

        $query ="INSERT INTO `mpesa`(phone_number,reciept_number,MerchantRequestID,sta) VALUES (".$phone.",'".$response['CheckoutRequestID']."','".$response["MerchantRequestID"]."','pending') ";
        $result = $this->db-> query( $query);

        if(!$result){
          echo json_encode(array("result" => "error","value" => $query));
        
        }
        else{
          echo json_encode(array("result" => "success","value" => "STK sent"));
        }
                
       exit();

      }else{
        echo json_encode(array("result" => "error","value" => "Sorry there is an error.Contact Us to get help."));
                
       exit();

      }
        
    }
 
  }

 
 
 


?>