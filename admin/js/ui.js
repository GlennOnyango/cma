import { getUser,redirect,logout } from '../../js/collection.js';

var url = "https://cmversiontwo.cmadvocates.com/controller/authG.php";
var log_form = document.querySelector("#log_form");
// var myModal = new bootstrap.Modal(document.getElementById('myspinner'));



const path = window.location.origin;
redirect(url,path);


// jQuery document ready
$(document).ready(function () {
  const content = document.querySelector(".content");
  const main_id_in = document.querySelectorAll("#main_id_in");

  

  let ui = "peace";
index();

  $(".logout_btn").on("click",()=>{
    logout(url);
  });


  $( "#side-nav" ).on( "click", "#main_id_in", function() {
    let myatt = $( this ).attr( 'data-op');
    eval(`${myatt}()`);
    
  });

  log_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(log_form);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function(data) {
            console.log(data);
            
            const obj = JSON.parse(data);
            
            if (obj.result == "logged"){
                
                sessionStorage.setItem('token',obj.value);
                window.location.replace(`${path}${obj.path}`);

            }else{

                myft.classList.add(obj.result);
                myft.innerHTML = obj.value;
                myft.classList.remove('d-none');
      
                
          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
         

          }, 5000);//wait 2 seconds
            }


        },
        error: function(e) {

            console.log(data);

        }

    });

 

});


  function list_services() {
  ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">Services</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Legal Documents Portal</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Webinars</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Tech Packs</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
  </div>`;

  $(content).html(ui);

    const main_id_in = document.querySelectorAll("#main_id_in");

    console.log(main_id_in.length);

    main_id_in.forEach((ele) => {
      // Here comes the Code that should be executed on every Element, e.g.
      ele.addEventListener("click", () => {

        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        let myatt = ele.getAttribute("data-op");
        eval(`${myatt}()`);

      });

    });
}



  function membership_analysis() {
  ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">Available Subscriptions Under this club</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Standard Subscription</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
  </div>`;

  $(content).html(ui);

    const main_id_in = document.querySelectorAll("#main_id_in");

    console.log(main_id_in.length);

    main_id_in.forEach((ele) => {
      // Here comes the Code that should be executed on every Element, e.g.
      ele.addEventListener("click", () => {

        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        let myatt = ele.getAttribute("data-op");
        eval(`${myatt}()`);

      });

    });
}


  function subscription_analysis() {
  ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">Memberships</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">CM SME CLUB(product name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
  </div>`;

  $(content).html(ui);

    const main_id_in = document.querySelectorAll("#main_id_in");

    console.log(main_id_in.length);

    main_id_in.forEach((ele) => {
      // Here comes the Code that should be executed on every Element, e.g.
      ele.addEventListener("click", () => {

        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        let myatt = ele.getAttribute("data-op");
        eval(`${myatt}()`);

      });

    });
}


  function service_analysis() {
  ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">Memberships</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">CM SME CLUB(product name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
  </div>`;

  $(content).html(ui);

    const main_id_in = document.querySelectorAll("#main_id_in");

    console.log(main_id_in.length);

    main_id_in.forEach((ele) => {
      // Here comes the Code that should be executed on every Element, e.g.
      ele.addEventListener("click", () => {

        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        let myatt = ele.getAttribute("data-op");
        eval(`${myatt}()`);

      });

    });
}





  function index() {
    ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">Memberships</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">CM SME CLUB(product name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="membership_analysis" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>

  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">CM SME CLUB(product name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
</div> 
</div>

  <div class="card-header card-header-primary">
            <h4 class="card-title">Subscriptions</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Legal Documents Portal(service name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data"  class="btn btn-primary">View</button>
              </div>
      </div>
  </div>

  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Webinars(service name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
          <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="purchased_subscription" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
</div> 
</div>

  <div class="card-header card-header-primary">
            <h4 class="card-title">Services</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">CM Portal</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>

              <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="list_services" class="btn btn-primary">View</button>
              </div>
             
      </div>
  </div>
</div> 
</div>
 `;

    $(content).html(ui);

    const main_id_in = document.querySelectorAll("#main_id_in");


    main_id_in.forEach((ele) => {
      // Here comes the Code that should be executed on every Element, e.g.
      ele.addEventListener("click", () => {

        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        let myatt = ele.getAttribute("data-op");
        eval(`${myatt}()`);

      });

    });

  }

  function display_analysis_data() {
    ui = `<div class="container-fluid">
  <div class="row">
    <div class="col-lg-3 col-md-6 col-sm-6">
      <div class="card card-stats">
        <div class="card-header card-header-warning card-header-icon">
          <div class="card-icon">
            <i class="material-icons">content_copy</i>
          </div>
          <p class="card-category">Total Documents</p>
          <h3 class="card-title">300
          </h3>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">date_range</i>
            <a href="javascript:;">Last 24 hours</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
      <div class="card card-stats">
        <div class="card-header card-header-success card-header-icon">
          <div class="card-icon">
            <i class="material-icons">store</i>
          </div>
          <p class="card-category">Total Revenue</p>
          <h3 class="card-title">shs 34,245</h3>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">date_range</i> Last 24 Hours
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
      <div class="card card-stats">
        <div class="card-header card-header-danger card-header-icon">
          <div class="card-icon">
            <i class="material-icons">credit_card</i>
          </div>
          <p class="card-category">Total Subscriptions</p>
          <h3 class="card-title">75</h3>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">date_range</i> last 24 hours
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
      <div class="card card-stats">
        <div class="card-header card-header-info card-header-icon">
          <div class="card-icon">
            <i class="fa fa-user"></i>
          </div>
          <p class="card-category">Total Advocates</p>
          <h3 class="card-title">+245</h3>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">update</i> Just Updated
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="card card-chart">
        <div class="card-header card-header-success">
          <div class="ct-chart" id="dailySalesChart"></div>
        </div>
        <div class="card-body">
          <h4 class="card-title">Daily Sales</h4>
          <p class="card-category">
            <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">access_time</i> updated 4 minutes ago
          </div>
        </div>
      </div>
    </div>



    <div class="col-md-4">
      <div class="card card-chart">
        <div class="card-header card-header-warning">
          <div class="ct-chart" id="websiteViewsChart"></div>
        </div>
        <div class="card-body">
          <h4 class="card-title">CM SME CLUB Subscriptions</h4>
          <p class="card-category">Currently</p>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">access_time</i> campaign sent 2 days ago
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card card-chart">
        <div class="card-header card-header-danger">
          <div class="ct-chart" id="completedTasksChart"></div>
        </div>
        <div class="card-body">
          <h4 class="card-title">Documents Purchased</h4>
        </div>
        <div class="card-footer">
          <div class="stats">
            <i class="material-icons">access_time</i> campaign sent 2 days ago
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <div class="card">
        <div class="card-header card-header-tabs card-header-primary">
          <div class="nav-tabs-navigation">
            <div class="nav-tabs-wrapper">
              <span class="nav-tabs-title">Total clients:</span>
              <ul class="nav nav-tabs" data-tabs="tabs">
                
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="tab-content">
            <div class="tab-pane active" id="profile">
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="" checked>
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="">
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="">
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                    </td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="" checked>
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Create 4 Invisible User Experiences you Never Knew About</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane" id="messages">
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="" checked>
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                    </td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="">
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane" id="settings">
              <table class="table">
                <tbody>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="">
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="" checked>
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                    </td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input class="form-check-input" type="checkbox" value="" checked>
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                    <td class="td-actions text-right">
                      <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                        <i class="material-icons">edit</i>
                      </button>
                      <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                        <i class="material-icons">close</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="card">
        <div class="card-header card-header-warning">
          <h4 class="card-title">Advocates Stats</h4>
          <p class="card-category">Information</p>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover">
            <thead class="text-warning">
              <th>ID</th>
              <th>Name</th>
              <th>Practise Area</th>
              <th>Contact Details</th>
              <th>Ratings</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Aviation law</td>
                <td>johndoe@gmail.com</td>
                <td>johndoe@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div> `;

    $(content).html(ui);

    // we simulate the window Resize so the charts will get updated in realtime.
    var simulateWindowResize = setInterval(function () {
      window.dispatchEvent(new Event('resize'));
    }, 180);

    // we stop the simulation of Window Resize after the animations are completed
    setTimeout(function () {
      clearInterval(simulateWindowResize);
    }, 1000);

  }


  function addLawyers() {
    ui = `<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
           
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Lawyer</h4>
                </div>
                <div class="card-body">
                    <form  class="row" method="POST" id="addLawyer" enctype="multiple/form-data">
                    <div class="form-group col-6">
                    <input type="text" class="form-control" id="exampleFormControlInput1" name="lawyer_email" placeholder="Lawyer Email">
                  </div>
                          <div class="form-group col-6">
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="lawyer_mobile" placeholder="Lawyer Phone">
                          </div>
                          <div class="col-12">
                          <p class="text-center"><input type="submit" class="btn btn-primary "/></p>
                          </div>
                          
                          
                    </form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    let addLawyer = document.querySelector("#addLawyer");
    let myft = document.querySelector(".alert");
    addLawyer.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addLawyer);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Lawyers.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            
          myft.classList.remove(obj.result);
          myft.innerHTML = '';
          view_lawyer()
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });
  }


  function editLawyers(mail, id) {
    ui = `<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
           
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Lawyer</h4>
                </div>
                <div class="card-body">
                    <form  class="row" method="POST" id="editLawyer" >
                    <div class="form-group col-6">
                    <input type="text" class="form-control" value="${mail}" name="lawyer_edit_email" placeholder="Lawyer Email">
                  </div>
                          <div class="form-group col-6">
                            <input type="text" class="form-control" name="lawyer_mobile" placeholder="Lawyer Phone">
                          </div>

                          <div class="col-12">
                          <p class="text-center"><input type="submit" class="btn btn-primary "/></p>
                          </div>
                          
                          
                    </form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    let editLawyer = document.querySelector("#editLawyer");
    let myft = document.querySelector(".alert");
    editLawyer.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editLawyer);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('lawyer_id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Lawyers.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_lawyer();

          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });
  }

  function view_lawyer() {

    ui = `         <div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
         
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Lawyers</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form id="search" method="POST" >
              <div class="input-group no-border">
                <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
                <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                   
                </button>
                <button class="btn btn-primary" data-op="addLawyers" id="main_id_in">Add New</button>
                  
              </div>
            </form>
           
                        <th>
                          ID
                        </th>
                        <th>
                          Lawyer Name
                        </th>
                        <th>
                          Lawyer Email
                        </th>
                        <th>
                          Lawyer Type
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Aproval
                        </th>
                        <th>
                        Edit
                        </th>
                          <th>
                        Assign
                        </th>
                      </thead>
                      <tbody id="mytable">
                  
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Lawyers.php", { lawyers: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.lawyers.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.email}
                                </td>
                                <td>
                                ${element.type} 
                                </td>
                                  <td>
                                  ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary app_lawyer" data_op="${element.id}" ><span class="material-icons">check_circle</span>Approve</button> 
                                <button class="btn btn-primary dec_lawyer" data_op="${element.id}"><span class="material-icons">close</span>Decline</button>
                                
                                </td>
                                <td>
                                <button class="btn btn-primary" id="main_id_in" data-op="editLawyers" data_op="${element.id}" data_mail="${element.email}" ><span class="material-icons">edit</span>Edit</button>
                                </td>
                                <td><button type="button" id="main_id_in" data-op="assign_business_unit" class="btn btn-primary">Assign Business Unit</button></td>
                              </tr>`);
          });
        });

    $(content).html(ui);

    let searchbtn = document.querySelector("#searchbtn");
    let myft = document.querySelector(".alert");

    
    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",$( this ).attr( 'data_id'))`);
      
    });

    
    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_mail')}",${$( this ).attr( 'data_op')})`);
      
    });

    $( "#mytable" ).on( "click", ".app_lawyer", function() {
     
      $.post(url, { app_lawyer: $( this ).attr( 'data_op') })
            .done(function (data) {
              console.log(data);
              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
              myft.classList.remove('d-none');
              myft.classList.add(obj.result);
              myft.innerHTML = obj.value;
              myft.classList.remove('d-none');

              setTimeout(function () {
                myft.classList.add('d-none');
                view_lawyer();
              }, 1000);//wait 2 seconds

            });

    });

    
    $( "#mytable" ).on( "click", ".dec_lawyer", function() {
     
      $.post(url, { dec_lawyer: $( this ).attr( 'data_op') })
            .done(function (data) {
              console.log(data);
              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
              myft.classList.remove('d-none');
              myft.classList.add(obj.result);
              myft.innerHTML = obj.value;
              myft.classList.remove('d-none');

              setTimeout(function () {
                myft.classList.add('d-none');
                view_lawyer();
              }, 1000);//wait 2 seconds

            });

    });

  
    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Lawyers.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {

          $("#mytable").empty();

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          obj.lawyers.forEach(element => {

            $("#mytable").append(`<tr>
                        <td>
                          ${element.id}
                        </td>
                        <td>
                        ${element.Name}
                        </td>
                        <td>
                        ${element.email}
                        </td>
                        <td>
                        ${element.type} 
                        </td>
                          <td>
                          ${element.status}
                        </td>
                        <td >
                        <button class="btn btn-primary app_lawyer" data_op="${element.id}" ><span class="material-icons">check_circle</span>Approve</button> 
                        <button class="btn btn-primary dec_lawyer" data_op="${element.id}"><span class="material-icons">close</span>Decline</button>
                        
                        </td>
                        <td>
                        <button class="btn btn-primary" id="main_id_in" data-op="editLawyers" data_op="${element.id}" data_mail="${element.email}" ><span class="material-icons">edit</span>Edit</button>
                        </td>
                      </tr>`);
          });


        },
        error: function (e) {

          console.log(data);

        }

      });
      let app_lawyer = document.querySelectorAll(".app_lawyer");
      let dec_lawyer = document.querySelectorAll(".dec_lawyer");

    });




  }


function assign_business_unit(){
    ui = `  <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Business Units</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search...">
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                        Business Unit Name
                        </th>
                        <th>
                          status
                        </th>
                          <th>
                        Actions
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            business unit 1
                          </td>
                          <td>
                            Active
                          </td>
                          <td>
                    <button class="btn btn-primary" data-op="one_subscription_feature" id="main_id_in" ><span class="material-icons">edit</span> BusinessUnit Head</button>
                    <button class="btn btn-primary" data-op="one_subscription_feature" id="main_id_in" ><span class="material-icons">edit</span> Business Unit Member</button>
                           </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>`;


    $(content).html(ui);

    const main_id_in = document.querySelectorAll("#main_id_in");

    console.log(main_id_in.length);

    main_id_in.forEach((ele) => {
      // Here comes the Code that should be executed on every Element, e.g.
      ele.addEventListener("click", () => {

        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        let myatt = ele.getAttribute("data-op");
        eval(`${myatt}()`);

      });

    });
  }



  function add_benefits(){
    ui=`<div class="container-fluid">
    <div class="row">
<div class="alert d-none" role="alert"></div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">New Benefits</h4>
          </div>
          <div class="card-body">
       <form action="" method="POST" id="" class="row" enctype="multiple/form-data">
<div class=" form-group col-12" id="show_item">
<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12">
<label for="inputAddress2">Benefit Name</label>
<input type="text" class="form-control mt-2" name="desc" id="inputAddress2">
</div>
<div class="row">
<div class="col-12">
</div>
    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
        <input type="text" name="description[]" class="form-control" placeholder="Benefit Description" required>
    </div>
    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
        <input type="text" name="price[]" class="form-control" placeholder="Benefit Price" required>
    </div>

    <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
    <p class="text-center"> <button class="btn btn-primary  add_item_btn">Add more</button></p>
        
    </div>
</div>
</div>

<div class="form-group   col-xl-6 col-lg-6 col-md-6 col-sm-12 form-file-upload form-file-multiple">
<input type="file" multiple="" accept="video/mp4,video/x-m4v,video/*" name="videofile" class="inputFileHidden">
<div class="input-group">
  <input type="text" name="videofile" class="form-control inputFileVisible" placeholder="Choose Logo">
  <span class="input-group-btn">
      <button type="button" class="btn btn-fab btn-round btn-primary">
          <i class="material-icons">videocam</i>
      </button>
  </span>
</div>
</div>

<div class="form-group   col-xl-6 col-lg-6 col-md-6 col-sm-12 form-file-upload form-file-multiple">
<input type="file" multiple="" accept="video/mp4,video/x-m4v,video/*" name="videofile" class="inputFileHidden">
<div class="input-group">
  <input type="text" name="videofile" class="form-control inputFileVisible" placeholder="Choose Benefit Image">
  <span class="input-group-btn">
      <button type="button" class="btn btn-fab btn-round btn-primary">
          <i class="material-icons">videocam</i>
      </button>
  </span>
</div>
</div>

<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control selectpicker col-12" multiple  data-style="btn btn-link" id="sub exampleFormControlSelect2" name="sub">
${$.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
const obj = JSON.parse(data);
if(obj.result == "session"){
$("#reauth").modal();
return;
}

if(obj.result == "session"){
$("#reauth").modal();
return;
}
$("#sub").empty();

$("#sub").append(`<option >Choose subscription</option>`);

obj.subscriptions.forEach(element => {
  $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
});
})


}
</select>
</div>  

    <div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control col-12" name="video_status">
                    <option>Status</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                    </select>
</div>  
<input type="submit" name="insert-btn" class="btn btn-primary"/>
</form>


        
          </div>
        </div>
      </div>

    </div>
  </div>`;

     $(content).html(ui);

    
  $(document).ready(function() {
    $(".add_item_btn").click(function(e) {
        e.preventDefault();
        $("#show_item").append(`<div class="form-group col-12" id="show_item">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
            <input type="text" name="name[]" class="form-control" placeholder="Benefit Name">
          </div>
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
            <input type="text" name="price[]" class="form-control" placeholder="Benefit Price">
          </div>

          <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
    <p class="text-center"> <button class="btn btn-danger remove_item_btn">Remove</button></p>      
    </div>
        </div>
      </div>`);

    });

    $(document).on('click', '.remove_item_btn', function(e) {
        $(this).css("background-color","black");
        $(this).parent().parent().parent().remove();
    })
});

// FileInput
$('.form-file-simple .inputFileVisible').click(function () {
  $(this).siblings('.inputFileHidden').trigger('click');
});

$('.form-file-simple .inputFileHidden').change(function () {
  var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
  $(this).siblings('.inputFileVisible').val(filename);
});

$('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
  $(this).parent().parent().find('.inputFileHidden').trigger('click');
  $(this).parent().parent().addClass('is-focused');
});

$('.form-file-multiple .inputFileHidden').change(function () {
  var names = '';
  for (var i = 0; i < $(this).get(0).files.length; ++i) {
    if (i < $(this).get(0).files.length - 1) {
      names += $(this).get(0).files.item(i).name + ',';
    } else {
      names += $(this).get(0).files.item(i).name;
    }
  }
  $(this).siblings('.input-group').find('.inputFileVisible').val(names);
});

$('.form-file-multiple .btn').on('focus', function () {
  $(this).parent().siblings().trigger('focus');
});

