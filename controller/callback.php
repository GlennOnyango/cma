<?php

session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');


file_put_contents('feed.txt', file_get_contents('php://input'));

// $mpesaResponse = file_get_contents('php://input');
// $mine = ''.$mpesaResponse;
// $response_two = json_decode($mine,TRUE);
// file_put_contents('resp.txt', $response_two);

// $stkCallback = $response_two["Body"]["stkCallback"];
// file_put_contents('stack.txt', $stkCallback);
// $MerchantRequestID = $stkCallback["MerchantRequestID"];
// $CheckoutRequestID = $stkCallback["CheckoutRequestID"];
// $ResultCode = $stkCallback["ResultCode"];
// $ResultDesc = $stkCallback["ResultDesc"];
// $CallbackMetadata = $stkCallback["CallbackMetadata"];
// $Item = $CallbackMetadata["Item"];

// $Name = $Item[0]["Name"];
// $Amount = $Item[0]["Value"];

// $MpesaReceiptNumber = $Item[1]["Name"];
// $MpesaReceiptNumber_Value = $Item[1]["Value"];


// $TransactionDate = $Item[3]["Name"];
// $TransactionDate_value = $Item[3]["Value"];


// $PhoneNumber = $Item[4]["Name"];
// $PhoneNumber_value = $Item[4]["Value"];

// echo $MerchantRequestID.'<br>';
// echo $CheckoutRequestID.'<br>';
// echo $ResultCode.'<br>';
// echo $ResultDesc.'<br>';


// echo $Name.'-----'.$Amount;
// echo $MpesaReceiptNumber.'-------'.$MpesaReceiptNumber_Value;
// echo $TransactionDate.'------'.$TransactionDate_value;
// echo $PhoneNumber.'-------'.$PhoneNumber_value;

// $yes = "mid --".$MerchantRequestID." -----checkid----".$CheckoutRequestID."------ResultCode----".$ResultCode; 

// file_put_contents('feed.txt', $yes);
// if($ResultCode == 0){

//     file_put_contents('feed.txt', $_SESSION['id']);
//     $query ="INSERT INTO `mpesa`(phone_number,resultcode,reciept_number,date_sent,amount,all) VALUES 
//     ('".$PhoneNumber_value."','".$ResultCode."',".$MpesaReceiptNumber_Value.",'".$TransactionDate_value."','".$Amount."','".$stkCallback."') ";
    
    
//     $result = $this->db-> query( $query);

//     if(!$result){
//         file_put_contents('feed.txt', $this->db->error);
//     }

// }

