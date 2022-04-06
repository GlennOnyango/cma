<?php
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');
file_put_contents('feed.txt', $_GET['key']);
if($_GET['key']){
    file_put_contents('feed.txt', file_get_contents('php://input'));
    $mpesaResponse = file_get_contents('php://input');
    $mine = ''.$mpesaResponse;
    $response_two = json_decode($mine,TRUE);

    $stkCallback = $response_two["Body"]["stkCallback"];
    file_put_contents('stack.txt', $stkCallback["MerchantRequestID"]);
    $MerchantRequestID = $stkCallback["MerchantRequestID"];
    $CheckoutRequestID = $stkCallback["CheckoutRequestID"];
    $ResultCode = $stkCallback["ResultCode"];
    if($ResultCode == 0){
        $ResultDesc = $stkCallback["ResultDesc"];
        $CallbackMetadata = $stkCallback["CallbackMetadata"];
        $Item = $CallbackMetadata["Item"];
    
        $Name = $Item[0]["Name"];
        $Amount = $Item[0]["Value"];
    
        $MpesaReceiptNumber = $Item[1]["Name"];
        $MpesaReceiptNumber_Value = $Item[1]["Value"];
    
    
        $TransactionDate = $Item[3]["Name"];
        $TransactionDate_value = $Item[3]["Value"];
    
    
        $PhoneNumber = $Item[4]["Name"];
        $PhoneNumber_value = $Item[4]["Value"];

        $query = "SELECT * from mpesa WHERE reciept_number = ".$CheckoutRequestID." AND MerchantRequestID =".$MerchantRequestID;
        $result = $this->db->query($query);
        if(!$result){
            file_put_contents('error.txt', $this->db->error);
        }else{
            while ($row = $result->fetch_assoc()) {
                # code...
                $query ="UPDATE mpesa SET sta = 'complete' WHERE reciept_number = ".$CheckoutRequestID."AND MerchantRequestID =".$MerchantRequestID;
                $result = $this->db-> query( $query);
        
                if(!$result){
                    file_put_contents('error_select.txt', $this->db->error);
                }else{
                    file_put_contents('success.txt', $CheckoutRequestID);
        
                }
                
            }
        }
    }
    else{
        file_put_contents('error_result_code.txt', 'No key');
    }

    
}
else{
    file_put_contents('error_key.txt', 'No key');
}
//file_put_contents('feed.txt', file_get_contents('php://input'));
?>