$('.form-file-multiple .btn').on('focusout', function () {
  $(this).parent().siblings().trigger('focusout');
});



  }

   function edit_benefits(){
    ui=`<div class="container-fluid">
    <div class="row">
<div class="alert d-none" role="alert"></div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">New Benefits</h4>
          </div>
          <div class="card-body">
       <form action="" method="POST" id="" class="row" enctype="multiple/form-data">
<div class=" form-group col-12" id="show_item">
<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12">
<label for="inputAddress2">Benefit Name</label>
<input type="text" class="form-control" name="desc" id="inputAddress2">
</div>
<div class="row">
<div class="col-12">
</div>
    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
        <input type="text" name="description[]" class="form-control" placeholder="Benefit Description" required>
    </div>
    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
        <input type="text" name="price[]" class="form-control" placeholder="Benefit Price" required>
    </div>

    <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
    <p class="text-center"> <button class="btn btn-primary  add_item_btn">Add more</button></p>
        
    </div>
</div>
</div>

<div class="form-group   col-xl-6 col-lg-6 col-md-6 col-sm-12 form-file-upload form-file-multiple">
<input type="file" multiple="" accept="video/mp4,video/x-m4v,video/*" name="videofile" class="inputFileHidden">
<div class="input-group">
  <input type="text" name="videofile" class="form-control inputFileVisible" placeholder="Choose Logo">
  <span class="input-group-btn">
      <button type="button" class="btn btn-fab btn-round btn-primary">
          <i class="material-icons">videocam</i>
      </button>
  </span>
</div>
</div>

<div class="form-group   col-xl-6 col-lg-6 col-md-6 col-sm-12 form-file-upload form-file-multiple">
<input type="file" multiple="" accept="video/mp4,video/x-m4v,video/*" name="videofile" class="inputFileHidden">
<div class="input-group">
  <input type="text" name="videofile" class="form-control inputFileVisible" placeholder="Choose Benefit Image">
  <span class="input-group-btn">
      <button type="button" class="btn btn-fab btn-round btn-primary">
          <i class="material-icons">videocam</i>
      </button>
  </span>
</div>
</div>


<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control selectpicker col-12" multiple  data-style="btn btn-link" id="sub exampleFormControlSelect2" name="sub">
${$.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
const obj = JSON.parse(data);
if(obj.result == "session"){
$("#reauth").modal();
return;
}

if(obj.result == "session"){
$("#reauth").modal();
return;
}
$("#sub").empty();

$("#sub").append(`<option >Choose subscription</option>`);

obj.subscriptions.forEach(element => {
  $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
});
})


}
</select>
</div>  

    <div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control col-12" name="video_status">
                    <option>Status</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                    </select>
</div>  



<input type="submit" name="insert-btn" class="btn btn-primary"/>
</form>


        
          </div>
        </div>
      </div>

    </div>
  </div>`;

     $(content).html(ui);

     $(document).ready(function() {
      $(".add_item_btn").click(function(e) {
          e.preventDefault();
          $("#show_item").append(`<div class="form-group col-12" id="show_item">
          <div class="row">
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
              <input type="text" name="name[]" class="form-control" placeholder="Benefit Name">
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
              <input type="text" name="price[]" class="form-control" placeholder="Benefit Price">
            </div>
  
            <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
      <p class="text-center"> <button class="btn btn-danger remove_item_btn">Remove</button></p>      
      </div>
          </div>
        </div>`);
  
      });
  
      $(document).on('click', '.remove_item_btn', function(e) {
          $(this).css("background-color","black");
          $(this).parent().parent().parent().remove();
      })
  });

  // FileInput
  $('.form-file-simple .inputFileVisible').click(function () {
    $(this).siblings('.inputFileHidden').trigger('click');
  });

  $('.form-file-simple .inputFileHidden').change(function () {
    var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
    $(this).siblings('.inputFileVisible').val(filename);
  });

  $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
    $(this).parent().parent().find('.inputFileHidden').trigger('click');
    $(this).parent().parent().addClass('is-focused');
  });

  $('.form-file-multiple .inputFileHidden').change(function () {
    var names = '';
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      if (i < $(this).get(0).files.length - 1) {
        names += $(this).get(0).files.item(i).name + ',';
      } else {
        names += $(this).get(0).files.item(i).name;
      }
    }
    $(this).siblings('.input-group').find('.inputFileVisible').val(names);
  });

  $('.form-file-multiple .btn').on('focus', function () {
    $(this).parent().siblings().trigger('focus');
  });

  $('.form-file-multiple .btn').on('focusout', function () {
    $(this).parent().siblings().trigger('focusout');
  });


  }

  function view_benefits(){
    ui=`<div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">Additional Benefits</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-primary">
          <form class="navbar-form">
        <div class="input-group no-border">
          <input type="text" value="" class="form-control" placeholder="Search...">
          <button type="submit" class="btn btn-white btn-round btn-just-icon">
            <i class="material-icons">search</i>
            <button class="btn btn-primary" id="main_id_in" data-op="add_benefits">Add New</button>
            <div class="ripple-container"></div>
          </button>
            <div class="ripple-container"></div>
          </button>
        </div>
      </form>
                  <th>
                    ID
                  </th>
                  <th>
                  Subscription Name
                  </th>
                  <th>
                    status
                  </th>
                    <th>
                  Actions
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>
                    Standard
                    </td>
                    <td>
                      Active
                    </td>
                    <td>
              <button class="btn btn-primary" data-op="edit_benefits" id="main_id_in" ><span class="material-icons">edit</span></button>
                     </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>`;

     $(content).html(ui);

     $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}","${$( this ).attr( 'data_code')}",${$( this ).attr( 'data_id')})`);
      
    });
  }

  function add_most_popular(){
    ui=`<div class="container-fluid">
    <div class="row">
<div class="alert d-none" role="alert"></div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">Choose Popular Documents</h4>
          </div>
          <div class="card-body">
       <form action="" method="POST" id="" class="row" enctype="multiple/form-data">
<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control selectpicker col-12" multiple  data-style="btn btn-link" id="sub exampleFormControlSelect2" name="sub">
${$.get("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { getDocument: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
const obj = JSON.parse(data);
if(obj.result == "session"){
$("#reauth").modal();
return;
}

if(obj.result == "session"){
$("#reauth").modal();
return;
}
$("#sub").empty();

$("#sub").append(`<option >Choose documents</option>`);

obj.subscriptions.forEach(element => {
  $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
});
})


}
</select>
</div>  
<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12">
<label for="inputAddress2">Brief Description</label>
<input type="text" class="form-control mt-2" name="desc" id="inputAddress2">
</div>
<input type="submit" name="insert-btn" class="btn btn-primary"/>
</form>


        
          </div>
        </div>
      </div>

    </div>
  </div>`;

     $(content).html(ui);
  }

   function edit_most_popular(){
    ui=`<div class="container-fluid">
    <div class="row">
<div class="alert d-none" role="alert"></div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">Choose Popular Documents</h4>
          </div>
          <div class="card-body">
       <form action="" method="POST" id="" class="row" enctype="multiple/form-data">
<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control selectpicker col-12" multiple  data-style="btn btn-link" id="sub exampleFormControlSelect2" name="sub">
${$.get("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { getDocument: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
const obj = JSON.parse(data);
if(obj.result == "session"){
$("#reauth").modal();
return;
}

if(obj.result == "session"){
$("#reauth").modal();
return;
}
$("#sub").empty();

$("#sub").append(`<option >Choose documents</option>`);

obj.subscriptions.forEach(element => {
  $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
});
})


}
</select>
</div>  
<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12">
<label for="inputAddress2">Brief Description</label>
<input type="text" class="form-control mt-2" name="desc" id="inputAddress2">
</div>
<input type="submit" name="insert-btn" class="btn btn-primary"/>
</form>


        
          </div>
        </div>
      </div>

    </div>
  </div>`;

     $(content).html(ui);
  }

  function view_most_popular(){
    ui=`<div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">Most Popular Documents</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class=" text-primary">
          <form class="navbar-form">
        <div class="input-group no-border">
          <input type="text" value="" class="form-control" placeholder="Search...">
          <button type="submit" class="btn btn-white btn-round btn-just-icon">
            <i class="material-icons">search</i>
            <button class="btn btn-primary" id="main_id_in" data-op="add_most_popular">Add New</button>
            <div class="ripple-container"></div>
          </button>
            <div class="ripple-container"></div>
          </button>
        </div>
      </form>
                  <th>
                    ID
                  </th>
                  <th>
                  Document Name
                  </th>
                  <th>
                    status
                  </th>
                    <th>
                  Actions
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>
                    Standard
                    </td>
                    <td>
                      Active
                    </td>
                    <td>
              <button class="btn btn-primary" data-op="edit_benefits" id="main_id_in" ><span class="material-icons">edit</span></button>
                     </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>`;

     $(content).html(ui);

     $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}","${$( this ).attr( 'data_code')}",${$( this ).attr( 'data_id')})`);
      
    });
  }


  function add_lawyer_type() {
    ui = `<div class="container-fluid">
          <div class="row">
             <div class="alert d-none" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Lawyer Type</h4>
                </div>
                <div class="card-body">
             <form method="POST" action="" id="lawyer_type">
  <div class="form-group">
    <input type="text" class="form-control" name="lawyer_type_name" placeholder="Lawyer Type Name">
  </div>
   <h4 class="card-title ">Status</h4>

<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="status"  id="exampleRadios1" value="inactive" >
        Not Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="status"  id="exampleRadios2" value="active" checked>
        Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>

<input type="submit" class="btn btn-primary"  value="New">
 <a href="javascript:history.back()" class="btn btn-primary">back</a>
              
</form>
                </div>
              </div>
            </div>
      
          </div>
        </div>`;
    $(content).html(ui);

    
    let lawyer_type = document.querySelector("#lawyer_type");
    let myft = document.querySelector(".alert");
    lawyer_type.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(lawyer_type);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/LawyerType.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.innerHTML = '';
            myft.classList.remove(obj.result);

view_lawyer_type();  
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      console.log("done");
    });
  }

  function edit_lawyer_type(name,id) {
    ui = `<div class="container-fluid">
          <div class="row">
             <div class="alert d-none" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Lawyer Type</h4>
                </div>
                <div class="card-body">
             <form method="POST" id="edit_lawyer_type" action="">
  <div class="form-group">
    <input type="text" name="edit_lawyer_type_name" value="${name}" class="form-control" placeholder="Lawyer Type Name">
  </div>
   <h4 class="card-title ">Status</h4>

<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="status" id="exampleRadios1" value="inactive" >
        Not Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="status" id="exampleRadios2" value="active" checked>
        Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>

<input type="submit" class="btn btn-primary"  value="New">
 <a href="javascript:history.back()" class="btn btn-primary">back</a>
              
</form>
                </div>
              </div>
            </div>
      
          </div>
        </div>`;
    $(content).html(ui);
    
    let edit_lawyer_type = document.querySelector("#edit_lawyer_type");
    let myft = document.querySelector(".alert");
    edit_lawyer_type.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(edit_lawyer_type);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/LawyerType.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_lawyer_type();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

     
    });
  }

  function view_lawyer_type() {
    ui = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Lawyer Types</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                
              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                
              <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_lawyer_type" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Laywer Type Name
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                         <button class="btn btn-primary"><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                        
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        
        $.get("https://cmversiontwo.cmadvocates.com/controller/LawyerType.php", { getLawyerType: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
    
          obj.lts.forEach(element => {
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_lawyer_type" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
    
          });
        });

    $(content).html(ui);


    
    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}()`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_lawyer_type", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/LawyerType.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
    
          obj.lts.forEach(element => {
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_lawyer_type" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
    
          });

        },
        error: function (e) {

          console.log(data);

        }

      });
     
    });


/*
    setTimeout(function () {

      const main_id_in = document.querySelectorAll("#main_id_in");

      main_id_in.forEach((ele) => {
        // Here comes the Code that should be executed on every Element, e.g.
        ele.addEventListener("click", () => {

          while (content.firstChild) {
            content.removeChild(content.lastChild);
          }
          let myatt = ele.getAttribute("data-op");
          console.log(ele.getAttribute("data_op") + "" + ele.getAttribute("data_id") + "" + ele.getAttribute("data_status"));
          eval(`${myatt}(ele.getAttribute("data_op"),ele.getAttribute("data_id"))`);

        });

      });

      let delete_sub = document.querySelectorAll("#delete_sub");


      delete_sub.forEach((ele) => {
        // Here comes the Code that should be executed on every Element, e.g.
        ele.addEventListener("click", () => {
          $.post(url, { delete_sub: ele.getAttribute("data_op") })
            .done(function (data) {
              console.log(data);
              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
              myft.classList.remove('d-none');
              myft.classList.add(obj.result);
              myft.innerHTML = obj.value;
              myft.classList.remove('d-none');

              setTimeout(function () {
                myft.classList.add('d-none');

                myft.classList.add(obj.result);
                edit_category(ele.getAttribute("data_op"), ele.getAttribute("data_id"));
              }, 1000);//wait 2 seconds

            });

        });

      });


    }, 1000);//wait 2 seconds
*/
  }

  function add_category() {
    ui = `  <div class="container-fluid">
          <div class="row">
             <div class="alert d-none" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Category</h4>
                </div>
                <div class="card-body">
             <form method="POST" id="addCategory" action="">
  <div class="form-group">
    <input type="text" name="categoryName" class="form-control" placeholder="Category Name">
  </div>
  <div class="form-group form-file-upload form-file-multiple col-xl-12 col-lg-12 col-md-6 col-sm-12">
  <input type="file" name="add_category_image" class="inputFileHidden">
  <div class="input-group">
      <input type="text" name="docu" class="form-control inputFileVisible" placeholder="Choose category image">
      <span class="input-group-btn">
          <button type="button" class="btn btn-fab btn-round btn-primary">
              <i class="material-icons">attach_file</i>
          </button>
      </span>
  </div>
</div>
    <div class="form-group">
    <input type="text" name="category_code" class="form-control" placeholder="Category Code">
  </div>
   <h4 class="card-title ">Status</h4>

<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="categoryStatus" id="exampleRadios1" value="inactive" >
        Not Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="categoryStatus" id="exampleRadios2" value="active" checked>
        Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>

<input type="submit" class="btn btn-primary"  value="New">
 <a href="javascript:history.back()" class="btn btn-primary">back</a>
              
</form>
                </div>
              </div>
            </div>
      
          </div>
        </div> `;

    $(content).html(ui);


    let addCategory = document.querySelector("#addCategory");
    let myft = document.querySelector(".alert");
    addCategory.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addCategory);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Category.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_category();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });

     // FileInput
     $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });

  }

  function edit_category(name,code ,id) {
    ui = `  <div class="container-fluid">
          <div class="row">
             <div class="alert d-none" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Edit Category</h4>
                </div>
                <div class="card-body">
             <form method="post" id="editCategory">
  <div class="form-group">
    <input type="text" name="editcategoryName" value="${name}" class="form-control" id="exampleFormControlInput1" placeholder="Category Name">
  </div>
  <div class="form-group form-file-upload form-file-multiple col-xl-12 col-lg-12 col-md-6 col-sm-12">
  <input type="file" name="edit_category_name" class="inputFileHidden">
  <div class="input-group">
      <input type="text" name="docu" class="form-control inputFileVisible" placeholder="Choose category image">
      <span class="input-group-btn">
          <button type="button" class="btn btn-fab btn-round btn-primary">
              <i class="material-icons">attach_file</i>
          </button>
      </span>
  </div>
</div>
    <div class="form-group">
    <input type="text" name="category_code" value="${code}" class="form-control" placeholder="Category Code">
  </div>
   <h4 class="card-title ">Status</h4>

<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="inactive" >
        Not Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="active" checked>
        Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>

<input type="submit" class="btn btn-primary"  value="Edit">
 <a href="javascript:history.back()" class="btn btn-primary">back</a>
              
