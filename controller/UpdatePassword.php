<?php
session_start();


require_once(__DIR__ . '/../controller/Connection.php');

$_SESSION['feedback'] = "";
echo'
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Password Recovery</title>
  </head>
  <body>
    <h1>Welcome to CMA password recovery</h1>
        <div class="alert alert-primary" role="alert"> '.$_SESSION['feedback'].'</div>
            <form method="POST">
                <div class="mb-3">
                    <label for="password" class="form-label">Enter Password</label>
                    <input type="password" class="form-control" required id="password" name="password">
                </div>
                <div class="mb-3">
                    <label for="confirm_password" class="form-label">Enter Password</label>
                    <input type="password" class="form-control" required id="confirm_password" name="confirm_password">
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

  </body>
</html>


';

if(isset($_POST['password'])){
    if($_POST['password'] != $_POST['confirm_password']){
        $_SESSION['feedback'] = "Confirm password and password don't match";
        exit();
    }else{

        $query = "SELECT id FROM users WHERE email = '".$_GET['email']."'";
        $result = $db->query($query);

        if(mysqli_num_rows($result) != 1){
            $_SESSION['feedback'] = "Error contact Us for more details";
            exit();
        }else{
            $row_user = $result ->fetch_assoc();
            if(MD5($row_user['id']) != $_GET["user_request"]){
                $_SESSION['feedback'] = "Error contact Us for more detailsU";
                exit();
            }
            $password = $_POST['password'];
            $query = "UPDATE users SET user_password =  '".MD5($password)."' WHERE id = ".$row_user['id'];
            $result = $db->query($query);

            if(!$result){
                $_SESSION['feedback'] = "Contact Us for more details";
                exit();
            }else {
                $_SESSION['feedback'] = "Password Reset  is completed";
                header("Location: https://cmversiontwo.cmadvocates.com/login.html");

                exit();
            }

        }


        

    }
}

?>
