// jQuery document ready
$(document).ready(function() {
  var side  = document.querySelector("#side-nav");
  
  
    let sideNav = `
      <div class="logo"><a href="index.html" class="simple-text logo-normal">
          CM Advocates
        </a></div>
      <div class="sidebar-wrapper">
        <ul class="nav" id="myTab">
         <li class="nav-item active">
            <a class="nav-link" id="main_id_in" data-op="index">
              <i class="material-icons">store</i>
              <p>Our Products</p>
            </a>
          </li>

       <li class="nav-item ">
            <a class="nav-link" id="main_id_in" data-op="edit_profile">
              <i class="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li>

             <li class="nav-item ">
            <a class="nav-link" id="main_id_in" data-op="subscription_payment_history">
              <i class="material-icons">card_giftcard</i>
              <p class="mr-1"> Payment Billing History</p>
            </a>
          </li>
 
           <li class="nav-item ">
            <a class="nav-link"id="main_id_in" data-op="view_document">
              <i class="material-icons">assignment</i>
              <p>Documents</p>
            </a>
          </li>
            <li class="nav-item ">
            <a class="nav-link" id="main_id_in" data-op="review_document">
              <i class="material-icons"><span class="material-icons">upload_file</span></i>
              <p>Documents Review</p>
            </a>
          </li>
           <li class="nav-item ">
            <a class="nav-link" id="main_id_in" data-op="profile_training">
              <i class="material-icons">videocam</i>
              <p>CM Academy(webinars)</p>
            </a>
          </li>

             <li class="nav-item ">
            <a class="nav-link" id="main_id_in" data-op="view_videos">
              <i class="material-icons">video_camera_front</i>
              <p>Videos</p>
            </a>
          </li>
          
           <li class="nav-item ">
            <a class="nav-link" id="main_id_in" data-op="profile_consultation">
              <i class="material-icons">schedule</i>
              <p>Consulting hours</p>
            </a>
          </li>
  
        </ul>
      </div>`;
  
          $(side).html(sideNav);

        $(document).ready(function() {
    $('.nav-item').click(function() {
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active')
    });
});


  
      
  }); 