</form>
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);


    let editCategory = document.querySelector("#editCategory");
    let myft = document.querySelector(".alert");
    editCategory.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editCategory);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Category.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      view_category();
    });

     // FileInput
     $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });
  }

  function view_category() {
    ui = `      <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Document Categories</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                
              
    <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
     <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
           
                <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_category" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Category Name
                        </th>
                        <th>
                          Category Code
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary"><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">

                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Category.php", { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.categories.forEach(element => {
    
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.code}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_category" data_code="${element.code}" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                               <!-- <button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                --></td>
                              </tr>`);
          });
        });
    
    $(content).html(ui);


    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}","${$( this ).attr( 'data_code')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post(url, { delete_sub: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          edit_category(ele.getAttribute("data_op"), ele.getAttribute("data_id"));
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_cat", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.categories.forEach(element => {
    
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_category" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <!--<button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                --></td>
                              </tr>`);
          });


        },
        error: function (e) {

          console.log(data);

        }

      });

    });



  }
  function add_sub_category() {
    ui = `        <div class="container-fluid">
          <div class="row">
             <div class="alert d-none" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Sub Category</h4>
                </div>
                <div class="card-body">
             <form method="post" id="addsubCategory">
         
  <div class="form-group">
    <input type="text" name="subcategoryName" class="form-control" id="exampleFormControlInput1" placeholder="Sub Category Name">
  </div>

 <select id="mytable" name="catid" class="form-control col-12" >
    
  ${$.get(url, { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }

      $("#mytable").empty();
      obj.categories.forEach(element => {

        $("#mytable").append(`
        <option value="${element.id}">${element.Name}</option>
        `);
      });
    })


      }
</select>

   <h4 class="card-title ">Status</h4>

<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="categorysubStatus" id="exampleRadios1" value="inactive" >
        Not Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="categorysubStatus" id="exampleRadios2" value="active" checked>
        Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<input type="submit" class="btn btn-primary" value="New">
 <a href="javascript:history.back()" class="btn btn-primary">back</a>

</form>
              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    let addsubCategory = document.querySelector("#addsubCategory");
    let myft = document.querySelector(".alert");
    addsubCategory.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addsubCategory);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Category.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_sub_category();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });
  }


  function edit_sub_category(name, id) {
    ui = `     <div class="container-fluid">
          <div class="row">
             <div class="alert d-none" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Edit Sub Category</h4>
                </div>
                <div class="card-body">
             <form method="post" action="" id="edit_sub">
  <div class="form-group">
    <input type="text" name="editsubcategoryname" value="${name}" class="form-control" id="exampleFormControlInput1" placeholder="Sub Category Name">
  </div>


  <select id="mytable" required name="catid" class="form-control col-12" >
    
  ${$.get(url, { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
      $("#mytable").empty();

      obj.categories.forEach(element => {
        $("#mytable").append(`
        <option value="${element.id}">${element.Name}</option>
        `);
      });
    })


      }
</select>
   <h4 class="card-title ">Status</h4>

<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="inactive" >
        Not Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="active" checked>
        Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>

<input type="submit" class="btn btn-primary" name="addLawyer" value="Edit">
 <a href="javascript:history.back()" class="btn btn-primary">back</a>
              
</form>
                </div>
              </div>
            </div>
      
          </div>
        </div> `;

    $(content).html(ui);

    let edit_sub = document.querySelector("#edit_sub");
    let myft = document.querySelector(".alert");
    edit_sub.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(edit_sub);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Category.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      view_sub_category();
    });
  }

  function view_sub_category() {
    ui = `   <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Document Sub-Categories</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                  
              
    <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
    <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
          
                  <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_sub_category" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                         Sub Category Name
                        </th>
                        <th>
                         Category
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                          <button class="btn btn-primary"><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                        
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Category.php", { getsubCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
    
          obj.subcategories.forEach(element => {
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.catid}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_sub_category" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <!--<button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                --></td>
                              </tr>`);
    
          });
        });
    

    $(content).html(ui);


    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post(url, { delete_sub: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          edit_category(ele.getAttribute("data_op"), ele.getAttribute("data_id"));
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_sub_category", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
    
          obj.subcategories.forEach(element => {
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.catid}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_sub_category" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
    
          });

        },
        error: function (e) {

          console.log(data);

        }

      });

    });


    setTimeout(function () {

      const main_id_in = document.querySelectorAll("#main_id_in");

      main_id_in.forEach((ele) => {
        // Here comes the Code that should be executed on every Element, e.g.
        ele.addEventListener("click", () => {

          while (content.firstChild) {
            content.removeChild(content.lastChild);
          }
          let myatt = ele.getAttribute("data-op");
          console.log(ele.getAttribute("data_op") + "" + ele.getAttribute("data_id") + "" + ele.getAttribute("data_status"));
          eval(`${myatt}(ele.getAttribute("data_op"),ele.getAttribute("data_id"))`);

        });

      });

      let delete_sub = document.querySelectorAll("#delete_sub");


      delete_sub.forEach((ele) => {
        // Here comes the Code that should be executed on every Element, e.g.
        ele.addEventListener("click", () => {
          $.post(url, { delete_sub: ele.getAttribute("data_op") })
            .done(function (data) {
              console.log(data);
              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
              myft.classList.remove('d-none');
              myft.classList.add(obj.result);
              myft.innerHTML = obj.value;
              myft.classList.remove('d-none');

              setTimeout(function () {
                myft.classList.add('d-none');

                myft.classList.add(obj.result);
                edit_category(ele.getAttribute("data_op"), ele.getAttribute("data_id"));
              }, 1000);//wait 2 seconds

            });

        });

      });


    }, 1000);//wait 2 seconds


  }

  function add_service_name() {
    ui = `        <div class="container-fluid">
          <div class="row">
             <div class="alert d-none" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Service</h4>
                </div>
                <div class="card-body">
             <form method="post" class="row" id="addservice">
  <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <input type="text" required name="serviceName" class="form-control" id="exampleFormControlInput1" placeholder="Service Name">
  </div>
  
<div class="form-check form-check-radio col-xl-6 col-lg-6 col-md-6 col-sm-12">
  
    <p><label class="fs-4 fw-bold text-dark">Status</label>&nbsp;&nbsp;
    <label class="form-check-label"><input class="form-check-input" type="radio" name="serviceStatus" id="exampleRadios1" value="inactive" >Not Active
          <span class="circle"><span class="check"></span></span>
    </label>
      <label class="form-check-label"><input class="form-check-input" type="radio" name="serviceStatus" id="exampleRadios2" value="active" checked>Active
          <span class="circle"><span class="check"></span></span></label>
    </p>
</div>

  <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <select class="form-control selectpicker" required name="service_type" data-style="btn btn-link" >
      <option selected disabled>Choose Service type</option>
    
      <option value="documents">Documents</option>
      <option value="videos">Videos</option>
    </select>
  </div>

    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <input type="number" required  class="form-control" name="service_downloads" placeholder="No of downloads">
  </div>

    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <input type="number" required  class="form-control" name="service_reviews" placeholder="No of reviews">
  </div>

<div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <select class="form-control selectpicker" required name="service_validity" data-style="btn btn-link" id="exampleFormControlSelect1">
      <option selected disabled>Choose Validity</option>  
      <option value="quarterly">Quarterly</option>
      <option value="half">Half Yearly</option>
      <option value="yearly">Yearly</option>
    </select>
  </div>


<input type="submit" class="btn btn-primary" name="addLawyer" value="New">
</form>     
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);
    let addservice = document.querySelector("#addservice");
    let myft = document.querySelector(".alert");
    addservice.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addservice);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Service.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_service_name();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });

  }

  function edit_service_name(id) {
    ui = `        <div class="container-fluid">
          <div class="row">
             <div class="alert d-none" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Service Name</h4>
                </div>
                <div class="card-body">
             <form method="post" class="row" id="editService">
  <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <input type="text" required name="editserviceName" class="form-control" id="ser_name" placeholder="Service Name">
  </div>

<div class="form-check form-check-radio col-xl-6 col-lg-6 col-md-6 col-sm-12">
    
    <p class="fs-4 fw-bold text-dark">Status &nbsp;&nbsp;
    <label class="form-check-label"><input class="form-check-input" type="radio" name="editserviceStatus" id="exampleRadios1" value="inactive" >
        Not Active<span class="circle"><span class="check"></span></span>
    </label>
    
    <label class="form-check-label"><input class="form-check-input" type="radio" name="editserviceStatus" id="exampleRadios2" value="active" checked>
        Active<span class="circle"><span class="check"></span></span>
    </label>
    </p>
</div>

<div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <select class="form-control selectpicker" required name="service_type" data-style="btn btn-link" id="exampleFormControlSelect1">
      <option selected disabled>Choose Service type</option>
      <option value="documents">Documents</option>
      <option value="videos">Videos</option>
    </select>
  </div>

    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <input type="number" required  class="form-control" name="service_downloads" placeholder="No of downloads">
  </div>

  
    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <input type="number" required  class="form-control" name="service_reviews" placeholder="No of reviews">
  </div>

  <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <select class="form-control selectpicker" required name="service_validity" data-style="btn btn-link" id="exampleFormControlSelect1">
    <option selected disabled>Choose Validity</option>  
      
      <option value="quarterly">Quarterly</option>
      <option value="half">Half Yearly</option>
      <option value="yearly">Yearly</option>
    </select>
  </div>

<input type="submit" class="btn btn-primary" value="New">
              
</form>
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);


    let editService = document.querySelector("#editService");
    let myft = document.querySelector(".alert");

    $.get("https://cmversiontwo.cmadvocates.com/controller/Service.php", { getServicewithid: id, token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
          if(obj.result == "session"){
            $("#reauth").modal();
            return;
          }
          
          obj.services.forEach(element => {
            $("#ser_name").val();
            
          });

          
    
    });



    editService.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editService);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Service.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      view_service_name();
    });
  }

  function view_service_name() {
    ui = ` <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Services</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table" id="downloadTable">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
     
     
              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                
     
              <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_service_name" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Service Name
                        </th>
                        <th>
                          validity
                        </th>
                        <th>
                          service type
                        </th>
                        <th>
                        no of downloads
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                         <button class="btn btn-primary" id="download" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary" id="downloadExcel"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                        
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `;
        $.get("https://cmversiontwo.cmadvocates.com/controller/Service.php", { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
    
          obj.services.forEach(element => {
            $("#mytable").append(`<tr>
                                <td>${element.id}</td>
                                <td>${element.Name}</td>
                                <td>${element.service_validity}</td>
                                <td>${element.service_type}</td>
                                <td>${element.service_downloads}</td>
                                <td>${element.status}</td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_service_name" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <!--<button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                --></td>
                              </tr>`);
    
          });
        });

    $(content).html(ui);


    
    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}()`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}(${$( this ).attr( 'data_id')})`);
      
    });

    
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_serv", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Service.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
    
          obj.services.forEach(element => {
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_service_name" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
    
          });


        },
        error: function (e) {

          console.log(data);

        }

      });
     
    });
  
  
    //download functionality

    //var button = document.getElementById('download');

    /*button.addEventListener('click', function (e) {

      var tbody = document.getElementById('downloadTable').value

      var filename = "service.txt";

      download(tbody, filename);

    });

    function download(tbody, filename) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8' + encodeURIComponent(tbody));

      element.setAttribute('download', filename);

      element.style.display = 'none';

      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);

    }
*/
    //export functionality

    // document.getElementById('mytable').addEventListener('click', function () {

    //   var table2excel = new Table2Excel();
    //   table2excel.export(document.querySelectorAll("#downloadTable"));
    // });


  }

  function add_practise_areas() {
    ui = `    <div class="container-fluid">
          <div class="row">
      <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Practise Area</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="addpa">
  <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" name="pa_name" placeholder="Practise Area Name">
  </div>
  <div class="form-group form-file-upload form-file-multiple col-xl-12 col-lg-12 col-md-6 col-sm-12">
  <input type="file" name="add_practice" class="inputFileHidden">
  <div class="input-group">
      <input type="text" name="docu" class="form-control inputFileVisible" placeholder="Choose practice area image">
      <span class="input-group-btn">
          <button type="button" class="btn btn-fab btn-round btn-primary">
              <i class="material-icons">attach_file</i>
          </button>
      </span>
  </div>
</div>
  
        <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="status">
                          <option>Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
</div>  


  <div class="form-group">
    <label for="inputAddress2">Brief Description</label>
    <input type="text" class="form-control" name="desc" id="inputAddress2">
  </div>



   <input type="submit" name="insert-btn" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div> `;

    $(content).html(ui);

    let addpa = document.querySelector("#addpa");
    let myft = document.querySelector(".alert");
    addpa.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addpa);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/PracticeArea.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_practise_areas();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });

      // FileInput
      $('.form-file-simple .inputFileVisible').click(function () {
        $(this).siblings('.inputFileHidden').trigger('click');
      });
  
      $('.form-file-simple .inputFileHidden').change(function () {
        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
        $(this).siblings('.inputFileVisible').val(filename);
      });
  
      $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
        $(this).parent().parent().find('.inputFileHidden').trigger('click');
        $(this).parent().parent().addClass('is-focused');
      });
  
      $('.form-file-multiple .inputFileHidden').change(function () {
        var names = '';
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
          if (i < $(this).get(0).files.length - 1) {
            names += $(this).get(0).files.item(i).name + ',';
          } else {
            names += $(this).get(0).files.item(i).name;
          }
        }
        $(this).siblings('.input-group').find('.inputFileVisible').val(names);
      });
  
      $('.form-file-multiple .btn').on('focus', function () {
        $(this).parent().siblings().trigger('focus');
      });
  
      $('.form-file-multiple .btn').on('focusout', function () {
        $(this).parent().siblings().trigger('focusout');
      });

  }


  function edit_practise_areas(name,id) {
    ui = `       <div class="container-fluid">
          <div class="row">
                            <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Practise Area</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="edit_pa" enctype="multiple/form-data">
             <div class="form-group form-file-upload form-file-multiple col-xl-12 col-lg-12 col-md-6 col-sm-12">
             <input type="file" name="edit_practice" class="inputFileHidden">
             <div class="input-group">
                 <input type="text" name="docu" class="form-control inputFileVisible" placeholder="Choose category image">
                 <span class="input-group-btn">
                     <button type="button" class="btn btn-fab btn-round btn-primary">
                         <i class="material-icons">attach_file</i>
                     </button>
                 </span>
             </div>
           </div>
  <div class="form-group">
    <input type="text" class="form-control" value="${name}" name="edit_practise_name" required placeholder="Practise Area Name">
  </div>
   <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" required name="edit_pa_status">
                          <option >Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
</div>  

  <div class="form-group">
    <label for="inputAddress2">Brief Description</label>
    <input type="text" class="form-control" name="desc" id="inputAddress2">
  </div>
   <input type="submit" name="insert-btn" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div> `;

    $(content).html(ui);

    let edit_pa = document.querySelector("#edit_pa");
    let myft = document.querySelector(".alert");
    edit_pa.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(edit_pa);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/PracticeArea.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      view_practise_areas();
    });

      // FileInput
      $('.form-file-simple .inputFileVisible').click(function () {
        $(this).siblings('.inputFileHidden').trigger('click');
      });
  
      $('.form-file-simple .inputFileHidden').change(function () {
        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
        $(this).siblings('.inputFileVisible').val(filename);
      });
  
      $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
        $(this).parent().parent().find('.inputFileHidden').trigger('click');
        $(this).parent().parent().addClass('is-focused');
      });
  
      $('.form-file-multiple .inputFileHidden').change(function () {
        var names = '';
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
          if (i < $(this).get(0).files.length - 1) {
            names += $(this).get(0).files.item(i).name + ',';
          } else {
            names += $(this).get(0).files.item(i).name;
          }
        }
        $(this).siblings('.input-group').find('.inputFileVisible').val(names);
      });
  
      $('.form-file-multiple .btn').on('focus', function () {
        $(this).parent().siblings().trigger('focus');
      });
  
      $('.form-file-multiple .btn').on('focusout', function () {
        $(this).parent().siblings().trigger('focusout');
      });
  }

  function view_practise_areas() {
    ui = `      <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Practise Areas</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
             

              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                



                  <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_practise_areas" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Practise Area Name
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                         <button class="btn btn-primary"><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                     
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `;

        $.get("https://cmversiontwo.cmadvocates.com/controller/PracticeArea.php", { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
    
          obj.pas.forEach(element => {
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_practise_areas" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
    
          });
        });


    $(content).html(ui);

    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post(url, { delete_practice_area: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          edit_category(ele.getAttribute("data_op"), ele.getAttribute("data_id"));
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_practise_area", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
    
          obj.pas.forEach(element => {
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td>
                                
                                <button class="btn btn-primary" data-op="edit_practise_areas" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary" id="delete_sub" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
    
          });

        },
        error: function (e) {

          console.log(data);

        }

      });

    });



  }



  function user() {

    ui = `  <div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
</div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Edit Profile</h4>
                  <p class="card-category">Complete your profile</p>
                </div>
                <div class="card-body">
                  <form method="POST" id="updateuser">
                     <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                         <label class="bmd-label-floating">Email address</label>
                          <input type="email" name="mymail" id="mymail" value="mymail" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                        <label class="bmd-label-floating">Username</label>
                          <input type="text" name="myname" id="myname" value="name" class="form-control">
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary pull-right">Update Profile</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> `;

    getUser();
    $(content).html(ui);

    let updateuser = document.querySelector("#updateuser");
    let myft = document.querySelector(".alert");
    updateuser.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(updateuser);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/User.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add('alert-success');
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

          }, 5000);//wait 2 seconds
          getUser();


        },
        error: function (e) {

          console.log(data);

        },
        done: function (e) {

          console.log("Done :", e);
        }

      });

      console.log("done");
    });
  }

  function add_user() {
    ui = `     <div class="container-fluid">
          <div class="row">
                          <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New User</h4>
                </div>
                <div class="card-body">
             <form method="post" id="add_member" action="">
             
             <div class="form-group form-file-upload form-file-multiple ">
             <input type="file" name="user_image" class="inputFileHidden">
             <div class="input-group">
                 <input type="text" name="preview_image" class="form-control inputFileVisible" placeholder="Choose Preview Image specific to this document category">
                 <span class="input-group-btn">
                     <button type="button" class="btn btn-fab btn-round btn-primary">
                         <i class="material-icons">photo_camera</i>
                     </button>
                 </span>
             </div>
           </div>

  <div class="form-group">
    <input type="text" name="member_name" class="form-control" id="exampleFormControlInput1" placeholder="User Name">
  </div>

   <div class="form-group">
    <input type="text" name="member_role" class="form-control" id="exampleFormControlInput1" placeholder="User Role">
  </div>

    <div class="form-group">
    <input type="email" name="member_email" class="form-control" id="exampleFormControlInput1" placeholder=" Email Address">
  </div>
      <div class="form-group">
    <input type="text" name="member_phone" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number">
  </div>
   <h4 class="card-title ">Status</h4>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="member_status" id="exampleRadios1" value="active" >
        active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="member_status" id="exampleRadios2" value="inactive" checked>
        inactive
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
 <h4 class="card-title ">Brief Description</h4>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" name="member_description" rows="3" placeholder="Brief description"></textarea>
  </div>
  <input type="submit" class="btn btn-primary"  value="New">

</form>
              
                </div>
              </div>
            </div>
      
          </div>
        </div> `;

    $(content).html(ui);

    
    // FileInput
    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });



    
    let add_member = document.querySelector("#add_member");
    let myft = document.querySelector(".alert");
    add_member.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(add_member);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Member.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_users();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });
  }

  function edit_user(Name,id) {
    ui = `    <div class="container-fluid">
          <div class="row">
                          <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Edit User</h4>
                </div>
                <div class="card-body">
             <form method="post" id="edit_member">

             <div class="form-group form-file-upload form-file-multiple">
             <input type="file" name="user_image" class="inputFileHidden">
             <div class="input-group">
                 <input type="text" name="preview_image" class="form-control inputFileVisible" placeholder="Choose Preview Image specific to this document category">
                 <span class="input-group-btn">
                     <button type="button" class="btn btn-fab btn-round btn-primary">
                         <i class="material-icons">photo_camera</i>
                     </button>
                 </span>
             </div>
           </div>

  <div class="form-group">
    <input type="text" name="edit_member_name" value="${Name}" class="form-control" id="exampleFormControlInput1" placeholder="User Name">
  </div>
   <div class="form-group">
    <input type="text" name="rolename" class="form-control" id="exampleFormControlInput1" placeholder="User Role">
  </div>
    <div class="form-group">
    <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder=" Email Address">
  </div>
      <div class="form-group">
    <input type="text" name="phone" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number">
  </div>
   <h4 class="card-title ">Status</h4>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="active" >
        active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="inactive" checked>
        inactive
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
 <h4 class="card-title ">Brief Description</h4>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" name="des" rows="3" placeholder="Brief description"></textarea>
  </div>
</form>
<input type="submit" class="btn btn-primary" name="editUser" value="Update">
 <a href="javascript:history.back()" class="btn btn-primary">back</a>
              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    
    // FileInput
    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });

    let edit_member = document.querySelector("#edit_member");
    let myft = document.querySelector(".alert");
    edit_member.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editCountry);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Member.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';

          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
      view_users();
    });
  }
  function view_users() {
    ui = `         <div class="container-fluid">

           <div class="row">
            
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title "> Available Users</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
             
                  <i class="material-icons">search</i>
                          <button class="btn btn-danger">Download</button>
                          <button class="btn btn-default">Export As Excel</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          User Name
                        </th>
                         <th>
                         Email Address
                        </th>
                        <th>
                        Contact Number
                        </th>
                        <th>
                        Status
                        </th>
                        <th id="add_add">
                          <button data-op="add_user" id="main_id_in" class="btn btn-primary pull-right">Add User</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            John Doe
                          </td>
                          <td>
                          johndoe@gmail.com
                          </td>
                          <td>
                          Anti-Bribery
                          </td>
                            <td>
                          Senior Associate
                          </td>
                           <td>
                          <button type="submit" data-op="edit_user" id="main_id_in" class="btn btn-primary pull-right"><span class="material-icons">mode_edit</span></button>
                          <button type="submit" class="btn btn-primary pull-right"><span class="material-icons">delete</span></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

         


        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Member.php", { getmembers: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.members.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.email}
                                </td>
                                <td>
                                ${element.number}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_user" data_op="${element.Name}" data_id="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });
        });
    

    $(content).html(ui);

    $( "#add_add").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}()`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });
 
    
    // $( "#mytable" ).on( "click", "#main_id_in", function() {
    //   console.log( $( this ).attr( 'data-op') );
    //   let myatt = $( this ).attr( 'data-op');
    //   eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    // });
    
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post(url, { delete_document: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
      if(obj.result == "session"){
        $("#reauth").modal();
        return;
      }
            myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          view_document();
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_members", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.members.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.email}
                                </td>
                                <td>
                                ${element.number}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_knowledge" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                          <!--      <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                              -->  </td>
                              </tr>`);
          });

        },
        error: function (e) {

          console.log(data);

        }

      });

    });

  }

  function viewSubscriptionPayment() {
    ui = ` `;

    $(main).html(sideNav);

  }

  function add_document() {
    ui = `  

     <script>
  tinymce.init({
    selector: '#exampleFormControlTextarea1',
     init_instance_callback : function(editor) {
      var freeTiny = document.querySelector('.mce-notification');
      freeTiny.style.display = 'none';
  }
  });
  </script>
    <div class="container-fluid">
          <div class="row">
                         <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Create Document</h4>
                </div>
                <div class="card-body">
             <form class="row" id="add_document" method="POST" enctype="multipart/form-data">
   
    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <input type="text" class="form-control" name="document_name" placeholder="Document Name">
    </div>

    
    <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <input type="text" class="form-control" name="document_price" placeholder="Document Price">
    </div>


    
  <div class="form-group form-file-upload form-file-multiple col-xl-6 col-lg-6 col-md-6 col-sm-12">
  <input type="file" name="docu_master" class="inputFileHidden">
  <div class="input-group">
      <input type="text" name="docu" class="form-control inputFileVisible" placeholder="Choose a document or a bundle of documents">
      <span class="input-group-btn">
          <button type="button" class="btn btn-fab btn-round btn-primary">
              <i class="material-icons">attach_file</i>
          </button>
      </span>
  </div>
</div>

   <div class="form-group form-file-upload form-file-multiple col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <input type="file"  name="preview" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="preview_image" class="form-control inputFileVisible" placeholder="Choose Preview Image specific to this document category">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">photo_camera</i>
            </button>
        </span>
    </div>
  </div>

     <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
        <div class="input-group-prepend">
          <span class="input-group-text"><i class="material-icons">money</i></span>
        </div>
            <select class="form-control" multiple aria-label="multiple select example" style="height:20vh" id="sub" name="sub[]">
                ${$.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptionsforuse: "Donald", token1: sessionStorage.getItem("token") },
                  function (data) {
                    const obj = JSON.parse(data);
                    if(obj.result == "session"){
                    $("#reauth").modal();
                    return;
                    }
                    $("#sub").empty();

                    $("#sub").append(`<option >Choose subscription</option>`);

                    obj.subscriptions.forEach(element => {
                    $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
                    });
                    })
                }
            </select>
    </div>

     <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
        <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">work</i></span></div>
        <select class="form-control" multiple style="height:20vh" id="serv" name="serv[]">
        ${$.get("https://cmversiontwo.cmadvocates.com/controller/Service.php", { getServicefordoc: "Donald", token1: sessionStorage.getItem("token") },
         function (data) {
        const obj = JSON.parse(data);
        if(obj.result == "session"){
        $("#reauth").modal();
        return;
        }
        $("#serv").empty();

        $("#serv").append(`<option >Choose service</option>`);

        obj.services.forEach(element => {
        $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
        });
        })


        }
        </select>
    </div>

 <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
    <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">category</i></span></div>
     <select class=" form-control col-12" id="cat" name="cat">
     ${$.get("https://cmversiontwo.cmadvocates.com/controller/Category.php", { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        $("#cat").empty();
        $("#cat").append(`<option >Choose Category</option>`);

        obj.categories.forEach(element => {

          $("#cat").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })


      }
                          </select>
</div>

 <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">category</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="subcat" name="subcat">
    <option >Choose Sub category</option>
                          </select>
</div>
<h3 class="text-center ">Table Of Contents</h3>
  <div class=" form-group col-12" id="show_item">
<div class="row">
<div class="col-12">
</div>
    <div class="col-1 mb-3">
        <input type="number" name="prefix[]" class="form-control" placeholder="Number" required>
    </div>
    <div class="col-9  mb-3">
        <input type="text" name="topics[]" class="form-control" placeholder="Title" required>
    </div>

    <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
    <p class="text-center"> <button type="button" class="btn btn-primary  add_item_btn">Add more</button></p>
        
    </div>
</div>
</div>
   


<div class="form-group col-12" >
<div class="input-group-prepend"><span class="input-group-text"><p> Description</p></span></div>
<textarea class="form-control" id= "exampleFormControlTextarea1" name="description" rows="3"></textarea>
</div>

<div class="col-12">
  <p class="text-center"> <input type="submit" class="btn btn-primary" ></p>
 </div>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div> `;

    $(content).html(ui);

      $(".add_item_btn").click(function() {
          $("#show_item").append(`<div class="form-group col-12" id="show_item">
          <div class="row">
            <div class="col-1 mb-3">
              <input type="number" name="prefix[]" class="form-control" placeholder="Number" >
            </div>
            <div class="col-9  mb-3">
              <input type="text" name="topics[]" class="form-control" placeholder="Title" >
            </div>
  
            <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
      <p class="text-center"> <button type="button" class="btn btn-danger  remove_item_btn">Remove</button></p>      
      </div>
          </div>
        </div>`);
  
  
      $(document).on('click', '.remove_item_btn', function() {
          
           $(this).parent().parent().parent().remove();
      })
  });

    // FileInput
    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });



    $("#cat").change(function () {

      $.get("https://cmversiontwo.cmadvocates.com/controller/Category.php", { getsubCategoriesSpec: "Donald", id: $(this).val(), token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
       // $("#myspinner").modal('hide'); 
        if(obj.result == "session"){
          $("#reauth").modal();
          return;
        }
        $("#subcat").empty();
        $("#subcat").append(`<option >Choose Sub category</option>`);
        obj.subcategories.forEach(element => {

          $("#subcat").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })

    });



    let add_document = document.querySelector("#add_document");
    let myft = document.querySelector(".alert");
    add_document.addEventListener("submit", (e) => {
      e.preventDefault();
      // const formData = new FormData();
      const formData = new FormData(add_document);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Documents.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
          if(obj.result == "session"){
            $("#reauth").modal();
            return;
          }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_document();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });

  }
  function edit_document(name, toc, price, desc, id) {
    ui = `  

    <script>
    tinymce.init({
      selector: '#exampleFormControlTextarea1',
       init_instance_callback : function(editor) {
        var freeTiny = document.querySelector('.mce-notification');
        freeTiny.style.display = 'none';
    }
    });
    </script>
      <div class="container-fluid">
            <div class="row">
                           <div class="alert d-none" role="alert"></div>
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title ">Existing Document</h4>
                  </div>
                  <div class="card-body">
               <form action="" id="adddocument" method="POST" class="row" enctype="multiple/form-data">
     
      <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <input type="text" class="form-control" name="document_name" placeholder="Document Name">
      </div>
  
      
      <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <input type="text" class="form-control" name="document_price" placeholder="Document Price">
      </div>
  
  
      
    <div class="form-group form-file-upload form-file-multiple col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <input type="file" multiple="" name="docu" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="docu" class="form-control inputFileVisible" placeholder="Choose a document or a bundle of documents">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">attach_file</i>
            </button>
        </span>
    </div>
  </div>
  
     <div class="form-group form-file-upload form-file-multiple col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <input type="file" multiple="" name="preview[]" class="inputFileHidden">
      <div class="input-group">
          <input type="text" name="preview_image" class="form-control inputFileVisible" placeholder="Choose Preview Image specific to this document category">
          <span class="input-group-btn">
              <button type="button" class="btn btn-fab btn-round btn-primary">
                  <i class="material-icons">photo_camera</i>
              </button>
          </span>
      </div>
    </div>
  
       <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="material-icons">money</i></span>
          </div>
              <select class=" form-control col-12  selectpicker" multiple  data-style="btn btn-link" id="sub exampleFormControlSelect2" name="sub">
                  ${$.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") },
                    function (data) {
                      const obj = JSON.parse(data);
                      if(obj.result == "session"){
                      $("#reauth").modal();
                      return;
                      }
                      $("#sub").empty();
  
                      $("#sub").append(`<option >Choose subscription</option>`);
  
                      obj.subscriptions.forEach(element => {
                      $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
                      });
                      })
                  }
              </select>
      </div>
  
       <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
          <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">work</i></span></div>
          <select class=" form-control col-12 selectpicker" multiple data-style="btn btn-link" id="serv exampleFormControlSelect2" name="serv">
          ${$.get("https://cmversiontwo.cmadvocates.com/controller/Service.php", { getService: "Donald", token1: sessionStorage.getItem("token") },
           function (data) {
          const obj = JSON.parse(data);
          if(obj.result == "session"){
          $("#reauth").modal();
          return;
          }
          $("#serv").empty();
  
          $("#serv").append(`<option >Choose service</option>`);
  
          obj.services.forEach(element => {
          $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
          });
          })
  
  
          }
          </select>
      </div>
  
   <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
      <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">category</i></span></div>
       <select class=" form-control col-12" id="cat" name="cat">
       ${$.get("https://cmversiontwo.cmadvocates.com/controller/Category.php", { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    if(obj.result == "session"){
      $("#reauth").modal();
      return;
    }
          $("#cat").empty();
          $("#cat").append(`<option >Choose Category</option>`);
  
          obj.categories.forEach(element => {
  
            $("#cat").append(`<option value="${element.id}">${element.Name}</option>`);
          });
        })
  
  
        }
                            </select>
  </div>
  
   <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                            <div class="input-group-prepend">
                      <span class="input-group-text">
                      <i class="material-icons">category</i>
                      </span>
                      </div>
       <select class=" form-control col-12" id="subcat" name="subcat">
      <option >Choose Sub category</option>
                            </select>
  </div>
  <h3 class="text-center ">Table Of Contents</h3>
    <div class=" form-group col-12" id="show_item">
  <div class="row">
  <div class="col-12">
  </div>
      <div class="col-1 mb-3">
          <input type="number" name="prefix[]" class="form-control" placeholder="Number one" required>
      </div>
      <div class="col-9  mb-3">
          <input type="text" name="topics[]" class="form-control" placeholder="Introduction" required>
      </div>
  
      <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
      <p class="text-center"> <button class="btn btn-primary  add_item_btn">Add more</button></p>
          
      </div>
  </div>
  </div>
     
  
  
  <div class="form-group col-12" >
  <div class="input-group-prepend"><span class="input-group-text"><p> Description</p></span></div>
  <textarea class="form-control" id= "exampleFormControlTextarea1" name="description" rows="3"></textarea>
  </div>
  
  
    <p class="text-center"> <input type="submit" class="btn btn-primary"/></p>
   
  </form>
  
  
                
                  </div>
                </div>
              </div>
        
            </div>
          </div> `;

    $(content).html(ui);

    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });



    $("#cat").change(function () {

      $.get("https://cmversiontwo.cmadvocates.com/controller/Category.php", { getsubCategoriesSpec: "Donald", id: $(this).val(), token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        $("#subcat").empty();
        $("#subcat").append(`<option >Choose Sub category</option>`);
        obj.subcategories.forEach(element => {

          $("#subcat").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })

    });

    
    $("#sub").change(function () {

      $.get("https://cmversiontwo.cmadvocates.com/controller/Products.php", { getproductsSpec: "Donald", id: $(this).val(), token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        $("#prod").empty();
        $("#prod").append(`<option >Choose Product</option>`);

        obj.products.forEach(element => {

          $("#prod").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })

    });


    let editdocument = document.querySelector("#editdocument");
    let myft = document.querySelector(".alert");
    editdocument.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editdocument);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Documents.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      view_document();
    });

  }

  function view_document() {
    ui = `  <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Documents</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                
              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
              
                  <i class="material-icons">search</i>
                  <button class="btn btn-primary" id="main_id_in" data-op="add_document">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Document Name
                        </th>
                         <th>
                          Subscription Name
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary"><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                        
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `;

    

    $(content).html(ui);

    
    $.get("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { getDocument: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
if(obj.result == "session"){
$("#reauth").modal();
return;
}

      $("#mytable").empty();
      obj.documents.forEach(element => {

        $("#mytable").append(`<tr>
                            <td>
                              ${element.id}
                            </td>
                            <td>
                            ${element.Name}
                            </td>
                            <td>
                            ${element.subscription}
                            </td>
                            <td>${element.status}</td>
                            <td >
                            <button class="btn btn-primary" data-op="edit_document" data_op="${element.Name}" data_toc="${element.toc}" data_price="${element.price}" data_desc="${element.document_description}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                            <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                            </td>
                          </tr>`);
      });
    });

    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}","${$( this ).attr( 'data_toc')}",${$( this ).attr( 'data_price')},"${$( this ).attr( 'data_desc')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post("https://cmversiontwo.cmadvocates.com/controller/Document.php", { delete_document: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          view_document();
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_document", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Documents.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.documents.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
    
                                </td>
                                <td>
                                ${element.product}
                                </td>
                                <td>
                                ${element.subscription}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_document" data_op="${element.Name}" data_toc="${element.toc}" data_price="${element.price}" data_desc="${element.document_description}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });

        },
        error: function (e) {

          console.log(data);

        }

      });

    });


  }

function add_knowledge(){
  ui=`

     <script>
  tinymce.init({
    selector: '#exampleFormControlTextarea1',
     init_instance_callback : function(editor) {
      var freeTiny = document.querySelector('.mce-notification');
      freeTiny.style.display = 'none';
  }
  });
  </script>
  <div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
             <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New article</h4>
                </div>
                <div class="card-body">
             <form action="" id="add_knowledge" method="POST"  enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" name="article_name"  placeholder="article Name">
  </div>
    <div class="form-group">
    <input type="text" class="form-control"  name="article_category" placeholder="article Category">
  </div>
     <div class="form-group">
    <input type="text" class="form-control" name="article_sub_category" placeholder="article Sub Category">
  </div>

    <div class="form-group form-file-upload form-file-multiple">
    <input type="file" name="preview" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="preview" class="form-control inputFileVisible" placeholder="Choose Preview Image">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">photo_camera</i>
            </button>
        </span>
    </div>
  </div>

           <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="status">
                          <option>Status</option>
                          <option value='active'>active</option>
                          <option value='inactive'>inactive</option>
                          </select>
</div>

  <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" name="articles[]" class="inputFileHidden">
    <div class="input-group">
        <input type="text" class="form-control inputFileVisible" name="articles[]" placeholder="Choose an article or multiple articles" multiple>
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-info">
                <i class="material-icons">article</i>
            </button>
        </span>
    </div>
  </div>

  <div class="input-group" style="margin-top:10px;">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                    <p>Write Article</p>
                    </span>
                    </div>
     <textarea class="form-control" name="desc" id="exampleFormControlTextarea1" style="margin-top:15px;" rows="3"></textarea>
  </div>

   <input type="submit" class="btn btn-primary"/>

</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;
  $(content).html(ui);

    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });

    
    let add_knowledge = document.querySelector("#add_knowledge");
    let myft = document.querySelector(".alert");
    add_knowledge.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(add_knowledge);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Hub.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_knowledge_hub();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });
}

function edit_knowledge(Name,id){
  ui=`

     <script>
  tinymce.init({
    selector: '#exampleFormControlTextarea1',
     init_instance_callback : function(editor) {
      var freeTiny = document.querySelector('.mce-notification');
      freeTiny.style.display = 'none';
  }
  });
  </script>
  <div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
             <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing article</h4>
                </div>
                <div class="card-body">
                <form action="" id="edit_knowledge" method="POST"  enctype="multiple/form-data">
                <div class="form-group">
                  <input type="text" class="form-control" value="${Name}" name="edit_article_name"  placeholder="article Name">
                </div>
                  <div class="form-group">
                  <input type="text" class="form-control"  name="article_category" placeholder="article Category">
                </div>
                   <div class="form-group">
                  <input type="text" class="form-control" name="article_sub_category" placeholder="article Sub Category">
                </div>
              
                  <div class="form-group form-file-upload form-file-multiple">
                  <input type="file" multiple="" name="preview[]" class="inputFileHidden">
                  <div class="input-group">
                      <input type="text" name="preview" class="form-control inputFileVisible" placeholder="Choose Preview Image">
                      <span class="input-group-btn">
                          <button type="button" class="btn btn-fab btn-round btn-primary">
                              <i class="material-icons">photo_camera</i>
                          </button>
                      </span>
                  </div>
                </div>
              
                         <div class="input-group"> 
                                        <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <i class="material-icons">toggle_off</i>
                                  </span>
                                  </div>
                   <select class=" form-control col-12" name="status">
                                        <option>Status</option>
                                        <option value='active'>active</option>
                                        <option value='inactive'>inactive</option>
                                        </select>
              </div>
              
                <div class="form-group form-file-upload form-file-multiple">
                  <input type="file" multiple="" name="articles[]" class="inputFileHidden">
                  <div class="input-group">
                      <input type="text" class="form-control inputFileVisible" name="articles[]" placeholder="Choose an article or multiple articles" multiple>
                      <span class="input-group-btn">
                          <button type="button" class="btn btn-fab btn-round btn-info">
                              <i class="material-icons">article</i>
                          </button>
                      </span>
                  </div>
                </div>
              
                <div class="input-group" style="margin-top:10px;">
                                  <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <p>Write Article</p>
                                  </span>
                                  </div>
                   <textarea class="form-control" name="desc" id="exampleFormControlTextarea1" style="margin-top:15px;" rows="3"></textarea>
                </div>
              
                 <input type="submit" class="btn btn-primary"/>
              
              </form>
              

              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;
  $(content).html(ui);

  $('.form-file-simple .inputFileVisible').click(function () {
    $(this).siblings('.inputFileHidden').trigger('click');
  });

  $('.form-file-simple .inputFileHidden').change(function () {
    var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
    $(this).siblings('.inputFileVisible').val(filename);
  });

  $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
    $(this).parent().parent().find('.inputFileHidden').trigger('click');
    $(this).parent().parent().addClass('is-focused');
  });

  $('.form-file-multiple .inputFileHidden').change(function () {
    var names = '';
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
      if (i < $(this).get(0).files.length - 1) {
        names += $(this).get(0).files.item(i).name + ',';
      } else {
        names += $(this).get(0).files.item(i).name;
      }
    }
    $(this).siblings('.input-group').find('.inputFileVisible').val(names);
  });

  $('.form-file-multiple .btn').on('focus', function () {
    $(this).parent().siblings().trigger('focus');
  });

  $('.form-file-multiple .btn').on('focusout', function () {
    $(this).parent().siblings().trigger('focusout');
  });

  
  let edit_knowledge = document.querySelector("#edit_knowledge");
  let myft = document.querySelector(".alert");
  edit_knowledge.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(edit_knowledge);
    formData.append('token', sessionStorage.getItem("token"));
    formData.append('id', id);
    $.ajax({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "https://cmversiontwo.cmadvocates.com/controller/Hub.php",
      data: formData,
      crossDomain: true,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (data) {
        console.log(data);

        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');
          myft.classList.remove(obj.result);
          myft.innerHTML = '';
          view_knowledge_hub();
        }, 5000);//wait 2 seconds


      },
      error: function (e) {

        console.log(data);

      }

    });

  });
}

 function view_knowledge_hub(){

       ui = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Knowledge Hub</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                
              
              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
              
                <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_knowledge" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                         Article Name
                        </th>
                        <th>
                        Article Category
                        </th>
                        <th>
                        Article Sub-Category
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            article name 1
                          </td>
                          <td>
                            article category 1
                          </td>
                          <td>
                            article Sub-Category 1
                          </td>
                          <td>
                            Active
                          </td>
                          <td>
                          <button class="btn btn-primary" data-op="edit_knowledge" id="main_id_in" ><span class="material-icons">edit</span></button>
                          <button class="btn btn-primary"><span class="material-icons">delete</span></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
        $.get("https://cmversiontwo.cmadvocates.com/controller/Hub.php", { getHub: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }

          
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.hubs.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.category}
                                </td>
                                <td>
                                ${element.sub_cat}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_knowledge" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });
        });
    

    $(content).html(ui);

    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post(url, { delete_document: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          view_document();
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_hubs", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Hub.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.hubs.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.category}
                                </td>
                                <td>
                                ${element.sub_cat}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_knowledge" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                          <!--      <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                              -->  </td>
                              </tr>`);
          });

        },
        error: function (e) {

          console.log(data);

        }

      });

    });

  }


  function add_product() {
    ui = `<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
             <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Product</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="addproduct" enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" name="add_product_name" placeholder="Product Name">
  </div>
           <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="status">
                          <option>Status</option>
                          <option value='active'>active</option>
                          <option value='inactive'>inactive</option>
                          </select>
</div>
   <input type="submit" name="insert-btn" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    let addLawyer = document.querySelector("#addproduct");
    let myft = document.querySelector(".alert");
    addLawyer.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addLawyer);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Products.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      console.log("done");
    });
  }

  function edit_product(name, id) {
    ui = `<div class="container-fluid">
          <div class="row">
                            <div class="alert d-none" role="alert">
 
</div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Product</h4>
                </div>
                <div class="card-body">
             <form action="" id="edit_product" method="POST" enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" value="${name}" name="edit_product_name">
  </div>
           <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
                        <select class=" form-control col-12" name="edit_product_status">
                          <option>Status</option>
                          <option>active</option>
                          <option>inactive</option>
                          </select>
</div>
   <input type="submit" class="btn btn-primary"/>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);
    let edit_product = document.querySelector("#edit_product");
    let myft = document.querySelector(".alert");
    edit_product.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(edit_product);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('product_id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Products.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      products();
    });

  }

  function products() {
    ui = `   <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">View Products</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                
                <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
                <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                
                  <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_product" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Product Name
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                      
              
                      </tbody>
                    </table>

                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `;
        $.get("https://cmversiontwo.cmadvocates.com/controller/Products.php", { getproducts: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }

          $("#mytable").empty();
          obj.products.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_product" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                               <!-- <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                --></td>
                              </tr>`);
          });
        });
    $(content).html(ui);

    
    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",$( this ).attr( 'data_id'))`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",$( this ).attr( 'data_id'))`);
      
    });
  
    
    
    $( "#mytable" ).on( "click", ".delete_product", function() {
      console.log( $( this ).attr( 'data_op') );
      
      $.post(url, { delete_product: $( this ).attr( 'data_op') })
            .done(function (data) {
              
              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
              myft.classList.remove('d-none');
              myft.classList.add(obj.result);
              myft.innerHTML = obj.value;
              myft.classList.remove('d-none');

              setTimeout(function () {
                myft.classList.add('d-none');

                myft.classList.add(obj.result);
                products();
              }, 1000);//wait 2 seconds

            });
          });


    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_product", $('#search').val());
        $.ajax({
          type: "POST",
          enctype: 'multipart/form-data',
          url: url,
          data: formData,
          crossDomain: true,
          processData: false,
          contentType: false,
          cache: false,
          timeout: 600000,
          success: function (data) {

            $("#mytable").empty();

            const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
            obj.products.forEach(element => {

              
              $("#mytable").append(`<tr>
              <td>
                ${element.id}
              </td>
              <td>
              ${element.Name}
              </td>
              <td>
              ${element.status}
              </td>
              <td >
              <button class="btn btn-primary" data-op="edit_product" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
              <!-- <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
              --></td>
            </tr>`);

            });


          },
          error: function (e) {

            console.log(data);

          }

        });
    });
      


  }
  function add_skill_Set() {

    ui = `    <div class="container-fluid">
          <div class="row">
      <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Skill Set</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="add_skill_set" enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" name="skillset_name" placeholder="Skill SetName">
  </div>

  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">business_center</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="pa_id" id="mytable">
                                         
                          </select>
