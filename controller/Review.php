<?php

session_start();
require_once(__DIR__ . '/../controller/Connection.php');
require_once(__DIR__ . '/../controller/libs.php');

$review = new Reviews($db);

if(!empty($_POST['user'])){

    if($_POST['user'] == "client"){
        $review->postReview($_POST['document_id'],$_POST['token']);
    }
}
if(!empty($_GET['token_review'])){
    $review->collectReviews();
}
if(!empty($_POST['token_assign'])){
    $review->assignReview($_POST["advocate"],$_POST['token_assign'],$_POST['duration'],$_POST['document_review_id']);
}
if(!empty($_GET['token_review_assignee'])){
    $review->collectReviewsAssigned();
}
if(!empty($_POST['token_edit_assign'])){
    $review->editAssignee($_POST["document_id"],$_POST["duration_change"]);
}
if(!empty($_POST['token_edit_form_unassign'])){
    $review->unassign_assignee($_POST["doc_id"]);
}

if(isset($_POST['document_complete_review_id'])){
    $review->complete_review($_POST["document_complete_review_id"],$_POST['assignee']);
}

class Reviews 
{
    
    public function __construct($db) {
        $this->db = $db;

        }

    public function postReview($document_id,$token){

        if($token == $_SESSION['token']){

            $query = "SELECT advocate_id FROM rm WHERE client_id = ".$_SESSION["id"] ;

            $result = $this->db->query($query);

            if( mysqli_num_rows($result) == 1){

                while($row=$result -> fetch_assoc()){
                        $query = "INSERT INTO document_review(`client_id`,`document_id`,`review_status`,rm_id) VALUES (".$_SESSION['id'].",$document_id,'review',".$row['advocate_id'].")";
                                
                        $result = $this->db-> query( $query);

                        if(!$result){


                            echo json_encode(array("result" => "alert-danger","value" => $query));
                            exit();
                        }
                        else{

                            $query = "UPDATE Documents SET review_status = 'review' WHERE id =".$document_id;
                            $result = $this->db-> query( $query);
                            
                            $mail_of_rm = "<h4>You have a review</h4><p>Check for new document review from ".$this->getuserformail($_SESSION['id'])."</p>";
                            $mail_of_client = "<h4>Review Received</h4><p> ".$this->getuserformail($row['advocate_id'])." will be look into your document.\nYou will receive an email from us when the process is complete.</p>";

                            libs::mail_template ($this->getusermail($row['advocate_id']),"Document Review","CMA document review",$mail_of_rm);
                            libs::mail_template ($this->getusermail($_SESSION['id']),"Document Review","CMA document review",$mail_of_client);

                            if(!$result){
                                echo json_encode(array("result" => "alert-danger","value" => "Review Status not updated from documents"));
                                exit();

                            }else{

                                echo json_encode(array("result" => "alert-success","value" => "Review Pending"));
                                exit();
                            }


                        }

                }



            }
          
         
            echo json_encode(array("result" => "alert-danger","value" => $this->$db->error));

        }

        

    }


    public function getuserformail($id){
        $query = "SELECT userName FROM users WHERE id = ".$id;
        $result = $this->db-> query( $query);
        $row = $result->fetch_assoc();
        return $row["userName"];

    }
    
