{"Body":{"stkCallback":{"MerchantRequestID":"27650-90455848-1","CheckoutRequestID":"ws_CO_100320222019288747","ResultCode":0,"ResultDesc":"The service request is processed successfully.","CallbackMetadata":{"Item":[{"Name":"Amount","Value":1.00},{"Name":"MpesaReceiptNumber","Value":"QCA1H29BT3"},{"Name":"Balance"},{"Name":"TransactionDate","Value":20220310202241},{"Name":"PhoneNumber","Value":254719458873}]}}}}
  <?php
namespace App\Http\Controllers;
use App\Mpesa;
use App\MpesaCallBack;
use Illuminate\Http\Request;
// use Safaricom\Mpesa\Mpesa;
use SmoDav\Mpesa\Laravel\Facades\Simulate;
use SmoDav\Mpesa\Laravel\Facades\STK;
use SmoDav\Mpesa\C2B\Identity;
use Illuminate\Support\Facades\Log;
class MpesaController extends Controller
{
    protected $BASE_URL= "https://62c5-197-237-67-56.ngrok.io";
    
    public function stkPush() {
        date_default_timezone_set('Africa/Nairobi');
        # access token
        $consumerKey = 'Q0DagOoTlCFDo6z1Ns394QmScAhAgPlv'; //Fill with your app Consumer Key
        $consumerSecret = '0SHDz98FbNGznNHz'; // Fill with your app Secret
        # define the variales
        # provide the following details, this part is found on your test credentials on the developer account
        $BusinessShortCode = '174379';
        $Passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
        $PartyA = '254701864761'; // This is your phone number,
        $AccountReference = '2255';
        $TransactionDesc = 'E-Commerce Payment for ';
        $Amount = 1;
        # Get the timestamp, format YYYYmmddhms -> 20181004151020
        $Timestamp = date('YmdHis');
        # Get the base64 encoded string -> $password. The passkey is the M-PESA Public Key
        $Password = base64_encode($BusinessShortCode.$Passkey.$Timestamp);
        # header for access token
        $headers = ['Content-Type:application/json; charset=utf8'];
            # M-PESA endpoint urls
        $access_token_url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
        $initiate_url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        $CallBackURL = 'https://62c5-197-237-67-56.ngrok.io/lara-mpesa-stk/public/api/callback-mpesa';
        $curl = curl_init($access_token_url);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($curl, CURLOPT_HEADER, FALSE);
        curl_setopt($curl, CURLOPT_USERPWD, $consumerKey.':'.$consumerSecret);
        $result = curl_exec($curl);
        $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        $result = json_decode($result);
        $access_token = $result->access_token;
        curl_close($curl);
        # header for stk push
        $stkheader = ['Content-Type:application/json','Authorization:Bearer '.$access_token];
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
            'Amount' => $Amount,
            'PartyA' => $PartyA,
            'PartyB' => $BusinessShortCode,
            'PhoneNumber' => $PartyA,
            'CallBackURL' => $CallBackURL,
            'AccountReference' => $AccountReference,
            'TransactionDesc' => $TransactionDesc
        );
        $data_string = json_encode($curl_post_data);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
        $curl_response = curl_exec($curl);
        // print_r($curl_response);
        // echo $curl_response;
        $response = json_decode($curl_response, TRUE);
        echo "=====================";
        echo "<br />";
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
        $mpesa = New Mpesa();
        $mpesa->MerchantRequestID = $response["MerchantRequestID"];
        $mpesa->CheckoutRequestID = $response["CheckoutRequestID"];
        $mpesa->ResponseCode = $response["ResponseCode"];
        $mpesa->ResponseDescription = $response["ResponseDescription"];
        $mpesa->CustomerMessage = $response["CustomerMessage"];
        $mpesa->save();
        echo "SAVED SUCCESSFULY!!";
    }

    public function callback() {
    //  dd("callback");
    // Log::useDailyFiles(storage_path().'/logs/name-of-log.log');
    Log::info('sinfo to log');
    header("Content-Type: application/json");
    // DATA
     $mpesaResponse = file_get_contents('php://input');
     $response = json_decode($mpesaResponse, TRUE);
     Log::warning($mpesaResponse);
    //  dd($response);
     $mpesa_callback = New MpesaCallBack();
    //  $mpesa_callback->Body = $response["Body"];
    //  $mpesa_callback->stkCallback = $response["stkCallback"];
     $mpesa_callback->Body = $response;
     $mpesa_callback->stkCallback = $mpesaResponse;
     $mpesa_callback->MerchantRequestID = $response["MerchantRequestID"];
     $mpesa_callback->CheckoutRequestID = $response["CheckoutRequestID"];
     $mpesa_callback->ResultCode = $response["ResultCode"];
     $mpesa_callback->ResultDesc = $response["ResultDesc"];
     $mpesa_callback->CallbackMetadata = $response["CallbackMetadata"];
     $mpesa_callback->Item = $response["Item"];
     $mpesa_callback->Amount = $response["Amount"];
     $mpesa_callback->MpesaReceiptNumber = $response["MpesaReceiptNumber"];
     $mpesa_callback->Balance = $response["Balance"];
     $mpesa_callback->TransactionDate = $response["TransactionDate"];
     $mpesa_callback->PhoneNumber = $response["PhoneNumber"];
     $mpesa_callback->save();
    //  dd($mpesaResponse);

     // log the response
     $logFile = "M_PESAConfirmationResponse.txt";
     // write to file
     $log = fopen($logFile, "a");
     fwrite($log, $mpesaResponse);
     fclose($log);
    }
    public function validateMpesa(){
        // $response = Identity::validate(254701864761);
        $response = STK::validate('ws_CO_120120220133012883'); // "ResultDesc": "Request cancelled by user"
        // $response = STK::validate('ws_CO_120120220130231719'); // "ResultDesc": "The service request is processed successfully."
        dd($response);
    }
    public function mpesa_callback(Request $request){
        $json_all = $request->all();
        $json = $request->getContent();
        // Log::warning($json);
        // Log::useDailyFiles(storage_path().'/logs/name-of-log.log');
        // Log::info($json_all);
        Log::info($json);
        
        $mpesa_callback = New MpesaCallBack();
        $mpesa_callback->jsonCallback = $json;
        $mpesa_callback->save();
        dd($json);
    }
    // public function mpesa_callback_api(){
   
    //     dd('API GET');
    // }

         /**
      * Customization Goods Till Number
      */
      public function goodsTillNumberPassword()
      {
         # define the variales
         # provide the following details, this part is found on your test credentials on the developer account
         $BusinessShortCode = '174379';
         $Passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
 
         # Get the timestamp, format YYYYmmddhms -> 20181004151020
         $Timestamp = date('YmdHis');
 
         # Get the base64 encoded string -> $password. The passkey is the M-PESA Public Key
         $Password = base64_encode($BusinessShortCode.$Passkey.$Timestamp);
 
         return $Password;
          
      }
 
      /**
       * Customization accessToken
       */
      public function accessToken()
      {
         # M-PESA endpoint url
         $access_token_url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
 
         # header for access token
         $headers = ['Content-Type:application/json; charset=utf8'];
 
         # access token
         $consumerKey = 'Q0DagOoTlCFDo6z1Ns394QmScAhAgPlv'; //Fill with your app Consumer Key
         $consumerSecret = '0SHDz98FbNGznNHz'; // Fill with your app Secret
 
         $curl = curl_init($access_token_url);
         curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
         curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
         curl_setopt($curl, CURLOPT_HEADER, FALSE);
         curl_setopt($curl, CURLOPT_USERPWD, $consumerKey.':'.$consumerSecret);
         $result = curl_exec($curl);
         $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
         $result = json_decode($result);
         $access_token = $result->access_token;
         curl_close($curl);
 
         return $access_token;
          
      }
 
      /**
       * Customization stkPush
       */
      public function stkPushPost(Request $request){
 
         $Amount = $request->amount;
         $phone =  $request->phone;
         $formatedPhone = substr($phone, 1);//726582228
         $code = "254";
         $phoneNumber = $code.$formatedPhone;//254726582228
 
         # define the variales
         # provide the following details, this part is found on your test credentials on the developer account
         $BusinessShortCode = '174379';
         // $PartyA = '254701864761'; // This is your phone number,
         $PartyA = $phoneNumber; // This is your phone number,
         $AccountReference = '2255';
         $TransactionDesc = 'E-Commerce Payment for ';
         // $Amount = 1;
         # Get the timestamp, format YYYYmmddhms -> 20181004151020
         $Timestamp = date('YmdHis');
 
        //  $CallBackURL = 'https://3c99-197-237-67-56.ngrok.io/Laravel-M-PESA-C2B-Integration/public/api/stk/push/callback/url';
        //  $CallBackURL = $this->BASE_URL.'/Laravel-M-PESA-C2B-Integration/public/api/stk/push/callback/url';
        //  $CallBackURL = $this->BASE_URL.'/lara-mpesa-stk/public/api/callback-mpesa';
         $CallBackURL = 'https://62c5-197-237-67-56.ngrok.io/lara-mpesa-stk/public/api/callback-mpesa';
 
         # M-PESA endpoint url
         $initiate_url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
 
         # header for stk push
         $stkheader = ['Content-Type:application/json','Authorization:Bearer '.$this->accessToken()];
 
         
         # initiating the transaction
         $curl = curl_init();
         curl_setopt($curl, CURLOPT_URL, $initiate_url);
         curl_setopt($curl, CURLOPT_HTTPHEADER, $stkheader); //setting custom header
 
         $curl_post_data = array(
             //Fill in the request parameters with valid values
             'BusinessShortCode' => $BusinessShortCode,
             'Password' => $this->goodsTillNumberPassword(),
             'Timestamp' => $Timestamp,
             'TransactionType' => 'CustomerPayBillOnline',
             'Amount' => $Amount,
             'PartyA' => $PartyA,
             'PartyB' => $BusinessShortCode,
             'PhoneNumber' => $PartyA,
             'CallBackURL' => $CallBackURL,
             'AccountReference' => $AccountReference,
             'TransactionDesc' => $TransactionDesc
         );
 
         $data_string = json_encode($curl_post_data);
         curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
         curl_setopt($curl, CURLOPT_POST, true);
         curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
         $curl_response = curl_exec($curl);
         // print_r($curl_response);
 
         // echo $curl_response;
 
         $response = json_decode($curl_response, TRUE);
 
         // return '';
         return redirect('/confirm');
 
      }
}