</div> 

          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="status">
                          <option>Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
</div> 
  <div class="form-group">
    <label for="inputAddress2">Brief Description</label>
    <input type="text" class="form-control" name="desc" id="inputAddress2">
  </div>
   <input type="submit" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/PracticeArea.php", { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
          $("#mytable").append(`<option >Select Practise Area</option>`);
    
          obj.pas.forEach(element => {
            $("#mytable").append(`<option value="${element.id}">${element.Name}</option>`);
    
          });
        });

    $(content).html(ui);

    
    let add_skill_set = document.querySelector("#add_skill_set");
    let myft = document.querySelector(".alert");
    add_skill_set.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(add_skill_set);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Skillset.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            
          myft.classList.remove(obj.result);
          myft.innerHTML = '';
            view_skill_set();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      console.log("done");
    });
  }

  function edit_skill_set(name,id) {

    ui = `    <div class="container-fluid">
          <div class="row">
      <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Skill Set</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="edit_skill_set" enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" required class="form-control" value="${name}" name="edit_skillSet" placeholder="Skill Set Name">
  </div>
    <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">business_center</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="pa_id" id="mytable">
                                         
                          </select>
</div> 
          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name='status'>
                          <option>Status</option>
                          <option value='active'>active</option>
                          <option value='inactive'>inactive</option>
                          </select>
</div>
  <div class="form-group">
    <label for="inputAddress2">Brief Description</label>
    <input type="text" class="form-control" name="desc" id="inputAddress2">
  </div>
   <input type="submit" name="insert-btn" class="btn btn-primary"/>
  
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

        
        $.get("https://cmversiontwo.cmadvocates.com/controller/PracticeArea.php", { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
          $("#mytable").append(`<option Disabled >Select Practise Area</option>`);
    
          obj.pas.forEach(element => {
            $("#mytable").append(`<option value="${element.id}">${element.Name}</option>`);
    
          });
        });

    $(content).html(ui);

    
    $(content).html(ui);
    let edit_skill_set = document.querySelector("#edit_skill_set");
    let myft = document.querySelector(".alert");
    edit_skill_set.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(edit_skill_set);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Skillset.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_skill_set();
           
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });
  }

  function view_skill_set() {

    ui = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Skill Sets</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
               

              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                



                  <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_skill_Set" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Skill Set Name
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                        
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Skillset.php", { getSkillSet: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#mytable").empty();
          obj.sss.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_skill_set" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });
        });


    $(content).html(ui);

    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post(url, { delete_skillset: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          view_skill_set();
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_skill_set", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Skillset.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.sss.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_skill_set" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });

        },
        error: function (e) {

          console.log(data);

        }

      });

    });


  }

  function add_video_name() {

    ui = `    <div class="container-fluid">
          <div class="row">
      <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Video</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="addvideo" class="row" enctype="multiple/form-data">
  <div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
  <input type="text" class="form-control" name="videoname" placeholder="New Video Name">
</div>

<div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
  <input type="text" class="form-control" name="price" placeholder=" Video Price">
</div>


    <div class="form-group   col-xl-6 col-lg-6 col-md-6 col-sm-12 form-file-upload form-file-multiple">
    <input type="file" accept="video/mp4,video/x-m4v,video/*" name="video_file_main" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="videofile" class="form-control inputFileVisible" placeholder="Choose Video">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">videocam</i>
            </button>
        </span>
    </div>
  </div>

    <div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12 form-file-upload form-file-multiple">
    <input type="file" accept="video/mp4,video/x-m4v,video/*" name="video_preview_main" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="videopreview" class="form-control inputFileVisible" placeholder="Choose Preview Video">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">photo_camera</i>
            </button>
        </span>
    </div>
  </div>


  <div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
    <select class="form-control" multiple style="height:20vh" id="serv" name="serv[]">
        ${$.get("https://cmversiontwo.cmadvocates.com/controller/Service.php", { getServiceforvid: "Donald", token1: sessionStorage.getItem("token") },
        function (data) {
        const obj = JSON.parse(data);
        if(obj.result == "session"){
        $("#reauth").modal();
        return;
        }
        $("#serv").empty();

        $("#serv").append(`<option >Choose service</option>`);

        obj.services.forEach(element => {
        $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
        });
        })


        }
    </select>

</div>


  <div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
  <select class="form-control" multiple aria-label="multiple select example" style="height:20vh" id="sub" name="sub[]">
  ${$.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptionsforuse: "Donald", token1: sessionStorage.getItem("token") },
    function (data) {
      const obj = JSON.parse(data);
      if(obj.result == "session"){
      $("#reauth").modal();
      return;
      }
      $("#sub").empty();

      $("#sub").append(`<option >Choose subscription</option>`);

      obj.subscriptions.forEach(element => {
      $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
      });
      })
  }
</select>
</div>  

          <div class="form-group  col-12"> 


    <div class="form-group">
    <label for="inputAddress2">Brief Description</label>
    <input type="text" class="form-control" name="desc" id="inputAddress2">
  </div>
   <input type="submit" name="insert-btn" class="btn btn-primary"/>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });


    
    let addvideo = document.querySelector("#addvideo");
    let myft = document.querySelector(".alert");
    addvideo.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addvideo);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Videos.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_video_name();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });



  }

  function edit_video_name(name,id) {

    ui = `    <div class="container-fluid">
    <div class="row">
<div class="alert d-none" role="alert"></div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4 class="card-title ">Existing Video</h4>
          </div>
          <div class="card-body">
       <form action="" method="POST" id="addvideo" class="row" enctype="multiple/form-data">
<div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
<input type="text" class="form-control" name="videoname" placeholder="New Video Name">
</div>

<div class="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
<input type="text" class="form-control" name="price" placeholder=" Video Price">
</div>


<div class="form-group   col-xl-6 col-lg-6 col-md-6 col-sm-12 form-file-upload form-file-multiple">
<input type="file" multiple="" accept="video/mp4,video/x-m4v,video/*" name="videofile" class="inputFileHidden">
<div class="input-group">
  <input type="text" name="videofile" class="form-control inputFileVisible" placeholder="Choose Video">
  <span class="input-group-btn">
      <button type="button" class="btn btn-fab btn-round btn-primary">
          <i class="material-icons">videocam</i>
      </button>
  </span>
</div>
</div>

<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12 form-file-upload form-file-multiple">
<input type="file" multiple="" accept="video/mp4,video/x-m4v,video/*" name="videopreview" class="inputFileHidden">
<div class="input-group">
  <input type="text" name="videopreview" class="form-control inputFileVisible" placeholder="Choose Preview Video">
  <span class="input-group-btn">
      <button type="button" class="btn btn-fab btn-round btn-primary">
          <i class="material-icons">photo_camera</i>
      </button>
  </span>
</div>
</div>


<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control selectpicker col-12" multiple  data-style="btn btn-link"  id="serv exampleFormControlSelect2" name="serv">
  
${$.get("https://cmversiontwo.cmadvocates.com/controller/Service.php", { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
const obj = JSON.parse(data);
if(obj.result == "session"){
$("#reauth").modal();
return;
}

if(obj.result == "session"){
$("#reauth").modal();
return;
}
$("#serv").empty();

$("#serv").append(`<option >Choose service</option>`);

obj.services.forEach(element => {
  $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
});
})


}
                        </select>
</div>


<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control selectpicker col-12" multiple  data-style="btn btn-link" id="sub exampleFormControlSelect2" name="sub">
${$.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
const obj = JSON.parse(data);
if(obj.result == "session"){
$("#reauth").modal();
return;
}

if(obj.result == "session"){
$("#reauth").modal();
return;
}
$("#sub").empty();

$("#sub").append(`<option >Choose subscription</option>`);

obj.subscriptions.forEach(element => {
  $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
});
})


}
</select>
</div>  

    <div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
<select class=" form-control col-12" name="video_status">
                    <option>Status</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                    </select>
</div>  


<div class="form-group  col-xl-6 col-lg-6 col-md-6 col-sm-12">
<label for="inputAddress2">Brief Description</label>
<input type="text" class="form-control" name="desc" id="inputAddress2">
</div>
<input type="submit" name="insert-btn" class="btn btn-primary"/>
</form>


        
          </div>
        </div>
      </div>

    </div>
  </div>`;

    $(content).html(ui);

    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });

    
    let editVideos = document.querySelector("#editVideos");
    let myft = document.querySelector(".alert");
    editVideos.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editVideos);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Videos.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_video_name();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      
    });

  }

  function view_video_name() {

    ui = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Videos</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
               

              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                


                  <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_video_name" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Video Name
                        </th>
                           <th>
                          Subscription Name
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                       
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Videos.php", { getvideos: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.videos.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>

                                <td>
                                ${element.subscription}
                                </td>
                                
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_video_name" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });
        });
    

    $(content).html(ui);



    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}()`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post("https://cmversiontwo.cmadvocates.com/controller/Videos.php", { delete_video: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          view_video_name();
        }, 1000);//wait 2 seconds

      });

    });
    
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_video", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Videos.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.videos.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
    
                                </td>
                                <td>
                                ${element.subscription}
                                </td>
                                
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_video_name" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });
        },
        error: function (e) {

          console.log(data);

        }

      });
     
    });

  }


 

  function add_business_unit() {
    ui = `
         <script>
  tinymce.init({
    selector: '#exampleFormControlTextarea1',
     init_instance_callback : function(editor) {
      var freeTiny = document.querySelector('.mce-notification');
      freeTiny.style.display = 'none';
  }
  });
  </script>

    <div class="container-fluid">
          <div class="row">
      <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Business Unit</h4>
                </div>
                <div class="card-body">
             <form method="POST" id="business" enctype="multiple/form-data">

  <div class="input-group"> 
                          <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">business_center</i></span></div>
     <select class="form-control col-12" required id="pa" name="pa">
                          ${

                            $.get("https://cmversiontwo.cmadvocates.com/controller/PracticeArea.php", { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
                              $("#pa").empty();
                        
                              $("#pa").append(`<option >Select Practise Area</option>`);
                              obj.pas.forEach(element => {
                                $("#pa").append(`<option value="${element.id}">${element.Name}</option>`);
                        
                              });
                            })

                          }
                          </select>
</div>
    
   <div class="form-group form-file-upload form-file-multiple">
    <input type="file" name="business_preview_hope" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="preview_image" class="form-control inputFileVisible" placeholder="Choose Preview Image specific to this business unit">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">photo_camera</i>
            </button>
        </span>
    </div>
  </div>

          <div class="input-group"> 
                          <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">toggle_off</i></span></div>
            <select class=" form-control col-12" required name="stat">
                          <option selected disabled>Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
          </div>  


                    <div class="input-group" > 
                      <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">toggle_off</i></span></div>
                      <select class="form-control col-12" required style="height:30vh" multiple id="head_b" name="head[]">

                      
                      </select>
                    </div> 
       
                    
                    <div class="input-group" > 
                      <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">toggle_off</i></span></div>
                      <select class="form-control col-12" required style="height:30vh" multiple id="member_b" name="members[]">

                      
                      </select>
                    </div> 


       
   <div class="input-group" style="margin-top:10px;">
                    <div class="input-group-prepend"><span class="input-group-text"><p>Brief Description</p></span></div>
     <textarea class="form-control" id="exampleFormControlTextarea1" name="paymenttermtextarea" style="margin-top:15px;" rows="3"></textarea>
  </div>

   <input type="submit" name="insert-btn" class="btn btn-primary"/>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);


    
    $.get("https://cmversiontwo.cmadvocates.com/controller/Advocates.php", { all:true, token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      if(obj.result == "session"){
      $("#reauth").modal();
      return;
      }
      $("#head_b").empty();
      $("#member_b").empty();

      $("#head_b").append(`<option >Pick business Unit Head</option>`);
      $("#member_b").append(`<option >Pick business Unit Members</option>`);
      obj.advocates.forEach(element => {
        $("#head_b").append(`<option value="${element.id}">${element.name}</option>`);
        $("#member_b").append(`<option value="${element.id}">${element.name}</option>`);

      });
    })



      // FileInput
    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });

    

    
    let business = document.querySelector("#business");
    let myft = document.querySelector(".alert");
    business.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(business);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/BusinessUnit.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_business_units();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });
  }

  function edit_business_unit(id) {
    ui = ` <script>
  tinymce.init({
    selector: '#exampleFormControlTextarea1',
     init_instance_callback : function(editor) {
      var freeTiny = document.querySelector('.mce-notification');
      freeTiny.style.display = 'none';
  }
  });
  </script>

    <div class="container-fluid">
          <div class="row">
      <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Business Units</h4>
                </div>
                <div class="card-body">
                <form action="" method="POST" id="editbusiness" enctype="multiple/form-data">

                <div class="input-group"> 
                                        <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <i class="material-icons">business_center</i>
                                  </span>
                                  </div>
                   <select class="form-control col-12" id="pa" name="pa">
                                        ${
              
                                          $.get("https://cmversiontwo.cmadvocates.com/controller/PracticeArea.php", { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                                            const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
                                            $("#pa").empty();
                                      
                                            $("#pa").append(`<option >Select Practise Area</option>`);
                                            obj.pas.forEach(element => {
                                              $("#pa").append(`<option value="${element.id}">${element.Name}</option>`);
                                      
                                            });
                                          })
              
                                        }
                                        </select>
              </div>
                  
                 <div class="form-group form-file-upload form-file-multiple">
                  <input type="file" multiple="" name="preview[]" class="inputFileHidden">
                  <div class="input-group">
                      <input type="text" name="preview_image" class="form-control inputFileVisible" placeholder="Choose Preview Image specific to this business unit">
                      <span class="input-group-btn">
                          <button type="button" class="btn btn-fab btn-round btn-primary">
                              <i class="material-icons">photo_camera</i>
                          </button>
                      </span>
                  </div>
                </div>
              
                        <div class="input-group"> 
                                        <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <i class="material-icons">toggle_off</i>
                                  </span>
                                  </div>
                   <select class=" form-control col-12" name="stat">
                                        <option>Status</option>
                                        <option value="active">active</option>
                                        <option value="inactive">inactive</option>
                                        </select>
              </div>  
              
                 <div class="input-group" style="margin-top:10px;">
                                  <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <p>Brief Description</p>
                                  </span>
                                  </div>
                   <textarea class="form-control" id="exampleFormControlTextarea1" name="paymenttermtextarea" style="margin-top:15px;" rows="3"></textarea>
                </div>
                 <input type="submit" name="insert-btn" class="btn btn-primary"/>
                <button type="submit" class="btn btn-primary">back</button>
              </form>
              

              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

      // FileInput
    $('.form-file-simple .inputFileVisible').click(function () {
      $(this).siblings('.inputFileHidden').trigger('click');
    });

    $('.form-file-simple .inputFileHidden').change(function () {
      var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
      $(this).siblings('.inputFileVisible').val(filename);
    });

    $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function () {
      $(this).parent().parent().find('.inputFileHidden').trigger('click');
      $(this).parent().parent().addClass('is-focused');
    });

    $('.form-file-multiple .inputFileHidden').change(function () {
      var names = '';
      for (var i = 0; i < $(this).get(0).files.length; ++i) {
        if (i < $(this).get(0).files.length - 1) {
          names += $(this).get(0).files.item(i).name + ',';
        } else {
          names += $(this).get(0).files.item(i).name;
        }
      }
      $(this).siblings('.input-group').find('.inputFileVisible').val(names);
    });

    $('.form-file-multiple .btn').on('focus', function () {
      $(this).parent().siblings().trigger('focus');
    });

    $('.form-file-multiple .btn').on('focusout', function () {
      $(this).parent().siblings().trigger('focusout');
    });

    
    let business = document.querySelector("#editbusiness");
    let myft = document.querySelector(".alert");
    business.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(business);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/BusinessUnit.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_business_units();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });

  }

  function view_business_units() {

    ui = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Business Units</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search...">
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_business_unit" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Business Unit Head
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            Business Unit head 1
                          </td>
                          <td>
                            Active
                          </td>
                          <td>
                          <button class="btn btn-primary" data-op="edit_business_unit"  id="main_id_in" ><span class="material-icons">edit</span></button>
                          <button class="btn btn-primary"><span class="material-icons">delete</span></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/BusinessUnit.php", { getBusinessUnits: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.busis.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
    
                                </td>
                                <td>
                                ${element.subscription}
                                </td>
                                
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_video_name" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });
        });
    

    $(content).html(ui);
   
    $( ".input-group").on( "click", "#main_id_in",function() {
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}()`);
      
    });

    
    $( "#mytable" ).on( "click", "#main_id_in", function() {
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}(${$( this ).attr( 'data_id')})`);
      
    });


  }
  function add_consultation() {
    ui = `<div class="container-fluid">
          <div class="row">
      <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Add a consultation</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="addconsultation" enctype="multiple/form-data">
  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">category</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="lawtype" name="lawtype">
            ${              
        $.get("https://cmversiontwo.cmadvocates.com/controller/LawyerType.php", { getLawyerType: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          $("#lawtype").empty();
          
          $("#lawtype").append(`<option >Select Lawyer Type</option>`);
    
          obj.lts.forEach(element => {
            $("#lawtype").append(`<option value="${element.id}">${element.Name}</option>`);
    
          });
        })}
                          </select>
</div>



  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">business_center</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="pa" id="pa">
                          ${

                            $.get("https://cmversiontwo.cmadvocates.com/controller/PracticeArea.php", { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
                              $("#pa").empty();
                        
                              $("#pa").append(`<option>Select Practise Area</option>`);
                              obj.pas.forEach(element => {
                                $("#pa").append(`<option value="${element.id}">${element.Name}</option>`);
                        
                              });
                            })
                          }
                          </select>
</div>  

<div class="form-group">
    <label for="exampleFormControlSelect2">Choose Advocate</label>
    <select style="height:50px;" multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
      <option>lawyer name 1 </option>
      <option>lawyer name 2 </option>
    </select>
  </div>


  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">schedule</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="duration">
                          <option>Select Duration</option>
                          <option value="15">15 mins</option>
                          <option value="30">30 mins</option>
                          <option value="45">45 mins</option>
                          <option value="60">60 mins</option>
                          </select>
</div>  

<div class="form-group">
    <input type="text" class="form-control" name="billing" id="exampleFormControlInput1" placeholder="Billing eg shs 6000">
  </div>

          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="constatus">
                          <option>Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
</div>  

         <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">money</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="sub" name="sub">
                          ${

    $.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
      
      $("#sub").empty();
      $("#sub").append(`<option>Select Subscription Name</option>`);
      obj.subscriptions.forEach(element => {


        $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
      });
    })



                          }

                          </select>
</div>  

    
   <input type="submit"  class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    //create an event in the google calendar
    var create = document.getElementById('create_calendar');
