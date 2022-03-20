<?php
session_start();

    function message(){
        if(isset($_SESSION["errorMessage"])){
            $output="<div class=\"alert alert-danger\">";
            $output.=($_SESSION["errorMessage"]);
            $output.="</div>";
            $_SESSION["errorMessage"]=null;
            return $output;
        }
    }

    function successMessage(){
      if(isset($_SESSION["successMessage"])){
                $output="<div class=\"alert alert-success\">";
                $output.=($_SESSION["successMessage"]);
                $output.="</div>";
                $_SESSION["successMessage"]=null;
                return $output;
            }
        }  

    function infoMessage(){
      if(isset($_SESSION["infoMessage"])){
                $output="<div class=\"alert alert-info\">";
                $output.=($_SESSION["infoMessage"]);
                $output.="</div>";
                $_SESSION["infoMessage"]=null;
                return $output;
            }
        }  
?>





