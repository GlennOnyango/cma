<!DOCTYPE html>
<html>
<head>
    <title>CM Advocates</title>
</head>
<body style="  background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(images/image4.jpg);">


    <style type="text/css">
        body {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

/* style the container */
.container {
  position: relative;
  border-radius: 5px;
  background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3));
  padding: 20px 0 30px 0;
} 

/* style inputs and link buttons */
input,
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}

input:hover,
.btn:hover {
  opacity: 1;
}

/* add appropriate colors to fb, twitter and google buttons */
.fb {
  background-color: #3B5998;
  color: white;
}

.twitter {
  background-color: #55ACEE;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}

/* style the submit button */
input[type=submit] {
  background-color: #1c355e;
  color: white;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #7f2729;
}

/* Two-column layout */
.col {
justify-content:center;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* vertical line */
.vl {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border: 2px solid #ddd;
  height: 175px;
}

/* text inside the vertical line */
.vl-innertext {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 8px 10px;
}

/* hide some text on medium and large screens */
.hide-md-lg {
  display: none;
}

/* bottom container */
.bottom-container {
  text-align: center;
  background-color: #7f2729;
  border-radius: 0px 0px 4px 4px;
}

/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 650px) {
  .col {
    width: 100%;
    margin-top: 0;
  }
  /* hide the vertical line */
  .vl {
    display: none;
  }
  /* show the hidden text on small screens */
  .hide-md-lg {
    display: block;
    text-align: center;
  }
}
</style>

    <div class="container" style="margin-top:100px;">
  <form action="/action_page.php">
    <div class="row">
         <a href="index.html"><img class="img" src="images/cmalogo.png" style="width:135px;"></a>
        <h2 style="text-align:center">Enter email to reset password</h2>
     <div class="col">
        <input type="text" name="email" placeholder="Enter email" required>
        <input type="submit" value="Reset">
      </div>
      
    </div>
  </form>
</div>


</body>
</html>