//click can also be antother event
/*create.addEventListener('click', function (x) {
  var date = 'https://www.googleapis.com/calendar/v3/calendars/[MY_CALENDAR_ID]/events?sendNotifications=false&access_token=[GOOGLE_API_TOKEN]';
            var data = { end: { dateTime: "2012-07-22T11:30:00-07:00" }
                            , start: { dateTime: "2012-07-22T11:00:00-07:00" }
                            , summary: "New Calendar Event from API"
                        };
});

 var ajax = $.ajax({ date: date
                                , data: data
                                , type: 'POST'
                        }).done(addEventDone)
                          .fail(function (jqHXR, textStatus) {
                              console.log("addEvent(): ajax failed = " + jqHXR.responseText);
                              console.log(jqHXR);
                          });
*/
                          
    let addconsultation = document.querySelector("#addconsultation");
    let myft = document.querySelector(".alert");
    addconsultation.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addconsultation);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            request_consultation();
            
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      console.log("done");
    });



  }

  

  function edit_consultation(id) {
    ui = `<div class="container-fluid">
          <div class="row">
      <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing consultation</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="editconsultation" enctype="multiple/form-data">
  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">category</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="lawtype" required name="editlawtype">
     ${              
      $.get("https://cmversiontwo.cmadvocates.com/controller/LawyerType.php", { getLawyerType: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        $("#lawtype").empty();
        
        $("#lawtype").append(`<option >Select Lawyer Type</option>`);
  
        obj.lts.forEach(element => {
          $("#lawtype").append(`<option value="${element.id}">${element.Name}</option>`);
  
        });
      })}
                          </select>
</div>

  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">business_center</i>
                    </span>
                    </div>
     <select class=" form-control col-12" required id="pa" name="editpa">
     ${

      $.get("https://cmversiontwo.cmadvocates.com/controller/LawyerType.php", { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        $("#pa").empty();
  
        $("#pa").append(`<option>Select Practise Area</option>`);
        obj.pas.forEach(element => {
          $("#pa").append(`<option value="${element.id}">${element.Name}</option>`);
  
        });
      })
    }
                          </select>
</div>  

  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">schedule</i>
                    </span>
                    </div>
     <select class=" form-control col-12" required name="editduration">
                          <option>Select Duration</option>
                          <option value="15">15 mins</option>
                          <option value="30">30 mins</option>
                          <option value="45">45 mins</option>
                          <option value="60">60 mins</option>
                          </select>
</div>  

<div class="form-group">
    <input type="text" class="form-control" required name="editbilling" id="exampleFormControlInput1" placeholder="Billing eg shs 6000">
  </div>

          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" required name="editstatus">
                          <option>Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
</div>  

         <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">money</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="sub" required name="editsub">
     ${

      $.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        
        $("#sub").empty();
        $("#sub").append(`<option>Select Subscription Name</option>`);
        obj.subscriptions.forEach(element => {
  
  
          $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })
  
  
  
                            }
                            </select>
</div>  

    
   <input type="submit" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    
    let editconsultation = document.querySelector("#editconsultation");
    let myft = document.querySelector(".alert");
    editconsultation.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editconsultation);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Consultation.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            request_consultation();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      
    });

  }

  function request_consultation() {

    ui = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Consultations</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                
              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                
              <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_consultation" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                         Lawyer Type
                        </th>
                        <th>
                          Practise Area
                        </th>
                        <th>
                          Duration
                        </th>
                           <th>
                          Advocate Billing
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                     
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Consultation.php", { getConsultations: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.cons.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.lawyer_type}
                                </td>
                                <td>
                                ${element.pa_name}
                                </td>
                                
                                <td>
                                ${element.duration}
                                </td>
                                
                                
                                <td>
                                ${element.billing}
                                </td>
                                
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_consultation" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });
        });

    $(content).html(ui);

    
    $( ".input-group").on( "click", "#main_id_in",function() {
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}()`);
      
    });

    
    $( "#mytable" ).on( "click", "#main_id_in", function() {
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}(${$( this ).attr( 'data_id')})`);
      
    });

      
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post("https://cmversiontwo.cmadvocates.com/controller/Consultation.php", { delete_consultation: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          request_consultation();
        }, 1000);//wait 2 seconds

      });

    });

    
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_cons", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Consultation.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    
          $("#mytable").empty();
          obj.cons.forEach(element => {
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.lawyer_type}
                                </td>
                                <td>
                                ${element.pa_name}
                                </td>
                                
                                <td>
                                ${element.duration}
                                </td>
                                
                                
                                <td>
                                ${element.billing}
                                </td>
                                
                                <td>
                                ${element.status}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_consultation" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
                                </td>
                              </tr>`);
          });


        },
        error: function (e) {

          console.log(data);

        }

      });
    });

  }



  function add_payment() {
    ui = `
     <script>
  tinymce.init({
    selector: '#exampleFormControlTextarea1',
     init_instance_callback : function(editor) {
      var freeTiny = document.querySelector('.mce-notification');
      freeTiny.style.display = 'none';
  }
  });
  </script>
  <div class="container-fluid">
          <div class="row">
                            <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Payment Terms</h4>
               </div>
                <div class="card-body">
             <form action="" id="addpayment" method="POST" enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" name="addpaymentterms" placeholder="Payment Terms Name">
  </div>
           <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="paystatus">
                          <option>Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
</div>
 <div class="input-group" style="margin-top:10px;">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                    <p>Terms</p>
                    </span>
                    </div>
     <textarea class="form-control" id="exampleFormControlTextarea1" name="paymenttermtextarea" style="margin-top:15px;" rows="3"></textarea>
  </div>
   <input type="submit" class="btn btn-primary"/>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);


    let addpayment = document.querySelector("#addpayment");
    let myft = document.querySelector(".alert");
    addpayment.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addpayment);
      formData.append('token', sessionStorage.getItem("token"));

      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/PaymentTerms.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            payment_terms();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });

  }


  function edit_payment(name, txt, id) {
    ui = `
     <script>
  tinymce.init({
    selector: '#exampleFormControlTextarea1',
     init_instance_callback : function(editor) {
      var freeTiny = document.querySelector('.mce-notification');
      freeTiny.style.display = 'none';
  }
  });
  </script>
  <div class="container-fluid">
          <div class="row">
                            <div class="alert d-none" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title "> Existing Payment Terms</h4>
               </div>
                <div class="card-body">
             <form action="" id="edit_pyterms" method="POST" enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" value="${name}" name="edit_name_pyterms" placeholder="Payment Terms Name">
  </div>
           <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" required name="edit_payment_terms_status">
                          <option>Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
</div>
 <div class="input-group" style="margin-top:10px;">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                    <p>Terms</p>
                    </span>
                    </div>
     <textarea class="form-control"  id="exampleFormControlTextarea1" name="edit_text_pyterms" style="margin-top:15px;" rows="3">
     ${txt}
     </textarea>
  </div>
   <input type="submit" name="insert-btn" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    let edit_pyterms = document.querySelector("#edit_pyterms");
    let myft = document.querySelector(".alert");
    edit_pyterms.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(edit_pyterms);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/PaymentTerms.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      payment_terms();
    });
  }

//Done
  function payment_terms() {

    ui = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Payment Terms</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                
              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                
              <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_payment" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Payment Term Name
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Description
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button id="download" class="btn btn-primary" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">

                        <tr>
                          <td>
                         
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/PaymentTerms.php", { getpaymentterms: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          
          $("#mytable").empty();
          obj.pyterms.forEach(element => {
    
    
            $("#mytable").append(`<tr>
                                <td>
                                  ${element.id}
                                </td>
                                <td>
                                ${element.Name}
                                </td>
                                <td>
                                ${element.status}
                                
                                </td>
                                <td>
                                ${element.txt}
                                </td>
                                <td>
                                <button class="btn btn-primary" data-op="edit_payment" data_id="${element.id}" data_txt="${element.txt}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
                                <button class="btn btn-primary delete_pytm" data_op="${element.id}"><span class="material-icons" >delete</span></button>
                                </td>
                              </tr>`);
          });
        });


    $(content).html(ui);

    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}","${$( this ).attr( 'data_txt')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    
    
    $( "#mytable" ).on( "click", ".delete_pytm", function() {
      console.log( $( this ).attr( 'data_op') );
      
      $.post("https://cmversiontwo.cmadvocates.com/controller/Payment.php", { delete_pytm: $( this ).attr( 'data_op') })
            .done(function (data) {
              
              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
              myft.classList.remove('d-none');
              myft.classList.add(obj.result);
              myft.innerHTML = obj.value;
              myft.classList.remove('d-none');

              setTimeout(function () {
                myft.classList.add('d-none');

                myft.classList.add(obj.result);
                payment_terms();
              }, 1000);//wait 2 seconds

            });
          });



          let searchbtn = document.querySelector("#searchbtn");
  
          searchbtn.addEventListener("click", (e) => {
            //e.preventDefault();
            let formData = new FormData();
      
            formData.append("search_pytm", $('#search').val());
            $.ajax({
              type: "POST",
              enctype: 'multipart/form-data',
              url: "https://cmversiontwo.cmadvocates.com/controller/Payment.php",
              data: formData,
              crossDomain: true,
              processData: false,
              contentType: false,
              cache: false,
              timeout: 600000,
              success: function (data) {
      
                $("#mytable").empty();
      
                const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
                obj.pyterms.forEach(element => {
      
                  
            $("#mytable").append(`<tr>
            <td>
              ${element.id}
            </td>
            <td>
            ${element.Name}
            </td>
            <td>
            ${element.status}
            </td>
            <td >
            <button class="btn btn-primary" data-op="edit_product" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
           <!-- <button class="btn btn-primary delete_product" data_op="${element.id}"><span class="material-icons">delete</span></button>
            --></td>
          </tr>`);

                });
      
      
              },
              error: function (e) {
      
                console.log(data);
      
              }
      
            });
            let app_lawyer = document.querySelectorAll(".app_lawyer");
            let dec_lawyer = document.querySelectorAll(".dec_lawyer");
      
          });
      


  /*  setTimeout(function () {

      const main_id_in = document.querySelectorAll("#main_id_in");

      main_id_in.forEach((ele) => {
        // Here comes the Code that should be executed on every Element, e.g.
        ele.addEventListener("click", () => {

          while (content.firstChild) {
            content.removeChild(content.lastChild);
          }
          let myatt = ele.getAttribute("data-op");
          console.log(ele.getAttribute("data_op") + "" + ele.getAttribute("data_id") + "" + ele.getAttribute("data_status"));
          eval(`${myatt}(ele.getAttribute("data_op"),ele.getAttribute("data_txt"),ele.getAttribute("data_id"))`);

        });

      });

      let delete_sub = document.querySelectorAll("#delete_sub");


      delete_sub.forEach((ele) => {
        // Here comes the Code that should be executed on every Element, e.g.
        ele.addEventListener("click", () => {
          $.post(url, { delete_sub: ele.getAttribute("data_op") })
            .done(function (data) {
              console.log(data);
              const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
              myft.classList.remove('d-none');
              myft.classList.add(obj.result);
              myft.innerHTML = obj.value;
              myft.classList.remove('d-none');

              setTimeout(function () {
                myft.classList.add('d-none');

                myft.classList.add(obj.result);
                products();
              }, 1000);//wait 2 seconds

            });

        });

      });

      
$('#mytable').click(() => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("#downloadTable"));
});
      let button = document.querySelector('#download');

      
button.addEventListener('click', function (e) {

  var tbody = $("#mytable").val();

  var filename = "service.txt";

  download(tbody, filename);

});

    }, 1000);//wait 2 seconds
*/



    //download functionality

  }


  function rudia(){


    ///<input type="text" id="search" name="search" class="form-control" placeholder="Search...">
   // <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
      

    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}","${$( this ).attr( 'data_txt')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    

    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_pytm", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {

          $("#mytable").empty();

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          obj.pyterms.forEach(element => {

            
      $("#mytable").append(`<tr>
      <td>
        ${element.id}
      </td>
      <td>
      ${element.Name}
      </td>
      <td>
      ${element.status}
      </td>
      <td >
      <button class="btn btn-primary" data-op="edit_product" data_op="${element.Name}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
  </td>
    </tr>`);

          });


        },
        error: function (e) {

          console.log(data);

        }

      });
      let app_lawyer = document.querySelectorAll(".app_lawyer");
      let dec_lawyer = document.querySelectorAll(".dec_lawyer");

    });

  }


  // function download(tbody, filename) {
  //   var element = document.createElement('a');
  //   element.setAttribute('href', 'data:text/plain;charset=utf-8' + encodeURIComponent(tbody));
  
  //   element.setAttribute('download', filename);
  
  //   element.style.display = 'none';
  
  //   document.body.appendChild(element);
  
  //   element.click();
  
  //   document.body.removeChild(element);
  
  // }


