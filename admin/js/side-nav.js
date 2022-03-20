// jQuery document ready
$(document).ready(function() {
  var side  = document.querySelector("#side-nav");
  
  
    let sideNav = `   <ul class="nav">
  <li class="nav-item ">
              <a class="nav-link" data-op="index" id="main_id_in">
                <i class="material-icons">dashboard</i>
                <p>Dashboard</p>
              </a>
            </li>

            <li class="nav-item ">
              <a class="nav-link" data-op="user" id="main_id_in">
                <i class="material-icons">person</i>
                <p>User Profile</p>
              </a>
            </li>
              <li class="nav-item  ">
              <a class="nav-link" data-op="view_lawyer" id="main_id_in">
                <i class="material-icons">groups</i>
                <p>Lawyers</p>
              </a>
            </li>
                 <li class="nav-item  ">
              <a class="nav-link" data-op="products" id="main_id_in">
                <i class="material-icons">inventory_2</i>
                <p>Products</p>
              </a>
            </li>
              <li class="nav-item  ">
              <a class="nav-link" data-op="payment_terms" id="main_id_in">
                <i class="material-icons">paid</i>
                <p>Payment  Terms</p>
              </a>
            </li>

                 <li class="nav-item  ">
              <a class="nav-link" data-op="request_consultation" id="main_id_in">
                <i class="material-icons">support_agent</i>
                <p>Request Consultation</p>
              </a>
            </li>
                <li class="nav-item  ">
              <a class="nav-link" data-op="view_service_name" id="main_id_in">
                <i class="material-icons">work</i>
                <p>Service Name</p>
              </a>
            </li>
              <li class="nav-item  ">
              <a class="nav-link" data-op="view_lawyer_type" id="main_id_in">
                <i class="material-icons">school</i>
                <p>Lawyer Type</p>
              </a>
            </li>
                <li class="nav-item  ">
              <a class="nav-link" data-op="view_video_name" id="main_id_in">
                <i class="material-icons">videocam</i>
                <p>Videos</p>
              </a>
            </li>

                <li class="nav-item  ">
              <a class="nav-link" data-op="view_knowledge_hub" id="main_id_in">
                <i class="material-icons">upload_file</i>
                <p>Knowledge Hub</p>
              </a>
            </li>

                   <li class="nav-item  ">
              <a class="nav-link" data-op="view_document" id="main_id_in">
                <i class="material-icons">tab</i>
                <p>Documents</p>
              </a>
            </li>

                  <li class="nav-item  ">
              <a class="nav-link" data-op="view_practise_areas" id="main_id_in">
                <i class="material-icons">work</i>
                <p>Practise Areas</p>
              </a>
            </li>

                 <li class="nav-item  ">
              <a class="nav-link" data-op="view_skill_set" id="main_id_in">
                <i class="material-icons">badge</i>
                <p>Skill Sets</p>
              </a>
            </li>

              <li class="nav-item  ">
              <a class="nav-link" data-op="view_users" id="main_id_in">
                <i class="material-icons">people</i>
                <p>Operational Staff</p>
              </a>
            </li>

              <li class="nav-item  ">
              <a class="nav-link" data-op="view_category" id="main_id_in">
                <i class="material-icons">category</i>
                <p>Categories</p>
              </a>
            </li>

              <li class="nav-item  ">
              <a class="nav-link" data-op="view_sub_category" id="main_id_in">
                <i class="material-icons">layers</i>
                <p>Sub-Categories</p>
              </a>
            </li>


              <li class="nav-item  ">
              <a class="nav-link" data-op="view_subscription" id="main_id_in">
                <i class="material-icons">card_travel</i>
                <p>Subscription Listing</p>
              </a>
            </li>

                <li class="nav-item  ">
              <a class="nav-link" data-op="view_business_units" id="main_id_in">
                <i class="material-icons">business-center</i>
                <p>Business Units</p>
              </a>
            </li>
               <li class="nav-item  ">
              <a class="nav-link" data-op="approve_reject" id="main_id_in">
                <i class="material-icons">receipt</i>
                <p> Documents Approval</p>
              </a>
            </li>

            <li class="nav-item  ">
            <a class="nav-link" data-op="assign_rm_to_case" id="main_id_in">
              <i class="material-icons">receipt</i>
              <p> Assing Rm</p>
            </a>
          </li>

  </div>
          </ul>`;
  
          $(side).html(sideNav);

                         $(document).ready(function() {
    $('.nav-item').click(function() {
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active')
    });
});

    $(document).ready(function() {
    $('.dropdown show').click(function() {
        $('.dropdown show').removeClass('active');
        $(this).closest('.dropdown show').addClass('active')
    });
});
  
      
  }); 