    public function getusermail($id){
        $query = "SELECT email FROM users WHERE id = ".$id;
        $result = $this->db-> query( $query);
        $row = $result->fetch_assoc();
        return $row["email"];

    }

    
    public function collectReviews(){
        
        $reviews = array();
        $clients = array();
        $query = "SELECT client_id FROM rm WHERE status = 'open' AND advocate_id = ".$_SESSION['id'];
        

        $result = $this->db-> query($query);

        if(!$result){
            
            echo json_encode(array("result" => 2,"value" => "Not a relationship Manager"));
            exit();

        }
        
        while($row=$result -> fetch_assoc()){

            array_push($clients,$row['client_id']);

        }
        
        //Get all as rm
        foreach ($clients as $key => $value) {
            $query = "SELECT * FROM vw_documents_review WHERE client_id = ".$value." AND review_status = 'review' AND  rm_id = ".$_SESSION['id']." AND assignee_status = 0 ";
            $result = $this->db-> query($query);
                while($roww = $result->fetch_assoc()){
                        
                    array_push($reviews,array("id"=>$roww["id"],"document_id"=>$roww["document_id"],"client_name"=>$roww["client_name"],"client_id"=>$roww["client_id"],"rm_name"=>$roww["rm_name"],"document_name"=>$roww["document_name"],"review_status"=>$roww["review_status"],"view"=>$value,"assingee"=>0));
    
                }
             
        }

        //Get all as assignee
        
        $query = "SELECT * FROM vw_documents_review WHERE review_status = 'review' AND  assignee = ".$_SESSION['id']." AND assignee_status = 1 ";
        $result = $this->db-> query($query);
            while($roww = $result->fetch_assoc()){

                    array_push($reviews,array("id"=>$roww["id"],"document_id"=>$roww["document_id"],"client_name"=>$roww["client_name"],"client_id"=>$roww["client_id"],"rm_name"=>$roww["rm_name"],"document_name"=>$roww["document_name"],"review_status"=>$roww["review_status"],"view"=>$value,"assingee"=>1));
            }
            


        echo json_encode(array("reviews" => $reviews));
            
        
    }

    
    public function collectReviewsAssigned(){
        
        $reviews = array();
            
            $query = "SELECT (SELECT userName FROM users WHERE id = assignee) AS assignee_name,document_name,duration,id,assignee FROM vw_documents_review WHERE rm_id = ".$_SESSION['id']." AND review_status = 'review' AND assignee_status = 1";

            $result = $this->db-> query($query);
                while($roww = $result->fetch_assoc()){
                  
                        array_push($reviews,array("id"=>$roww["id"],"document_name"=>$roww["document_name"],"duration"=>$roww["duration"],"assignee_name"=>$roww["assignee_name"],"assignee"=>$roww["assignee"]));
                   
                }
             
        echo json_encode(array("reviews" => $reviews));
            
        
    }
    
    public function collectReviewsAssingee(){
        $view = array();
        $query = "SELECT client_id FROM rm WHERE assignee_status = 1 AND assignee = ".$_SESSION['id'];
        
        $result = $this->db-> query($query);
        if (mysqli_num_rows($result) < 1) {
        

                    echo json_encode(array("result" => "error","value" => $this->db->error));
        
                    exit();
        
        }
        else {
            while($row=$result -> fetch_assoc()){
                array_push($view,$row['client_id']);
            }
         
        }

        if (empty($view)) {
            # code...
            echo "We have a winner";

        }
        else{
                foreach ($view as $key => $value) {
                # code...
                $query = "SELECT * FROM vw_documents_review WHERE review_status != 'completed' AND client_id = ".$value;
                $result = $this->db-> query($query);
                $reviews = array();
                if (mysqli_num_rows($result) < 1) {
            
                    echo json_encode(array("result" => "error","value" => $this->db->error));
        
                    exit();
        
                }
                else {
                    while($row=$result -> fetch_assoc()){
                    
                    array_push($reviews,array("id"=>$row["id"],"client_name"=>$row["client_name"],"rm_name"=>$row["rm_name"],"document_name"=>$row["document_name"],"review_status"=>$row["review_status"],"view"=>$value,"assingee"=>1));
                    
                    }   
                    echo json_encode(array("reviews" => $reviews));
        
            
                }
    
            }

        }

       
        
        
        
    }

    public function assignReview($assignee_id,$token,$duration,$document_review_id){
        if($token == $_SESSION['token']){

           // $query = "UPDATE document_review SET date_assigned = '".date("Y-m-d h:i:s")."', duration = ".$duration.", assignee_status = 1,assignee = ".$assignee_id." WHERE rm_id = ".$_SESSION['id'];
            
            $query = "UPDATE document_review SET date_assigned = now(), duration = ".$duration.", assignee_status = 1,assignee = ".$assignee_id." WHERE rm_id = ".$_SESSION['id']." AND id = ".$document_review_id;
            
            $result = $this->db-> query( $query);

            if(!$result){


                echo json_encode(array("result" => "alert-danger","value" => $this->$db->error));
                
            }
            else{


                $mail_of_rm = "<h4>Document Assignment</h4><p>You have assigned ".$this->getuserformail($assignee_id)." a job for $duration</p>";
                $mail_of_assignee = "<h4>Document Assignment</h4><p> ".$this->getuserformail($_SESSION['id'])." assigned you a document for review.</p>";

                libs::mail_template ($this->getusermail($assignee_id),"Document Review","CMA document review",$mail_of_assignee);
                libs::mail_template ($this->getusermail($_SESSION['id']),"Document Review","CMA document review",$mail_of_rm);


                    echo json_encode(array("result" => "alert-success","value" => "Assignment done"));

            
            }


        }
        else{
            
            echo json_encode(array("result" => "alert-danger","value" => "Not Authenticated"));
            
        }


        

    }