function view_criteria_documents(docu){
  ui=`<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
           
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title "></h4>
                </div>
                <div class="card-body">
       <div class="top-bar">
      <button class="btn" id="prev-page">
        <i class="fas fa-arrow-circle-left"></i> Prev Page
      </button>
      <button class="btn" id="next-page">
        Next Page <i class="fas fa-arrow-circle-right"></i>
      </button>
        <a href="./index.html">  
    <button class="btn">Close</button>  
  </a>
      <span class="page-info">
        Page <span id="page-num"></span> of <span id="page-count"></span>
      </span>
    </div>

    <canvas id="pdf-render"></canvas>

                          <div class="col-12">
                        <button type="button" class="btn btn-primary">Approve</button> 
                        <button type="button" class="btn btn-primary">Decline</button> 
                          </div>
                          
                          
                    </form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

  $(content).html(ui);

  const url = '../'+docu;

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1.5,
  canvas = document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d');

// Render the page
const renderPage = num => {
  pageIsRendering = true;

  // Get page
  pdfDoc.getPage(num).then(page => {
    // Set scale
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport
    };

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    // Output current page
    document.querySelector('#page-num').textContent = num;
  });
};

// Check for pages rendering
const queueRenderPage = num => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// Show Prev Page
const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

// Show Next Page
const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};

// Get Document
pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

// Button Events
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);

}


function view_sme_documents(reg,kra){

    ui = ` <div class="card-header card-header-primary">
            <h4 class="card-title">Review Sme required Documents</h4>
        </div>
  <div class="row">
  <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Verify Documents</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
          <div class="table-responsive">
  <table class="table table-shopping">
      <thead>
          <tr>
              <th class="text-center"></th>
              <th>Document Name</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  <div class="img-container">
                      <img class="my-foto" src="../images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" alt="...">
                  </div>
              </td>
              <td class="td-name">
                 Document Name
              </td>
                 <td>
            <button type="button" data_d="${reg}" data-op="view_criteria_documents" id="main_id_in" class="btn btn-default">View Details</button>
              </td>

              <td>
                  <div class="img-container">
                      <img class="my-foto" src="../images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" alt="...">
                  </div>
              </td>
              <td class="td-name">
                 Document Name
              </td>
                 <td>
            <button type="button" data_d="${kra}" data-op="view_criteria_documents" id="main_id_in" class="btn btn-default">View Details</button>
              </td>

          </tr>
      </tbody>
  </table>
</div>
      </div>
  </div>
</div>
 `;

  $(content).html(ui);


    const main_id_in = document.querySelectorAll("#main_id_in");

    console.log(main_id_in.length);

    main_id_in.forEach((ele) => {
      // Here comes the Code that should be executed on every Element, e.g.
      ele.addEventListener("click", () => {

        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        let myatt = ele.getAttribute("data-op");
        eval(`${myatt}("${ele.getAttribute("data_d")}")`);

      });

    }); 


   $(document).ready(function () {
    $('.my-foto').imagezoomsl({ zoomrange: [3, 3] });
});

/*http://zoomsl.sergeland.ru Sergey Zaragulov skype: deeserge icq: 287295769 sergeland@mail.ru*/
(function($, global){
"use strict";

  //utility methods
  /*$.fn.extend({
    resetzoomsl: function(){
      this.each(function(){
        
      });
    }
  });*/

$.fn.imagezoomsl = function(options){
  options = options || {};    
  return this.each(function(){
    if (!$(this).is("img")) return true;      
    var that = this;      
    setTimeout(function () {
      $("img").one("load", function() {//new code
        sergelandimagezoomer.init($(that), options);
      }).attr('src', $(that).attr('src'));        
        }, 30);
  });
};

  var sergelandimagezoomer = {};  
  $.extend(sergelandimagezoomer, {

    dsetting: { //default settings
    
        // çàãðóçêà big êàðòèíêè
        loadinggif: '',               // êàðòèíêà ïîêàçûâàåìàÿ ïðè çàãðóçêå big èçîáðàæåíèÿ
        loadopacity: 0.1,           // ïðîçðà÷íîñòü ôîíà ïåðåêðûòèÿ tmb êàðòèíêè ïðè çàãðóçêå big èçîáðàæåíèÿ
        loadbackground: '#878787',        // öâåò ôîíà ïåðåêðûòèÿ tmb êàðòèíêè ïðè çàãðóçêå  big èçîáðàæåíèÿ

        
        // ëóïà (cursorshade)
        cursorshade: true,            // ïîêàçàòü êîíòåéíåð ëóïû
        magnifycursor: 'crosshair',       // âèä êóðñîðà ìûøè íàä tmb â ôîðìàòå CSS
        cursorshadecolor: '#fff',       // öâåò êîíòåéíåðà ëóïû â ôîðìàòå CSS
        cursorshadeopacity: 0.3,        // ïðîçðà÷íîñòü êîíòåéíåðà ëóïû
        cursorshadeborder: '1px solid black',   // âíåøíèé áîðäþðà êîíòåéíåðà ëóïû â ôîðìàòå CSS
        zindex: '',               // z-index êîíòåéíåðà ëóïû 
        stepzoom: 0.5,              // øàã çóììèðîâàíèÿ ïðè ïðîêðóòêå êîëåñà ìûøè         
        zoomrange: [2, 2],            // äèàïàçîí çóììèðîâàíèÿ
        zoomstart: 2,             // ñòàðòîâàÿ óñòàíîâêà çóììèðîâàíèÿ
        disablewheel: true,             // îòêëþ÷èòü ïðîêðóòêó äîêóìåíòà êîëåñîì ìûøè êîãäà êóðñîð íàä êàðòèíêîé tmb â ñëó÷àå åñëè íå çàäàí äèàïàçîí çóììèðîâàíèÿ

        
        // ïîäñêàçêà (statusdiv)
        showstatus: true,             // ïîêàçûâàòü ïðè íàâåäåíèè íà tmb help êîíòåéíåð
        showstatustime: 2000,                   // âðåìÿ ïîêàçà help êîíòåéíåðà
        statusdivborder: '1px solid black', 
        statusdivbackground: '#C0C0C0', 
        statusdivpadding: '4px', 
        statusdivfont: 'bold 13px Arial', 
        statusdivopacity: 0.8,

        
        // êîíòåéíåð big êàðòèíêè (magnifier)
        magnifierpos: 'right',            // ñòîðîíà îòîáðàæåíèÿ êîíòåéíåðà left/right
        magnifiersize: [0, 0],          // ðàçìåð êîíòåéíåðà  
        magnifiereffectanimate: 'showIn',       // ýôôåêò ïîÿâëåíèÿ/ñêðûòèÿ fadeIn/showIn/slideIn
        innerzoom: false,           // ïîêàçàòü êîíòåéíåð âíóòðè tmb
        innerzoommagnifier: false,        // ïîêàçàòü êîíòåéíåð êàê ëóïó
        descarea: false,            // ïîêàçàòü êîíòåéíåð â ïðîèçâîëüíîé îáëàñòè, îáëàñòü descarea äîëæíà èìåòü width è height        
        leftoffset:  15,            // îòñòóï ñëåâà îò tmb êàðòèíêè
        rightoffset: 15,            // îòñòóï ñïðàâà îò tmb êàðòèíêè
        switchsides: true,            // ó÷èòûâàòü êðàé ýêðàíà
                magnifierborder: '1px solid black',     // âíåøíèé áîðäþð

        
        // êîíòåéíåð òåêñòà ñíèçó ê êàðòèíêå
        textdnbackground: '#fff',               
        textdnpadding: '10px',
        textdnfont: '13px/20px cursive',

        
                // êîýôôèöèåíòû ñêîðîñòè àíèìàöèè
        scrollspeedanimate: 5 /*4*/,        // ïðîêðóòêè big êàðòèíêè
        zoomspeedanimate: 7,              // çóììèðîâàíèÿ (ïëàâíîñòü)
        loopspeedanimate: 2.5 /*2.45342*/ ,   // ïåðåìåùåíèÿ îáëàñòè ëóïû è big êîíòåéíåðà â ðåæèìå ëóïû        
        magnifierspeedanimate: 350,         // ïîêàçà big êîíòåéíåðà

        
        // âíåøíèé âèä
        classmagnifier:   "magnifier",
        classcursorshade: "cursorshade",
        classstatusdiv:   "statusdiv",
        classtextdn:      "textdn",
        classtracker:   "tracker"

      },
  
        
    //isie: (function(){/*@cc_on @*//*@if(@_jscript_version >= 5)return true;@end @*/return false;})(), //is this IE?
    isie: (function(){    
      var nAgt = navigator.userAgent;     
      if(nAgt.indexOf("MSIE") != -1) return true;
      else return false;
    })(),
    
    //isMobile: (function(){ if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ){ return true; } })(),
    
    highestzindex: function($img){
    
      var z = 0, $els = $img.parents().add($img), elz;      
      $els.each(function(){     
        elz = $(this).css('zIndex');
        elz = isNaN(elz) ? 0 : + elz;
        z = Math.max(z, elz);
      });     
      return z;
    },

    getboundary: function(b, val, specs){      
      if (b == "left"){     
        var rb = -specs.img.w*specs.newpower + specs.magnifier.w;
        return (val > 0) ? 0 : (val < rb) ? rb : val;
      }
      else{     
        var tb = -specs.img.h*specs.newpower + specs.magnifier.h;
        return (val > 0) ? 0 : (val < tb) ? tb : val;
      }
    },    
    
        controlLoop: function ($tracker) {                             
      var self  = this,
                specs = $tracker.data('specs');      
      if(!specs)  return;

      var coords = specs.$img.offsetsl(),
        pageX = self.cld.pageX999 - coords.left,
        pageY = self.cld.pageY999 - coords.top;

      self.cld.destU += (self.cld.pageX999 - self.cld.destU) / 2.45342;
      self.cld.destV += (self.cld.pageY999 - self.cld.destV) / 2.45342; 

      specs.$statusdiv.css({left: self.cld.destU - 10, top: self.cld.destV + 20});
      
      var   csw = Math.round( specs.magnifier.w/specs.newpower), 
          csh = Math.round( specs.magnifier.h/specs.newpower);            

        self.cld.destK += (pageX - self.cld.destK) / specs.setting.loopspeedanimate;
        self.cld.destL += (pageY - self.cld.destL) / specs.setting.loopspeedanimate; 

        specs.$cursorshade.css({ left: specs.img.w > csw ? Math.min(specs.img.w - csw, Math.max(0, self.cld.destK - csw/2 )) + coords.left - specs.cursorshade999.border999.left999 : coords.left - specs.cursorshade999.border999.left999, 
                      top: specs.img.h > csh ? Math.min(specs.img.h - csh, Math.max(0, self.cld.destL - csh/2 )) + coords.top  - specs.cursorshade999.border999.top999  : coords.top  - specs.cursorshade999.border999.top999 });
                     
        if(specs.setting.innerzoommagnifier){
        
          self.cld.destM += (self.cld.pageX999 - self.cld.destM) / specs.setting.loopspeedanimate;
          self.cld.destN += (self.cld.pageY999 - self.cld.destN) / specs.setting.loopspeedanimate; 

          specs.$magnifier.css({
            left: self.cld.destM - Math.round(specs.magnifier.w/2),
            top:  self.cld.destN - Math.round(specs.magnifier.h/2)
          });         
          specs.$textdn.css({
            left: self.cld.destM - Math.round(specs.magnifier.w/2), 
            top:  self.cld.destN + specs.magnifier.h/2 
          });         
        }     
 
      self.cld.currU += (pageX - self.cld.currU) / specs.setting.scrollspeedanimate;
      self.cld.currV += (pageY - self.cld.currV) / specs.setting.scrollspeedanimate;      
      
      var newx = -self.cld.currU*specs.newpower + specs.magnifier.w/2; 
      var newy = -self.cld.currV*specs.newpower + specs.magnifier.h/2;

      specs.$bigimage.css({left: self.getboundary('left', newx, specs), top:  self.getboundary('top',  newy, specs)});
            self.cld.controlTimer = setTimeout(function () {      
          self.controlLoop($tracker);
            }, 30);   

        },

        controlLoop2: function ($tracker) {     
                       
      var self  = this,
                specs = $tracker.data('specs'); 
            if(!specs)  return;   
      
      specs.currM += (specs.newpower - specs.currM) / specs.setting.zoomspeedanimate;       
      specs.currM = Math.round( specs.currM * 1000 ) / 1000;  
      
      specs.$cursorshade.css({  width: specs.img.w > Math.round( specs.magnifier.w/specs.currM ) ? Math.round( specs.magnifier.w/specs.currM ) : specs.img.w, 
                   height: specs.img.h > Math.round( specs.magnifier.h/specs.currM ) ? Math.round( specs.magnifier.h/specs.currM ) : specs.img.h });                
      specs.$bigimage.css({  width: Math.round( specs.currM*specs.bigimage.w*(specs.img.w/specs.bigimage.w) ), 
                  height: Math.round( specs.currM*specs.bigimage.h*(specs.img.h/specs.bigimage.h) ) });

            self.cld.controlTimer2 = setTimeout(function () {     
          self.controlLoop2($tracker);
            }, 30); 
                     
        },    
    
    cld:{},

    showimage: function($tracker){
    
      var self   = this,
        specs  = $tracker.data('specs'),
        width  = specs.setting.magnifiersize[0], 
        height = specs.setting.magnifiersize[1],
        magcoords = {},
        coords = specs.$img.offsetsl(),
        func = function(){},
                left1   = 0,
                top1    = 0;        

      magcoords.left = coords.left + (specs.setting.magnifierpos === 'left' ? -specs.magnifier.w - specs.setting.leftoffset : specs.img.w + specs.setting.rightoffset);                       
      if(specs.setting.switchsides && !specs.setting.innerzoom){
              
        if(specs.setting.magnifierpos !== 'left' && magcoords.left + specs.magnifier.w + specs.setting.leftoffset >= $(window).width() && coords.left - specs.magnifier.w >= specs.setting.leftoffset)      
          magcoords.left = coords.left - specs.magnifier.w - specs.setting.leftoffset;        
         else if(specs.setting.magnifierpos === 'left' && magcoords.left < 0)     
          magcoords.left = coords.left + specs.img.w + specs.setting.rightoffset;         
      }           
      
      left1  = magcoords.left;
      top1   = coords.top;
      specs.$magnifier.css({visibility: "visible", display: "none"});

        if(specs.setting.descarea){     
         left1 = $(specs.setting.descarea).offsetsl().left;
         top1  = $(specs.setting.descarea).offsetsl().top;         
      }         
      if(specs.setting.innerzoommagnifier){                     
        left1 = self.cld.pageX999 - Math.round(specs.magnifier.w/2);
        top1  = self.cld.pageY999 - Math.round(specs.magnifier.h/2);
      }

      //*
            func = function(){ 
      
        specs.$textdn.stop(true, true).fadeIn(specs.setting.magnifierspeedanimate);         
        if(!specs.setting.innerzoommagnifier) 
          specs.$textdn.css({left: left1, top: top1 + height});
      } // */     
      
      if(specs.setting.innerzoom){
      
        left1 = coords.left; 
        top1  = coords.top; 
        
        func = function(){
          specs.$img.css({visibility: "hidden"});
          specs.$textdn.css({left: left1, top: top1 + height}).stop(true, true).fadeIn(specs.setting.magnifierspeedanimate);
        };
      }     
      
      switch (specs.setting.magnifiereffectanimate){      
      case 'slideIn':
        specs.$magnifier.css({
              left:    left1, 
              top:     top1 - height/3,
              width:   width,             
              height:  height             
             })
          .stop(true, true).show()
          .animate({top: top1}, specs.setting.magnifierspeedanimate, "easeOutBounceSL", func);                
        break;        
      case 'showIn':
          specs.$magnifier.css({  
            left:   coords.left + Math.round(specs.img.w/2), 
            top:    coords.top  + Math.round(specs.img.h/2), 
            width:  Math.round(specs.magnifier.w/5), 
            height: Math.round(specs.magnifier.h/5) 
           })
          .stop(true, true).show().css({opacity: "0.1"})
          .animate({  
            left: left1, 
            top: top1, 
            opacity: "1", 
            width: width, 
            height: height
            
           }, specs.setting.magnifierspeedanimate, func );      
        break;        
      default:
        specs.$magnifier.css({    
              left:   left1, 
              top:    top1,
              width:  width, 
              height: height              
             })
          .stop(true, true)
          .fadeIn(specs.setting.magnifierspeedanimate, func);               
      }       
      if (specs.setting.showstatus && (specs.title999 || specs.help))
        specs.$statusdiv.html(specs.title999 + '<div style="font-size:80%">' + specs.help +'</div>')
              .stop(true, true)
              .fadeIn().delay(specs.setting.showstatustime).fadeOut("slow");
      else specs.$statusdiv.hide();                       
    },

    hideimage: function($tracker){
    
      var self = this,
          specs = $tracker.data('specs'),
          coords = specs.$img.offsetsl();
      
      switch (specs.setting.magnifiereffectanimate){    

      case 'showIn':
        specs.$magnifier.stop(true, true)
            .animate({  
              left: coords.left + Math.round(specs.img.w/2), 
              top:  coords.top  + Math.round(specs.img.h/2), 
              opacity: "0.1", 
              width:  Math.round(specs.magnifier.w/5), 
              height: Math.round(specs.magnifier.h/5)
             }, 
             specs.setting.magnifierspeedanimate, function(){specs.$magnifier.hide();});      
        break;
        
      default:
        specs.$magnifier.stop(true, true).fadeOut(specs.setting.magnifierspeedanimate);
      }
      
    },    
    
        /* Init function start.  */
        init: function ($img, options, gallery) {
                var setting = $.extend({}, this.dsetting, options),
       basezindex = setting.zindex || this.highestzindex($img),
                    img = {w:$img.width(), h:$img.height()},
          cld = new cld(),
          title = $img.attr("data-title")        ? $img.attr("data-title")        : '',
           help = $img.attr("data-help")         ? $img.attr("data-help")         : '',
           textdn = $img.attr("data-text-bottom")  ? $img.attr("data-text-bottom")  : '',
           self = this,
           newpower,
           key,
           $magnifier,
           $cursorshade, 
             $statusdiv,           
             $tracker,
           $textdn;          

      if (img.h === 0 || img.w === 0) {
          debugger;
        $(new Image()).load(function(){       
          self.init($img, options);         
        }).attr("src", $img.attr("src"));       
        return;
      }
      
      $img.css({visibility: "visible"});
      setting.largeimage = $img.attr("data-large") || $img.attr("src");     
      
      for (key in setting) 
        if(setting[key] === '') setting[key] = this.dsetting[key];            
     
      if(setting.zoomrange[0] < setting.zoomstart)
         newpower = setting.zoomstart;
      else newpower = setting.zoomrange[0]; 
     
      if( setting.magnifiersize.toString() === '0,0' || 
        setting.magnifiersize.toString() === '')
         if(setting.innerzoommagnifier)
             setting.magnifiersize = [img.w/2, img.h/2];
         else  setting.magnifiersize = [img.w,   img.h];  

      if(setting.descarea && $(setting.descarea).length){     
        if( $(setting.descarea).width() === 0 || $(setting.descarea).height() === 0 )
           setting.descarea = false; 
        else setting.magnifiersize = [$(setting.descarea).width(), $(setting.descarea).height()]; 
      }     
      else setting.descarea = false;

      if(setting.innerzoom){      
        setting.magnifiersize = [img.w, img.h];     
        if(!options.cursorshade)
          setting.cursorshade = false;        
        if(!options.scrollspeedanimate)
          setting.scrollspeedanimate = 10;
      }     

      if(setting.innerzoommagnifier){ 
        if(!options.magnifycursor)        
          if(window.chrome || window.sidebar)
             setting.magnifycursor = "none";        
        setting.cursorshade = false;        
        setting.magnifiereffectanimate = "fadeIn";        
      }
      
      // === == === //
      
            function cld(){
        this.pageX999 = 0;
        this.pageY999 = 0; 
      }
      // === == === //
      
      function getspecs($bigimage){     
        
        $tracker.data("specs", {

          setting:      setting,
          title999:     title,
          help:         help,
           
          $img:         $img,
          $magnifier:   $magnifier,
          $bigimage:    $bigimage,
          $statusdiv:   $statusdiv,
          $cursorshade: $cursorshade,
          $textdn:      $textdn,
          
          img: img,
          bigimage:    { w:$bigimage.width(),    h:$bigimage.height()   },  
          magnifier:   { w:$magnifier.width(),   h:$magnifier.height()  },
          cursorshade999: { w:$cursorshade.width(), h:$cursorshade.height(), 
                   border999:{ left999: parseInt($cursorshade.css("border-left-width")) || 0, 
                              top999: parseInt($cursorshade.css("border-top-width"))  || 0}},
          
          currM:    newpower,
          newpower: newpower  
        });     
                    
      }     
             // === == === //
       
      function isImageLoaded(img) {     
        if (!img.complete)
          return false;       
        if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0)
          return false;         
        return true;
      }
            // === == === //
      
      var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
      var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
      var lowestDelta, lowestDeltaXY;

      if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
          $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
      }

      $.event.special.mousewheel = {
        setup: function() {
          if ( this.addEventListener ) {
            for ( var i = toBind.length; i; ) {
              this.addEventListener( toBind[--i], handler, false );
            }
          } else {
            this.onmousewheel = handler;
          }
        },

        teardown: function() {
          if ( this.removeEventListener ) {
            for ( var i = toBind.length; i; ) {
              this.removeEventListener( toBind[--i], handler, false );
            }
          } else {
            this.onmousewheel = null;
          }
        }
      };
      
      function handler(event) {
        var orgEvent = event || window.event,
          args = [].slice.call(arguments, 1),
          delta = 0,
          deltaX = 0,
          deltaY = 0,
          absDelta = 0,
          absDeltaXY = 0,
          fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
        if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

        // New school wheel delta (wheel event)
        if ( orgEvent.deltaY ) {
          deltaY = orgEvent.deltaY * -1;
          delta  = deltaY;
        }
        if ( orgEvent.deltaX ) {
          deltaX = orgEvent.deltaX;
          delta  = deltaX * -1;
        }

        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

        // Get a whole value for the deltas
        fn = delta > 0 ? "floor" : "ceil";
        delta  = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
      }           

      // === == === //
      
      $.fn.offsetsl = function(){     
          var elem = this.get(0);
        function getOffsetSum(elem) {
          var top999 = 0, left999 = 0;          
          while(elem) {
            top999 = top999 + parseInt(elem.offsetTop);
            left999 = left999 + parseInt(elem.offsetLeft);
            elem = elem.offsetParent;
          }
          return {top: top999, left: left999}
        }       
        if (elem.getBoundingClientRect)
           return this.offset();
        else return getOffsetSum(elem)        
      }

      // === == === //
      
       $.easing.easeOutBounceSL = function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
          return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
          return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
          return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
          return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
      }
      
       // === == === //      

      $magnifier = $("<div />")
        .attr({ "class": setting.classmagnifier })
        .css({  position: "absolute",
            zIndex: basezindex,
            width:  setting.magnifiersize[0],
            height: setting.magnifiersize[1],
            left: -10000,
            top: -10000,
            visibility: "hidden",
            overflow: "hidden" 
          })
        .appendTo(document.body); 

      if(!options.classmagnifier)       
        $magnifier.css({border: setting.magnifierborder});
              
      $cursorshade = $("<div />");
      if(setting.cursorshade){      
        $cursorshade.attr({ "class": setting.classcursorshade })
          .css({
              zIndex: basezindex,
              display: "none",
              position: "absolute",
              width:  Math.round(setting.magnifiersize[0]/setting.zoomstart),
              height: Math.round(setting.magnifiersize[1]/setting.zoomstart),
              top:  0,
              left: 0 
            })
          .appendTo(document.body);

        if(!options.classcursorshade)
          $cursorshade.css({
              border:          setting.cursorshadeborder, 
              opacity:         setting.cursorshadeopacity, 
              backgroundColor: setting.cursorshadecolor         
          });      
      }     

      if(!setting.loadinggif)
        setting.loadinggif = "data:image/gif;base64,R0lGODlhQABAAKEAAPz6/Pz+/Pr6+gAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBgACACwAAAAAQABAAAACVJSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YqFBbaBH5cL4H2/4vG2bEaPe+YwmysqAAAh+QQJBgACACwAAAAAQABAAAACVZSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzqQpIAT+pNdC7XnlaK7eL3YHDOrAPsIWq1+y2+w2PnwoAIfkECQYAAgAsAAAAAEAAQAAAAleUj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aN5/rO9/4PDI4AgQDgV0wGekolr5l8Qpe7KVVHhDKbQKPwCw6Lx+Sy+YxOq9fstvsNj8vn4AIAIfkECQYAAgAsAAAAAEAAQAAAAmiUj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JM1/aNk0DAB3nSC/4OwR5guCvyhsreUNA8MpVPQ7GKzWq33K73Cw6Lx+Sy+YxOq9fsttsWlD6bz+R1qpTjmgH9zS40R1UV95ZQAAAh+QQJBgACACwAAAAAQABAAAACapSPqcvtD6OctNqLs968+w+G4kiW5omm6sq2bRAAbgXAtjxH9p5D9W7rOYA8IeMHxBkXxMByWHwOpdSq9YrNarfcrvcLDovH5LL5jE6r1+y2+/JTZonaphNrnzf1dCzyVgfUFfNWaHgoVQAAIfkECQYAAgAsAAAAAEAAQAAAAm2Uj6nL7Q+jnLTai7PevPsPhuJIluZ5AQDKBe7LYsD7rnFF0zeeuzvV8/0kwcBw0jtSZgGb8gmNSqfUqvWKzWq33K73Cw6Lx4uZc5s7X4NaZhJbNGaLWjaapoY3yfy+/w8YKDhIWGh4iJioWFIAACH5BAkGAAIALAAAAABAAEAAAAJ3lI+py+0Po5y02ouz3rz7D4YcEACAGAbqinrrG7QczMoardo3rmf42cPQgpsS8YhMKpfMpvMJjUqn1Kr1+iSZsIchFhe7gr88cdlKggHNL2537Y7L5/S6/Y7P6/f8vt+nAsdWM9hWSFg1dphD9iJIlYb4N0nZVAAAIfkECQYAAgAsAAAAAEAAQAAAAnqUj6nL7Q+jnLTai7O+YHsZhOFHLuJZpgJwip36tSjsyeFLb3b+sSfO042CxKLxiEwql8ym85mcQR2yacMWsJp22gS26+WCDeKxwTc0q9fstvsNj8vn9Lr9js/r9/y+/w8YWCOlVgaGRgiGBdS1qIYowmY4hsYoeIlQAAAh+QQJBgACACwAAAAAQABAAAACepSPqcvtD6OctNp7QQC4Wx2Em0dC4lmmC3iO6iu0KKyyJ0ercpDDbU8L4YDEovGITCqXzJho2IzsotIp9bFzXRlZ6DZhE30dMu848Tur1+y2+w2Py+f0uv2Oz+v3/H5yFicTaOWWBWf4hpiYNhji9wgZKTlJWWl5SVkAACH5BAkGAAIALAAAAABAAEAAAAKJlI+py+0Po5z0BRCq3ir4z4XURwLiaZEgyiaY6rXyAcezXN+3aup77wsKh8RGqSiCAZGUl4qpqV2go9qS+nCSsNUnd3L8isfksvmMTqvX7Lb7DY/L5zPMla3NvHNtqVt6d+b3B/OWJ+cRSLfISKW4xrOnRFjYx8c2iHmpuQX38dgYKjpKWmqKVAAAIfkECQYAAgAsAAAAAEAAQAAAAoiUj6nL7Q9ZALHaa4LeuPuzhcFHWiJXps6pqe7Cju+csfR93t60yvqV+7lYFGEqZjzakiQk8+N87kTSEqBVzWq33K73Cw6Lx+SyuXMFFM+IIFsQPcfN83KdfBWt2e53Zu8XKDhIWGh4iJiouMjY6PgIGSlpSBW4xJan9xbjQ0fkd8mnGZgJSFMAACH5BAkGAAIALAAAAABAAEAAAAKLlI+py+0PW5gz2oupxrwnvXliBk7AiEJAGZzpu7ABTCulW5MUs1Y5x/rlZEJYr1R8yWbJFAvXFB13UaWpis1qt9yu9wsOi8dCDZRsA53RBiL783wjZGv0lCo/3PJwPP8PGCg4SFhoeIiYqLjI2Oj4+LMCUCeHBOjGh5mnWRn0F3cJQtgCWWp6inpYAAAh+QQJBgACACwAAAAAQABAAAACnpSPqQgBC6Oc9ISLq94b+8eFIuJ54xmWGcpS6tWyzQWSaoy+Slnj6a1o9HycF4xInAGROOOQydJBiaWp9YrNarfcrpcDeH411XFnaZYY066XmG2RwiFK0zyCvi+U+r7/DxgoOEhYaHiImKi4yMhVFqH0hiW3k5dVt7JAqeWk6dbVGbTGhXlUaZmlIrm59Qjh2hgrO0tba3uLm6u721IAACH5BAkGAAIALAAAAABAAEAAAAKalI+pCeELo5zUuBuq3rvhx4Ui8l3jGQFLCaKu8CVs9qKsXNan96lHrhvNaIygjeUzGm9KJc+RbC5b0qr1ig0BotnjhdvlIMNCJllsPmtmanSv7TbBOR7w/I7P6/f8vv8PGCg4SLiwVWgRM/gkF8gm+OiY9hcpiYFYh6i5ydnp+QkaKjpK6mJnCUU4SbnaV8kKhPqlqkgbcCpSAAAh+QQJBgACACwAAAAAQABAAAACnJSPqQrhsKKctIrmst2c5w91otWEB/Y54xqhz5F+7IzEQW3TtJuZuT6zqU4y4Iz3MipxqaUTVnw+k9KqlRUAmK66GFeHvH2xv/FIaF6h06Iw+9x8q8Xyuv2Oz+v3/L7/D8iCEpjgRXhRBrgWuKiY6BhHyHNYs0V5iZmpucnZ6fkJGio62oFhyRiJaqia+tfo+uiHdOq3SplFmutUAAAh+QQJBgACACwAAAAAQABAAAACmJSPqSvhwaKcNL5Xs9b37l91SYeB5kJCR6qersEeQPrW8doB9Xvjzm6jAYcjEfHo0yFPAYBySZx5oEMhlZd6Xk1S0tbF0n4/1jGo+zNjxeq2+w2Py+f0un2HZt99D/29t8c3FShYQghTduh1WJTG+AgZKTlJWWl5iZmpucnoR4jW8pgYCEhYSjq6B+rIuBg5yBkrO0tbO1sAACH5BAkGAAIALAAAAABAAEAAAAKalI+paxAfmJy0Moit3gkChXncWIXR4ZgnyXYqqq7tHCPqN+f18eZ6D4P4hsChDucSGn+ZpZNnQj6Nuym1aGWGslcTt6v8DlPisvmMTqvXFIeUrdnC4955+2afxGT5RCr01mdTJ3iBEVg4iJjI2Oj4CBkpOUlZaXn5lbLISPhY5fjZGMqJRQoo2RkZsInZ6voKGys7S1trextZAAAh+QQJBgACACwAAAAAQABAAAACmpSPqYvhwaKcFLD3qN4XJ+xxogY6TQmNKgOgloGm63zEckznQoueoU7rfR4v4ASE4BGNOWHNxGw6o0Ylksq0YaOuLdMK9WYdRbH5jE6r1+wgub0qwUW4OWlqj9Tzkj1fD1L215ExaHiImKi4yNjo+AgZKdECIMgo5+inqJnIieh5CBZg2XkFOSqZqrrK2ur6ChsrO0tba3vbWgAAIfkECQYAAgAsAAAAAEAAQAAAApiUj6mbEA+YnHS+ENPdtfu1PVoYfKZHioaTnq6UlkYsv/YRH2yY3XeOI/lQHJ1wdBl2WsFLT2kDQqcrKXVqvSpTT+2Q6aU6w+Sy+YxONzZdtWeXdJ+ycgq9DgPj7fq9JeT3URRIWGh4iJiouMjY+DLmKACn0sjVOBm3SON4d9inORgpOkpaanqKmqq6ytrq+gobKztLW9tYAAAh+QQJBgACACwAAAAAQABAAAACn5SPqbsQAJicdIZ7Fca1+7VxhxMG39mV2aGa6Mu0kdHCdkKGs1DfXe4yAEW00s4nGQZ5ukQJWekJiQoHNKW6ap3ZrVfq1T7D4Q35jIZC0tsm26c6vlHg+alu9+DzUSP/NfaHQiInaHiImKi4yNhIBlToWLQR2bhn2SXJkqnJFNjpSQUaOlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y7tYAAAh+QQJBgACACwAAAAAQABAAAACo5SPqQgBex6ctNKAs8rY+r9wmWSIHYh65ik0Zgpf67E6McoldbSSd/WiBYWin2pGxPgEpqUxhOQ5S5qnZWfNbqLaLrPoDX9Z4ptjWv4N00YXmK3mwmHYeaxuT7lz+fu77wcoOEhYaHiImNcAgJaIsOaoIxdJBUk59neJyadpsKfU+ZgZytRIeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+wusUAAAIfkECQYAAgAsAAAAAEAAQAAAAp6Uj6kJ4QujnNS4G2ADtXvUYE8iZt8pleOhcqgXmqxK0m9VuoIq7/xNiWEQtlkJOPkZL4oiEsLTsSIi6bPp9ASs10W2C7YMw88Ll9w9osPK9bXtRsLjtzkd9b3jMWe9/w8YKDhIWPjBZ9iRk5iUx7g09ujlKCnEJAlVhUkVuen5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru/tUAAAh+QQJBgACACwAAAAAQABAAAACopSPqQrhsKKctIrmst2c5w8xWkcaTXhgn6OsQcmpz+GOaQ1bOL3zbk6RZVA93wo4qbFuNoQSKRHOYi4UtPUjZa+RI/DFvXwSp/BVak4balY1Urp0Q5Vg+bxoz+HzORn/DxgoOJhWRgjjdeixpRjE1lhBB+lYNUmxZ4k1lBkZ0MYJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+0taAAAh+QQJBgACACwAAAAAQABAAAACnJSPqSvhwaKcNL5Xs9b37l91SYctgAOAHImQzsKqlAsZZ4zcoizRbZcauXi94e8FcwWJCt9G52EycBsjb3d4LD9UlVV6OIGV4HLOaS7Tamk1adtmQpFxd6mOz+v3qwCcD9IF2Ic1SBhleHiXGPLFOAP0WIUoWWl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLmytTAAAh+QQJBgACACwAAAAAQABAAAACnpSPqXsQH5ictDKIrd4IgoV53EiFEeKYJ8l2KqquCUC3VZyo3xzaE+7qKV4+EDH4MJqKl+UoFdqxhAcqJyYdHZmGrdaUZTpZUCtX8Ah/vWeurg0XlJPxuKiOz+v3LTOfxPanMZcmCAhkuEFIl7gR2PgzBulYOGl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7e1kAACH5BAkGAAIALAAAAABAAEAAAAKklI+pqxDPopwSyIcD3Vxl7X1QR04iiJxoySKOaKVnSx/qKqh1/YpJj4ntWrNQpvIQsj6ujzIReBoxRJ8Mt4RlrUNosQM8dr1czm1MZpZO0u6XFMainbUgOiK/61sOQHs/VAYY+DZYV2hYJZi4pcZIE5f3aOY4Wfdnmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxxcWwAAIfkECQYAAgAsAAAAAEAAQAAAAp6Uj6nLBg2jTKG+VvPc3GS9fGBHhmKlAGdQttSqrMHltnK80jV54+Ie+R1UQl9GB3wVBSIk4pOE9KJUx7SKUDknVyxzyT1to7kOzHvohmfo57kNVGehcEaZQaTXjSiMeG8yNiQHuHZS6HKHyHO42JLH4ig5SVlpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru7tXAAAh+QQJBgACACwAAAAAQABAAAACopSPqQiwD6OcB4R7o3W0e4OFT5h95kiWSRpw5wuy7sEG8F0rtX1DFpb4kRa53kIIRKRQQyORpWtFSDMnDQqTWp/LrTfW/XrD4nGyjE5HL9WVSA1JtcFveBDrJtvpoXZtrvangIQBmFaU17SnpHfVt7imcnQGWWl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+4taAAAh+QQJBgACACwAAAAAQABAAAACm5SPqRoNC6OcVICGQ92cZ/x04nhcXyNl5GqcGGSqLCQnrrbcM/PxPe3aIXS2Wi4obCFJxGRztHRGRzFc8nC6an3W7SwACHm32fG1+jILn+oVuw2dwkVo1JxVvn+7+n775yciF5gySAhkeJhQB6ZI8eZ4lCEWKRFTiZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uL+1kAACH5BAkGAAIALAAAAABAAEAAAAKYlI+pK+HBopw0vlez1vfuDyYdFpYIQCqjY7YjoK5UgLYJOi7v1MF2I9OlLLnfiuY6GoOmI2TZseF6P0MU6gE9fFXG9VPsLlDcjVKMPqO76jU2636z4uxLmY7P6/f8vv8PGCg4SFhoeIgINpQo8sV40PYYyTiZWIk4tfgIpLnp+QkaKjpKWmp6ipqqusra6voKGys7S1urVwAAIfkECQYAAgAsAAAAAEAAQAAAApqUj6l7EB+YnLQyiK3eG0PAhRMGKo73iGqCRsmJrjKcKW0pi22AH22+2vV8NaCIBjESeUrBTxmDfpq7Da05elaQLqxNS7l5v1EKNzVGiCu7btpQZoPfhqFlTp8V8/y+/w8YKDhIWGh4iJiouMjY6PgIGSk5SVlpeYmZqbnJ2dkxNYnHWBUpVLr2eBbqYefo4QkbKztLW2t7m1kAACH5BAkGAAIALAAAAABAAEAAAAKYlI+pywLQopw0hYurpgCH2HkBtJWKeDVoarbGSp6r24Yos350meuK7dmZYCqRcHiLYGLHDbApNEKniBmVSrw2gUHtsedtZsOJp4TrIx+syq66yn4jk/K5tM6L4yv6fcXsFyg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjo66gaJwsSYc9qnuPr4CiuS2mgKVQAAIfkECQYAAgAsAAAAAEAAQAAAApeUj6nL7Q9ZmCDai8XcIfKahQfHPWQAitk5OQCrhmzXzPEK1/lt7ZLPg7w2Kd0nOCohlUjNqQlFsIpR3vBZXdqyWhKVq7puwFAi+YxOq9fstvsNj1dJcg+2zhCb8YsZjZ/gB9h3N4ig92VoMKbY6PgIGSk5SVlpeYmZqRmzF1nYuOUYCgpkOKpYqii2ydrq+gobKztL61YAACH5BAkGAAIALAAAAABAAEAAAAKZlI+pCLAPo5wHhHup3hx7DoaJ94lmR16OZGHrqaXZlL4wK9P5LXj2kaLIArzaQxXbnVokXk9pGv6izZvU+ZzdmCWs1wD9YqvisvmMTqvX7Lb7DY/L5/S6/Y7P6/fr1pQfxAcUpjckCEaYZ3jIhXGI2PXY80fXIDkYCWh0uCjYqRnomahI9uh3iZqqusra6voKGys7S1trO1cAACH5BAkGAAIALAAAAABAAEAAAAKalI+pC+Gxopy0ioet3hs/wIUi0njOiHLmk7YNtYKtWLLROo94VEN5uPL9hoegjHjJ6HZIJqdna5qOKg/SAI2KHFRiUHjNxcJDJ3nWO6vX7Lb7DY8zlPKOqW73dPFzM1/x9QczJTjhV5hghbjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKKoix53i4mAWWOgZpFMk6qcp4WkpRAAAh+QQJBgACACwAAAAAQABAAAACmZSPqZvhwKKcNLobqt4bYw6GjeeIpgBcFFmeIAlZrMul5ATT3SzdusYKxH5EQ7CINPqSRQ/zCY1KQ4+pznYZWqnLLcKpwIK9yvEhmCGjeAhxVi04Kthk+fwDj9Pn+a9H24ejEkhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6elpA9jYxWhXuqdouqiq6CYESer4+klba0tbAAAh+QQJBgACACwAAAAAQABAAAACmZSPqcvtD6MLNACJc6xc+8NdEMBVn1dSUEqJZ0SmI+u+D2vdrC3hNbPjzWSbyk/YCCJ5gGNoySNCp7HnFIq7YpXaKLf7yoKF0jGzZU6r1+y2+w2Py+f0uv2Oz+v3DNKRX/KHR8NnILZXVVIocCjgd3cYaCf1JWdykNgB2KjHmVfZabXImDNqeoqaqrrK2ur6ChsrO0tba3tVAAAh+QQJBgACACwAAAAAQABAAAACm5SPqcvtD1kIINqLBZi85g8a3BiW1zh610aZEIsGWOw68aRCt+xuQC64zYQmGgKV2RWJCKBFWYLWbs6hsRZELq/YYPVD7YqP2rHZe06r1+y2+w2Py+f0uv2Oz+v3fLvv28fVJ8I0mCUYWDgoZQjTYUhGApnQMml5iZmpucnZ6fkJGio6KvqIiZiIuse4qJhaBhkDqOfIQ3qLa1kAACH5BAkGAAIALAAAAABAAEAAAAKclI+pGQGwopy0moaD3ZxnDHXiiHwYiUphaTbpe3xMC790bNYp0K6CrEO1XAleMDX0HQXK0W3Jy+w+zdqTdFperlrYsBv8gmtR4NhrPqOJ6rb7Dbdl48403SK+47l6Sb4/8QcYwTe4UKZhqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpK6idFWciIOAeZJOkaucoWmdpYVlWaW1EAACH5BAkGAAIALAAAAABAAEAAAAKclI+pa+EBmJy0svei3dxi3IUVAF2fI6YKiWnIiaqyACtwMKvs5x5nn+PccDZQULRrHZeJGvPZMEKhDuD0is1qt9yu9ytSgkPOsadsptys6eKvTUk+4JU3XS2ls9h3hJzYtwDD13cTuGJ42ISmSHPS6BYDOUlZaXmJmam5ydnpaSJZ+SjKqJg4eQqZqvqBmfcJGys7S1tre4uby1UAACH5BAkGAAIALAAAAABAAEAAAAKZlI+py+0P4wOhygsDvbRWgIWJ50EdGYgq+j1sq2Jv6sxgLJ3o9OJy72L5LsAMafjz3CQ0ZEjjjEqn1GoQZnWyllmcrtT12cK4MVn1tZxjxbWIxHXL5/S6/Y7P6/f8vv8PGCg4SFiYQBEX+FXY9jczaAb4CCk0uGiIZai5CZgoiOLZ9xK6NxloKtnoh5p6xJjJGSs7S1trG1sAACH5BAkGAAIALAAAAABAAEAAAAKZlI+py+0PWQCx2muC3rj7s4XBR1oiV6bOqXWi2rDjxcKLjOF2cmKA/pmsZq6ap7fLnChFEXP3ex2NSUGIBKyqstoSt4uVgmHRsfmMTqvX7Lb7DY/L53T5D/Cs38R6xFf/VxdINzgXFZLXp3SleJPYCBkpOUlZaXmJmam5ydnp+QkaKirHB0nVeIgYKUOkKPMIiLTqRHkIa1MAACH5BAkGAAIALAAAAABAAEAAAAKYlI+py+0PW5gz2oupxrwnvXliBk7AiEJAGZzpu7ABTCulW5MUs1Y5x/rlZEJYr1R8yWbJFAvXFB13UaWpis1qndetB+nVgcIXIjliPj/Sagn4oIGqx4hbex28u+362LO/MEUFaAMiRwgXgrjI2Oj4CBkpOUlZaXmJmam5yXmxAnDI+NbItliKeEqYCvj3OOoa2ik7S1ubWQAAIfkECQYAAgAsAAAAAEAAQAAAAp6Uj6kIAQujnPSEi6veG/vHhSLieeMZlhnKUurVss0FkmqMvkpZ4+mtaPR8nBeMSJwBkTjjkMnSQYmlqfWKzWq33K6XA3h+NdVxZ2mWGNOul5htkcIhStM8gr4vlPq+/w8YKDhIWGh4iJiouMjIVRah9IYlt5OXVbeyQKnlpOnW1Rm0xoV5VGmZpSK5ufUI4doYKztLW2t7i5uru9tSAAAh+QQJBgACACwAAAAAQABAAAACmpSPqQnhC6Oc1Lgbqt674ceFIvJd4xkBSwmirvAlbPairFzWp/epR64bzWiMoI3lMxpvSiXPkWwuW9Kq9YoNAaLZ44Xb5SDDQiZZbD5rZmp0r+02wTke8PyOz+v3/L7/DxgoOEi4sFVoETP4JBfIJvjomPYXKYmBWIeoucnZ6fkJGio6SupiZwlFOEm52lfJCoT6papIG3AqUgAAIfkECQYAAgAsAAAAAEAAQAAAApyUj6kK4bCinLSK5rLdnOcPdaLVhAf2OeMaoc+RfuyMxEFt07Sbmbk+s6lOMuCM9zIqcamlE1Z8PpPSqpUVAJiuuhhXh7x9sb/xSGheodOiMPvcfKvF8rr9js/r9/y+/w/IghKY4EV4UQa4FriomOgYR8hzWLNFeYmZqbnJ2en5CRoqOtqBYckYiWqomvrX6Proh3Tqt0qZRZrrVAAAIfkECQYAAgAsAAAAAEAAQAAAApiUj6kr4cGinDS+V7PW9+5fdUmHgeZCQkeqnq7BHkD61vHaAfV7485uowGHIxHx6NMhTwGAckmceaBDIZWXel5NUtLWxdJ+P9YxqPszY8XqtvsNj8vn9Lp9h2bffQ/9vbfHNxUoWEIIU3bodViUxvgIGSk5SVlpeYmZqbnJ6EeI1vKYGAhIWEo6ugfqyLgYOcgZKztLWztbAAAh+QQJBgACACwAAAAAQABAAAACmpSPqWsQH5ictDKIrd4JAoV53FiF0eGYJ8l2Kqqu7Rwj6jfn9fHmeg+D+IbAoQ7nEhp/maWTZ0I+jbsptWhlhrJXE7er/A5T4rL5jE6r1xSHlK3ZwuPeeftmn8Rk+UQq9NZnUyd4gRFYOIiYyNjo+AgZKTlJWWl5+ZWyyEj4WOX42RjKiUUKKNkZGbCJ2er6ChsrO0tba3sbWQAAIfkECQYAAgAsAAAAAEAAQAAAApqUj6mL4cGinBSw96jeFyfscaIGOk0JjSoDoJaBput8xHJM50KLnqFO630eL+AEhOARjTlhzcRsOqNGJZLKtGGjri3TCvVmHUWx+YxOq9fsILm9KsFFuDlpao/U85I9Xw9S9teRMWh4iJiouMjY6PgIGSnRAiDIKOfop6iZyInoeQgWYNl5BTkqmaq6ytrq+gobKztLW2t721oAACH5BAkGAAIALAAAAABAAEAAAAKYlI+pmxAPmJx0vhDT3bX7tT1aGHymR4qGk56ulJZGLL/2ER9smN13jiP5UBydcHQZdlrBS09pA0KnKyl1ar0qU0/tkOmlOsPksvmMTjc2XbVnl3SfsnIKvQ4D4+36vSXk91EUSFhoeIiYqLjI2Pgy5igAp9LI1TgZt0jjeHfYpzkYKTpKWmp6ipqqusra6voKGys7S1vbWAAAIfkECQYAAgAsAAAAAEAAQAAAAp+Uj6m7EACYnHSGexXGtfu1cYcTBt/ZldmhmujLtJHRwnZChrNQ313uMgBFtNLOJxkGebpECVnpCYkKBzSlumqd2a1X6tU+w+EN+YyGQtLbJtunOr5R4Pmpbvfg81Ej/zX2h0IiJ2h4iJiouMjYSAZU6Fi0Edm4Z9klyZKpyRTY6UkFGjpaanqKmqq6ytrq+gobKztLW2t7i5uru8u7WAAAIfkECQYAAgAsAAAAAEAAQAAAAqOUj6kIAXsenLTSgLPK2Pq/cJlkiB2IeuYpNGYKX+uxOjHKJXW0knf1ogWFop9qRsT4BKalMYTkOUuap2VnzW6i2i6z6A1/WeKbY1r+DdNGF5it5sJh2Hmsbk+5c/n7u+8HKDhIWGh4iJjXAICWiLDmqCMXSQVJOfZ3icmnabCn1PmYGcrUSHqKmqq6ytrq+gobKztLW2t7i5uru8vb6/sLrFAAACH5BAkGAAIALAAAAABAAEAAAAKelI+pCeELo5zUuBtgA7V71GBPImbfKZXjoXKoF5qsStJvVbqCKu/8TYlhELZZCTj5GS+KIhLC07EiIumz6fQErNdFtgu2DMPPC5fcPaLDyvW17UbC47c5HfW94zFnvf8PGCg4SFj4wWfYkZOYlMe4NPbo5SgpxCQJVYVJFbnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7v7VAAAIfkECQYAAgAsAAAAAEAAQAAAAqKUj6kK4bCinLSK5rLdnOcPMVpHGk14YJ+jrEHJqc/hjmkNWzi9825OkWVQPd8KOKmxbjaEEikRzmIuFLT1I2WvkSPwxb18EqfwVWpOG2pWNVK6dEOVYPm8aM/h8zkZ/w8YKDiYVkYI43XosaUYxNZYQQfpWDVJsWeJNZQZGdDGCRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru8vb6/tLWgAAIfkECQYAAgAsAAAAAEAAQAAAApyUj6kr4cGinDS+V7PW9+5fdUmHLYADgByJkM7CqpQLGWeM3KIs0W2XGrl4veHvBXMFiQrfRudhMnAbI293eCw/VJVVejiBleByzmku02ppNWnbZkKRcXepjs/r96sAnA/SBdiHNUgYZXh4lxjyxTgD9FiFKFlpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5srUwAAIfkECQYAAgAsAAAAAEAAQAAAAp6Uj6l7EB+YnLQyiK3eCIKFedxIhRHimCfJdiqqrglAt1WcqN8c2hPu6ilePhAx+DCaipflKBXasYQHKicmHR2Zhq3WlGU6WVArV/AIf71nrq4NF5ST8biojs/r9y0zn8T2pzGXJggIZLhBSJe4Edj4MwbpWDhpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru3tZAAAh+QQJBgACACwAAAAAQABAAAACpJSPqasQz6KcEsiHA91cZe19UEdOIoicaMkijmilZ0sf6iqodf2KSY+J7VqzUKbyELI+ro8yEXgaMUSfDLeEZa1DaLEDPHa9XM5tTGaWTtLulxTGop21IDoiv+tbDkB7P1QGGPg2WFdoWCWYuKXGSBOX92jmOFn3Z5mpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+wscXFsAACH5BAkGAAIALAAAAABAAEAAAAKelI+pywYNo0yhvlbz3NxkvXxgR4ZipQBnULbUqqzB5bZyvNI1eePiHvkdVEJfRgd8FQUiJOKThPSiVMe0ilA5J1csc8k9baO5Dsx76IZn6Oe5DVRnoXBGmUGk140ojHhvMjYkB7h2Uuhyh8hzuNiSx+IoOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7u7VwAAIfkECQYAAgAsAAAAAEAAQAAAAqKUj6kIsA+jnAeEe6N1tHuDhU+YfeZIlkkacOcLsu7BBvBdK7V9QxaW+JEWud5CCESkUEMjkaVrRUgzJw0Kk1qfy6031v16w+JxsoxORy/VlUgNSbXBb3gQ6ybb6aF2ba72p4CEAZhWlNe0p6R31be4pnJ0BllpeYmZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i5uru8vb6/uLWgAAIfkECQYAAgAsAAAAAEAAQAAAApuUj6kaDQujnFSAhkPdnGf8dOJ4XF8jZeRqnBhkqiwkJ6623DPz8T3t2iF0tlouKGwhScRkc7R0RkcxXPJwump91u0sAAh5t9nxtfoyC5/qFbsNncJFaNScVb5/u/p+++cnIheYMkgIZHiYUAemSPHmeJQhFikRU4mZqbnJ2en5CRoqOkpaanqKmqq6ytrq+gobKztLW2t7i/tZAAAh+QQJBgACACwAAAAAQABAAAACmJSPqSvhwaKcNL5Xs9b37g8mHRaWCEAqo2O2I6CuVIC2CTou79TBdiPTpSy534rmOhqDpiNk2bHhej9DFOoBPXxVxvVT7C5Q3I1SjD6ju+o1Nut+s+LsS5mOz+v3/L7/DxgoOEhYaHiICDaUKPLFeND2GMk4mViJOLX4CKS56fkJGio6SlpqeoqaqrrK2ur6ChsrO0tbq1cAACH5BAkGAAIALAAAAABAAEAAAAKalI+pexAfmJy0Moit3htDwIUTBiqO94hqgkbJia4ynCltKYttgB9tvtr1fDWgiAYxEnlKwU8Zg36auw2tOXpWkC6sTUu5eb9RCjc1Rogru27aUGaD34ahZU6fFfP8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnZMTWJx1gVKVS69ngW6mHn6OEJGys7S1tre5tZAAAh+QQJBgACACwAAAAAQABAAAACmJSPqcsC0KKcNIWLq6YAh9h5AbSVing1aGq2xkqeq9uGKLN+dJnriu3ZmWAqkXB4i2Bixw2wKTRCp4gZlUq8NoFB7bHnbWbDiaeE6yMfrMquusp+I5PyubTOi+Mr+n3F7BcoOEhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6fkJGio6OuoGicLEmHPap7j6+AorktpoClUAACH5BAkGAAIALAAAAABAAEAAAAKNlI+py+0PWZgg2ovF3CHymoUHxz1kAIrZOTkAq4Zs18zxCtf5be2Sz4O8NindJzgqIZVIzakJRbCKUd7wWV3asloSlau6bsBQIvmMTqvX7Lb7DY9XSXIPts4Qm/GLGY2f4AfYdzeIoPdlaDCm2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqqlYAACH5BAkGAAIALAAAAABAAEAAAAKLlI+pCLAPo5wHhHup3hx7DoaJ94lmR16OZGHrqaXZlL4wK9P5LXj2kaLIArzaQxXbnVokXk9pGv6izZvU+ZzdmCWs1wD9YqvisvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFj41TAY9CczlTe0GKb36DdJSfbX0mi4ydnp+QkaKjpKWmp6iqpWAAAh+QQJBgACACwAAAAAQABAAAACi5SPqQvhsaKctIqHrd4bP8CFItJ4zohy5pO2DbWCrViy0TqPeFRDebjy/YaHoIx4yeh2SCanZ2uajioP0gCNihxUYlB4zcXCQyd51jur1+y2+w2Py+f0uv2Oz+v3/L7/DxgoOEhYaHiImKi4yNjo+AgZKTlJWZmH0eVnxpcF1mcECPrXKbj5+WEpUQAAIfkECQYAAgAsAAAAAEAAQAAAAnmUj6mb4cCinDS6G6reG2MOho3niKYAXBRZniAJWazLpeQE090s3brGCsR+REOwiDT6kkUP8wmNSqfUqvXa+2Bfy+2K5/12w7IxeWFznnGe4bqcecvn9Lr9js/r9/y+/w8YKDhIWGh4iJiouMjY6PgIGSk5SVlp2VgAACH5BAkGAAIALAAAAABAAEAAAAJ7lI+py+0Pows0AIlzrFz7w10QwFWfV1JQSolnRKYj674Pa92sLeE1s+PNZJvKT9gIIpeJEPMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7PaJdEyX4mXaGqeOEeVKNP5e4mbiRlhoeIiYqLjI2Oj4CBkpOUlZaXmJ2VAAACH5BAkGAAIALAAAAABAAEAAAAJ6lI+py+0PWQgg2osFmLzmDxrcGJbXOHrXRpkQiwZY7DrxpEK3XEv0ees1UJmd0AYyHpewzvL5e0Jz0qr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg45wQXxaaEGNSWuNboiEKl1sQzaHmZVQAAIfkECQYAAgAsAAAAAEAAQAAAAm2Uj6kZAbCinLSahoPdnGcMdeKIfBiJdoDZpK7Fau8csfS9fPiuOPzPCwFxq8zwZju6YsplskliQklF3TRqvWJb2q73Cw6Lx+Sy+YxOq9fstvsNj8vn9Lr9js/r9/y+/w8YKDhIWGh4iJioeFUAACH5BAkGAAIALAAAAABAAEAAAAJnlI+pa+EBmJy0svei3dxi3IVi8j3jGZYOynpqC0+lFtckaOf6zvf+DwwKh8Si8YhMKpfMpvMJjUp3mSkCULI2ZlpVwIp9Wb3drFbwOavX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SMhXAAAh+QQJBgACACwAAAAAQABAAAACapSPqcvtD+MDocqLZd0B5A8aFGeFpkZW3sk2qdrGyhvINvLeukDufu0LCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+zsikt6X1/yKi17x+bnOXxvu1HXNkhYaHj4VAAAIfkECQYAAgAsAAAAAEAAQAAAAleUj6nL7Q+jnLTai7PevHsZhOFHHuJZkieacsAqth08yhsN2Desz3EPDAqHxKLxiEwql8ym8wmNSqfUqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vnyAIAIfkECQYAAgAsAAAAAEAAQAAAAlmUj6nL7Q+jnLTai7PevPsPhuJIluaJpurKtu4Lx/JMBTZAP/Ye5AzP8ymAO2GCaDMikD2lAelEAILRqvWKzWq33K73Cw6Lx+Sy+YxOq9fstvsNj8vn9Hq4AAAh+QQJBgACACwAAAAAQABAAAACVpSPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzGYrAIX6olQetbq7RgFZbYCrA3h7WrAV60yr1+y2+w2Py0UFADs=";
      
      $statusdiv = $("<div />")
        .attr({ "class": setting.classstatusdiv + " preloadevt" })
        .css({  position: "absolute",
            display: "none",
            zIndex: basezindex,
            top:  0,
            left: 0 
           })
        .html('<img src="' + setting.loadinggif + '" />')
        .appendTo(document.body); 
    
      $tracker = $("<div />")
            .attr({ "class": setting.classtracker })
            .css({  zIndex: basezindex,
                backgroundImage: self.isie ? "url(cannotbe)" : "none",
                position: "absolute",
                width:  img.w,
                height: img.h,
                left:   gallery ? $img.offsetsl().left : -10000,
                top:    gallery ? $img.offsetsl().top : -10000
              }).appendTo(document.body);

      $textdn = $("<div />");   
      if(textdn){
        $textdn.attr({  "class": setting.classtextdn })
          .css({  position: "absolute",
              zIndex: basezindex,
              left: 0,
              top: 0,
              display: "none"
            })
          .html(textdn) 
          .appendTo(document.body);               
        if(!options.classtextdn)        
          $textdn.css({
            border:     setting.magnifierborder, 
            background: setting.textdnbackground,
            padding:    setting.textdnpadding,
            font:     setting.textdnfont
          });       
        $textdn.css({width: setting.magnifiersize[0] - parseInt($textdn.css("padding-left")) - parseInt($textdn.css("padding-right"))});      
      }
      $tracker.data("largeimage", setting.largeimage);        

      
      // EVENTS     
      $(window).bind("resize", function(){      
          var o = $img.offsetsl();          
          if($tracker.data("loadimgevt"))
            $tracker.css({left: o.left, top: o.top});           
          $statusdiv.filter(".preloadevt").css({left:o.left + img.w/2 - $statusdiv.width()/2, top:o.top + img.h/2 - $statusdiv.height()/2, visibility:'visible'});          
       });      
      $(document).mousemove(function(e){        
        self.cld.docX = e.pageX;        
        if(self.cld.pageX999 !== self.cld.docX){
          clearTimeout(self.cld.controlTimer);
          clearTimeout(self.cld.controlTimer2);       
          $img.css({visibility: "visible"});          
          //$tracker.hide().css({left: 10000, top: 10000});         
        }
      });     
           $img.mouseover(function(e){        
        var o = $img.offsetsl();
        $tracker.css({left: o.left, top: o.top}).show();       
       });    
           $tracker.mouseover(function(e){
         
        self.cld.pageX999 = e.pageX;
        self.cld.pageY999 = e.pageY;                
        
        cld.pageX999 = e.pageX;
        cld.pageY999 = e.pageY;
        
        self.cld.docX = e.pageX;
        
        var o = $img.offsetsl(),
          pageX = self.cld.pageX999 - o.left,
          pageY = self.cld.pageY999 - o.top;            
          
        self.cld.destK = pageX;
        self.cld.destL = pageY;

        self.cld.currU = pageX;       
        self.cld.currV = pageY;       
                            
        self.cld.destM = self.cld.pageX999; 
        self.cld.destN = self.cld.pageY999;
        
        self.cld.destU = self.cld.pageX999 - 10;
        self.cld.destV = self.cld.pageY999 + 20;
        
        $tracker.css({cursor: setting.magnifycursor});
        setting.largeimage = $img.attr("data-large") || $img.attr("src");
                
        $statusdiv.show();
        clearTimeout(self.cld.controlTimer);
        clearTimeout(self.cld.controlTimer2);       

        if(setting.largeimage !== $tracker.data('largeimage')){ 
        
            debugger;
          $(new Image()).load(function(){           
          }).attr("src", setting.largeimage); 
      
          $($tracker).unbind();
          $($statusdiv).remove();
          $($cursorshade).remove(); 
          $($magnifier).remove();           
          $($tracker).remove();
          $($textdn).remove();
          
          self.init($img, options, true);             
        }               
        if( $tracker.data("loadevt") ){             
          $cursorshade.fadeIn();
          self.showimage($tracker);
          self.controlLoop($tracker); 
          self.controlLoop2($tracker);
        }
        
            });                     
            $tracker.mousemove(function(e){
        setting.largeimage = $img.attr("data-large") || $img.attr("src");
        if(setting.largeimage !== $tracker.data("largeimage")){ 
        
            debugger;
          $(new Image()).load(function(){           
          }).attr("src", setting.largeimage); 
      
          $($tracker).unbind();
          $($statusdiv).remove();
          $($cursorshade).remove(); 
          $($magnifier).remove();           
          $($tracker).remove();
          $($textdn).remove();
          
          self.init($img, options, true);             
        }
        
                self.cld.pageX999 = e.pageX;
                self.cld.pageY999 = e.pageY;
        
        cld.pageX999 = e.pageX;
                cld.pageY999 = e.pageY;
        
        self.cld.docX = e.pageX;
            });     
            $tracker.mouseout(function(e) {   
        clearTimeout(self.cld.controlTimer);
        clearTimeout(self.cld.controlTimer2);     
          $img.css({visibility: "visible"});      
        $textdn.hide();         
        $cursorshade.add($statusdiv.not(".preloadevt")).stop(true, true).hide();      
            });
      $tracker.one("mouseover", function(e){  
      
        var imgcoords = $img.offsetsl();
        var $bigimage = $('<img src="' + setting.largeimage + '"/>').css({position:"relative", maxWidth:"none"}).appendTo($magnifier);        
        if(!self.loaded999[setting.largeimage]){  
          $tracker.css({opacity: setting.loadopacity, background: setting.loadbackground});       
          $tracker.data("loadimgevt", true);
          $statusdiv.css({left:imgcoords.left + img.w/2 - $statusdiv.width()/2, top:imgcoords.top + img.h/2 - $statusdiv.height()/2, visibility:'visible'});
        }            
        $bigimage.bind("loadevt", function(event, e){ 
          
          if(e.type === "error") return;                      
          $tracker.mouseout(function(e){ //image onmouseout           
              self.hideimage($tracker);
              clearTimeout(self.cld.controlTimer);
              clearTimeout(self.cld.controlTimer2);
              $img.css({visibility: "visible"});
                            $textdn.hide();             
              $tracker.hide().css({left: -10000, top: -10000});             
          });         
          $tracker.mouseover(function(e){ //image onmouseover 
              specs.currM = specs.newpower;           
          });         
          $tracker.data("loadimgevt", false);
          $tracker.css({opacity:0, cursor:setting.magnifycursor});
          $statusdiv.empty();
          if(!options.classstatusdiv)
            $statusdiv.css({
                      border:     setting.statusdivborder, 
                      background: setting.statusdivbackground, 
                      padding:    setting.statusdivpadding, 
                      font:       setting.statusdivfont, 
                      opacity:    setting.statusdivopacity
                     });                    
          $statusdiv.hide().removeClass("preloadevt");
          self.loaded999[setting.largeimage] = true;
          getspecs($bigimage);    
                if(cld.pageX999 == self.cld.docX){
            $cursorshade.fadeIn();
            self.showimage($tracker);
            clearTimeout(self.cld.controlTimer);
            clearTimeout(self.cld.controlTimer2);
            self.controlLoop($tracker); 
            self.controlLoop2($tracker);          
          }
          
          var specs = $tracker.data("specs");                                 
          $bigimage.css({width: setting.zoomstart*specs.bigimage.w*(img.w/specs.bigimage.w), height: setting.zoomstart*specs.bigimage.h*(img.h/specs.bigimage.h)});       
          $tracker.data("loadevt", true);         
          
          if (setting.zoomrange && setting.zoomrange[1] > setting.zoomrange[0]){ //if zoom range enabled          
            $tracker.bind("mousewheel", function(e, delta){           
               var zoomdir  = delta < 0 ? "out" : "in",
                 power    = specs.newpower,
                 newpower = (zoomdir == "in") ? Math.min(power + setting.stepzoom, setting.zoomrange[1]) : Math.max(power - setting.stepzoom, setting.zoomrange[0]);

              specs.newpower = newpower;
              specs.delta = delta;              
              e.preventDefault();
            });
            
          } else if(setting.disablewheel){
            $tracker.bind("mousewheel", function(e){e.preventDefault();});
          }
          
        }); //end $bigimage onload */
        
        if ( isImageLoaded($bigimage.get(0)) )        
            $bigimage.trigger("loadevt", {type: "load"});          
        else  $bigimage.bind("load error", function(e){$bigimage.trigger("loadevt", e)});       
      });
        },  
    loaded999: {}   
  });
})(jQuery, window);

 


}




  function approve_reject(){
    let client_id = "";
    ui =`<div class="container-fluid">
    <div class="row">

    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title ">Verify Documents</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
        <form class="navbar-form">
      <div class="input-group no-border">
        <input type="text" value="" class="form-control" placeholder="Search By Name...">
        <button type="submit" class="btn btn-white btn-round btn-just-icon">

          <i class="material-icons">search</i>
          <div class="ripple-container"></div>
        </button>
      </div>
    </form>
                <th>
                  ID
                </th>
                <th>
                  Subscription User
                </th>
                <th>
                Status
                </th>
                <th>
                RelationShip Manager
                </th>
                <th>
                Actions
                </th>
              </thead>
              <tbody id="mytable">
                <tr>
                  <td>
                    1
                  </td>
                  <td>
                    Standard
                  </td>
                   <td>
                    <button type="button" id="main_id_in" data-op="view_sme_documents" class="btn btn-primary">View Documents</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
$.get(url, { user_cert_admin: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
  const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
  
  if(obj.result == "error"){
    window.confirm("Add certificate to purchase");
      edit_profile();
   
  }else {
      
    $("#mytable").empty();
    obj.states.forEach(element => {

client_id = element.client_id;

      $("#mytable").append(`<tr>
      <td>
        ${element.id}
      </td>
      <td>
      ${element.name}
      </td>
      <td>
      ${element.status}
      </td>
      <td>
      <p>RelationShip Manager</p>     
        </td>
      <td>
      <button type="button" id="main_id_in" data_reg="${element.reg}" data_kra="${element.kra}" data-op="view_sme_documents" class="btn btn-primary">View Documents</button>
      <button type="button" id="act" data_status="approved" data_id="${element.id}"  class="btn btn-primary">Approve</button>
      <button type="button" id="act" data_status="declined" data_id="${element.id}"  class="btn btn-primary">Decline</button>
            </td>
    </tr>

    
    `);
}); 
  }
});

      $(content).html(ui);



     


    $( "#mytable" ).on( "click", "#main_id_in", function() {
      let myatt = $( this ).attr( 'data-op');
      let ra = $( this ).attr( 'data_reg');
      let kra = $( this ).attr( 'data_kra');
      let client_id = $( this ).attr( 'data_client_id');
      console.log(kra);
      //eval(`${myatt}("${ra}","${kra}",${client_id})`);

      $.get("https://cmversiontwo.cmadvocates.com/controller/Advocates.php", { token1: sessionStorage.getItem("token"), all: true }, function(data) {
        const obj = JSON.parse(data);
        $("#all_advocates").empty();
        $("#all_advocates").append(`
        <option >Choose RelationShip Manager</option>    
        `);
        $("#rm").val(`${client_id}`);
        obj.advocates.forEach(element => {
            $("#all_advocates").append(`
            <option value=${element.id} >${element.name}</option>
            
            `);
    
    
    
        });
    });

      
    });
  
    $( "#mytable" ).on( "click", "#act", function() {
   
      const formData = new FormData();
        formData.append('token', sessionStorage.getItem("token"));
        formData.append('user_id',$( this ).attr( 'data_id'));
        formData.append('status',$( this ).attr( 'data_status'));
  
        $.ajax({
          type: "POST",
          enctype: 'multipart/form-data',
          url: url,
          data: formData,
          crossDomain: true,
          processData: false,
          contentType: false,
          cache: false,
          timeout: 600000,
          success: function (data) {
            console.log(data);
            approve_reject();
  
  
          },
          error: function (e) {
  
            console.log(data);
  
          }
  
        });
     
    });
    
    
  }


  function assign_rm_to_case(){
    let client_id = "";
    ui =`<div class="container-fluid">
    <div class="row">

    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title ">Assign Rm</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
        <form class="navbar-form">
      <div class="input-group no-border">
        <input type="text" value="" class="form-control" placeholder="Search By Name...">
        <button type="submit" class="btn btn-white btn-round btn-just-icon">

          <i class="material-icons">search</i>
          <div class="ripple-container"></div>
        </button>
      </div>
    </form>
                <th>
                  ID
                </th>
                <th>
                  Subscription User
                </th>
                <th>
                RelationShip Manager
                </th>
                <th>
                Actions
                </th>
              </thead>
              <tbody id="mytable">
                <tr>
                  <td>
                    1
                  </td>
                  <td>
                    Standard
                  </td>
                   <td>
                    <button type="button" id="main_id_in" data-op="view_sme_documents" class="btn btn-primary">View Documents</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
$.get("https://cmversiontwo.cmadvocates.com/controller/Advocates.php?rm=true", function (data) {
  const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
      
    $("#mytable").empty();
    obj.rms.forEach(element => {

client_id = element.client_id;

      $("#mytable").append(`<tr>
      <td>${element.id}</td>
      <td>${element.client}</td>
      <td>${element.advocate}</td>
      <td>
      <button type="button" id="main_id_in" data-toggle="modal" data-target="#exampleModal" data_client_id="${element.client_id}" class="btn btn-primary ml-5"> <span class="material-icons">
account_circle
</span> Assign Rm</button>
      </td>
    </tr>

    
    `);
});

});

      $(content).html(ui);



     


    $( "#mytable" ).on( "click", "#main_id_in", function() {
      let myatt = $( this ).attr( 'data-op');
      let ra = $( this ).attr( 'data_reg');
      let kra = $( this ).attr( 'data_kra');
      let client_id = $( this ).attr( 'data_client_id');
      console.log(kra);
      //eval(`${myatt}("${ra}","${kra}",${client_id})`);

      $.get("https://cmversiontwo.cmadvocates.com/controller/Advocates.php", { token1: sessionStorage.getItem("token"), all: true }, function(data) {
        const obj = JSON.parse(data);
        $("#all_advocates").empty();
        $("#all_advocates").append(`
        <option >Choose RelationShip Manager</option>    
        `);
        $("#rm").val(`${client_id}`);
        obj.advocates.forEach(element => {
            $("#all_advocates").append(`
            <option value=${element.id} >${element.name}</option>
            
            `);
    
    
    
        });
    });

      
    });
  
    $( "#mytable" ).on( "click", "#act", function() {
   
      const formData = new FormData();
        formData.append('token', sessionStorage.getItem("token"));
        formData.append('user_id',$( this ).attr( 'data_id'));
        formData.append('status',$( this ).attr( 'data_status'));
  
        $.ajax({
          type: "POST",
          enctype: 'multipart/form-data',
          url: url,
          data: formData,
          crossDomain: true,
          processData: false,
          contentType: false,
          cache: false,
          timeout: 600000,
          success: function (data) {
            console.log(data);
            approve_reject();
  
  
          },
          error: function (e) {
  
            console.log(data);
  
          }
  
        });
     
    });
    
    
  }




  function assign_rm(ra,kra,client_id){
    ui =`<div class="row" id="all_advocates">


    </div>`;

    $.get("https://cmversiontwo.cmadvocates.com/controller/Advocates.php", { token1: sessionStorage.getItem("token"), all: true }, function(data) {
      const obj = JSON.parse(data);
      $("#all_advocates").empty();
  
      obj.advocates.forEach(element => {
          $("#all_advocates").append(`
          <div class="col-md-4">
          <div class="card card-nav-tabs" >
  <div class="card-header card-header-primary">
    Available Advocate  
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.name}</li>
  </ul>
  <button type="button" id="main_id_in" data-op="assign_rm_a" class="btn btn-primary btn-sm btn-round" data_advocate_id="${element.id}" data_client_id="${element.client_id}" >Choose</button>
