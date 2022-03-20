import { getUser,redirect,logout } from '../../js/collection.js';

var url = "https://cmversiontwo.cmadvocates.com/controller/authG.php";

const path = window.location.origin;
redirect(url,path);

// jQuery document ready
$(document).ready(function () {
  const content = document.querySelector(".content");
  const main_id_in = document.querySelectorAll("#main_id_in");
  console.log(main_id_in.length);

  let ui = "peace";
index();

  $(".logout_btn").on("click",()=>{
    logout(url);
  });


  $( "#side-nav" ).on( "click", "#main_id_in", function() {
    let myatt = $( this ).attr( 'data-op');
    eval(`${myatt}()`);
    
  });




  function index() {
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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

        $.get(url, { lawyers: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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


  function add_lawyer_type() {
    ui = `<div class="container-fluid">
          <div class="row">
             <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
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
             <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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

        
        $.get(url, { getLawyerType: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
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
             <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
            view_category();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });

  }

  function edit_category(name,code ,id) {
    ui = `  <div class="container-fluid">
          <div class="row">
             <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      view_category();
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

        $.get(url, { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
             <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
             <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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

        $.get(url, { getsubCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
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
             <div class="alert" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Service</h4>
                </div>
                <div class="card-body">
             <form method="post" id="addservice">
  <div class="form-group">
    <input type="text" name="serviceName" class="form-control" id="exampleFormControlInput1" placeholder="Service Name">
  </div>
   <h4 class="card-title ">Status</h4>

<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="serviceStatus" id="exampleRadios1" value="inactive" >
        Not Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="serviceStatus" id="exampleRadios2" value="active" checked>
        Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>

<input type="submit" class="btn btn-primary" name="addLawyer" value="New">
 <a href="javascript:history.back()" class="btn btn-primary">back</a>
         
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
            view_service_name();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });

  }

  function edit_service_name(name, id) {
    ui = `        <div class="container-fluid">
          <div class="row">
             <div class="alert" role="alert"></div>
                </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Service Name</h4>
                </div>
                <div class="card-body">
             <form method="post" id="editService">
  <div class="form-group">
    <input type="text" name="editserviceName" value="${name}" class="form-control" id="exampleFormControlInput1" placeholder="Service Name">
  </div>

   <h4 class="card-title ">Status</h4>

<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="editserviceStatus" id="exampleRadios1" value="inactive" >
        Not Active
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="editserviceStatus" id="exampleRadios2" value="active" checked>
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


    let editService = document.querySelector("#editService");
    let myft = document.querySelector(".alert");
    editService.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editService);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
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

          const obj = JSON.parse(data);
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


//Done
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
        $.get(url, { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
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
      eval(`${myatt}("${$( this ).attr( 'data_op')}",${$( this ).attr( 'data_id')})`);
      
    });

    
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      //e.preventDefault();
      let formData = new FormData();

      formData.append("search_serv", $('#search').val());
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
      <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
            view_practise_areas();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });

  }


  function edit_practise_areas(name,id) {
    ui = `       <div class="container-fluid">
          <div class="row">
                            <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Practise Area</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="edit_pa" enctype="multiple/form-data">
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      view_practise_areas();
    });
  }
//Done
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

        $.get(url, { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
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


  function viewSubscriptionPayment() {
    ui = ` `;

    $(main).html(sideNav);

  }


  function add_user() {
    ui = `     <div class="container-fluid">
          <div class="row">
                          <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New User</h4>
                </div>
                <div class="card-body">
             <form method="post" id="add_member" action="">
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

    
    let add_member = document.querySelector("#add_member");
    let myft = document.querySelector(".alert");
    add_member.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(add_member);
      formData.append('token', sessionStorage.getItem("token"));

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

          const obj = JSON.parse(data);
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
                          <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Edit User</h4>
                </div>
                <div class="card-body">
             <form method="post" id="edit_member">
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
                        <th>
                          <button type="submit" data-op="add_user" id="main_id_in" class="btn btn-primary pull-right">Add User</button>
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

        $.get(url, { getmembers: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
  function add_country() {
    ui = `       <div class="container-fluid">
          <div class="row">
        <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Country</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="addcountry">
  <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" name="country_name" placeholder="Country Name">
  </div>

   <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" name="country_code" placeholder="Country Code">
  </div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" >
        Applicable to seller registration
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
 <select class=" form-select" name="status">
    <option>Select status</option>
  <option value="active">Active</option>
  <option value="active">In Active</option>
</select>
   <input type="submit" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

    $(content).html(ui);

    let addcountry = document.querySelector("#addcountry");
    let myft = document.querySelector(".alert");
    addcountry.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(addcountry);
      formData.append('token', sessionStorage.getItem("token"));

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

          const obj = JSON.parse(data);
          myft.classList.remove('d-none');
          myft.classList.add(obj.result);
          myft.innerHTML = obj.value;
          myft.classList.remove('d-none');

          setTimeout(function () {
            myft.classList.add('d-none');

            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            view_country();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });
    });


  }
  function edit_country(name, code, id) {
    ui = `      <div class="container-fluid">
          <div class="row">
                          <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Edit Country</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="editCountry" >
  <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" value="${name}" name="country_name_edit" placeholder="Country Name">
  </div>

   <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" value="${code}" name="country_code" placeholder="Country Code">
  </div>
<div class="form-check form-check-radio">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" required id="exampleRadios1" value="option1" >
        Applicable to seller registration
        <span class="circle">
            <span class="check"></span>
        </span>
    </label>
</div>
 <select class="form-select" required name="status">
    <option>Select status</option>
  <option>Active</option>
  <option>In Active</option>
</select>
   <input type="submit" name="insert-btn" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
</form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div> `;

    $(content).html(ui);

    let editCountry = document.querySelector("#editCountry");
    let myft = document.querySelector(".alert");
    editCountry.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(editCountry);
      formData.append('token', sessionStorage.getItem("token"));
      formData.append('id', id);
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

          const obj = JSON.parse(data);
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
      view_country();
    });
  }

  //Done
  function view_country() {
    ui = `        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Country List</h4>
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
                  <button class="btn btn-primary" id="main_id_in" data-op="add_country">Add New</button>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Country Name
                        </th>
                        <th>
                          Country Code
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

        $.get(url, { getCountries: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
          $("#mytable").empty();
    
          obj.countries.forEach(element => {
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
                                                  
                                                  <button class="btn btn-primary" data-op="edit_country" data_id="${element.id}" data_code="${element.code}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
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
      eval(`${myatt}("${$( this ).attr( 'data_op')}","${$( this ).attr( 'data_code')}",${$( this ).attr( 'data_id')})`);
      
    });
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post(url, { delete_country: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
        myft.classList.remove('d-none');
        myft.classList.add(obj.result);
        myft.innerHTML = obj.value;
        myft.classList.remove('d-none');

        setTimeout(function () {
          myft.classList.add('d-none');

          myft.classList.add(obj.result);
          view_country();
        }, 1000);//wait 2 seconds

      });

    });
  
    let searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", (e) => {
      let formData = new FormData();

      formData.append("search_country", $('#search').val());
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
    
          $("#mytable").empty();
    
          obj.countries.forEach(element => {
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
                                                  
                                                  <button class="btn btn-primary" data-op="edit_country" data_id="${element.id}" data_code="${element.code}"  data_op="${element.Name}" id="main_id_in" ><span class="material-icons">edit</span></button>
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
                         <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Create Document</h4>
                </div>
                <div class="card-body">
             <form action="" id="adddocument" method="POST" enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" name="document_name" placeholder="Document Name">
  </div>
    <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" required name="document_type"  placeholder="Document Type">
  </div>
    <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" name="document_price" placeholder="Document Price">
  </div>
   <div class="form-group form-file-upload form-file-multiple">
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

     <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">money</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="sub" name="sub">
                          ${$.get(url, { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      $("#sub").empty();

      $("#sub").append(`<option >Choose subscription</option>`);

      obj.subscriptions.forEach(element => {
        $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
      });
    })


      }
                          </select>
</div>

     <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">work</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="serv" name="serv">
                          ${$.get(url, { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
        $("#serv").empty();

        $("#serv").append(`<option >Choose service</option>`);

        obj.services.forEach(element => {
          $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })


      }
                          </select>
</div>

 <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">category</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="cat" name="cat">
     ${$.get(url, { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
        $("#cat").empty();
        $("#cat").append(`<option >Choose Category</option>`);

        obj.categories.forEach(element => {

          $("#cat").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })


      }
                          </select>
</div>

 <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">category</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="subcat" name="subcat">
    <option >Choose Sub category</option>
                          </select>
</div>


  <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" name="docu" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="docu" class="form-control inputFileVisible" placeholder="Choose a document or a bundle of dosuments">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">attach_file</i>
            </button>
        </span>
    </div>
  </div>

   <div class="input-group" style="margin-top:10px;">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                    <p>Table of contents</p>
                    </span>
                    </div>
     <textarea class="form-control" id="exampleFormControlTextarea1" name="table_of_contents" style="margin-top:15px;" rows="3"></textarea>
  </div>
   


  <div class="form-group">
    <textarea class="form-control" name="document_description" id="exampleFormControlTextarea1" rows="3" placeholder="Document description"></textarea>
  </div>
   <input type="submit" class="btn btn-primary"/>
  <button type="submit" class="btn btn-primary">back</button>
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



    $("#cat").change(function () {

      $.get(url, { getsubCategoriesSpec: "Donald", id: $(this).val(), token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
        $("#subcat").empty();
        $("#subcat").append(`<option >Choose Sub category</option>`);
        obj.subcategories.forEach(element => {

          $("#subcat").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })

    });



    let adddocument = document.querySelector("#adddocument");
    let myft = document.querySelector(".alert");
    adddocument.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(adddocument);
      formData.append('token', sessionStorage.getItem("token"));

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

          const obj = JSON.parse(data);
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
                 <div class="alert" role="alert"></div>
    <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-primary">
          <h4 class="card-title ">Create Document</h4>
        </div>
        <div class="card-body">
     <form action="" id="editdocument" method="POST" enctype="multiple/form-data">
<div class="form-group">
<input type="text" class="form-control" id="exampleFormControlInput1" value="${name}" name="document_name" placeholder="Document Name">
</div>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleFormControlInput1" name="document_type"  placeholder="Document Type">
  </div>
<div class="form-group">
<input type="text" class="form-control" id="exampleFormControlInput1" value="${price}" name="document_price" placeholder="Document Price">
</div>
<div class="form-group form-file-upload form-file-multiple">
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

<div class="input-group"> 
                  <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="material-icons">money</i>
            </span>
            </div>
<select class=" form-control col-12" id="sub" name="sub">
                  ${$.get(url, { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      $("#sub").empty();

      $("#sub").append(`<option >Choose subscription</option>`);

      obj.subscriptions.forEach(element => {
        $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
      });
    })


      }
                  </select>
</div>

<div class="input-group"> 
                  <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="material-icons">work</i>
            </span>
            </div>
<select class=" form-control col-12" id="serv" name="serv">
                  <option>Service Name</option>
                  ${$.get(url, { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
        $("#serv").empty();

        $("#serv").append(`<option >Choose service</option>`);

        obj.services.forEach(element => {
          $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })


      }
                  </select>
</div>

<div class="input-group"> 
                  <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="material-icons">category</i>
            </span>
            </div>
<select class=" form-control col-12" id="cat" name="cat">
${$.get(url, { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
        $("#cat").empty();
        $("#cat").append(`<option >Choose Category</option>`);

        obj.categories.forEach(element => {

          $("#cat").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })


      }
                  </select>
</div>

<div class="input-group"> 
                  <div class="input-group-prepend">
            <span class="input-group-text">
            <i class="material-icons">category</i>
            </span>
            </div>
<select class=" form-control col-12" id="subcat" name="subcat">
<option >Choose Sub category</option>
                  </select>
</div>
<div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" class="inputFileHidden">
    <div class="input-group">
        <input type="text" class="form-control inputFileVisible" placeholder="Choose a document or a bundle of documents">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">attach_file</i>
            </button>
        </span>
    </div>
  </div>

 <div class="input-group" style="margin-top:10px;">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                    <p>Table of contents</p>
                    </span>
                    </div>
     <textarea class="form-control" id="exampleFormControlTextarea1" name="table_of_contents" style="margin-top:15px;" rows="3"></textarea>
  </div>

<div class="form-group">
<textarea class="form-control" name="document_description" id="exampleFormControlTextarea1" rows="3" placeholder="Document description">${desc}</textarea>
</div>
<input type="submit" class="btn btn-primary"/>
<button type="submit" class="btn btn-primary">back</button>
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

      $.get(url, { getsubCategoriesSpec: "Donald", id: $(this).val(), token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
        $("#subcat").empty();
        $("#subcat").append(`<option >Choose Sub category</option>`);
        obj.subcategories.forEach(element => {

          $("#subcat").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })

    });

    
    $("#sub").change(function () {

      $.get(url, { getproductsSpec: "Donald", id: $(this).val(), token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      view_document();
    });

  }
  //Done
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
                          Document Code
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

        $.get(url, { getDocument: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
                                ${element.subscription}
                                </td>
                                <td >
                                <button class="btn btn-primary" data-op="edit_document" data_op="${element.Name}" data_toc="${element.toc}" data_price="${element.price}" data_desc="${element.document_description}" data_id ="${element.id}" id="main_id_in" ><span class="material-icons">edit</span></button>
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
      eval(`${myatt}("${$( this ).attr( 'data_op')}","${$( this ).attr( 'data_toc')}",${$( this ).attr( 'data_price')},"${$( this ).attr( 'data_desc')}",${$( this ).attr( 'data_id')})`);
      
    });
  
    $( "#mytable" ).on( "click", "#delete_sub", function() {
      let myatt = $( this ).attr( 'data-op');
      
      $.post(url, { delete_document: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
    
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

    
    let add_knowledge = document.querySelector("#add_knowledge");
    let myft = document.querySelector(".alert");
    add_knowledge.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(add_knowledge);
      formData.append('token', sessionStorage.getItem("token"));

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

          const obj = JSON.parse(data);
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
      url: url,
      data: formData,
      crossDomain: true,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (data) {
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
        $.get(url, { getHub: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
    
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
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
                            <div class="alert" role="alert">
 
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
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
//Done
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
        $.get(url, { getproducts: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
      <div class="alert" role="alert"></div>
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

        $.get(url, { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
      <div class="alert" role="alert"></div>
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

        
        $.get(url, { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
            view_skill_set();
           
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

    });
  }

//Done
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

        $.get(url, { getSkillSet: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
    
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
      <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Video</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="addvideo" enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" name="videoname" placeholder="New Video Name">
  </div>
    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Price ">
  </div>

    <div class="form-group form-file-upload form-file-multiple">
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

    <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" name="videopreview" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="videopreview" class="form-control inputFileVisible" placeholder="Choose Preview Image">
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
                    <i class="material-icons">business_center</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="serv" name="serv">
        
     ${$.get(url, { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      $("#serv").empty();

      $("#serv").append(`<option >Choose service</option>`);

      obj.services.forEach(element => {
        $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
      });
    })


    }
                              </select>
</div>


  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">money</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="sub" name="sub">
     ${$.get(url, { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      $("#sub").empty();

      $("#sub").append(`<option >Choose subscription</option>`);

      obj.subscriptions.forEach(element => {
        $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
      });
    })


      }
      </select>
</div>  

          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" name="video_status">
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
      <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Video</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="editVideos"  enctype="multiple/form-data">
  <div class="form-group">
    <input type="text" class="form-control" name="editvideoname" value="${name}" placeholder="New Video Name">
  </div>

    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Price ">
  </div>

    <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple=""  accept="video/mp4,video/x-m4v,video/*" name="editVideo" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="editVideo" class="form-control inputFileVisible" placeholder="Choose Video">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">videocam</i>
            </button>
        </span>
    </div>
  </div>

    <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" name="editPreview" class="inputFileHidden">
    <div class="input-group">
        <input type="text" name="editPreview" class="form-control inputFileVisible" placeholder="Choose Preview Image">
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
                    <i class="material-icons">business_center</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="serv" required name="serv">
      
     ${$.get(url, { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      $("#serv").empty();

      $("#serv").append(`<option >Choose service</option>`);

      obj.services.forEach(element => {
        $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
      });
    })


    }

     </select>
</div>


  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">money</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="sub" required name="sub">
     ${$.get(url, { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      $("#sub").empty();

      $("#sub").append(`<option >Choose subscription</option>`);

      obj.subscriptions.forEach(element => {
        $("#sub").append(`<option value="${element.id}">${element.Name}</option>`);
      });
    })


      }
                          </select>
</div>  

          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12" required name="stat">
                          <option>Status</option>
                          <option value="active">active</option>
                          <option value="inactive">inactive</option>
                          </select>
</div>  


    <div class="form-group">
    <label for="inputAddress2">Brief Description</label>
    <input type="text" class="form-control" required name="breif" id="inputAddress2">
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
            view_video_name();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      
    });

  }

//Done
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
                          Category
                        </th>
                        <th>
                          Sub-Category
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

        $.get(url, { getvideos: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
      
      $.post(url, { delete_video: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
    
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
      <div class="alert" role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">New Business Unit</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST" id="business" enctype="multiple/form-data">

  <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">business_center</i>
                    </span>
                    </div>
     <select class="form-control col-12" id="pa" name="pa">
                          ${

                            $.get(url, { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                              const obj = JSON.parse(data);
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


          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">category</i>
                    </span>
                    </div>
     <select class="form-control col-12" id="cat" name="cat">
     ${$.get(url, { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      $("#cat").empty();
      $("#cat").append(`<option >Choose Category</option>`);

      obj.categories.forEach(element => {

        $("#cat").append(`<option value="${element.id}">${element.Name}</option>`);
      });
    })


    }
                          </select>
</div>  


          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">category</i>
                    </span>
                    </div>
     <select class=" form-control col-12" id="subcat" name="subcat">
                          </select>
</div>  

   <h4 class="card-title ">Business Unit Head</h4>
          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">person</i>
                    </span>
                    </div>
     <div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="bunith" id="inlineCheckbox1" value="option1"> lawyer 1
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="bunith" id="inlineCheckbox1" value="option1"> lawyer 2
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="bunith" id="inlineCheckbox1" value="option1"> lawyer 3
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>
</div>

  <h4 class="card-title ">Business Unit Members</h4>
          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">groups</i>
                    </span>
                    </div>
     <div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="bunitm" id="inlineCheckbox1" value="option1"> lawyer 1
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="bunitm" id="inlineCheckbox1" value="option1"> lawyer 2
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="bunitm" id="inlineCheckbox1" value="option1"> lawyer 3
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>
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

    
    $("#cat").change(function () {

      $.get(url, { getsubCategoriesSpec: "Donald", id: $(this).val(), token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
        $("#subcat").empty();
        $("#subcat").append(`<option >Choose Sub category</option>`);
        obj.subcategories.forEach(element => {

          $("#subcat").append(`<option value="${element.id}">${element.Name}</option>`);
        });
      })

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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
      <div class="alert" role="alert"></div>
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
              
                                          $.get(url, { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                                            const obj = JSON.parse(data);
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
              
              
                        <div class="input-group"> 
                                        <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <i class="material-icons">category</i>
                                  </span>
                                  </div>
                   <select class="form-control col-12" id="cat" name="cat">
                   ${$.get(url, { getCategories: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                    const obj = JSON.parse(data);
                    $("#cat").empty();
                    $("#cat").append(`<option >Choose Category</option>`);
              
                    obj.categories.forEach(element => {
              
                      $("#cat").append(`<option value="${element.id}">${element.Name}</option>`);
                    });
                  })
              
              
                  }
                                        </select>
              </div>  
              
              
                        <div class="input-group"> 
                                        <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <i class="material-icons">category</i>
                                  </span>
                                  </div>
                   <select class=" form-control col-12" id="subcat" name="subcat">
                                        </select>
              </div>  
              
                 <h4 class="card-title ">Business Unit Head</h4>
                        <div class="input-group"> 
                                        <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <i class="material-icons">person</i>
                                  </span>
                                  </div>
                   <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="editbunith" id="inlineCheckbox1" value="option1"> lawyer 1
                  <span class="form-check-sign">
                      <span class="check"></span>
                  </span>
                </label>
              </div>
              
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="editbunith" id="inlineCheckbox1" value="option1"> lawyer 2
                  <span class="form-check-sign">
                      <span class="check"></span>
                  </span>
                </label>
              </div>
              
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="editbunith" id="inlineCheckbox1" value="option1"> lawyer 3
                  <span class="form-check-sign">
                      <span class="check"></span>
                  </span>
                </label>
              </div>
              </div>
              
                <h4 class="card-title ">Business Unit Members</h4>
                        <div class="input-group"> 
                                        <div class="input-group-prepend">
                                  <span class="input-group-text">
                                  <i class="material-icons">groups</i>
                                  </span>
                                  </div>
                   <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="editbunitm" id="inlineCheckbox1" value="option1"> lawyer 1
                  <span class="form-check-sign">
                      <span class="check"></span>
                  </span>
                </label>
              </div>
              
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="editbunitm" id="inlineCheckbox1" value="option1"> lawyer 2
                  <span class="form-check-sign">
                      <span class="check"></span>
                  </span>
                </label>
              </div>
              
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="editbunitm" id="inlineCheckbox1" value="option1"> lawyer 3
                  <span class="form-check-sign">
                      <span class="check"></span>
                  </span>
                </label>
              </div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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

        $.get(url, { getBusinessUnits: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
      <div class="alert" role="alert"></div>
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
        $.get(url, { getLawyerType: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
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

                            $.get(url, { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                              const obj = JSON.parse(data);
                              $("#pa").empty();
                        
                              $("#pa").append(`<option>Select Practise Area</option>`);
                              obj.pas.forEach(element => {
                                $("#pa").append(`<option value="${element.id}">${element.Name}</option>`);
                        
                              });
                            })
                          }
                          </select>
</div>  

<h4 class="card-title ">Lawyers to be consulted</h4>
          <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">groups</i>
                    </span>
                    </div>
     <div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="lawyer" id="inlineCheckbox1" value="lawyeremail1"> lawyeremail 1
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="lawyer" id="inlineCheckbox1" value="lawyeremail2"> lawyeremail 2
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" name="lawyer" id="inlineCheckbox1" value="lawyeremail3"> lawyeremail 3
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>
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

    $.get(url, { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
      <div class="alert" role="alert"></div>
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
      $.get(url, { getLawyerType: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
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

      $.get(url, { getPracticeArea: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
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

      $.get(url, { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
        const obj = JSON.parse(data);
        
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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
            request_consultation();
          }, 5000);//wait 2 seconds


        },
        error: function (e) {

          console.log(data);

        }

      });

      
    });

  }

//Done
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

        $.get(url, { getConsultations: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
    
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
      
      $.post(url, { delete_consultation: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {

          const obj = JSON.parse(data);
    
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
                            <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
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
                            <div class="alert" role="alert"></div>
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
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

        $.get(url, { getpaymentterms: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
          const obj = JSON.parse(data);
          
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
      
      $.post(url, { delete_pytm: $( this ).attr( 'data_op') })
            .done(function (data) {
              
              const obj = JSON.parse(data);
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
          <div class="alert" role="alert"></div>
          <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title ">Add A Subscription</h4>
              </div>
              <form id="addsubscription" method="POST">
              <div class="card-body">
                <div class="input-group">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">credit_card</i>
                  </span>
                  </div>
  <input type="text" class="form-control" name="sub_name" placeholder="Subscription Name">
</div>

  <div class="input-group">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">paid</i>
                  </span>
                  </div>
  <input type="text" class="form-control" name="sub_price" placeholder="Subscription Price">
</div>

                  <div class="input-group"> 
                        <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">inventory_2</i>
                  </span>
                  </div>
                  <select class=" form-control col-12" id="prod" name="prod">
                  ${$.get(url, { getproducts: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
const obj = JSON.parse(data);
$("#prod").empty();
$("#prod").append(`<option value="0" >Choose Product</option>`);

obj.products.forEach(element => {

  $("#prod").append(`<option value="${element.id}">${element.Name}</option>`);
});
})


}
                  </select>

</div>

<div class="input-group"> 
                        <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">business_center</i>
                  </span>
                  </div>
   
                  <select class=" form-control col-12" id="serv" name="serv">
                  ${$.get(url, { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
const obj = JSON.parse(data);
$("#serv").empty();

$("#serv").append(`<option value="0" >Choose service</option>`);

obj.services.forEach(element => {
  $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
});
})


}


                  </select>
                  </div>

    <div class="input-group"> 
                        <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">groups</i>
                  </span>
                  </div>
   <select class=" form-control col-12" name="limit_user">
                        <option>Limit users</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                        </select>
</div>

 <div class="input-group"> 
                        <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">card_giftcard</i>
                  </span>
                  </div>
   <select class=" form-control col-12" name="discount">
                        <option>Discount Applicable</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                        </select>
</div>
 <div class="input-group"> 
                        <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">price_change</i>
                  </span>
                  </div>
   <select class=" form-control col-12" name="offer">
                        <option>Offer Applicable</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
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

      <div class="input-group"> 
                        <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">schedule</i>
                  </span>
                  </div>
   <select class=" form-control col-12" name="validity">
                        <option>Select Validity</option>
                        <option value="quarter">Quarterly</option>
                        <option value="half">Half Yearly</option>
                        <option value="yearly">Yearly</option>
                        </select>
</div>

<div class="input-group" style="margin-top:10px;">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">download</i>
                  </span>
                  </div>
  <input type="text" class="form-control" name="nodd" placeholder="No Of Document Downloads">
</div> 

  <div class="input-group" style="margin-top:10px;">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">schedule</i>
                  </span>
                  </div>
  <input type="text" class="form-control" name="cons_hours" placeholder="No of consulting hours">
</div> 

<div class="input-group"> 
                        <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">paid</i>
                  </span>
                  </div>
   <select class=" form-control col-12" id="payment_terms" name="payment_terms">

   ${$.get(url, { getpaymentterms: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
    const obj = JSON.parse(data);
    $("#payment_terms").empty();
  
    $("#payment_terms").append(`<option >Choose payment terms</option>`);
  
    obj.pyterms.forEach(element => {
      $("#payment_terms").append(`<option value="${element.id}">${element.Name}</option>`);
    });
  })
  
  
  }
  </select>
</div>

<div class="input-group" style="margin-top:10px;">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">article</i>
                  </span>
                  </div>
  <input type="text" class="form-control" name="dbundle" placeholder="Document Bundle">
</div>

<select class="selectpicker " name="city" data-style="select-with-transition" title="Single Select" data-size="7">
  <option disabled>Choose city</option>
  <option value="2">Foobar</option>
  <option value="3">Is great</option>
</select>

<div class="input-group" style="margin-top:10px;">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <p> Description</p>
                  </span>
                  </div>
   <textarea class="form-control" name="description" style="margin-top:15px;" rows="3"></textarea>
</div>

 <div class="input-group" style="margin-top:10px;">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <p>Benefits</p>
                  </span>
                  </div>
   <textarea class="form-control" id= "exampleFormControlTextarea1" name="benefit" style="margin-top:15px;" rows="3"></textarea>
</div>

   
<button class="btn btn-primary" type="submit">Add Subscription</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> `;

  $(content).html(ui);

  let addsubscription = document.querySelector("#addsubscription");
  let myft = document.querySelector(".alert");
  addsubscription.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addsubscription);
    formData.append('token', sessionStorage.getItem("token"));

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

        const obj = JSON.parse(data);
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

  function edit_subscription(name, id) {
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
                            <div class="alert " role="alert"></div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Existing Subscription</h4>
                </div>
                <form id="editsubscription" method="POST">

                <div class="card-body">
                  <div class="input-group">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">credit_card</i>
                    </span>
                    </div>
    <input type="text" class="form-control" value="${name}" name="edit_sub_name" required placeholder="Subscription Name">
  </div>

   <div class="input-group">
                  <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="material-icons">paid</i>
                  </span>
                  </div>
  <input type="text" class="form-control" name="sub_price" placeholder="Subscription Price">
</div>
  
                    <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">inventory_2</i>
                    </span>
                    </div>
                    <select class=" form-control col-12" id="prod" name="prod">
                    ${$.get(url, { getproducts: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                          const obj = JSON.parse(data);
                          $("#prod").empty();
                          $("#prod").append(`<option >Choose Product</option>`);
                          
                          obj.products.forEach(element => {
                          
                            $("#prod").append(`<option value="${element.id}">${element.Name}</option>`);
                          });
                          })
                          
                      
                      }
                    </select>
  
</div>

<div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">business_center</i>
                    </span>
                    </div>
                    <select class=" form-control col-12" id="serv" name="serv">
                    ${$.get(url, { getService: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
                        const obj = JSON.parse(data);
                        $("#serv").empty();
                        
                        $("#serv").append(`<option >Choose service</option>`);
                        
                        obj.services.forEach(element => {
                          $("#serv").append(`<option value="${element.id}">${element.Name}</option>`);
                        });
                        })
                        
  
                    }
  
  
                    </select>
  
</div>

<div class="input-group"> 
                    <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="material-icons">groups</i>
              </span>
              </div>
<select class=" form-control col-12" required name="limit_user">
                    <option>Limit users</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    </select>
</div>

<div class="input-group"> 
                    <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="material-icons">card_giftcard</i>
              </span>
              </div>
<select class=" form-control col-12" required name="discount">
                    <option>Discount Applicable</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    </select>
</div>
<div class="input-group"> 
                    <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="material-icons">price_change</i>
              </span>
              </div>
<select class=" form-control col-12" required name="offer">
                    <option>Offer Applicable</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    </select>
</div>

<div class="input-group"> 
                    <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="material-icons">toggle_off</i>
              </span>
              </div>
<select class=" form-control col-12" required name="status">
                    <option>Status</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                    </select>
</div>

  <div class="input-group"> 
                    <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="material-icons">schedule</i>
              </span>
              </div>
<select class=" form-control col-12" required name="validity">
                    <option>Select Validity</option>
                    <option value="quarter">Quarterly</option>
                    <option value="half">Half Yearly</option>
                    <option value="yearly">Yearly</option>
                    </select>
</div>

<div class="input-group" style="margin-top:10px;">
              <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="material-icons">download</i>
              </span>
              </div>
<input type="text" class="form-control" required name="nodd" placeholder="No Of Document Downloads">
</div> 

<div class="input-group"> 
                    <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="material-icons">paid</i>
              </span>
              </div>
              <select class=" form-control col-12" required id="payment_terms" name="payment_terms">

              ${$.get(url, { getpaymentterms: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
               const obj = JSON.parse(data);
               $("#payment_terms").empty();
             
               $("#payment_terms").append(`<option >Choose payment terms</option>`);
             
               obj.pyterms.forEach(element => {
                 $("#payment_terms").append(`<option value="${element.id}">${element.Name}</option>`);
               });
             })
             
             
             }
             </select></div>

<div class="input-group" style="margin-top:10px;">
              <div class="input-group-prepend">
              <span class="input-group-text">
              <i class="material-icons">article</i>
              </span>
              </div>
<input type="text" class="form-control" name="dbundle" required placeholder="Document Bundle">
</div>

<select class="selectpicker " name="city" data-style="select-with-transition" title="Single Select" data-size="7">
<option disabled>Choose city</option>
<option value="2">Foobar</option>
<option value="3">Is great</option>
</select>

<div class="input-group" style="margin-top:10px;">
              <div class="input-group-prepend">
              <span class="input-group-text">
              <p> Description</p>
              </span>
              </div>
<textarea class="form-control" name="description" required style="margin-top:15px;" rows="3"></textarea>
</div>

<div class="input-group" style="margin-top:10px;">
              <div class="input-group-prepend">
              <span class="input-group-text">
              <p>Benefits</p>
              </span>
              </div>
<textarea class="form-control" id="exampleFormControlTextarea1" name="benefit" required style="margin-top:15px;" rows="3"></textarea>
</div>


<button class="btn btn-primary" type="submit">Add Subscription</button>           
</form>    
                </div>
              </div>
            </div>
          </div>
        </div>`;

    $(content).html(ui);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          console.log(data);

          const obj = JSON.parse(data);
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
                          Validity
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

    $.get(url, { getSubscriptions: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
      const obj = JSON.parse(data);
      
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
    });

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
      
      $.post(url, { delete_subscription: $( this ).attr( 'data_op') })
      .done(function (data) {
        console.log(data);
        const obj = JSON.parse(data);
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
        url: url,
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          const obj = JSON.parse(data);
      
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