    public function editAssignee($doc_id,$duration){
        $query = "UPDATE document_review SET duration = $duration WHERE id = $doc_id";
        $result = $this->db-> query( $query);

        if(!$result){


            echo json_encode(array("result" => "alert-danger","value" => $query));
            
        }else{

            echo json_encode(array("result" => "alert-success","value" => "Duration changed"));

        }


        
    }

    public function unassign_assignee($doc_id){
        $query = "UPDATE document_review SET assignee_status = 0,date_assigned = null,duration=0,assignee=0 WHERE id = $doc_id";
        
        $result = $this->db-> query( $query);

        if(!$result){


            echo json_encode(array("result" => "alert-danger","value" => $query));
            
        }else{

            echo json_encode(array("result" => "alert-success","value" => "Lawyer Unassigneed"));

        }
  
    }


    public function getProfile($data){
        $query = "SELECT * FROM vw_advocates WHERE id =".$_SESSION['id'];
        $result = $this->db-> query($query);
        $advocate = array();
        if (mysqli_num_rows($result) < 1) {
        
            echo json_encode(array("result" => "error","value" => $this->db->error));
    
            exit();
    
        }else {
            while($row=$result -> fetch_assoc()){
                
            array_push($advocate,array("id"=>$row["id"],"phone"=>$row["phone"],"email"=>$row["email"],"name"=>$row["userName"],"user_image"=>$row["user_image"],"skillset"=>$row["skill_set"],
            "country"=>$row["country"],"lawyergroup"=>$row["lawyer_group"],"qualifications"=>$row["qualifications"],"descriptions"=>$row["descriptions"],"practieArea"=>$row["practice_area"]
            ));
            
        }
            echo json_encode(array("advocate" => $advocate));
    
        
        }
    
    }

    public function complete_review($doc_id,$assignee){
        
        if($assignee == 0){
            $sql = "UPDATE document_review SET review_status = 'completed' WHERE assignee_status = 0 AND  document_id = ".$doc_id." AND rm_id = ".$_SESSION['id'];

        // UPDATE document_review SET assignee_status = 0,date_assigned = null,duration=0,assignee=0;

        $result = $this->db-> query($sql);

            if(!$result){
            
                echo json_encode(array("result" => "alert-danger","value" => "Document not marked as complete"));
                exit();

            }else{

                //

                $query = "UPDATE Documents SET review_status = 'completed' WHERE id =".$doc_id;
                $result = $this->db-> query( $query);

                if(!$result){
                    echo json_encode(array("result" => "alert-danger","value" => "document not marked as complete"));
                    exit();

                }else{

                    echo json_encode(array("result" => "alert-success","value" => "Document added as complete"));
                    exit();
                }

                //
            
            }
        
        }
        else{
            $sql = "UPDATE document_review SET review_status = 'completed' WHERE assignee_status = 1 AND  document_id = ".$doc_id." AND assignee = ".$_SESSION['id'];

        // UPDATE document_review SET assignee_status = 0,date_assigned = null,duration=0,assignee=0;

        $result = $this->db-> query($sql);

            if(!$result){
            
                echo json_encode(array("result" => "alert-danger","value" => "Document not marked as complete"));
                exit();

            }else{

                //

                $query = "UPDATE Documents SET review_status = 'completed' WHERE id =".$doc_id;
                $result = $this->db-> query( $query);

                if(!$result){
                    echo json_encode(array("result" => "alert-danger","value" => "document not marked as complete"));
                    exit();

                }else{

                    echo json_encode(array("result" => "alert-success","value" => "Document added as complete"));
                    exit();
                }

                //
            
            }
        
        }    

    }

    private function getAllAdvocates(){
        $query = "SELECT * FROM advocate_profile";

        $result = $this->db-> query($query);
        $advocates = array();
        if (!$result) {
    
            echo json_encode(array("result" => "alert-danger","value" => $this->db->error));
            exit();
        }else {
            while($row=$result -> fetch_assoc()){
                
                    array_push($advocates,array("Name"=>$row['username'],"lawyer_type"=>$row['lawyer_group'],"practice_area"=>$row['practice_area'],"skill_set"=>$row['skill_set'],"phone"=>$row['p_number'],"image"=>$row['user_image']));
                
                
        }
    }

    }

    
}


?>