</div>
          </div>
          
          `);
  
  
  
      });
  });

  

      $(content).html(ui);


      $( "#all_advocates" ).on( "click", "#main_id_in", function() {
        let myatt = $( this ).attr( 'data-op');
        let advocate_id = $( this ).attr( 'data_advocate_id');
        let data_client_id = $( this ).attr( 'data_client_id');
        console.log(advocate_id +" - "+data_client_id);
        eval(`${myatt}("${advocate_id}",${data_client_id})`);
        
      });
    

  }

  
function assign_rm_a(rm , client_id){

  const formData = new FormData();
  formData.append("advocate_id", rm);
  formData.append("client_id", client_id);
  formData.append("token1",sessionStorage.getItem("token"))
  
  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: 'https://cmversiontwo.cmadvocates.com/controller/Advocates.php',
    data: formData,
    crossDomain: true,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(data) {
        console.log(data);

        const obj = JSON.parse(data);

    },
    error: function(e) {

        console.log(e);

    }

});

}

function manage_payment() {
    ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">Memberships</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">CM SME CLUB(product name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="membership_payment" class="btn btn-primary">View Purchases</button>
                <button type="button" id="main_id_in" data-op="approve_reject" class="btn btn-primary">Review Criteria Documents</button>
              </div>
      </div>
  </div>

  

  
</div> 


  <div class="card-header card-header-primary">
            <h4 class="card-title">Subscriptions</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Legal Documents Portal(subscription name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data"  class="btn btn-primary">View</button>
              </div>
      </div>
  </div>

  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Webinars(service name)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
          <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="purchased_subscription" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
</div> 
</div>

<div class="card-header card-header-primary">
            <h4 class="card-title">Consultations</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Consult Lawyers</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="display_analysis_data"  class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
</div> 
</div>

  <div class="card-header card-header-primary">
            <h4 class="card-title">Services</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">CM Portal</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>

              <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="list_services" class="btn btn-primary">View</button>
              </div>
             
      </div>
  </div>
</div> 
</div>
 `;

    $(content).html(ui);

    const main_id_in = document.querySelectorAll("#main_id_in");

    console.log(main_id_in.length);

    main_id_in.forEach((ele) => {
      // Here comes the Code that should be executed on every Element, e.g.
      ele.addEventListener("click", () => {

        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        let myatt = ele.getAttribute("data-op");
        eval(`${myatt}()`);

      });

    });

  }


function consultation_payment(){
  ui = `<div class="container-fluid">
    <div class="row">

    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title ">Subscription Payments</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
        <form class="navbar-form">
      <div class="input-group no-border">
        <input type="text" value="" class="form-control" placeholder="Search By Name...">
        <button type="submit" class="btn btn-white btn-round btn-just-icon">

          <i class="material-icons">search</i>
                  <button class="btn btn-primary">Download</button>
                  <button class="btn btn-primary">Export As Excel</button>
          <div class="ripple-container"></div>
        </button>
      </div>
    </form>
                <th>
                  ID
                </th>
                <th>
                  Subscription Name
                </th>
                <th>
                Client Email
                </th>
                <th>
                Client Phone Number
                </th>
                <th>
                Status
                </th>
                  <th>
                Date of payment
                </th>
                  <th>
                Method of payment
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    1
                  </td>
                  <td>
                    Standard
                  </td>
                  <td>
                    johndoe@gmail.com
                  </td>
                  <td>
                    +25499999
                  </td>
                  <td>
                    Active
                  </td>
                  <td>
                    20th/sep/2021
                  </td>
                  <td>
                    visa
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> `;

  $(content).html(ui);
}


function membership_payment(){
  ui = `<div class="container-fluid">
    <div class="row">

    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title ">Subscription Payments</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
        <form class="navbar-form">
      <div class="input-group no-border">
        <input type="text" value="" class="form-control" placeholder="Search By Name...">
        <button type="submit" class="btn btn-white btn-round btn-just-icon">

          <i class="material-icons">search</i>
                  <button class="btn btn-primary">Download</button>
                  <button class="btn btn-primary">Export As Excel</button>
          <div class="ripple-container"></div>
        </button>
      </div>
    </form>
                <th>
                  ID
                </th>
                <th>
                  Subscription Name
                </th>
                <th>
                Client Email
                </th>
                <th>
                Client Phone Number
                </th>
                <th>
                Status
                </th>
                  <th>
                Date of payment
                </th>
                  <th>
                Method of payment
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    1
                  </td>
                  <td>
                    Standard
                  </td>
                  <td>
                    johndoe@gmail.com
                  </td>
                  <td>
                    +25499999
                  </td>
                  <td>
                    Active
                  </td>
                  <td>
                    20th/sep/2021
                  </td>
                  <td>
                    visa
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> `;

  $(content).html(ui);
}







  function subscription_payment(){
  ui = `<div class="container-fluid">
    <div class="row">

    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title ">Subscription Payments</h4>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table">
              <thead class=" text-primary">
        <form class="navbar-form">
      <div class="input-group no-border">
        <input type="text" value="" class="form-control" placeholder="Search By Name...">
        <button type="submit" class="btn btn-white btn-round btn-just-icon">

          <i class="material-icons">search</i>
                  <button class="btn btn-primary">Download</button>
                  <button class="btn btn-primary">Export As Excel</button>
          <div class="ripple-container"></div>
        </button>
      </div>
    </form>
                <th>
                  ID
                </th>
                <th>
                  Subscription Name
                </th>
                <th>
                Client Email
                </th>
                <th>
                Client Phone Number
                </th>
                <th>
                Status
                </th>
                  <th>
                Date of payment
                </th>
                  <th>
                Method of payment
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    1
                  </td>
                  <td>
                    Standard
                  </td>
                  <td>
                    johndoe@gmail.com
                  </td>
                  <td>
                    +25499999
                  </td>
                  <td>
                    Active
                  </td>
                  <td>
                    20th/sep/2021
                  </td>
                  <td>
                    visa
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> `;

  $(content).html(ui);
}


function add_subscription() {
  ui = `    
<script>
tinymce.init({
  selector: '#exampleFormControlTextarea1',
   init_instance_callback : function(editor) {
    var freeTiny = document.querySelector('.mce-notification');
    freeTiny.style.display = 'none';
}
});
</script>
<div class="container-fluid">
        <div class="row">
          <div class="alert d-none" role="alert"></div>
          <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title ">NEW Subscription</h4>
              </div>
              <form id="addsubscription" method="POST">
              <div class="card-body row">
                <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">credit_card</i></span></div>
                  <input type="text" class="form-control" name="sub_name" placeholder="Subscription Name">
                </div>

                <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">paid</i></span></div>
                    <input type="number" class="form-control" name="sub_price" placeholder="Subscription Price">
                </div>

                  <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                        <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">inventory_2</i></span></div>
                        <select class=" form-control col-12" id="prod" name="prod">
                          ${$.get("https://cmversiontwo.cmadvocates.com/controller/Products.php", { getproducts: "Donald", token1: sessionStorage.getItem("token") },
                            function (data) {
                                const obj = JSON.parse(data);
                                  if(obj.result == "session"){
                                    $("#reauth").modal();
                                    return;
                                  }
                                $("#prod").empty();
                                $("#prod").append(`<option value="0" >Choose Product</option>`);

                                obj.products.forEach(element => {

                                  $("#prod").append(`<option value="${element.id}">${element.Name}</option>`);
                                });
                                })


                                }
                        </select>

                  </div>


 <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                        <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">card_giftcard</i></span></div>
                        <select class=" form-control col-12" name="discount">
                        <option selected disabled>Discount Applicable</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                        </select>
</div>

    <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                        <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">toggle_off</i></span></div>
   <select class=" form-control col-12" name="status">
                        <option>Status</option>
                        <option value="active">active</option>
                        <option value="inactive">inactive</option>
                        </select>
</div>

                      <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">download</i></span></div>
                        <input type="number" class="form-control" name="per_discount" placeholder="percentage discount ">
                      </div>

<div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12" style="margin-top:10px;">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">download</i></span></div>
  <input type="text" class="form-control" name="nodd" placeholder="No Of Document Downloads">
</div> 

  <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12" style="margin-top:10px;">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">schedule</i></span></div>
  <input type="text" class="form-control" name="cons_hours" placeholder="No of consulting hours">
</div> 

<div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                        <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">paid</i></span></div>
   <select class=" form-control col-12" id="payment_terms" name="payment_terms">

   ${$.get("https://cmversiontwo.cmadvocates.com/controller/PaymentTerms.php", { getpaymentterms: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
    const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
    $("#payment_terms").empty();
  
    $("#payment_terms").append(`<option disabled >Choose payment terms</option>`);
  
    obj.pyterms.forEach(element => {
      $("#payment_terms").append(`<option value="${element.id}">${element.Name}</option>`);
    });
  })
  
  
  }
  </select>
</div>

<div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12" style="margin-top:10px;">
                  <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">article</i></span></div>
  <input type="text" class="form-control" name="review_limit" placeholder="No of  Document Reviews">
</div>

<h3 class="text-center ">Subscription Features</h3>
<div class=" form-group col-12" id="show_item">
<div class="row">
<div class="col-12">
</div>
    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
        <input type="text" name="has[]" class="form-control" placeholder="Has" required>
    </div>
    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
        <input type="text" name="hasNot[]" class="form-control" placeholder="Has not" required>
    </div>

    <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
    <p class="text-center"> <button class="btn btn-primary  add_item_btn">Add more</button></p>
        
    </div>
</div>
</div>

<div class="form-group col-12" >
   <div class="input-group-prepend"><span class="input-group-text"><p> Description</p></span></div>
   <textarea class="form-control" id= "exampleFormControlTextarea1" name="description" rows="3"></textarea>
</div>



<div class="col-12" ><p class="text-center"><button class="btn btn-primary" type="submit">Add Subscription</button></p></div>
   
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> `;

  $(content).html(ui);

  $(document).ready(function() {
    $(".add_item_btn").click(function(e) {
        e.preventDefault();
        $("#show_item").append(`<div class="form-group col-12" id="show_item">
        <div class="row">
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
            <input type="text" name="has[]" class="form-control" placeholder="Has">
          </div>
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
            <input type="text" name="hasNot[]" class="form-control" placeholder="Has Not">
          </div>

          <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
    <p class="text-center"> <button class="btn btn-danger remove_item_btn">Remove</button></p>      
    </div>
        </div>
      </div>`);

    });

    $(document).on('click', '.remove_item_btn', function(e) {
        $(this).css("background-color","black");
        $(this).parent().parent().parent().remove();
    })
});

  let addsubscription = document.querySelector("#addsubscription");
  let myft = document.querySelector(".alert");
  addsubscription.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addsubscription);
    formData.append('token', sessionStorage.getItem("token"));

    $.ajax({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php",
      data: formData,
      crossDomain: true,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (data) {
        console.log(data);

        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');
          view_subscription();
        }, 5000);//wait 2 seconds


      },
      error: function (e) {

        console.log(data);

      }

    });
  });
}

  function edit_subscription(id) {
    ui = ` <script>
    tinymce.init({
      selector: '#exampleFormControlTextarea1',
       init_instance_callback : function(editor) {
        var freeTiny = document.querySelector('.mce-notification');
        freeTiny.style.display = 'none';
    }
    });
    </script>
    <div class="container-fluid">
            <div class="row">
              <div class="alert d-none" role="alert"></div>
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title ">Exisiting Subscription</h4>
                  </div>
                  <form id="addsubscription" method="POST">
                  <div class="card-body row">
                    <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">credit_card</i></span></div>
                      <input type="number" class="form-control" name="sub_name" placeholder="Subscription Name">
                    </div>
    
                    <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">paid</i></span></div>
                        <input type="number" class="form-control" name="sub_price" placeholder="Subscription Price">
                    </div>
    
                      <div class="input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                            <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">inventory_2</i></span></div>
                            <select class=" form-control col-12" id="prod" name="prod">
                              ${$.get("https://cmversiontwo.cmadvocates.com/controller/Products.php", { getproducts: "Donald", token1: sessionStorage.getItem("token") },
                                function (data) {
                                    const obj = JSON.parse(data);
                                      if(obj.result == "session"){
                                        $("#reauth").modal();
                                        return;
                                      }
                                    $("#prod").empty();
                                    $("#prod").append(`<option value="9" >Choose Product</option>`);
    
                                    obj.products.forEach(element => {
    
                                      $("#prod").append(`<option value="${element.id}">${element.Name}</option>`);
                                    });
                                    })
    
    
                                    }
                            </select>
    
                      </div>
    
    
     <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                            <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">card_giftcard</i></span></div>
                            <select class=" form-control col-12" name="discount">
                            <option selected disabled>Discount Applicable</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                            </select>
    </div>
    
        <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                            <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">toggle_off</i></span></div>
       <select class=" form-control col-12" name="status">
                            <option>Status</option>
                            <option value="active">active</option>
                            <option value="inactive">inactive</option>
                            </select>
    </div>
    
                          <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">download</i></span></div>
                            <input type="number" class="form-control" name="nodd" placeholder="percentage discount ">
                          </div>
    
    <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12" style="margin-top:10px;">
                      <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">download</i></span></div>
      <input type="text" class="form-control" name="nodd" placeholder="No Of Document Downloads">
    </div> 
    
      <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12" style="margin-top:10px;">
                      <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">schedule</i></span></div>
      <input type="text" class="form-control" name="cons_hours" placeholder="No of consulting hours">
    </div> 
    
    <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12"> 
                            <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">paid</i></span></div>
       <select class=" form-control col-12" id="payment_terms" name="payment_terms">
    
       ${$.get("https://cmversiontwo.cmadvocates.com/controller/PaymentTerms.php", { getpaymentterms: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
      if(obj.result == "session"){
        $("#reauth").modal();
        return;
      }
        $("#payment_terms").empty();
      
        $("#payment_terms").append(`<option disabled >Choose payment terms</option>`);
      
        obj.pyterms.forEach(element => {
          $("#payment_terms").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })
      
      
      }
      </select>
    </div>
    
    <div class="form-group input-group col-xl-6 col-lg-6 col-md-6 col-sm-12" style="margin-top:10px;">
                      <div class="input-group-prepend"><span class="input-group-text"><i class="material-icons">article</i></span></div>
      <input type="text" class="form-control" name="dbundle" placeholder="No of  Document Reviews">
    </div>

    <div class="form-group col-12">

      <div class="row">
        <div>
        <h3 class="text-center">Subscription Features</h3>
        </div>
      </div>

      <div class="row" id="show_item">
      
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
        <input type="text" name="has[]" class="form-control" placeholder="Has" required>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-3">
          <input type="text" name="hasNot[]" class="form-control" placeholder="Has not" required>
      </div>

      
      </div>

      <div class="row">
        <div class="col-12"><p class="text-center"> <button class="btn btn-primary  add_item_btn">Add more</button></p></div>
      </div>
    
    </div>

    
    <div class="form-group col-12" >
       <div class="input-group-prepend"><span class="input-group-text"><p> Description</p></span></div>
       <textarea class="form-control" id= "exampleFormControlTextarea1" name="description" rows="3"></textarea>
    </div>
    
    
    
    <div class="col-12" ><p class="text-center"><button class="btn btn-primary" type="submit">Add Subscription</button></p></div>
       
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

    $(content).html(ui);

      $(".add_item_btn").click(function(e) {
          e.preventDefault();
          $("#show_item").append(`
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
            <input type="text" name="has[]" class="form-control" placeholder="Has" >
          </div>
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-3">
            <input type="text" name="hasNot[]" class="form-control" placeholder="Has Not" >
          </div>

          <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 d-grid">
    <p class="text-center"> <button class="btn btn-danger remove_item_btn">Remove</button></p>      
    </div>`);
  
      });

      $(document).on('click', '.remove_item_btn', function(e) {
        $(this).css("background-color","black");
        $(this).parent().parent().parent().remove();
    })
      
    $.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptionswithid: id, token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
      
      $("#mytable").empty();
      obj.subscriptions.forEach(element => {


        
      });
    });
  
      $(document).on('click', '.remove_item_btn', function(e) {
          e.preventDefault();
          let row_item = $(this).parent().parent();
          $(row_item).remove();
      });


    let editsubscription = document.querySelector("#editsubscription");
    let myft = document.querySelector(".alert");
    editsubscription.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editsubscription);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
      view_subscription();
    });
    
  }
//Done

  function view_subscription() {
    ui = `   <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">View Subscriptions</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                <form class="navbar-form">
              <div class="input-group no-border">
                  <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
                 <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
        <i class="material-icons">search</i>
                  <button class="btn btn-primary" data-op="add_subscription" id="main_id_in">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Subscription Name
                        </th>
                         <th>
                          Product Name
                        </th>
                        <th>
                        Status
                        </th>
                        <th>
                        Actions
                        </th>
                        <th>
                           <button class="btn btn-primary" ><span class="material-icons">file_download</span>Download</button>
                          <button class="btn btn-primary"><span class="material-icons">import_export</span>Export</button>
                        </th>
                      </thead>
                      <tbody id="mytable">
                      
                      </tbody>
                    </table>
                    <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `;
    $(content).html(ui);

    $.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
      
      $("#mytable").empty();
      obj.subscriptions.forEach(element => {


        $("#mytable").append(`<tr>
                            <td>
                              ${element.id}
                            </td>
                            <td>
                            ${element.Name}
                            </td>
                            <td>
                            ${element.product_name}
                            </td>
                            <td>
                            ${element.status}
                            </td>
                            <td>
                            <button class="btn btn-primary" data-op="edit_subscription" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>

                            </td>
                          </tr>`);
      });
    });

    $( ".input-group").on( "click", "#main_id_in",function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    $( "#mytable" ).on( "click", "#main_id_in", function() {
      console.log( $( this ).attr( 'data-op') );
      let myatt = $( this ).attr( 'data-op');
      eval(`${myatt}(${$( this ).attr( 'data_id')})`);
      
    });
  
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { delete_subscription: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          view_subscription();
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_sub", $('#search').val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php",
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
  if(obj.result == "session"){
    $("#reauth").modal();
    return;
  }
      
          $("#mytable").empty();
          obj.subscriptions.forEach(element => {
    
    

            $("#mytable").append(`<tr>
            <td>
              ${element.id}
            </td>
            <td>
            ${element.Name}
            </td>
            <td>
            ${element.valid}
            </td>
            <td>
            ${element.product_name}
            
            </td>
            <td>
            ${element.status}
            </td>
            <td>
            <button class="btn btn-primary" data-op="edit_subscription" data_id="${element.id}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
            </td>
          </tr>`);
});

        },
        error: function (e) {

          console.log(data);

        }

      });

    });

  }
    var url = "https://cmversiontwo.cmadvocates.com/controller/authG.php";
  


});



// $(document).ajaxStart(function(){
//   myModal.show();
   
// });

// $(document).ajaxComplete(function(){
//   myModal.hide();
// });
// $(document).ajaxStop(function(){
//   myModal.hide();
// });


let myft = document.querySelector(".alert");
var chooseRm = document.querySelector("#choose_rm")
chooseRm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(chooseRm);
  formData.append("token1",sessionStorage.getItem("token"))

  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: 'https://cmversiontwo.cmadvocates.com/controller/Advocates.php',
    data: formData,
    crossDomain: true,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(data) {
        console.log(data);
        

        const obj = JSON.parse(data);
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');
          
        myft.classList.remove(obj.result);
        myft.innerHTML = '';
        assign_rm_to_case();
        }, 5000);//wait 2 seconds

    },
    error: function(e) {

        console.log(e);

    }

});



});



