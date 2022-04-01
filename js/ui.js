// jQuery document ready
$(document).ready(function() {

    const content = document.querySelector(".content");
    const main_id_in = document.querySelectorAll("#main_id_in");
    let log_form = document.querySelector("#log_form");
    let review_send = document.querySelector("#review_send");
    const path = window.location.origin;
    let ui = "peace";
    var url_send = "https://cmversiontwo.cmadvocates.com/controller/authG.php";
    let note1 = 0;
    

    index();
    //Logout js
    $(".logout_btn").on("click", () => {
      logout(url);
    });

    

    $.get("https://cmversiontwo.cmadvocates.com/controller/User.php", { user_profile: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
      const obj = JSON.parse(data);

      if (obj.result == "session") {
          $("#reauth").modal();
          return;
      }

      obj.profile.forEach(element => {
          sessionStorage.setItem('mpesa_number',element.contactPhoneNumber);
      });
    });


    Object.keys(sessionStorage).forEach(element => {
        console.log(element);
        if (element.includes("product_id")) {
            note1++;

        }
    });
    console.log("This is " + note1);
    $("#lblCartCount").text(note1);

    if(sessionStorage.getItem("cart") == "go"){
      view_cart();
    }
    
    
    $("#side-nav").on("click", "#main_id_in", function() {
        let myatt = $(this).attr('data-op');
        eval(`${myatt}()`);

    });

    $("#cart_opener").click(() => {
        //console.log($( "#cart_opener" ).attr( 'data-op'));
        let myatt = $("#cart_opener").attr('data-op');
        eval(`${myatt}()`);
    });

    setInterval(function() {
        sortParams();
    }, 1000);


    log_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(log_form);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: url_send,
            data: formData,
            crossDomain: true,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function(data) {
                console.log(data);

                const obj = JSON.parse(data);

                if (obj.result == "logged") {

                    sessionStorage.setItem('token', obj.value);
                    window.location.replace(`${path}${obj.path}`);

                } else {

                    myft.classList.add(obj.result);
                    myft.innerHTML = obj.value;
                    myft.classList.remove('d-none');


                    setTimeout(function() {
                        myft.classList.add('d-none');
                        myft.classList.remove(obj.result);
                        myft.innerHTML = '';


                    }, 5000); //wait 2 seconds
                }


            },
            error: function(e) {

                console.log(data);

            }

        });



    });

    function mPayment() {
      if(sessionStorage.getItem("mpesa_number") == null){
        alert("Fill profile add phone number to use mpesa");
      }else{
        

        $.post("https://cmversiontwo.cmadvocates.com/controller/Mpesa.php", {
        
        amount: sessionStorage.getItem("price"),
        type_paid: sessionStorage.getItem("type_paid"),
        billing_type: sessionStorage.getItem("billing_type"),
        product_id: sessionStorage.getItem("id"),
        name:sessionStorage.getItem("name"),
        mpesa_number:sessionStorage.getItem("mpesa_number")

    })
    .done(function(data) {
        const obj = JSON.parse(data);
        if (obj.result == 'success') {

            let code = prompt("Please enter paybill confirmation code:");
            if (code == null || code == "") {
              text = "User cancelled the prompt.";
            } else {

              $.get("https://cmversiontwo.cmadvocates.com/controller/Payment.php", { receipt:code}, function(data) {
                const obj = JSON.parse(data);

                if (obj.result == "session") {
                    $("#reauth").modal();
                    return;
                }
                if(obj.value == "1"){
                  $.post("https://cmversiontwo.cmadvocates.com/controller/Payment.php", {
                    refrence: code,
                    amount: sessionStorage.getItem("price"),
                    type_paid: sessionStorage.getItem("type_paid"),
                    billing_type: sessionStorage.getItem("billing_type"),
                    product_id: sessionStorage.getItem("id")
  
                })
                .done(function(data) {
                    const obj = JSON.parse(data);
                    if (obj.result == 'success') {
                        alert(obj.value);
  
                        window.location.replace("https://cmversiontwo.cmadvocates.com/profile.html");
                        sessionStorage.removeItem("type_paid");
                        sessionStorage.removeItem("name");
                        sessionStorage.removeItem("id");
                        sessionStorage.removeItem("price");
                        sessionStorage.removeItem("billing_type");
  
                    } else {
                        window.location.replace("https://cmversiontwo.cmadvocates.com/profile.html");
  
                    }
  
                });
                    
                }

              });
              
            }


        } else {
            console.log(obj.value);
        }

    });
      }
      
    }
    function makePayment() {
        let init_t = Math.floor(Math.random() * 10) + 1;
        let init_e = Math.floor(Math.random() * 1000) + 1;
        $.get("https://cmversiontwo.cmadvocates.com/controller/User.php", { getPaymentDetails: "D", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);


            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }

            if (obj.profile[0].result === "success") {
                FlutterwaveCheckout({
                    public_key: "FLWPUBK_TEST-013aa80644bbbc06fd014dc296eb338a-X",
                    tx_ref: `${init_t} cma_lll ${init_e}`,
                    amount: sessionStorage.getItem("price"),
                    currency: "KES",
                    //country: "KE",
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    payment_options: "card, banktransfer",
                    redirect_url: // specified redirect URL
                        "https://cmversiontwo.cmadvocates.com/profile.html",
                    meta: {
                        consumer_id: sessionStorage.getItem("id"),
                        consumer_mac: sessionStorage.getItem("name"),
                    },
                    customer: {
                        email: obj.profile[0].email,
                        phone_number: obj.profile[0].phone_number,
                        name: obj.profile[0].name,
                    },
                    callback: function(data) {
                        alert("mi");
                    },
                    onclose: function() {
                        // close modal
                    },
                    customizations: {
                        title: "CMA",
                        description: `Payment for ${sessionStorage.getItem("name")}`,
                        logo: "https://cmversiontwo.cmadvocates.com/images/cmalogo.png",
                    },
                });
            } else {
                alert("Update profile");
            }

        });

    }

    function sortParams() {
      let url = window.location.href;
      let params = (new URL(url)).searchParams;

      if (params.get('status') == "successful") {
          $.post("https://cmversiontwo.cmadvocates.com/controller/Payment.php", {
                  refrence: params.get('tx_ref'),
                  amount: sessionStorage.getItem("price"),
                  type_paid: sessionStorage.getItem("type_paid"),
                  billing_type: sessionStorage.getItem("billing_type"),
                  product_id: sessionStorage.getItem("id"),
                  service_id:sessionStorage.getItem("service_id")

              })
              .done(function(data) {
                  const obj = JSON.parse(data);
                  if (obj.result == 'success') {
                      alert(obj.value);

                      window.location.replace("https://cmversiontwo.cmadvocates.com/profile.html");
                      sessionStorage.removeItem("type_paid");
                      sessionStorage.removeItem("name");
                      sessionStorage.removeItem("id");
                      sessionStorage.removeItem("price");
                      sessionStorage.removeItem("billing_type");

                  } else {
                      // console.log(obj.value);
                      // window.location.replace("https://cmversiontwo.cmadvocates.com/profile.html");

                  }

              });


      }
    }
    function makePaymentCart(price, collective_id, collective_name, el) {
        let init_t = Math.floor(Math.random() * 10) + 1;
        let init_e = Math.floor(Math.random() * 1000) + 1;


        $.get("https://cmversiontwo.cmadvocates.com/controller/User.php", { getPaymentDetails: "D", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);


            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }

            if (obj.profile[0].result === "success") {
                FlutterwaveCheckout({
                    public_key: "FLWPUBK_TEST-013aa80644bbbc06fd014dc296eb338a-X",
                    tx_ref: `${init_t} cma_lll ${init_e}`,
                    amount: price,
                    currency: "KES",
                    country: "KE",
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    payment_options: "card",
                    meta: {
                        consumer_id: collective_id,
                        consumer_mac: collective_name,
                    },
                    customer: {
                        email: obj.profile[0].email,
                        phone_number: obj.profile[0].phone_number,
                        name: obj.profile[0].name,
                    },
                    callback: function(data) {
                        el.forEach(element => {
                            const obj_cart = JSON.parse(sessionStorage.getItem(element));
                            //
                            console.log(`refrence: ${data.tx_ref},amount: ${obj_cart.price},type_paid:${obj_cart.type_paid},billing_type: ${obj_cart.billing_type},product_id: ${obj_cart.id}`);

                            $.post("https://cmversiontwo.cmadvocates.com/controller/Payment.php", { refrence: data.tx_ref, amount: obj_cart.price, type_paid: obj_cart.type_paid, billing_type: obj_cart.billing_type, product_id: obj_cart.id })
                                .done(function(data) {
                                    const obj = JSON.parse(data);
                                    if (obj.result == 'success') {

                                        alert(obj.value);

                                    } else {
                                        alert(obj.value);

                                    }

                                });

                            //          alert(element)
                            sessionStorage.removeItem(element);
                            alert("payment recorded");

                            //
                        });


                        window.location.replace("https://cmversiontwo.cmadvocates.com/profile.html");

                    },
                    onclose: function() {
                        // close modal
                    },
                    customizations: {
                        title: "CMA",
                        description: `Payment for ${collective_name}`,
                        logo: "https://cmversiontwo.cmadvocates.com/images/cmalogo.png",
                    },
                });
            } else {
                console.log("Update profile");
            }

        });



    }




    function view_cart() {

        ui = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <div class="container mt-3">
  <table class="table table-striped">
   <thead>
     <tr>
       <th scope="col" class="text-dark">Product Name</th>
       <th scope="col" class="text-dark">type_paid</th>
       <th scope="col" class="text-dark">Access</th>
       <th scope="col" class="text-dark">Quantity</th>
       <th scope="col" class="text-dark">Price</th>
       <th scope="col" class="text-dark"></th>
     </tr>
   </thead>
    <tbody id="cart_table">
 
    <tr>   <td></td> <td></td> <td></td> <td>Subtotal</td> <td id="subtotal">$00.00</td>
    <td></td> <td></td>
    </tr>
    <tr>   <td></td> <td></td> <td></td> <td>Tax</td> <td id="tax">$00.00</td>
    <td></td> <td></td>
    
    </tr>
    <tr>  <td></td> <td></td> <td></td> <td>Total</td> <td id="total">$00.00</td>
          <td></td> <td></td>
    </tr>
    <tr>  <td></td> <td></td> <td></td>
      <td><a id="check_btn" class="btn btn-outline-warning">Pay</a></td><td><a id="clear" class="btn btn-outline-warning">Clear Cart</a></td>
      <td></td> <td></td>
    </tr>
    </tbody>
  </table> 
 
    
  
 </div>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

`;

        $(content).html(ui);

        sessionStorage.removeItem("cart");
        let total = 0;
        let collective_id = 'cart';
        let collective_name = 'cart';
        let el_array = [];
        Object.keys(sessionStorage).forEach(element_cart => {
            if (element_cart.includes("product_id")) {
                const obj_cart = JSON.parse(sessionStorage.getItem(element_cart));


                $.get("https://cmversiontwo.cmadvocates.com/controller/Payment.php", { check_cart_id: obj_cart.id, token1: sessionStorage.getItem("token") }, function(data) {
                    const obj = JSON.parse(data);

                    if (obj.result == "session") {
                        $("#reauth").modal();
                        return;
                    }
                    $("#cart_table").remove(".flis");

                    obj.check.forEach(element => {

                        if (element.check == "true") {
                            $("#cart_table").prepend(`
        <tr class="flis">
        <td>${obj_cart.name}</td>
        <td>${obj_cart.type_paid}</td>
        <td>${obj_cart.billing_type}</td>
        <td>1</td>
        <td>${obj_cart.price}</td>
        <td>Item is already bought</td>
        <td><button class="btn btn-outline-warning" id="remove_item" data-element="${element_cart}">Remove Item</button></td>
        </tr>
        `);
                        } else {
                            $("#cart_table").prepend(`
                <tr class="flis">
                <td>${obj_cart.name}</td>
                <td>${obj_cart.type_paid}</td>
                <td>${obj_cart.billing_type}</td>
                <td>1</td>
                <td>${obj_cart.price}</td>
                <td>Item is Open</td>
                <td><button class="btn btn-outline-warning" id="remove_item" data-element="${element_cart}">Remove Item</button></td>
                </tr>
                `);
                            total += obj_cart.price * 1;
                            collective_id = collective_id + "_" + obj_cart.id;
                            collective_name = collective_name + "_" + obj_cart.name;

                            el_array.push(element_cart);

                        }


                    });


                    $("#subtotal").text(total.toFixed(2));
                    $("#tax").text((total * 0.1).toFixed(2));
                    $("#total").text((total + (total * 0.1)).toFixed(2));


                });

            }
        });

        $("#cart_table").on("click", "#remove_item", function() {
            sessionStorage.removeItem($(this).attr('data-element'));
            view_cart();

        });



        $("#cart_table").on("click", "#clear", function() {
            Object.keys(sessionStorage).forEach(element => {
                if (element.includes("product_id")) {
                    sessionStorage.removeItem(element);

                    $("#cart_table").append(`
        <tr>
        <td colspan="7">No Item</td>
        </tr>
        `);

                }
            });
            view_cart();

        });


        $("#cart_table").on("click", "#check_btn", function() {
            //
            //console.log("This is the total "+$("#total").text());
            console.log(`The total ${total} The id  ${collective_id} The name ${collective_name}`);
            makePaymentCart(total, collective_id, collective_name, el_array);


            // 
        });

    }

    function view_services_assets(id,service_type) {

      if(service_type == "documents"){
        
        ui = `
   <div class="card-header card-header-primary">
            <h4 class="card-title">Resources</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Documents</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <!--<button type="button" id="main_id_in" data-op="buy_product_document" class="btn btn-primary">View</button>-->
              <button type="button" id="main_id_in" data-op="buy_service" data_id="${id}" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>


</div> 
</div>
</div>
</div>

`;
      }
      else if(service_type == "videos"){
        ui = `
        <div class="card-header card-header-primary">
                 <h4 class="card-title">Resources</h4>
             </div>
       <div class="row">     
       <div class="col-md-6">
           <div class="card">
               <div class="card-header card-header-text card-header-primary">
                 <div class="card-text">
                   <h4 class="card-title">Videos</h4>
                 </div>
               </div>
               <div class="card-body">
                   The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
               </div>
                  <div class="row ml-1">
                    <!-- <button type="button" id="main_id_in" data-op="buy_product_video" class="btn btn-primary">View</button>-->
                   <button type="button"  id="main_id_in" data-op="purchase_video" data_id="${id}" class="btn btn-primary">View</button>
                   </div>
           </div>
       </div>
     </div> 
     </div>
     </div>
     </div>
     
     `;
     
      }
      else if(service_type == "subscription"){
        ui = `
        <div class="card-header card-header-primary">
                 <h4 class="card-title">Resources</h4>
             </div>
       <div class="row">
     
        <div class="col-md-6">
           <div class="card">
               <div class="card-header card-header-text card-header-primary">
                 <div class="card-text">
                   <h4 class="card-title">Subscriptions</h4>
                 </div>
               </div>
               <div class="card-body">
                   The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
               </div>
                  <div class="row ml-1">
                     <!--<button type="button" id="main_id_in" data-op="purchased_subscription" class="btn btn-primary">View</button>-->
                   <button type="button" id="main_id_in" data-op="buy_subscription" data_id="${id}" class="btn btn-primary">View</button>
                   </div>
           </div>
       </div>
     
     </div> 
     </div>
     </div>
     </div>
     
     `;
      }


        $(content).html(ui);



        $(".ml-1").on("click", "#main_id_in", function() {
            console.log($(this).attr('data-op'));
            let myatt = $(this).attr('data-op');
            eval(`${myatt}(${$( this ).attr( 'data_id')})`);

        });


    }


    function list_services(id) {
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
                <button type="button" id="main_id_in" data-op="view_services_assets" class="btn btn-primary">View</button>
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
                <button type="button" id="main_id_in" data-op="view_services_assets" class="btn btn-primary">View</button>
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
                <button type="button" id="main_id_in" data-op="view_services_assets" class="btn btn-primary">View</button>
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


    function booking() {
        ui = `<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
             <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Book Consultation</h4>
                </div>
                <div class="card-body">
             <form action="" method="POST"  enctype="multiple/form-data">
            <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12">
                          <option>Select Practise Area</option>
                          <option value='commercial'>commercial</option>
                          <option value='aviation'>aviation law</option>
                          </select>
</div>

  <h4 class="card-title ">Select Choose Mode Of Communication</h4>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Microsoft Teams
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">Google Meet
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Zoom
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

<div class="form-check form-check-inline">
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"> Phone Call
    <span class="form-check-sign">
        <span class="check"></span>
    </span>
  </label>
</div>

       <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12">
                          <option>Select Associate</option>
                          <option value='partner'>Partner</option>
                          <option value='Senior Associate'>Senior Associate</option>
                          <option value='Associate'>Associate</option>
                          </select>
</div>
           <div class="input-group"> 
                          <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="material-icons">toggle_off</i>
                    </span>
                    </div>
     <select class=" form-control col-12">
                          <option>Choose duration</option>
                          <option value='15mins'>15 mins</option>
                          <option value='30 mins'>30 mins</option>
                          <option value='45 mins'>45 mins</option>
                          <option value='60 mins'>60 mins</option>
                          </select>
</div>



 <div class="form-group">
    <label for="exampleFormControlTextarea1">Additional Notes</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button  id="main_id_in" data-op="choose_time_slot"  class="btn btn-primary">Proceed</button>
</form>


              
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


    function choose_time_slot() {
        ui = `
   <div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
             <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Book Consultation</h4>
                </div>
                <div class="card-body">
      <div class="profile-calendar">
  
  <div id="calendar">
    <div class="calendar-header">
      <div class="overlay">
        <h1>Make appointment</h1>
      </div>
    </div>
    <div class="monthChange"></div>
  </div>

  <div class="inner-wrap">
  
  
      
      <div class="form-name">
        <input type="email" name="email" id="email">
        <label for="email">Your email</label>
      </div>
      <div class="form-name">
        <input type="email" name="email" id="email">
        <label for="email">Your email</label>
      </div>
      
      <button type="submit" class="request disabled">
        Request appointment <br class="break">
        <span>on</span>
        <span class="day"></span>
        <span>at</span>
        <span class="time"></span>
        <div class="sendRequest"></div>
      </button>
   

  </div>
  <div class='timepicker'>
    <div class="owl">
      <div>06:00-06:15</div>
      <div>07:00-07:15</div>
      <div>08:00-08:15</div>
      <div>09:00-09:15</div>
      <div>10:00-10:15</div>
      <div>11:00-11:15</div>
      <div>12:00-12:15</div>
      <div>13:00-13:15</div>
      <div>14:00-14:15</div>
      <div>15:00-15:15</div>
      <div>16:00-16:15</div>
      <div>17:00-17:15</div>
      <div>18:00-18:15</div>
      <div>19:00-19:15</div>
      <div>20:00-20:15</div>
    </div>
    <div class="fade-l"></div>
    <div class="fade-r"></div>
  </div>
    
</div>



              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;




        $(content).html(ui);

        var time;
        var day;
        var month;
        var year;
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var center;

        // remove border if the selected date is today's date
        function todayEqualActive() {
            setTimeout(function() {
                if ($(".ui-datepicker-current-day").hasClass("ui-datepicker-today")) {
                    $(".ui-datepicker-today")
                        .children(".ui-state-default")
                        .css("border-bottom", "0");
                } else {
                    $(".ui-datepicker-today")
                        .children(".ui-state-default")
                        .css("border-bottom", "2px solid rgba(53,60,66,0.5)");
                }
            }, 20);
        }

        // call the above function on document ready
        todayEqualActive();

        $('#calendar').datepicker({
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            onChangeMonthYear: function() {
                todayEqualActive();
            },
            onSelect: function(dateText, inst) {
                var date = $(this).datepicker('getDate'),
                    day = date.getDate(),
                    month = date.getMonth() + 1,
                    year = date.getFullYear();

                // display day and month on submit button
                var monthName = months[month - 1];
                $(".request .day").text(monthName + " " + day);

                todayEqualActive();

                $(".request").removeClass("disabled");

                var index;

                setTimeout(function() {
                    $(".ui-datepicker-calendar tbody tr").each(function() {
                        if ($(this).find(".ui-datepicker-current-day").length) {
                            index = $(this).index() + 1;
                        }
                    });

                    // insert timepiker placeholder after selected row
                    $("<tr class='timepicker-cf'></tr>")
                        .insertAfter($(".ui-datepicker-calendar tr")
                            .eq(index));

                    var top = $(".timepicker-cf").offset().top - 2;

                    if ($(".timepicker").css('height') == '60px') {
                        $(".timepicker-cf").animate({
                            'height': '0px'
                        }, { duration: 200, queue: false });
                        $(".timepicker").animate({
                            'top': top
                        }, 200);
                        $(".timepicker-cf").animate({
                            'height': '60px'
                        }, 200);
                    } else {
                        $(".timepicker").css('top', top);
                        $(".timepicker, .timepicker-cf").animate({
                            'height': '60px'
                        }, 200);
                    }
                }, 0);

                // display time on submit button
                time = $(".owl-stage .center").text();
                $(".request .time").text(time);

                $(".owl-item").removeClass("center-n");
                center = $(".owl-stage").find(".center");
                center.prev("div").addClass("center-n");
                center.next("div").addClass("center-n");
            }
        });

        // if the inputs arent empty force ":focus state"
        $(".form-name input").each(function() {
            $(this).keyup(function() {
                if (this.value) {
                    $(this).siblings("label").css({
                        'font-size': '0.8em',
                        'left': '.15rem',
                        'top': '0%'
                    });
                }
                // remove force if they're empty
                else {
                    $(this).siblings("label").removeAttr("style");
                }
            });
        });

        $(".timepicker").on('click', '.owl-next', function() {
            time = $(".owl-stage .center").text();
            $(".request .time").text(time);

            $(".owl-item").removeClass("center-n");
            center = $(".owl-stage").find(".center");
            center.prev("div").addClass("center-n");
            center.next("div").addClass("center-n");
        });

        $(".timepicker").on('click', '.owl-prev', function() {
            time = $(".owl-stage .center").text();
            $(".request .time").text(time);

            $(".owl-item").removeClass("center-n");
            center = $(".owl-stage").find(".center");
            center.prev("div").addClass("center-n");
            center.next("div").addClass("center-n");
        });

        $('.owl').owlCarousel({
            center: true,
            loop: true,
            items: 5,
            dots: false,
            nav: true,
            navText: " ",
            mouseDrag: false,
            touchDrag: true,
            responsive: {
                0: {
                    items: 3
                },
                700: {
                    items: 5
                },
                1200: {
                    items: 7
                }
            }
        });

        $(document).on('click', '.ui-datepicker-next', function(e) {
            $(".timepicker-cf").hide(0);
            $(".timepicker").css({
                'height': '0'
            });
            e.preventDefault();
            $(".ui-datepicker").animate({
                "-webkit-transform": "translate(100%,0)"
            }, 200);
        });

        $(document).on('click', '.ui-datepicker-prev', function() {
            $(".timepicker-cf").hide(0);
            $(".timepicker").css({
                'height': '0'
            });
            $(".ui-datepicker").animate({
                'transform': 'translateX(-100%)'
            }, 200);
        });

        $(window).on('resize', function() {
            $(".timepicker").css('top', $(".timepicker-cf").offset().top - 2);
        });




    }



    function view_product_resources() {
        ui = `
   <div class="card-header card-header-primary">
            <h4 class="card-title">Purchased Resources</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Documents</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="buy_product_document" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>

    <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Consultation</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>

  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Videos</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button"  id="main_id_in" data-op="buy_product_video" class="btn btn-primary">View</button>
              </div>
      </div>
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

    function view_service_resources() {
        ui = `
   <div class="card-header card-header-primary">
            <h4 class="card-title">Purchased Resources</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Documents</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="buy_product_document" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>

    <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Consultation</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>

  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Videos</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button"  id="main_id_in" data-op="buy_product_video" class="btn btn-primary">View</button>
              </div>
      </div>
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



    function purchased_membership() {
        ui = `
   
<div class="card-header card-header-primary">
            <h4 class="card-title">Purchased Membership</h4>
        </div>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Subscription name(standard)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="view_product_resources" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
</div> 

<div class="card-header card-header-primary">
            <h4 class="card-title">Upgrade Now</h4>
        </div>

           <div class="row">
  <div class="col-md-6">
    <div class="card">
        <div class="card-header card-header-primary">
            <h4 class="card-title">Elite Membership</h4>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-center mb-3">
            <p>Free legal templates</p>
            <span class="material-icons">check</span> 
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p>Guaranteed faster turn arounds</p>
            <span class="material-icons success">check</span> 
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p>Legal advice consultation</p>
            <span class="material-icons">check</span> 
            </div>
            <div class="d-flex justify-content-center mb-3">
            <p>Unlimited contract reviews and amendments</p>
              <p style="margin-left: 20px;">:<b>Limited to 5 per month</b></p> 
            </div>

            <div class="d-flex justify-content-center mb-3">
            <p>Inhouse counsel Secondment</p>
            <span class="material-icons">close</span> 
            </div>
            <div class="d-flex justify-content-center mb-3">
            <p>Setup your inhouse legal department</p>
            <span class="material-icons">close</span> 
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p style="font-size:20px; font-weight:bold;">kes 30,000 monthly</p>
            </div>
            <div class="d-flex justify-content-center mb-3">
            <img class="img" style="width:75px; height:75px;" src="assets/img/visa.png" />
              <img class="img" style="width:75px; height:75px; margin-left: 10px;" src="assets/img/mpesa.png" /> 
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p style="font-size:15px; font-weight:bold;">Get a discount with an annual subscription <del>kes30,000</del> <ins>kes 29,500</ins>!</p>
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p style="font-size:15px; font-weight:bold;">Per month billed annually</p><br>
            </div>
              <button type="button" data-toggle="modal" data-target="#exampleModalLong" class="btn btn-default">Purchase</button>
        </div>
    </div>
  </div>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Upload these two files to be able to proceed</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" class="inputFileHidden">
    <div class="input-group">
        <input type="text" class="form-control inputFileVisible" placeholder="Certificate Of Registration">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">description</i>
            </button>
        </span>
    </div>
  </div>

    <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" class="inputFileHidden">
    <div class="input-group">
        <input type="text" class="form-control inputFileVisible" placeholder="Kra Pin">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">description</i>
            </button>
        </span>
    </div>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="window.location.href='profileBilling.html'">Proceed</button>
      </div>
    </div>
  </div>
</div>
</div>

   <div class="col-md-12">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">You have already purchased</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
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



    function purchased_subscription() {
        ui = `
   
<div class="card-header card-header-primary">
            <h4 class="card-title">Purchased Subscription</h4>
        </div>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Subscription name(standard)</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1">
                <button type="button" id="main_id_in" data-op="view_service_resources" class="btn btn-primary">View</button>
              </div>
      </div>
  </div>
</div> 

<div class="card-header card-header-primary">
            <h4 class="card-title">Upgrade Now</h4>
        </div>

           <div class="row">
  <div class="col-md-6">
    <div class="card">
        <div class="card-header card-header-primary">
            <h4 class="card-title">Elite Membership</h4>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-center mb-3">
            <p>Free legal templates</p>
            <span class="material-icons">check</span> 
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p>Guaranteed faster turn arounds</p>
            <span class="material-icons success">check</span> 
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p>Legal advice consultation</p>
            <span class="material-icons">check</span> 
            </div>
            <div class="d-flex justify-content-center mb-3">
            <p>Unlimited contract reviews and amendments</p>
              <p style="margin-left: 20px;">:<b>Limited to 5 per month</b></p> 
            </div>

            <div class="d-flex justify-content-center mb-3">
            <p>Inhouse counsel Secondment</p>
            <span class="material-icons">close</span> 
            </div>
            <div class="d-flex justify-content-center mb-3">
            <p>Setup your inhouse legal department</p>
            <span class="material-icons">close</span> 
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p style="font-size:20px; font-weight:bold;">kes 30,000 monthly</p>
            </div>
            <div class="d-flex justify-content-center mb-3">
            <img class="img" style="width:75px; height:75px;" src="assets/img/visa.png" />
              <img class="img" style="width:75px; height:75px; margin-left: 10px;" src="assets/img/mpesa.png" /> 
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p style="font-size:15px; font-weight:bold;">Get a discount with an annual subscription <del>kes30,000</del> <ins>kes 29,500</ins>!</p>
            </div>
              <div class="d-flex justify-content-center mb-3">
            <p style="font-size:15px; font-weight:bold;">Per month billed annually</p><br>
            </div>
              <button type="button" data-toggle="modal" data-target="#exampleModalLong" class="btn btn-default">Purchase</button>
        </div>
    </div>
  </div>


<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Upload these two files to be able to proceed</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" class="inputFileHidden">
    <div class="input-group">
        <input type="text" class="form-control inputFileVisible" placeholder="Certificate Of Registration">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">description</i>
            </button>
        </span>
    </div>
  </div>

    <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" class="inputFileHidden">
    <div class="input-group">
        <input type="text" class="form-control inputFileVisible" placeholder="Kra Pin">
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-primary">
                <i class="material-icons">description</i>
            </button>
        </span>
    </div>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick="window.location.href='profileBilling.html'">Proceed</button>
      </div>
    </div>
  </div>
</div>
</div>

   <div class="col-md-12">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">You have already purchased</h4>
            </div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
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



    function index() {
        ui = `
   <div class="card-header card-header-primary"><h4 class="card-title">Memberships</h4></div>
  <div class="row" id="mytable"></div>

  <div class="card-header card-header-primary"><h4 class="card-title">Subscriptions</h4></div>
  <div class="row" id="sub"></div>

<div class="card-header card-header-primary"><h4 class="card-title">Consultation</h4></div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text"><h4 class="card-title">Consult In A Lawyer</h4></div>
          </div>
          <div class="card-body">
              The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
          </div>
             <div class="row ml-1"><button type="button" id="main_id_in" data-op="booking"  class="btn btn-primary">View</button></div>
      </div>
  </div> 
</div>

  <div class="card-header card-header-primary">
            <h4 class="card-title">Services</h4>
        </div>
  <div class="row" id="service_name">
  <!---->
  <div class="col-md-6">
  <div class="card">
      <div class="card-header card-header-text card-header-primary">
        <div class="card-text">
          <h4 class="card-title">CM PORTAL(Service Name)</h4>
        </div>
      </div>
      <div class="card-body">
      CM PORTAL
      </div>

          <div class="row ml-1">
          
          <button type="button" id="main_id_in" data-op="service"  class="btn btn-primary">Resources</button>
          </div>
  </div>
</div>
   <!----> 
</div> 
</div>

              `;


        $.get("https://cmversiontwo.cmadvocates.com/controller/Products.php", { getproducts: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }
            $("#mytable").empty();
            obj.products.forEach(element => {

                $("#mytable").append(`
                      <div class="col-md-4">
                      <div class="card">
                          <div class="card-header card-header-text card-header-primary">
                            <div class="card-text">
                              <h4 class="card-title">${element.Name}(product name)</h4>
                            </div>
                          </div>
                          <div class="card-body">
                          ${element.status}
                          </div>
                             <div class="row ml-1">
  <!--                              <button type="button" id="main_id_in" data-op="purchased_membership" class="btn btn-primary">View</button>-->
                              <button type="button" id="main_id_in" data-op="buy_membership" data_id ="${element.id}" class="btn btn-primary">View</button>
                              </div>
                      </div>
                  </div>
                      
                      
                      `);
            });
        });


        $.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { getSubscriptionsNext: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }
            $("#sub").empty();
            obj.subscriptions.forEach(element => {

              let JSONObject = JSON.parse(element.features);
              let pTga = "";
              let pTag2 = ""; 
              if(element.discount == "no"){

                pTga = `KES ${element.price} monthly  : KES ${element.price * 12} annually`;

              }else{
                pTga = `KES ${element.price} monthly`;
                pTag2 = `Get a discount with an annual subscription <del>kes${element.price * 12}</del> <ins>kes ${element.annual_price}</ins>!`;

              }
              let potential_id = element.Name;
              let kenetic =  potential_id.replace(/\s/g, '_');


                if (element.payment_id == "null") {

                    $("#sub").append(`<div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-primary">
              <h4 class="card-title">${element.Name}</h4>
          </div>
          <div class="card-body" id="${kenetic}">


                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:20px; font-weight:bold;">${pTga}</p>
              </div>
              <div class="d-flex justify-content-center mb-3">
              <img class="img" style="width:75px; height:75px;" src="assets/img/visa.png" />
                <img class="img" style="width:75px; height:75px; margin-left: 10px;" src="assets/img/mpesa.png" /> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:15px; font-weight:bold;">${pTag2}</p>
              </div>

              <div class="col-12">
              <p class="text-center">
              <button class="btn btn-primary" id="main_id_in" data-op="makePayment" 
              onclick="sessionStorage.setItem('id',${element.id});
              sessionStorage.setItem('type_paid','subscriptions');
              sessionStorage.setItem('name','${element.Name}');
              sessionStorage.setItem('billing_type','annually');
              sessionStorage.setItem('price',${element.annual_price * 1});">
               Purchase Anually </button>
              <button class="btn btn-default" id="main_id_in" data-op="makePayment" 
              onclick="sessionStorage.setItem('id',${element.id});
              sessionStorage.setItem('type_paid','subscriptions');
              sessionStorage.setItem('name','${element.Name}');
              sessionStorage.setItem('billing_type','monthly');
              sessionStorage.setItem('price',${element.price * 1});">
               Purchase</button>
               </p>
               </div>
 


               <div class="col-12">
               <p class="text-center">
               <button class="btn btn-primary" id="main_id_in" data-op="mPayment" 
               onclick="sessionStorage.setItem('id',${element.id});
               sessionStorage.setItem('type_paid','subscriptions');
               sessionStorage.setItem('name','${element.Name}');
               sessionStorage.setItem('billing_type','annually');
               sessionStorage.setItem('price',${element.annual_price * 1});">
                MPurchase Anually </button>
               <button class="btn btn-default" id="main_id_in" data-op="mPayment" 
               onclick="sessionStorage.setItem('id',${element.id});
               sessionStorage.setItem('type_paid','subscriptions');
               sessionStorage.setItem('name','${element.Name}');
               sessionStorage.setItem('billing_type','monthly');
               sessionStorage.setItem('price',${element.price * 1});">
                MPurchase</button>
                </p>
                </div>


          </div>
      </div>
    </div>
                        
                        `);
                } 
                else {

                    let btn = '';
                    if (element.billing_type == 'annually') {
                        btn = `<button type="button" id="main_id_in" data-op="choose_subscription_form" class="btn btn-primary">Cancel Subscription</button>`;
                    } else if (element.billing_type == 'monthly') {
                        btn = `<button type="button" id="main_id_in" data-op="choose_billing_form" class="btn btn-primary"><span class="material-icons">paid</span> Bill Annually</button>`;

                    }

                    $("#sub").append(`<div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-primary">
              <h4 class="card-title">${element.Name}</h4>
          </div>
          <div class="card-body" id="${kenetic}">
              
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:20px; font-weight:bold;">${pTga}</p>
              </div>
              <div class="d-flex justify-content-center mb-3">
              <img class="img" style="width:75px; height:75px;" src="assets/img/visa.png" />
                <img class="img" style="width:75px; height:75px; margin-left: 10px;" src="assets/img/mpesa.png" /> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:15px; font-weight:bold;" class="text-center">${pTag2}</p>
              </div>
              <div class="col-12">
              <p class="text-center">
              ${btn}  
              </p>
              </div>
          </div>
      </div>
    </div>
                        
                        `);

                }


                JSONObject.features.forEach(featuer => {
                  //console.log($("#"+kenetic).attr());
                    if(featuer.presence == '1'){
                      $("#"+kenetic).prepend(`<div class="d-flex justify-content-center mb-3"><p>${featuer.feature}</p><span class="material-icons">check</span></div>`);
                      
                    }
                    else{
                      $("#"+kenetic).prepend(`<div class="d-flex justify-content-center mb-3"><p>${featuer.feature}</p><span class="material-icons">close</span></div>`);
                      
                    }
                });
  


            });
        });

        $.get("https://cmversiontwo.cmadvocates.com/controller/Service.php", { getService: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
          const obj = JSON.parse(data);

          if (obj.result == "session") {
              $("#reauth").modal();
              return;
          }
          $("#service_name").empty();

          obj.services.forEach(element => {
            console.log("->"+element.service_type);
            if(element.service_type == "documents"){
        
              ui = `
        <div class="col-md-6">
            <div class="card">
                <div class="card-header card-header-text card-header-primary">
                  <div class="card-text">
                    <h4 class="card-title">${element.Name}</h4>
                  </div>
                </div>
                <div class="card-body">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
                </div>
                   <div class="row ml-1">
                      <!--<button type="button" id="main_id_in" data-op="buy_product_document" class="btn btn-primary">View</button>-->
                    <button type="button" id="main_id_in" data-op="buy_service" data_id="${element.id}" class="btn btn-primary">Documents</button>
                    </div>
            </div>
        </div>
      
      
      `;
      
$("#service_name").append(ui);
            }
            else if(element.service_type == "videos"){
              ui = `     
             <div class="col-md-6">
                 <div class="card">
                     <div class="card-header card-header-text card-header-primary">
                       <div class="card-text">
                         <h4 class="card-title">${element.Name}</h4>
                       </div>
                     </div>
                     <div class="card-body">
                         The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona...
                     </div>
                        <div class="row ml-1">
                          <!-- <button type="button" id="main_id_in" data-op="buy_product_video" class="btn btn-primary">View</button>-->
                         <button type="button"  id="main_id_in" data-op="purchase_video" data_id="${element.id}" class="btn btn-primary">Videos</button>
                         </div>
                 </div>
             </div>
           
           `;
           
$("#service_name").append(ui);
            }
          });
      });


        $(content).html(ui);
        $("#mytable").on("click", "#main_id_in", function() {
            let myatt = $(this).attr('data-op');
            eval(`${myatt}(${$( this ).attr( 'data_id')})`);

        });

        $("#sub").on("click", "#main_id_in", function() {
            let myatt = $(this).attr('data-op');
            eval(`${myatt}(${$( this ).attr( 'data_id')})`);

        });

        $("#service_name").on("click", "#main_id_in", function() {
          let myatt = $(this).attr('data-op');
          eval(`${myatt}(${$( this ).attr( 'data_id')})`);

      });
    }


    function purchase_video(id) {
        ui = `
  <div class="card-header card-header-primary mb-2">
  <h4 class="card-title">Purchase Video</h4>
</div>
<div class="row" id="videos">



</div>
  `;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Videos.php", { getServicevideos: id, token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }
            $("#videos").empty();
            obj.videos.forEach(element => {

                console.log(element.payment_id);
                if (element.payment_id == "null") {

                    $("#videos").append(`
      
<div class="col-md-6">
<div class="card">
<div class="card-header card-header-text card-header-primary">
  <div class="card-text">
    <h4 class="card-title">${element.Name}(video name)</h4>
  </div>
</div>
<div class="card-body">
    <div class="video">
<div class="video-container" id="video-information">
<div class="playback-animation" id="playback-animation">
<svg class="playback-icons">
<use class="hidden" href="#play-icon"></use>
<use href="#pause"></use>
</svg>
</div>

<video controls class="video" id="video" preload="metadata" poster="images/poster.jpg">
<source src="${element.preview.replace("./", "controller/")   }" type="video/mp4"></source>
</video>

<div class="video-controls hidden" id="video-controls">
<div class="video-progress">
<progress id="progress-bar" value="0" min="0"></progress>
<input class="seek" id="seek" value="0" min="0" type="range" step="1">
<div class="seek-tooltip" id="seek-tooltip">00:00</div>
</div>

<div class="bottom-controls">
<div class="left-controls">
  <button class="play-video" data-title="Play (k)" id="play">
    <svg class="playback-icons">
      <use href="#play-icon"></use>
      <use class="hidden" href="#pause"></use>
    </svg>
  </button>

  <div class="volume-controls">
    <button data-title="Mute (m)" class="volume-button play-video" id="volume-button">
      <svg>
        <use class="hidden" href="#volume-mute"></use>
        <use class="hidden" href="#volume-low"></use>
        <use href="#volume-high"></use>
      </svg>
    </button>

    <input class="volume" id="volume" value="1"
    data-mute="0.5" type="range" max="1" min="0" step="0.01">
  </div>

  <div class="time">
    <time id="time-elapsed">00:00</time>
    <span> / </span>
    <time id="duration">00:00</time>
  </div>
</div>

<div class="right-controls">
  <button  data-title="PIP (p)" class="pip-button play-video" id="pip-button">
    <svg>
      <use href="#pip"></use>
    </svg>
  </button>
  <button data-title="Full screen (f)" class="fullscreen-button play-video " id="fullscreen-button">
    <svg>
      <use href="#fullscreen"></use>
      <use href="#fullscreen-exit" class="hidden"></use>
    </svg>
  </button>
</div>
</div>
</div>
</div>
</div>

<svg style="display: none">
<defs>
<symbol id="pause" viewBox="0 0 24 24">
<path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
</symbol>

<symbol id="play-icon" viewBox="0 0 24 24">
<path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
</symbol>

<symbol id="volume-high" viewBox="0 0 24 24">
<path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
</symbol>

<symbol id="volume-low" viewBox="0 0 24 24">
<path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
</symbol>

<symbol id="volume-mute" viewBox="0 0 24 24">
<path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
</symbol>

<symbol id="fullscreen" viewBox="0 0 24 24">
<path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
</symbol>

<symbol id="fullscreen-exit" viewBox="0 0 24 24">
<path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
</symbol>

<symbol id="pip" viewBox="0 0 24 24">
<path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
</symbol>
</defs>
</svg>

      </div>
      <button class="btn btn-default" id="main_id_in" data-op="makePayment" 
      onclick="sessionStorage.setItem('id',${element.id});
      sessionStorage.setItem('type_paid','videos');
      sessionStorage.setItem('name','${element.Name}');
      sessionStorage.setItem('billing_type','la');
      sessionStorage.setItem('price',${element.price * 1});
      sessionStorage.setItem('service_id',${element.service_id});
      ">
       Purchase</button>

       <button class="btn btn-default" id="main_id_in" data-op="mPayment" 
       onclick="sessionStorage.setItem('id',${element.id});
       sessionStorage.setItem('type_paid','videos');
       sessionStorage.setItem('name','${element.Name}');
       sessionStorage.setItem('billing_type','la');
       sessionStorage.setItem('price',${element.price * 1});
       sessionStorage.setItem('service_id',${element.service_id});
       ">
        MPurchase</button>
</div>
</div>
      
                        `);
                } else {

                    $("#videos").append(`                
      <div class="col-md-6">
        <div class="card">
        <div class="card-header card-header-text card-header-primary">
          <div class="card-text">
            <h4 class="card-title">${element.Name}(video name)</h4>
          </div>
        </div>
        <div class="card-body">
            <div class="video">
        <div class="video-container" id="video-information">
        <div class="playback-animation" id="playback-animation">
        <svg class="playback-icons">
        <use class="hidden" href="#play-icon"></use>
        <use href="#pause"></use>
        </svg>
        </div>
        
        <video controls class="video" id="video" preload="metadata" poster="images/poster.jpg">
        <source src="${element.preview.replace("./", "controller/")   }" type="video/mp4"></source>
        </video>
        
        <div class="video-controls hidden" id="video-controls">
        <div class="video-progress">
        <progress id="progress-bar" value="0" min="0"></progress>
        <input class="seek" id="seek" value="0" min="0" type="range" step="1">
        <div class="seek-tooltip" id="seek-tooltip">00:00</div>
        </div>
        
        <div class="bottom-controls">
        <div class="left-controls">
          <button class="play-video" data-title="Play (k)" id="play">
            <svg class="playback-icons">
              <use href="#play-icon"></use>
              <use class="hidden" href="#pause"></use>
            </svg>
          </button>
        
          <div class="volume-controls">
            <button data-title="Mute (m)" class="volume-button play-video" id="volume-button">
              <svg>
                <use class="hidden" href="#volume-mute"></use>
                <use class="hidden" href="#volume-low"></use>
                <use href="#volume-high"></use>
              </svg>
            </button>
        
            <input class="volume" id="volume" value="1"
            data-mute="0.5" type="range" max="1" min="0" step="0.01">
          </div>
        
          <div class="time">
            <time id="time-elapsed">00:00</time>
            <span> / </span>
            <time id="duration">00:00</time>
          </div>
        </div>
        
        <div class="right-controls">
          <button  data-title="PIP (p)" class="pip-button play-video" id="pip-button">
            <svg>
              <use href="#pip"></use>
            </svg>
          </button>
          <button data-title="Full screen (f)" class="fullscreen-button play-video " id="fullscreen-button">
            <svg>
              <use href="#fullscreen"></use>
              <use href="#fullscreen-exit" class="hidden"></use>
            </svg>
          </button>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        <svg style="display: none">
        <defs>
        <symbol id="pause" viewBox="0 0 24 24">
        <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
        </symbol>
        
        <symbol id="play-icon" viewBox="0 0 24 24">
        <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
        </symbol>
        
        <symbol id="volume-high" viewBox="0 0 24 24">
        <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
        </symbol>
        
        <symbol id="volume-low" viewBox="0 0 24 24">
        <path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
        </symbol>
        
        <symbol id="volume-mute" viewBox="0 0 24 24">
        <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
        </symbol>
        
        <symbol id="fullscreen" viewBox="0 0 24 24">
        <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
        </symbol>
        
        <symbol id="fullscreen-exit" viewBox="0 0 24 24">
        <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
        </symbol>
        
        <symbol id="pip" viewBox="0 0 24 24">
        <path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
        </symbol>
        </defs>
        </svg>
        
              </div>
              
        </div>
        </div>        
                        `);

                }


            });
        });



        $(content).html(ui);



        $("#videos").on("click", "#main_id_in", function() {
            console.log($(this).attr('data-op'));
            let myatt = $(this).attr('data-op');
            eval(`${myatt}()`);

        });

    }

    function choose_video_subscription_form() {
        ui = `<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
           
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Where is the Video?</h4>
                </div>
                <div class="card-body">
                    <form  class="row" enctype="multiple/form-data">
                    <div class="form-group col-6">
                    <div class="form-group d-flex align-items-center">
    <label for="exampleFormControlSelect2">Choose Subscription</label>
    <select style="height:50px;" multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
      <option>standard </option>
      <option>elite </option>
    </select>
  </div>

                <div class="form-group">
    <label for="exampleFormControlSelect2">Choose Service</label>
    <select style="height:50px;" multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
      <option>Webinars </option>
      <option>Legal Documents Portal </option>
    </select>
  </div>

       
                          <div class="col-12">
                        <button type="button" id="main_id_in" data-op="purchase_video" class="btn btn-primary">Proceed</button> 
                          </div>
                          
                          
                    </form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

        $(content).html(ui);


        $("#mytable").on("click", "#main_id_in", function() {
            console.log($(this).attr('data-op'));
            let myatt = $(this).attr('data-op');
            eval(`${myatt}()`);

        });

    }



    function view_videos() {
        ui = `   <div class="row" id="videos"></div>
`;


        $.get("https://cmversiontwo.cmadvocates.com/controller/Videos.php", { getPurchasedVideos: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }
            $("#videos").empty();
            obj.videos.forEach(element => {

              

      $("#videos").append(`
      <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
      
      <div class="card ">
      <div class="card-header"><h5 class="card-title">${element.Name}</h5></div>
      
      <div class="card-body">
      <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="${element.video.replace("./", "controller/")   }" allowfullscreen sandbox></iframe>
    </div>

      </div>
      </div>                
         `);



            });
        });

        $(content).html(ui);

        $("#mytable").on("click", "#main_id_in", function() {
            console.log($(this).attr('data-op'));
            let myatt = $(this).attr('data-op');
            eval(`${myatt}()`);

        });

    }


    function buy_membership(id) {
        ui = `<div id="mytable" class="row"></div>`;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { sub_id: id }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }

            $("#mytable").empty();
            obj.subscriptions.forEach(element => {


              let JSONObject = JSON.parse(element.features);
              let pTga = "";
              let pTag2 = ""; 
              if(element.discount == "no"){

                pTga = `KES ${element.price} monthly  : KES ${element.price * 12} annually`;

              }else{
                pTga = `KES ${element.price} monthly`;
                pTag2 = `Get a discount with an annual subscription <del>kes${element.price * 12}</del> <ins>kes ${element.annual_price}</ins>!`;

              }

              let potential_id = element.Name;
              let kenetic =  potential_id.replace(/\s/g, '_');


                if (element.payment_id == "null") {

                    $("#mytable").append(`<div class="col-md-6">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">${element.Name}</h4>
            </div>
            <div class="card-body" id="${kenetic}">
                
                  <div class="d-flex justify-content-center mb-3">
                <p style="font-size:20px; font-weight:bold;">${pTga}</p>
                </div>
                <div class="d-flex justify-content-center mb-3">
                <img class="img" style="width:75px; height:75px;" src="assets/img/visa.png" />
                  <img class="img" style="width:75px; height:75px; margin-left: 10px;" src="assets/img/mpesa.png" /> 
                </div>
                  <div class="d-flex justify-content-center mb-3">
                <p style="font-size:15px; font-weight:bold;">${pTag2}</p>
                </div>
                <div class="col-12">
                <p class="text-center">
                <button class="btn btn-primary" id="main_id_in" data-op="makePayment" 
                onclick="sessionStorage.setItem('id',${element.id});
                sessionStorage.setItem('type_paid','subscriptions');
                sessionStorage.setItem('name','${element.Name}');
                sessionStorage.setItem('billing_type','annually');
                sessionStorage.setItem('price',${element.annual_price * 1});">
                 Purchase Anually </button>
                <button class="btn btn-default" id="main_id_in" data-op="makePayment" 
                onclick="sessionStorage.setItem('id',${element.id});
                sessionStorage.setItem('type_paid','subscriptions');
                sessionStorage.setItem('name','${element.Name}');
                sessionStorage.setItem('billing_type','monthly');
                sessionStorage.setItem('price',${element.price * 1});">
                 Purchase</button>
                 </p>
                 </div>


                 <div class="col-12">
                <p class="text-center">
                <button class="btn btn-primary" id="main_id_in" data-op="mPayment" 
                onclick="sessionStorage.setItem('id',${element.id});
                sessionStorage.setItem('type_paid','subscriptions');
                sessionStorage.setItem('name','${element.Name}');
                sessionStorage.setItem('billing_type','annually');
                sessionStorage.setItem('price',${element.annual_price * 1});">
                 MPurchase Anually </button>
                <button class="btn btn-default" id="main_id_in" data-op="mPayment" 
                onclick="sessionStorage.setItem('id',${element.id});
                sessionStorage.setItem('type_paid','subscriptions');
                sessionStorage.setItem('name','${element.Name}');
                sessionStorage.setItem('billing_type','monthly');
                sessionStorage.setItem('price',${element.price * 1});">
                 MPurchase</button>
                 </p>
                 </div>


            </div>
        </div>
      </div>
                          
                          `);
                } else {

                    let btn = '';
                    if (element.billing_type == 'annually') {
                        btn = `<button type="button" id="main_id_in" data-op="choose_subscription_form" class="btn btn-primary">Cancel Subscription</button>`;
                    } else if (element.billing_type == 'monthly') {
                        btn = `<button type="button" id="main_id_in" data-op="choose_billing_form" class="btn btn-primary"><span class="material-icons">paid</span> Bill Annually</button>`;

                    }

                    $("#mytable").append(`<div class="col-md-6">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">${element.Name}</h4>
            </div>
            <div class="card-body" id="${kenetic}">
                
                  <div class="d-flex justify-content-center mb-3">
                <p style="font-size:20px; font-weight:bold;">${pTga}</p>
                </div>
                <div class="d-flex justify-content-center mb-3">
                <img class="img" style="width:75px; height:75px;" src="assets/img/visa.png" />
                  <img class="img" style="width:75px; height:75px; margin-left: 10px;" src="assets/img/mpesa.png" /> 
                </div>
                  <div class="d-flex justify-content-center mb-3">
                <p style="font-size:15px; font-weight:bold;">${pTag2}</p>
                </div>
                
                ${btn}  
            </div>
        </div>
      </div>
                          
                          `);

                }

                
                JSONObject.features.forEach(featuer => {
                  //console.log($("#"+kenetic).attr());
                    if(featuer.presence == '1'){
                      $("#"+kenetic).prepend(`<div class="d-flex justify-content-center mb-3"><p>${featuer.feature}</p><span class="material-icons">check</span></div>`);
                      
                    }
                    else{
                      $("#"+kenetic).prepend(`<div class="d-flex justify-content-center mb-3"><p>${featuer.feature}</p><span class="material-icons">close</span></div>`);
                      
                    }
                });

            });
        });



        $(content).html(ui);
        $("#mytable").on("click", "#main_id_in", function() {
            console.log($(this).attr('data-op'));
            let myatt = $(this).attr('data-op');
            eval(`${myatt}()`);

        });

    }


    function buy_subscription(id) {
        ui = ` <div class="row" id="mytable"></div> `;


        $.get("https://cmversiontwo.cmadvocates.com/controller/Subscriptions.php", { service_id: id }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }

            $("#mytable").empty();
            obj.subscriptions.forEach(element => {

                console.log(element.payment_id);
                if (element.payment_id == "null") {

                    $("#mytable").append(`<div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-primary">
              <h4 class="card-title">${element.Name}</h4>
          </div>
          <div class="card-body">
              <div class="d-flex justify-content-center mb-3">
              <p>Free legal templates</p>
              <span class="material-icons">check</span> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p>Guaranteed faster turn arounds</p>
              <span class="material-icons success">check</span> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p>Legal advice consultation</p>
              <span class="material-icons">check</span> 
              </div>
              <div class="d-flex justify-content-center mb-3">
              <p>Unlimited contract reviews and amendments</p>
                <p style="margin-left: 20px;">:<b>Limited to 5 per month</b></p> 
              </div>
  
              <div class="d-flex justify-content-center mb-3">
              <p>Inhouse counsel Secondment</p>
              <span class="material-icons">close</span> 
              </div>
              <div class="d-flex justify-content-center mb-3">
              <p>Setup your inhouse legal department</p>
              <span class="material-icons">close</span> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:20px; font-weight:bold;">kes ${element.price} monthly</p>
              </div>
              <div class="d-flex justify-content-center mb-3">
              <img class="img" style="width:75px; height:75px;" src="assets/img/visa.png" />
                <img class="img" style="width:75px; height:75px; margin-left: 10px;" src="assets/img/mpesa.png" /> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:15px; font-weight:bold;">Get a discount with an annual subscription <del>kes${element.price}</del> <ins>kes ${element.annual_price}</ins>!</p>
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:15px; font-weight:bold;">Per month billed annually</p><br>
              </div>

              <button class="btn btn-primary" id="main_id_in" data-op="makePayment" 
              onclick="sessionStorage.setItem('id',${element.id});
              sessionStorage.setItem('type_paid','subscriptions');
              sessionStorage.setItem('name','${element.Name}');
              sessionStorage.setItem('billing_type','annually');
              sessionStorage.setItem('price',${element.annual_price * 12});">
               Purchase Anually </button>
              <button class="btn btn-default" id="main_id_in" data-op="makePayment" 
              onclick="sessionStorage.setItem('id',${element.id});
              sessionStorage.setItem('type_paid','subscriptions');
              sessionStorage.setItem('name','${element.Name}');
              sessionStorage.setItem('billing_type','monthly');
              sessionStorage.setItem('price',${element.price * 1});">
               Purchase</button>

               <button class="btn btn-primary" id="main_id_in" data-op="mPayment" 
              onclick="sessionStorage.setItem('id',${element.id});
              sessionStorage.setItem('type_paid','subscriptions');
              sessionStorage.setItem('name','${element.Name}');
              sessionStorage.setItem('billing_type','annually');
              sessionStorage.setItem('price',${element.annual_price * 12});">
               MPurchase Anually </button>
              <button class="btn btn-default" id="main_id_in" data-op="mPayment" 
              onclick="sessionStorage.setItem('id',${element.id});
              sessionStorage.setItem('type_paid','subscriptions');
              sessionStorage.setItem('name','${element.Name}');
              sessionStorage.setItem('billing_type','monthly');
              sessionStorage.setItem('price',${element.price * 1});">
               MPurchase</button>
          </div>
      </div>
    </div>
                        
                        `);
                } else {

                    let btn = '';
                    if (element.billing_type == 'annually') {
                        btn = `<button type="button" id="main_id_in" data-op="choose_subscription_form" class="btn btn-primary">Cancel Subscription</button>`;
                    } else if (element.billing_type == 'monthly') {
                        btn = `<button type="button" id="main_id_in" data-op="choose_billing_form" class="btn btn-primary"><span class="material-icons">paid</span> Bill Annually</button>`;

                    }

                    $("#mytable").append(`<div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-primary">
              <h4 class="card-title">${element.Name}</h4>
          </div>
          <div class="card-body">
              <div class="d-flex justify-content-center mb-3">
              <p>Free legal templates</p>
              <span class="material-icons">check</span> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p>Guaranteed faster turn arounds</p>
              <span class="material-icons success">check</span> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p>Legal advice consultation</p>
              <span class="material-icons">check</span> 
              </div>
              <div class="d-flex justify-content-center mb-3">
              <p>Unlimited contract reviews and amendments</p>
                <p style="margin-left: 20px;">:<b>Limited to 5 per month</b></p> 
              </div>
  
              <div class="d-flex justify-content-center mb-3">
              <p>Inhouse counsel Secondment</p>
              <span class="material-icons">close</span> 
              </div>
              <div class="d-flex justify-content-center mb-3">
              <p>Setup your inhouse legal department</p>
              <span class="material-icons">close</span> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:20px; font-weight:bold;">kes ${element.price} monthly</p>
              </div>
              <div class="d-flex justify-content-center mb-3">
              <img class="img" style="width:75px; height:75px;" src="assets/img/visa.png" />
                <img class="img" style="width:75px; height:75px; margin-left: 10px;" src="assets/img/mpesa.png" /> 
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:15px; font-weight:bold;">Get a discount with an annual subscription <del>kes${element.price}</del> <ins>kes ${element.annual_price}</ins>!</p>
              </div>
                <div class="d-flex justify-content-center mb-3">
              <p style="font-size:15px; font-weight:bold;">Per month billed annually</p><br>
              </div>
              ${btn}  
          </div>
      </div>
    </div>
                        
                        `);

                }

            });
        });



        $(content).html(ui);
        $("#mytable").on("click", "#main_id_in", function() {
            console.log($(this).attr('data-op'));
            let myatt = $(this).attr('data-op');
            eval(`${myatt}()`);

        });

        $(content).html(ui);
    }


    function buy_product_video() {

        ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">My Videos</h4>
        </div>
<div class="card-header card-header-primary mt-3">
            <h4 class="card-title">Product Name(CM SME)</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">How to start a business(video name)</h4>
            </div>
          </div>
          <div class="card-body">
              <div class="video">
    <div class="video-container" id="video-information">
      <div class="playback-animation" id="playback-animation">
        <svg class="playback-icons">
          <use class="hidden" href="#play-icon"></use>
          <use href="#pause"></use>
        </svg>
      </div>

      <video controls class="video" id="video" preload="metadata" poster="images/poster.jpg">
        <source src="images/video.mp4" type="video/mp4"></source>
      </video>

      <div class="video-controls hidden" id="video-controls">
        <div class="video-progress">
          <progress id="progress-bar" value="0" min="0"></progress>
          <input class="seek" id="seek" value="0" min="0" type="range" step="1">
          <div class="seek-tooltip" id="seek-tooltip">00:00</div>
        </div>

        <div class="bottom-controls">
          <div class="left-controls">
            <button class="play-video" data-title="Play (k)" id="play">
              <svg class="playback-icons">
                <use href="#play-icon"></use>
                <use class="hidden" href="#pause"></use>
              </svg>
            </button>

            <div class="volume-controls">
              <button data-title="Mute (m)" class="volume-button play-video" id="volume-button">
                <svg>
                  <use class="hidden" href="#volume-mute"></use>
                  <use class="hidden" href="#volume-low"></use>
                  <use href="#volume-high"></use>
                </svg>
              </button>

              <input class="volume" id="volume" value="1"
              data-mute="0.5" type="range" max="1" min="0" step="0.01">
            </div>

            <div class="time">
              <time id="time-elapsed">00:00</time>
              <span> / </span>
              <time id="duration">00:00</time>
            </div>
          </div>

          <div class="right-controls">
            <button  data-title="PIP (p)" class="pip-button play-video" id="pip-button">
              <svg>
                <use href="#pip"></use>
              </svg>
            </button>
            <button data-title="Full screen (f)" class="fullscreen-button play-video " id="fullscreen-button">
              <svg>
                <use href="#fullscreen"></use>
                <use href="#fullscreen-exit" class="hidden"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <svg style="display: none">
    <defs>
      <symbol id="pause" viewBox="0 0 24 24">
        <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
      </symbol>

      <symbol id="play-icon" viewBox="0 0 24 24">
        <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
      </symbol>

      <symbol id="volume-high" viewBox="0 0 24 24">
      <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
      </symbol>

      <symbol id="volume-low" viewBox="0 0 24 24">
      <path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
      </symbol>

      <symbol id="volume-mute" viewBox="0 0 24 24">
      <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
      </symbol>

      <symbol id="fullscreen" viewBox="0 0 24 24">
      <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
      </symbol>

      <symbol id="fullscreen-exit" viewBox="0 0 24 24">
      <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
      </symbol>

      <symbol id="pip" viewBox="0 0 24 24">
      <path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
      </symbol>
    </defs>
  </svg>

                </div>
                  <button type="button" class="btn btn-primary">View Full Video</button>
      </div>
  </div>

 <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">How to start a business(video name)</h4>
            </div>
          </div>
          <div class="card-body">
              <div class="video">
    <div class="video-container" id="video-information">
      <div class="playback-animation" id="playback-animation">
        <svg class="playback-icons">
          <use class="hidden" href="#play-icon"></use>
          <use href="#pause"></use>
        </svg>
      </div>

      <video controls class="video" id="video" preload="metadata" poster="images/poster.jpg">
        <source src="images/video.mp4" type="video/mp4"></source>
      </video>

      <div class="video-controls hidden" id="video-controls">
        <div class="video-progress">
          <progress id="progress-bar" value="0" min="0"></progress>
          <input class="seek" id="seek" value="0" min="0" type="range" step="1">
          <div class="seek-tooltip" id="seek-tooltip">00:00</div>
        </div>

        <div class="bottom-controls">
          <div class="left-controls">
            <button class="play-video" data-title="Play (k)" id="play">
              <svg class="playback-icons">
                <use href="#play-icon"></use>
                <use class="hidden" href="#pause"></use>
              </svg>
            </button>

            <div class="volume-controls">
              <button data-title="Mute (m)" class="volume-button play-video" id="volume-button">
                <svg>
                  <use class="hidden" href="#volume-mute"></use>
                  <use class="hidden" href="#volume-low"></use>
                  <use href="#volume-high"></use>
                </svg>
              </button>

              <input class="volume" id="volume" value="1"
              data-mute="0.5" type="range" max="1" min="0" step="0.01">
            </div>

            <div class="time">
              <time id="time-elapsed">00:00</time>
              <span> / </span>
              <time id="duration">00:00</time>
            </div>
          </div>

          <div class="right-controls">
            <button  data-title="PIP (p)" class="pip-button play-video" id="pip-button">
              <svg>
                <use href="#pip"></use>
              </svg>
            </button>
            <button data-title="Full screen (f)" class="fullscreen-button play-video " id="fullscreen-button">
              <svg>
                <use href="#fullscreen"></use>
                <use href="#fullscreen-exit" class="hidden"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <svg style="display: none">
    <defs>
      <symbol id="pause" viewBox="0 0 24 24">
        <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
      </symbol>

      <symbol id="play-icon" viewBox="0 0 24 24">
        <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
      </symbol>

      <symbol id="volume-high" viewBox="0 0 24 24">
      <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
      </symbol>

      <symbol id="volume-low" viewBox="0 0 24 24">
      <path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
      </symbol>

      <symbol id="volume-mute" viewBox="0 0 24 24">
      <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
      </symbol>

      <symbol id="fullscreen" viewBox="0 0 24 24">
      <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
      </symbol>

      <symbol id="fullscreen-exit" viewBox="0 0 24 24">
      <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
      </symbol>

      <symbol id="pip" viewBox="0 0 24 24">
      <path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
      </symbol>
    </defs>
  </svg>

                </div>
                <button type="button" class="btn btn-primary">View Full Video</button>
      </div>
  </div>
</div>`;

        $(content).html(ui);

    }



    function buy_product_document() {

        ui = ` <div class="card-header card-header-primary">
            <h4 class="card-title">My documents</h4>
        </div>
  <div class="row">
  <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Accessible Documents</h4>
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
              <th>Document</th>
              <th class="th-description">Category</th>
              <th class="text-right">Qty</th>
              <th class="text-right mr-2">Amount</th>
              <th  class="text-right">Actions</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  <div class="img-container">
                      <img class="my-foto" src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" alt="...">
                  </div>
              </td>
              <td class="td-name">
                 Document Name
              </td>
              <td>
                  commercial law
              </td>
              <td class="td-number">
                  1
              </td>
              <td class="td-number">
                  <small>&#x20AC;</small>549
              </td>
                 <td>
            <button type="button" data-toggle="modal" data-target="#exampleModalLong1"  class="btn btn-default">View Details</button>
                  </button>
                      <button type="button" rel="tooltip" data-placement="left" title="Remove item" class="btn btn-simple">
                      <i class="material-icons">close</i>
                  </button>
                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Actions
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">View in browser</a>
    <a class="dropdown-item" href="#">Download</a>
  </div>
</div>
              </td>
          </tr>
      </tbody>
  </table>
</div>
      </div>
  </div>
</div>

<div class="modal fade" id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h3> Summary</h3>
        <p>lorem ipsum</p>

        <h3>Table of contents</h3>
           <p>lorem ipsum</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


 `;

        $(content).html(ui);

        $(document).ready(function() {
            $('.my-foto').imagezoomsl({ zoomrange: [3, 3] });
        });

        /*http://zoomsl.sergeland.ru Sergey Zaragulov skype: deeserge icq: 287295769 sergeland@mail.ru*/
        (function($, global) {
            "use strict";

            //utility methods
            /*$.fn.extend({
              resetzoomsl: function(){
                this.each(function(){
                  
                });
              }
            });*/

            $.fn.imagezoomsl = function(options) {
                options = options || {};
                return this.each(function() {
                    if (!$(this).is("img")) return true;
                    var that = this;
                    setTimeout(function() {
                        $("img").one("load", function() { //new code
                            sergelandimagezoomer.init($(that), options);
                        }).attr('src', $(that).attr('src'));
                    }, 30);
                });
            };

            var sergelandimagezoomer = {};
            $.extend(sergelandimagezoomer, {

                dsetting: { //default settings

                    // çàãðóçêà big êàðòèíêè
                    loadinggif: '', // êàðòèíêà ïîêàçûâàåìàÿ ïðè çàãðóçêå big èçîáðàæåíèÿ
                    loadopacity: 0.1, // ïðîçðà÷íîñòü ôîíà ïåðåêðûòèÿ tmb êàðòèíêè ïðè çàãðóçêå big èçîáðàæåíèÿ
                    loadbackground: '#878787', // öâåò ôîíà ïåðåêðûòèÿ tmb êàðòèíêè ïðè çàãðóçêå  big èçîáðàæåíèÿ


                    // ëóïà (cursorshade)
                    cursorshade: true, // ïîêàçàòü êîíòåéíåð ëóïû
                    magnifycursor: 'crosshair', // âèä êóðñîðà ìûøè íàä tmb â ôîðìàòå CSS
                    cursorshadecolor: '#fff', // öâåò êîíòåéíåðà ëóïû â ôîðìàòå CSS
                    cursorshadeopacity: 0.3, // ïðîçðà÷íîñòü êîíòåéíåðà ëóïû
                    cursorshadeborder: '1px solid black', // âíåøíèé áîðäþðà êîíòåéíåðà ëóïû â ôîðìàòå CSS
                    zindex: '', // z-index êîíòåéíåðà ëóïû 
                    stepzoom: 0.5, // øàã çóììèðîâàíèÿ ïðè ïðîêðóòêå êîëåñà ìûøè         
                    zoomrange: [2, 2], // äèàïàçîí çóììèðîâàíèÿ
                    zoomstart: 2, // ñòàðòîâàÿ óñòàíîâêà çóììèðîâàíèÿ
                    disablewheel: true, // îòêëþ÷èòü ïðîêðóòêó äîêóìåíòà êîëåñîì ìûøè êîãäà êóðñîð íàä êàðòèíêîé tmb â ñëó÷àå åñëè íå çàäàí äèàïàçîí çóììèðîâàíèÿ


                    // ïîäñêàçêà (statusdiv)
                    showstatus: true, // ïîêàçûâàòü ïðè íàâåäåíèè íà tmb help êîíòåéíåð
                    showstatustime: 2000, // âðåìÿ ïîêàçà help êîíòåéíåðà
                    statusdivborder: '1px solid black',
                    statusdivbackground: '#C0C0C0',
                    statusdivpadding: '4px',
                    statusdivfont: 'bold 13px Arial',
                    statusdivopacity: 0.8,


                    // êîíòåéíåð big êàðòèíêè (magnifier)
                    magnifierpos: 'right', // ñòîðîíà îòîáðàæåíèÿ êîíòåéíåðà left/right
                    magnifiersize: [0, 0], // ðàçìåð êîíòåéíåðà  
                    magnifiereffectanimate: 'showIn', // ýôôåêò ïîÿâëåíèÿ/ñêðûòèÿ fadeIn/showIn/slideIn
                    innerzoom: false, // ïîêàçàòü êîíòåéíåð âíóòðè tmb
                    innerzoommagnifier: false, // ïîêàçàòü êîíòåéíåð êàê ëóïó
                    descarea: false, // ïîêàçàòü êîíòåéíåð â ïðîèçâîëüíîé îáëàñòè, îáëàñòü descarea äîëæíà èìåòü width è height        
                    leftoffset: 15, // îòñòóï ñëåâà îò tmb êàðòèíêè
                    rightoffset: 15, // îòñòóï ñïðàâà îò tmb êàðòèíêè
                    switchsides: true, // ó÷èòûâàòü êðàé ýêðàíà
                    magnifierborder: '1px solid black', // âíåøíèé áîðäþð


                    // êîíòåéíåð òåêñòà ñíèçó ê êàðòèíêå
                    textdnbackground: '#fff',
                    textdnpadding: '10px',
                    textdnfont: '13px/20px cursive',


                    // êîýôôèöèåíòû ñêîðîñòè àíèìàöèè
                    scrollspeedanimate: 5 /*4*/ , // ïðîêðóòêè big êàðòèíêè
                    zoomspeedanimate: 7, // çóììèðîâàíèÿ (ïëàâíîñòü)
                    loopspeedanimate: 2.5 /*2.45342*/ , // ïåðåìåùåíèÿ îáëàñòè ëóïû è big êîíòåéíåðà â ðåæèìå ëóïû        
                    magnifierspeedanimate: 350, // ïîêàçà big êîíòåéíåðà


                    // âíåøíèé âèä
                    classmagnifier: "magnifier",
                    classcursorshade: "cursorshade",
                    classstatusdiv: "statusdiv",
                    classtextdn: "textdn",
                    classtracker: "tracker"

                },


                //isie: (function(){/*@cc_on @*//*@if(@_jscript_version >= 5)return true;@end @*/return false;})(), //is this IE?
                isie: (function() {
                    var nAgt = navigator.userAgent;
                    if (nAgt.indexOf("MSIE") != -1) return true;
                    else return false;
                })(),

                //isMobile: (function(){ if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ){ return true; } })(),

                highestzindex: function($img) {

                    var z = 0,
                        $els = $img.parents().add($img),
                        elz;
                    $els.each(function() {
                        elz = $(this).css('zIndex');
                        elz = isNaN(elz) ? 0 : +elz;
                        z = Math.max(z, elz);
                    });
                    return z;
                },

                getboundary: function(b, val, specs) {
                    if (b == "left") {
                        var rb = -specs.img.w * specs.newpower + specs.magnifier.w;
                        return (val > 0) ? 0 : (val < rb) ? rb : val;
                    } else {
                        var tb = -specs.img.h * specs.newpower + specs.magnifier.h;
                        return (val > 0) ? 0 : (val < tb) ? tb : val;
                    }
                },

                controlLoop: function($tracker) {
                    var self = this,
                        specs = $tracker.data('specs');
                    if (!specs) return;

                    var coords = specs.$img.offsetsl(),
                        pageX = self.cld.pageX999 - coords.left,
                        pageY = self.cld.pageY999 - coords.top;

                    self.cld.destU += (self.cld.pageX999 - self.cld.destU) / 2.45342;
                    self.cld.destV += (self.cld.pageY999 - self.cld.destV) / 2.45342;

                    specs.$statusdiv.css({ left: self.cld.destU - 10, top: self.cld.destV + 20 });

                    var csw = Math.round(specs.magnifier.w / specs.newpower),
                        csh = Math.round(specs.magnifier.h / specs.newpower);

                    self.cld.destK += (pageX - self.cld.destK) / specs.setting.loopspeedanimate;
                    self.cld.destL += (pageY - self.cld.destL) / specs.setting.loopspeedanimate;

                    specs.$cursorshade.css({
                        left: specs.img.w > csw ? Math.min(specs.img.w - csw, Math.max(0, self.cld.destK - csw / 2)) + coords.left - specs.cursorshade999.border999.left999 : coords.left - specs.cursorshade999.border999.left999,
                        top: specs.img.h > csh ? Math.min(specs.img.h - csh, Math.max(0, self.cld.destL - csh / 2)) + coords.top - specs.cursorshade999.border999.top999 : coords.top - specs.cursorshade999.border999.top999
                    });

                    if (specs.setting.innerzoommagnifier) {

                        self.cld.destM += (self.cld.pageX999 - self.cld.destM) / specs.setting.loopspeedanimate;
                        self.cld.destN += (self.cld.pageY999 - self.cld.destN) / specs.setting.loopspeedanimate;

                        specs.$magnifier.css({
                            left: self.cld.destM - Math.round(specs.magnifier.w / 2),
                            top: self.cld.destN - Math.round(specs.magnifier.h / 2)
                        });
                        specs.$textdn.css({
                            left: self.cld.destM - Math.round(specs.magnifier.w / 2),
                            top: self.cld.destN + specs.magnifier.h / 2
                        });
                    }

                    self.cld.currU += (pageX - self.cld.currU) / specs.setting.scrollspeedanimate;
                    self.cld.currV += (pageY - self.cld.currV) / specs.setting.scrollspeedanimate;

                    var newx = -self.cld.currU * specs.newpower + specs.magnifier.w / 2;
                    var newy = -self.cld.currV * specs.newpower + specs.magnifier.h / 2;

                    specs.$bigimage.css({ left: self.getboundary('left', newx, specs), top: self.getboundary('top', newy, specs) });
                    self.cld.controlTimer = setTimeout(function() {
                        self.controlLoop($tracker);
                    }, 30);

                },

                controlLoop2: function($tracker) {

                    var self = this,
                        specs = $tracker.data('specs');
                    if (!specs) return;

                    specs.currM += (specs.newpower - specs.currM) / specs.setting.zoomspeedanimate;
                    specs.currM = Math.round(specs.currM * 1000) / 1000;

                    specs.$cursorshade.css({
                        width: specs.img.w > Math.round(specs.magnifier.w / specs.currM) ? Math.round(specs.magnifier.w / specs.currM) : specs.img.w,
                        height: specs.img.h > Math.round(specs.magnifier.h / specs.currM) ? Math.round(specs.magnifier.h / specs.currM) : specs.img.h
                    });
                    specs.$bigimage.css({
                        width: Math.round(specs.currM * specs.bigimage.w * (specs.img.w / specs.bigimage.w)),
                        height: Math.round(specs.currM * specs.bigimage.h * (specs.img.h / specs.bigimage.h))
                    });

                    self.cld.controlTimer2 = setTimeout(function() {
                        self.controlLoop2($tracker);
                    }, 30);

                },

                cld: {},

                showimage: function($tracker) {

                    var self = this,
                        specs = $tracker.data('specs'),
                        width = specs.setting.magnifiersize[0],
                        height = specs.setting.magnifiersize[1],
                        magcoords = {},
                        coords = specs.$img.offsetsl(),
                        func = function() {},
                        left1 = 0,
                        top1 = 0;

                    magcoords.left = coords.left + (specs.setting.magnifierpos === 'left' ? -specs.magnifier.w - specs.setting.leftoffset : specs.img.w + specs.setting.rightoffset);
                    if (specs.setting.switchsides && !specs.setting.innerzoom) {

                        if (specs.setting.magnifierpos !== 'left' && magcoords.left + specs.magnifier.w + specs.setting.leftoffset >= $(window).width() && coords.left - specs.magnifier.w >= specs.setting.leftoffset)
                            magcoords.left = coords.left - specs.magnifier.w - specs.setting.leftoffset;
                        else if (specs.setting.magnifierpos === 'left' && magcoords.left < 0)
                            magcoords.left = coords.left + specs.img.w + specs.setting.rightoffset;
                    }

                    left1 = magcoords.left;
                    top1 = coords.top;
                    specs.$magnifier.css({ visibility: "visible", display: "none" });

                    if (specs.setting.descarea) {
                        left1 = $(specs.setting.descarea).offsetsl().left;
                        top1 = $(specs.setting.descarea).offsetsl().top;
                    }
                    if (specs.setting.innerzoommagnifier) {
                        left1 = self.cld.pageX999 - Math.round(specs.magnifier.w / 2);
                        top1 = self.cld.pageY999 - Math.round(specs.magnifier.h / 2);
                    }

                    //*
                    func = function() {

                            specs.$textdn.stop(true, true).fadeIn(specs.setting.magnifierspeedanimate);
                            if (!specs.setting.innerzoommagnifier)
                                specs.$textdn.css({ left: left1, top: top1 + height });
                        } // */     

                    if (specs.setting.innerzoom) {

                        left1 = coords.left;
                        top1 = coords.top;

                        func = function() {
                            specs.$img.css({ visibility: "hidden" });
                            specs.$textdn.css({ left: left1, top: top1 + height }).stop(true, true).fadeIn(specs.setting.magnifierspeedanimate);
                        };
                    }

                    switch (specs.setting.magnifiereffectanimate) {
                        case 'slideIn':
                            specs.$magnifier.css({
                                    left: left1,
                                    top: top1 - height / 3,
                                    width: width,
                                    height: height
                                })
                                .stop(true, true).show()
                                .animate({ top: top1 }, specs.setting.magnifierspeedanimate, "easeOutBounceSL", func);
                            break;
                        case 'showIn':
                            specs.$magnifier.css({
                                    left: coords.left + Math.round(specs.img.w / 2),
                                    top: coords.top + Math.round(specs.img.h / 2),
                                    width: Math.round(specs.magnifier.w / 5),
                                    height: Math.round(specs.magnifier.h / 5)
                                })
                                .stop(true, true).show().css({ opacity: "0.1" })
                                .animate({
                                    left: left1,
                                    top: top1,
                                    opacity: "1",
                                    width: width,
                                    height: height

                                }, specs.setting.magnifierspeedanimate, func);
                            break;
                        default:
                            specs.$magnifier.css({
                                    left: left1,
                                    top: top1,
                                    width: width,
                                    height: height
                                })
                                .stop(true, true)
                                .fadeIn(specs.setting.magnifierspeedanimate, func);
                    }
                    if (specs.setting.showstatus && (specs.title999 || specs.help))
                        specs.$statusdiv.html(specs.title999 + '<div style="font-size:80%">' + specs.help + '</div>')
                        .stop(true, true)
                        .fadeIn().delay(specs.setting.showstatustime).fadeOut("slow");
                    else specs.$statusdiv.hide();
                },

                hideimage: function($tracker) {

                    var self = this,
                        specs = $tracker.data('specs'),
                        coords = specs.$img.offsetsl();

                    switch (specs.setting.magnifiereffectanimate) {

                        case 'showIn':
                            specs.$magnifier.stop(true, true)
                                .animate({
                                        left: coords.left + Math.round(specs.img.w / 2),
                                        top: coords.top + Math.round(specs.img.h / 2),
                                        opacity: "0.1",
                                        width: Math.round(specs.magnifier.w / 5),
                                        height: Math.round(specs.magnifier.h / 5)
                                    },
                                    specs.setting.magnifierspeedanimate,
                                    function() { specs.$magnifier.hide(); });
                            break;

                        default:
                            specs.$magnifier.stop(true, true).fadeOut(specs.setting.magnifierspeedanimate);
                    }

                },

                /* Init function start.  */
                init: function($img, options, gallery) {;
                    var setting = $.extend({}, this.dsetting, options),
                        basezindex = setting.zindex || this.highestzindex($img),
                        img = { w: $img.width(), h: $img.height() },
                        cld = new cld(),
                        title = $img.attr("data-title") ? $img.attr("data-title") : '',
                        help = $img.attr("data-help") ? $img.attr("data-help") : '',
                        textdn = $img.attr("data-text-bottom") ? $img.attr("data-text-bottom") : '',
                        self = this,
                        newpower,
                        key,
                        $magnifier,
                        $cursorshade,
                        $statusdiv,
                        $tracker,
                        $textdn;

                    if (img.h === 0 || img.w === 0) {;
                        $(new Image()).load(function() {
                            self.init($img, options);
                        }).attr("src", $img.attr("src"));
                        return;
                    }

                    $img.css({ visibility: "visible" });
                    setting.largeimage = $img.attr("data-large") || $img.attr("src");

                    for (key in setting)
                        if (setting[key] === '') setting[key] = this.dsetting[key];

                    if (setting.zoomrange[0] < setting.zoomstart)
                        newpower = setting.zoomstart;
                    else newpower = setting.zoomrange[0];

                    if (setting.magnifiersize.toString() === '0,0' ||
                        setting.magnifiersize.toString() === '')
                        if (setting.innerzoommagnifier)
                            setting.magnifiersize = [img.w / 2, img.h / 2];
                        else setting.magnifiersize = [img.w, img.h];

                    if (setting.descarea && $(setting.descarea).length) {
                        if ($(setting.descarea).width() === 0 || $(setting.descarea).height() === 0)
                            setting.descarea = false;
                        else setting.magnifiersize = [$(setting.descarea).width(), $(setting.descarea).height()];
                    } else setting.descarea = false;

                    if (setting.innerzoom) {
                        setting.magnifiersize = [img.w, img.h];
                        if (!options.cursorshade)
                            setting.cursorshade = false;
                        if (!options.scrollspeedanimate)
                            setting.scrollspeedanimate = 10;
                    }

                    if (setting.innerzoommagnifier) {
                        if (!options.magnifycursor)
                            if (window.chrome || window.sidebar)
                                setting.magnifycursor = "none";
                        setting.cursorshade = false;
                        setting.magnifiereffectanimate = "fadeIn";
                    }

                    // === == === //

                    function cld() {
                        this.pageX999 = 0;
                        this.pageY999 = 0;
                    }
                    // === == === //

                    function getspecs($bigimage) {

                        $tracker.data("specs", {

                            setting: setting,
                            title999: title,
                            help: help,

                            $img: $img,
                            $magnifier: $magnifier,
                            $bigimage: $bigimage,
                            $statusdiv: $statusdiv,
                            $cursorshade: $cursorshade,
                            $textdn: $textdn,

                            img: img,
                            bigimage: { w: $bigimage.width(), h: $bigimage.height() },
                            magnifier: { w: $magnifier.width(), h: $magnifier.height() },
                            cursorshade999: {
                                w: $cursorshade.width(),
                                h: $cursorshade.height(),
                                border999: {
                                    left999: parseInt($cursorshade.css("border-left-width")) || 0,
                                    top999: parseInt($cursorshade.css("border-top-width")) || 0
                                }
                            },

                            currM: newpower,
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

                    if ($.event.fixHooks) {
                        for (var i = toFix.length; i;) {
                            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
                        }
                    }

                    $.event.special.mousewheel = {
                        setup: function() {
                            if (this.addEventListener) {
                                for (var i = toBind.length; i;) {
                                    this.addEventListener(toBind[--i], handler, false);
                                }
                            } else {
                                this.onmousewheel = handler;
                            }
                        },

                        teardown: function() {
                            if (this.removeEventListener) {
                                for (var i = toBind.length; i;) {
                                    this.removeEventListener(toBind[--i], handler, false);
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
                        if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta; }
                        if (orgEvent.detail) { delta = orgEvent.detail * -1; }

                        // New school wheel delta (wheel event)
                        if (orgEvent.deltaY) {
                            deltaY = orgEvent.deltaY * -1;
                            delta = deltaY;
                        }
                        if (orgEvent.deltaX) {
                            deltaX = orgEvent.deltaX;
                            delta = deltaX * -1;
                        }

                        // Webkit
                        if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY; }
                        if (orgEvent.wheelDeltaX !== undefined) { deltaX = orgEvent.wheelDeltaX * -1; }

                        // Look for lowest delta to normalize the delta values
                        absDelta = Math.abs(delta);
                        if (!lowestDelta || absDelta < lowestDelta) { lowestDelta = absDelta; }
                        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
                        if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) { lowestDeltaXY = absDeltaXY; }

                        // Get a whole value for the deltas
                        fn = delta > 0 ? "floor" : "ceil";
                        delta = Math[fn](delta / lowestDelta);
                        deltaX = Math[fn](deltaX / lowestDeltaXY);
                        deltaY = Math[fn](deltaY / lowestDeltaXY);

                        // Add event and delta to the front of the arguments
                        args.unshift(event, delta, deltaX, deltaY);

                        return ($.event.dispatch || $.event.handle).apply(this, args);
                    }

                    // === == === //

                    $.fn.offsetsl = function() {
                        var elem = this.get(0);

                        function getOffsetSum(elem) {
                            var top999 = 0,
                                left999 = 0;
                            while (elem) {
                                top999 = top999 + parseInt(elem.offsetTop);
                                left999 = left999 + parseInt(elem.offsetLeft);
                                elem = elem.offsetParent;
                            }
                            return { top: top999, left: left999 }
                        }
                        if (elem.getBoundingClientRect)
                            return this.offset();
                        else return getOffsetSum(elem)
                    }

                    // === == === //

                    $.easing.easeOutBounceSL = function(x, t, b, c, d) {
                        if ((t /= d) < (1 / 2.75)) {
                            return c * (7.5625 * t * t) + b;
                        } else if (t < (2 / 2.75)) {
                            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                        } else if (t < (2.5 / 2.75)) {
                            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                        } else {
                            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                        }
                    }

                    // === == === //      

                    $magnifier = $("<div />")
                        .attr({ "class": setting.classmagnifier })
                        .css({
                            position: "absolute",
                            zIndex: basezindex,
                            width: setting.magnifiersize[0],
                            height: setting.magnifiersize[1],
                            left: -10000,
                            top: -10000,
                            visibility: "hidden",
                            overflow: "hidden"
                        })
                        .appendTo(document.body);

                    if (!options.classmagnifier)
                        $magnifier.css({ border: setting.magnifierborder });

                    $cursorshade = $("<div />");
                    if (setting.cursorshade) {
                        $cursorshade.attr({ "class": setting.classcursorshade })
                            .css({
                                zIndex: basezindex,
                                display: "none",
                                position: "absolute",
                                width: Math.round(setting.magnifiersize[0] / setting.zoomstart),
                                height: Math.round(setting.magnifiersize[1] / setting.zoomstart),
                                top: 0,
                                left: 0
                            })
                            .appendTo(document.body);

                        if (!options.classcursorshade)
                            $cursorshade.css({
                                border: setting.cursorshadeborder,
                                opacity: setting.cursorshadeopacity,
                                backgroundColor: setting.cursorshadecolor
                            });
                    }

                    if (!setting.loadinggif)
                        setting.loadinggif = "data:image/gif;base64,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";

                    $statusdiv = $("<div />")
                        .attr({ "class": setting.classstatusdiv + " preloadevt" })
                        .css({
                            position: "absolute",
                            display: "none",
                            zIndex: basezindex,
                            top: 0,
                            left: 0
                        })
                        .html('<img src="' + setting.loadinggif + '" />')
                        .appendTo(document.body);

                    $tracker = $("<div />")
                        .attr({ "class": setting.classtracker })
                        .css({
                            zIndex: basezindex,
                            backgroundImage: self.isie ? "url(cannotbe)" : "none",
                            position: "absolute",
                            width: img.w,
                            height: img.h,
                            left: gallery ? $img.offsetsl().left : -10000,
                            top: gallery ? $img.offsetsl().top : -10000
                        }).appendTo(document.body);

                    $textdn = $("<div />");
                    if (textdn) {
                        $textdn.attr({ "class": setting.classtextdn })
                            .css({
                                position: "absolute",
                                zIndex: basezindex,
                                left: 0,
                                top: 0,
                                display: "none"
                            })
                            .html(textdn)
                            .appendTo(document.body);
                        if (!options.classtextdn)
                            $textdn.css({
                                border: setting.magnifierborder,
                                background: setting.textdnbackground,
                                padding: setting.textdnpadding,
                                font: setting.textdnfont
                            });
                        $textdn.css({ width: setting.magnifiersize[0] - parseInt($textdn.css("padding-left")) - parseInt($textdn.css("padding-right")) });
                    }
                    $tracker.data("largeimage", setting.largeimage);


                    // EVENTS     
                    $(window).bind("resize", function() {
                        var o = $img.offsetsl();
                        if ($tracker.data("loadimgevt"))
                            $tracker.css({ left: o.left, top: o.top });
                        $statusdiv.filter(".preloadevt").css({ left: o.left + img.w / 2 - $statusdiv.width() / 2, top: o.top + img.h / 2 - $statusdiv.height() / 2, visibility: 'visible' });
                    });
                    $(document).mousemove(function(e) {
                        self.cld.docX = e.pageX;
                        if (self.cld.pageX999 !== self.cld.docX) {
                            clearTimeout(self.cld.controlTimer);
                            clearTimeout(self.cld.controlTimer2);
                            $img.css({ visibility: "visible" });
                            //$tracker.hide().css({left: 10000, top: 10000});         
                        }
                    });
                    $img.mouseover(function(e) {
                        var o = $img.offsetsl();
                        $tracker.css({ left: o.left, top: o.top }).show();
                    });
                    $tracker.mouseover(function(e) {

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

                        $tracker.css({ cursor: setting.magnifycursor });
                        setting.largeimage = $img.attr("data-large") || $img.attr("src");

                        $statusdiv.show();
                        clearTimeout(self.cld.controlTimer);
                        clearTimeout(self.cld.controlTimer2);

                        if (setting.largeimage !== $tracker.data('largeimage')) {

                            ;
                            $(new Image()).load(function() {}).attr("src", setting.largeimage);

                            $($tracker).unbind();
                            $($statusdiv).remove();
                            $($cursorshade).remove();
                            $($magnifier).remove();
                            $($tracker).remove();
                            $($textdn).remove();

                            self.init($img, options, true);
                        }
                        if ($tracker.data("loadevt")) {
                            $cursorshade.fadeIn();
                            self.showimage($tracker);
                            self.controlLoop($tracker);
                            self.controlLoop2($tracker);
                        }

                    });
                    $tracker.mousemove(function(e) {
                        setting.largeimage = $img.attr("data-large") || $img.attr("src");
                        if (setting.largeimage !== $tracker.data("largeimage")) {

                            ;
                            $(new Image()).load(function() {}).attr("src", setting.largeimage);

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
                        $img.css({ visibility: "visible" });
                        $textdn.hide();
                        $cursorshade.add($statusdiv.not(".preloadevt")).stop(true, true).hide();
                    });
                    $tracker.one("mouseover", function(e) {

                        var imgcoords = $img.offsetsl();
                        var $bigimage = $('<img src="' + setting.largeimage + '"/>').css({ position: "relative", maxWidth: "none" }).appendTo($magnifier);
                        if (!self.loaded999[setting.largeimage]) {
                            $tracker.css({ opacity: setting.loadopacity, background: setting.loadbackground });
                            $tracker.data("loadimgevt", true);
                            $statusdiv.css({ left: imgcoords.left + img.w / 2 - $statusdiv.width() / 2, top: imgcoords.top + img.h / 2 - $statusdiv.height() / 2, visibility: 'visible' });
                        }
                        $bigimage.bind("loadevt", function(event, e) {

                            if (e.type === "error") return;
                            $tracker.mouseout(function(e) { //image onmouseout           
                                self.hideimage($tracker);
                                clearTimeout(self.cld.controlTimer);
                                clearTimeout(self.cld.controlTimer2);
                                $img.css({ visibility: "visible" });
                                $textdn.hide();
                                $tracker.hide().css({ left: -10000, top: -10000 });
                            });
                            $tracker.mouseover(function(e) { //image onmouseover 
                                specs.currM = specs.newpower;
                            });
                            $tracker.data("loadimgevt", false);
                            $tracker.css({ opacity: 0, cursor: setting.magnifycursor });
                            $statusdiv.empty();
                            if (!options.classstatusdiv)
                                $statusdiv.css({
                                    border: setting.statusdivborder,
                                    background: setting.statusdivbackground,
                                    padding: setting.statusdivpadding,
                                    font: setting.statusdivfont,
                                    opacity: setting.statusdivopacity
                                });
                            $statusdiv.hide().removeClass("preloadevt");
                            self.loaded999[setting.largeimage] = true;
                            getspecs($bigimage);
                            if (cld.pageX999 == self.cld.docX) {
                                $cursorshade.fadeIn();
                                self.showimage($tracker);
                                clearTimeout(self.cld.controlTimer);
                                clearTimeout(self.cld.controlTimer2);
                                self.controlLoop($tracker);
                                self.controlLoop2($tracker);
                            }

                            var specs = $tracker.data("specs");
                            $bigimage.css({ width: setting.zoomstart * specs.bigimage.w * (img.w / specs.bigimage.w), height: setting.zoomstart * specs.bigimage.h * (img.h / specs.bigimage.h) });
                            $tracker.data("loadevt", true);

                            if (setting.zoomrange && setting.zoomrange[1] > setting.zoomrange[0]) { //if zoom range enabled          
                                $tracker.bind("mousewheel", function(e, delta) {
                                    var zoomdir = delta < 0 ? "out" : "in",
                                        power = specs.newpower,
                                        newpower = (zoomdir == "in") ? Math.min(power + setting.stepzoom, setting.zoomrange[1]) : Math.max(power - setting.stepzoom, setting.zoomrange[0]);

                                    specs.newpower = newpower;
                                    specs.delta = delta;
                                    e.preventDefault();
                                });

                            } else if (setting.disablewheel) {
                                $tracker.bind("mousewheel", function(e) { e.preventDefault(); });
                            }

                        }); //end $bigimage onload */

                        if (isImageLoaded($bigimage.get(0)))
                            $bigimage.trigger("loadevt", { type: "load" });
                        else $bigimage.bind("load error", function(e) { $bigimage.trigger("loadevt", e) });
                    });
                },
                loaded999: {}
            });
        })(jQuery, window);




    }


    function buy_subscription_video() {

        ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">My Videos</h4>
        </div>
<div class="card-header card-header-primary mt-3">
            <h4 class="card-title">Product Name(CM SME)</h4>
        </div>
  <div class="row">
  <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">How to start a business(video name)</h4>
            </div>
          </div>
          <div class="card-body">
              <div class="video">
    <div class="video-container" id="video-information">
      <div class="playback-animation" id="playback-animation">
        <svg class="playback-icons">
          <use class="hidden" href="#play-icon"></use>
          <use href="#pause"></use>
        </svg>
      </div>

      <video controls class="video" id="video" preload="metadata" poster="images/poster.jpg">
        <source src="images/video.mp4" type="video/mp4"></source>
      </video>

      <div class="video-controls hidden" id="video-controls">
        <div class="video-progress">
          <progress id="progress-bar" value="0" min="0"></progress>
          <input class="seek" id="seek" value="0" min="0" type="range" step="1">
          <div class="seek-tooltip" id="seek-tooltip">00:00</div>
        </div>

        <div class="bottom-controls">
          <div class="left-controls">
            <button class="play-video" data-title="Play (k)" id="play">
              <svg class="playback-icons">
                <use href="#play-icon"></use>
                <use class="hidden" href="#pause"></use>
              </svg>
            </button>

            <div class="volume-controls">
              <button data-title="Mute (m)" class="volume-button play-video" id="volume-button">
                <svg>
                  <use class="hidden" href="#volume-mute"></use>
                  <use class="hidden" href="#volume-low"></use>
                  <use href="#volume-high"></use>
                </svg>
              </button>

              <input class="volume" id="volume" value="1"
              data-mute="0.5" type="range" max="1" min="0" step="0.01">
            </div>

            <div class="time">
              <time id="time-elapsed">00:00</time>
              <span> / </span>
              <time id="duration">00:00</time>
            </div>
          </div>

          <div class="right-controls">
            <button  data-title="PIP (p)" class="pip-button play-video" id="pip-button">
              <svg>
                <use href="#pip"></use>
              </svg>
            </button>
            <button data-title="Full screen (f)" class="fullscreen-button play-video " id="fullscreen-button">
              <svg>
                <use href="#fullscreen"></use>
                <use href="#fullscreen-exit" class="hidden"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <svg style="display: none">
    <defs>
      <symbol id="pause" viewBox="0 0 24 24">
        <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
      </symbol>

      <symbol id="play-icon" viewBox="0 0 24 24">
        <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
      </symbol>

      <symbol id="volume-high" viewBox="0 0 24 24">
      <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
      </symbol>

      <symbol id="volume-low" viewBox="0 0 24 24">
      <path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
      </symbol>

      <symbol id="volume-mute" viewBox="0 0 24 24">
      <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
      </symbol>

      <symbol id="fullscreen" viewBox="0 0 24 24">
      <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
      </symbol>

      <symbol id="fullscreen-exit" viewBox="0 0 24 24">
      <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
      </symbol>

      <symbol id="pip" viewBox="0 0 24 24">
      <path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
      </symbol>
    </defs>
  </svg>

                </div>
      </div>
  </div>

 <div class="col-md-6">
      <div class="card">
          <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">How to start a business(video name)</h4>
            </div>
          </div>
          <div class="card-body">
              <div class="video">
    <div class="video-container" id="video-information">
      <div class="playback-animation" id="playback-animation">
        <svg class="playback-icons">
          <use class="hidden" href="#play-icon"></use>
          <use href="#pause"></use>
        </svg>
      </div>

      <video controls class="video" id="video" preload="metadata" poster="images/poster.jpg">
        <source src="images/video.mp4" type="video/mp4"></source>
      </video>

      <div class="video-controls hidden" id="video-controls">
        <div class="video-progress">
          <progress id="progress-bar" value="0" min="0"></progress>
          <input class="seek" id="seek" value="0" min="0" type="range" step="1">
          <div class="seek-tooltip" id="seek-tooltip">00:00</div>
        </div>

        <div class="bottom-controls">
          <div class="left-controls">
            <button class="play-video" data-title="Play (k)" id="play">
              <svg class="playback-icons">
                <use href="#play-icon"></use>
                <use class="hidden" href="#pause"></use>
              </svg>
            </button>

            <div class="volume-controls">
              <button data-title="Mute (m)" class="volume-button play-video" id="volume-button">
                <svg>
                  <use class="hidden" href="#volume-mute"></use>
                  <use class="hidden" href="#volume-low"></use>
                  <use href="#volume-high"></use>
                </svg>
              </button>

              <input class="volume" id="volume" value="1"
              data-mute="0.5" type="range" max="1" min="0" step="0.01">
            </div>

            <div class="time">
              <time id="time-elapsed">00:00</time>
              <span> / </span>
              <time id="duration">00:00</time>
            </div>
          </div>

          <div class="right-controls">
            <button  data-title="PIP (p)" class="pip-button play-video" id="pip-button">
              <svg>
                <use href="#pip"></use>
              </svg>
            </button>
            <button data-title="Full screen (f)" class="fullscreen-button play-video " id="fullscreen-button">
              <svg>
                <use href="#fullscreen"></use>
                <use href="#fullscreen-exit" class="hidden"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <svg style="display: none">
    <defs>
      <symbol id="pause" viewBox="0 0 24 24">
        <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
      </symbol>

      <symbol id="play-icon" viewBox="0 0 24 24">
        <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
      </symbol>

      <symbol id="volume-high" viewBox="0 0 24 24">
      <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
      </symbol>

      <symbol id="volume-low" viewBox="0 0 24 24">
      <path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
      </symbol>

      <symbol id="volume-mute" viewBox="0 0 24 24">
      <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
      </symbol>

      <symbol id="fullscreen" viewBox="0 0 24 24">
      <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
      </symbol>

      <symbol id="fullscreen-exit" viewBox="0 0 24 24">
      <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
      </symbol>

      <symbol id="pip" viewBox="0 0 24 24">
      <path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
      </symbol>
    </defs>
  </svg>

                </div>
      </div>
  </div>
</div>`;

        $(content).html(ui);

    }



    function buy_subscription_document() {

        ui = ` <div class="card-header card-header-primary">
            <h4 class="card-title">My documents</h4>
        </div>
  <div class="row">
  <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Accessible Documents</h4>
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
              <th>Document</th>
              <th class="th-description">Category</th>
              <th class="text-right">Qty</th>
              <th class="text-right mr-2">Amount</th>
              <th  class="text-right">Actions</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  <div class="img-container">
                      <img class="my-foto" src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" alt="...">
                  </div>
              </td>
              <td class="td-name">
                 Document Name
              </td>
              <td>
                  commercial law
              </td>
              <td class="td-number">
                  1
              </td>
              <td class="td-number">
                  <small>&#x20AC;</small>549
              </td>
                 <td>
            <button type="button" data-toggle="modal" data-target="#exampleModalLong1"  class="btn btn-default">View Details</button>
                  </button>
                      <button type="button" rel="tooltip" data-placement="left" title="Remove item" class="btn btn-simple">
                      <i class="material-icons">close</i>
                  </button>
                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Actions
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">View in browser</a>
    <a class="dropdown-item" href="#">Download</a>
  </div>
</div>
              </td>
          </tr>
      </tbody>
  </table>
</div>
      </div>
  </div>
</div>

<div class="modal fade" id="exampleModalLong1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h3> Summary</h3>
        <p>lorem ipsum</p>

        <h3>Table of contents</h3>
           <p>lorem ipsum</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


 `;

        $(content).html(ui);

        $(document).ready(function() {
            $('.my-foto').imagezoomsl({ zoomrange: [3, 3] });
        });

        /*http://zoomsl.sergeland.ru Sergey Zaragulov skype: deeserge icq: 287295769 sergeland@mail.ru*/
        (function($, global) {
            "use strict";

            //utility methods
            /*$.fn.extend({
              resetzoomsl: function(){
                this.each(function(){
                  
                });
              }
            });*/

            $.fn.imagezoomsl = function(options) {
                options = options || {};
                return this.each(function() {
                    if (!$(this).is("img")) return true;
                    var that = this;
                    setTimeout(function() {
                        $("img").one("load", function() { //new code
                            sergelandimagezoomer.init($(that), options);
                        }).attr('src', $(that).attr('src'));
                    }, 30);
                });
            };

            var sergelandimagezoomer = {};
            $.extend(sergelandimagezoomer, {

                dsetting: { //default settings

                    // çàãðóçêà big êàðòèíêè
                    loadinggif: '', // êàðòèíêà ïîêàçûâàåìàÿ ïðè çàãðóçêå big èçîáðàæåíèÿ
                    loadopacity: 0.1, // ïðîçðà÷íîñòü ôîíà ïåðåêðûòèÿ tmb êàðòèíêè ïðè çàãðóçêå big èçîáðàæåíèÿ
                    loadbackground: '#878787', // öâåò ôîíà ïåðåêðûòèÿ tmb êàðòèíêè ïðè çàãðóçêå  big èçîáðàæåíèÿ


                    // ëóïà (cursorshade)
                    cursorshade: true, // ïîêàçàòü êîíòåéíåð ëóïû
                    magnifycursor: 'crosshair', // âèä êóðñîðà ìûøè íàä tmb â ôîðìàòå CSS
                    cursorshadecolor: '#fff', // öâåò êîíòåéíåðà ëóïû â ôîðìàòå CSS
                    cursorshadeopacity: 0.3, // ïðîçðà÷íîñòü êîíòåéíåðà ëóïû
                    cursorshadeborder: '1px solid black', // âíåøíèé áîðäþðà êîíòåéíåðà ëóïû â ôîðìàòå CSS
                    zindex: '', // z-index êîíòåéíåðà ëóïû 
                    stepzoom: 0.5, // øàã çóììèðîâàíèÿ ïðè ïðîêðóòêå êîëåñà ìûøè         
                    zoomrange: [2, 2], // äèàïàçîí çóììèðîâàíèÿ
                    zoomstart: 2, // ñòàðòîâàÿ óñòàíîâêà çóììèðîâàíèÿ
                    disablewheel: true, // îòêëþ÷èòü ïðîêðóòêó äîêóìåíòà êîëåñîì ìûøè êîãäà êóðñîð íàä êàðòèíêîé tmb â ñëó÷àå åñëè íå çàäàí äèàïàçîí çóììèðîâàíèÿ


                    // ïîäñêàçêà (statusdiv)
                    showstatus: true, // ïîêàçûâàòü ïðè íàâåäåíèè íà tmb help êîíòåéíåð
                    showstatustime: 2000, // âðåìÿ ïîêàçà help êîíòåéíåðà
                    statusdivborder: '1px solid black',
                    statusdivbackground: '#C0C0C0',
                    statusdivpadding: '4px',
                    statusdivfont: 'bold 13px Arial',
                    statusdivopacity: 0.8,


                    // êîíòåéíåð big êàðòèíêè (magnifier)
                    magnifierpos: 'right', // ñòîðîíà îòîáðàæåíèÿ êîíòåéíåðà left/right
                    magnifiersize: [0, 0], // ðàçìåð êîíòåéíåðà  
                    magnifiereffectanimate: 'showIn', // ýôôåêò ïîÿâëåíèÿ/ñêðûòèÿ fadeIn/showIn/slideIn
                    innerzoom: false, // ïîêàçàòü êîíòåéíåð âíóòðè tmb
                    innerzoommagnifier: false, // ïîêàçàòü êîíòåéíåð êàê ëóïó
                    descarea: false, // ïîêàçàòü êîíòåéíåð â ïðîèçâîëüíîé îáëàñòè, îáëàñòü descarea äîëæíà èìåòü width è height        
                    leftoffset: 15, // îòñòóï ñëåâà îò tmb êàðòèíêè
                    rightoffset: 15, // îòñòóï ñïðàâà îò tmb êàðòèíêè
                    switchsides: true, // ó÷èòûâàòü êðàé ýêðàíà
                    magnifierborder: '1px solid black', // âíåøíèé áîðäþð


                    // êîíòåéíåð òåêñòà ñíèçó ê êàðòèíêå
                    textdnbackground: '#fff',
                    textdnpadding: '10px',
                    textdnfont: '13px/20px cursive',


                    // êîýôôèöèåíòû ñêîðîñòè àíèìàöèè
                    scrollspeedanimate: 5 /*4*/ , // ïðîêðóòêè big êàðòèíêè
                    zoomspeedanimate: 7, // çóììèðîâàíèÿ (ïëàâíîñòü)
                    loopspeedanimate: 2.5 /*2.45342*/ , // ïåðåìåùåíèÿ îáëàñòè ëóïû è big êîíòåéíåðà â ðåæèìå ëóïû        
                    magnifierspeedanimate: 350, // ïîêàçà big êîíòåéíåðà


                    // âíåøíèé âèä
                    classmagnifier: "magnifier",
                    classcursorshade: "cursorshade",
                    classstatusdiv: "statusdiv",
                    classtextdn: "textdn",
                    classtracker: "tracker"

                },


                //isie: (function(){/*@cc_on @*//*@if(@_jscript_version >= 5)return true;@end @*/return false;})(), //is this IE?
                isie: (function() {
                    var nAgt = navigator.userAgent;
                    if (nAgt.indexOf("MSIE") != -1) return true;
                    else return false;
                })(),

                //isMobile: (function(){ if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ){ return true; } })(),

                highestzindex: function($img) {

                    var z = 0,
                        $els = $img.parents().add($img),
                        elz;
                    $els.each(function() {
                        elz = $(this).css('zIndex');
                        elz = isNaN(elz) ? 0 : +elz;
                        z = Math.max(z, elz);
                    });
                    return z;
                },

                getboundary: function(b, val, specs) {
                    if (b == "left") {
                        var rb = -specs.img.w * specs.newpower + specs.magnifier.w;
                        return (val > 0) ? 0 : (val < rb) ? rb : val;
                    } else {
                        var tb = -specs.img.h * specs.newpower + specs.magnifier.h;
                        return (val > 0) ? 0 : (val < tb) ? tb : val;
                    }
                },

                controlLoop: function($tracker) {
                    var self = this,
                        specs = $tracker.data('specs');
                    if (!specs) return;

                    var coords = specs.$img.offsetsl(),
                        pageX = self.cld.pageX999 - coords.left,
                        pageY = self.cld.pageY999 - coords.top;

                    self.cld.destU += (self.cld.pageX999 - self.cld.destU) / 2.45342;
                    self.cld.destV += (self.cld.pageY999 - self.cld.destV) / 2.45342;

                    specs.$statusdiv.css({ left: self.cld.destU - 10, top: self.cld.destV + 20 });

                    var csw = Math.round(specs.magnifier.w / specs.newpower),
                        csh = Math.round(specs.magnifier.h / specs.newpower);

                    self.cld.destK += (pageX - self.cld.destK) / specs.setting.loopspeedanimate;
                    self.cld.destL += (pageY - self.cld.destL) / specs.setting.loopspeedanimate;

                    specs.$cursorshade.css({
                        left: specs.img.w > csw ? Math.min(specs.img.w - csw, Math.max(0, self.cld.destK - csw / 2)) + coords.left - specs.cursorshade999.border999.left999 : coords.left - specs.cursorshade999.border999.left999,
                        top: specs.img.h > csh ? Math.min(specs.img.h - csh, Math.max(0, self.cld.destL - csh / 2)) + coords.top - specs.cursorshade999.border999.top999 : coords.top - specs.cursorshade999.border999.top999
                    });

                    if (specs.setting.innerzoommagnifier) {

                        self.cld.destM += (self.cld.pageX999 - self.cld.destM) / specs.setting.loopspeedanimate;
                        self.cld.destN += (self.cld.pageY999 - self.cld.destN) / specs.setting.loopspeedanimate;

                        specs.$magnifier.css({
                            left: self.cld.destM - Math.round(specs.magnifier.w / 2),
                            top: self.cld.destN - Math.round(specs.magnifier.h / 2)
                        });
                        specs.$textdn.css({
                            left: self.cld.destM - Math.round(specs.magnifier.w / 2),
                            top: self.cld.destN + specs.magnifier.h / 2
                        });
                    }

                    self.cld.currU += (pageX - self.cld.currU) / specs.setting.scrollspeedanimate;
                    self.cld.currV += (pageY - self.cld.currV) / specs.setting.scrollspeedanimate;

                    var newx = -self.cld.currU * specs.newpower + specs.magnifier.w / 2;
                    var newy = -self.cld.currV * specs.newpower + specs.magnifier.h / 2;

                    specs.$bigimage.css({ left: self.getboundary('left', newx, specs), top: self.getboundary('top', newy, specs) });
                    self.cld.controlTimer = setTimeout(function() {
                        self.controlLoop($tracker);
                    }, 30);

                },

                controlLoop2: function($tracker) {

                    var self = this,
                        specs = $tracker.data('specs');
                    if (!specs) return;

                    specs.currM += (specs.newpower - specs.currM) / specs.setting.zoomspeedanimate;
                    specs.currM = Math.round(specs.currM * 1000) / 1000;

                    specs.$cursorshade.css({
                        width: specs.img.w > Math.round(specs.magnifier.w / specs.currM) ? Math.round(specs.magnifier.w / specs.currM) : specs.img.w,
                        height: specs.img.h > Math.round(specs.magnifier.h / specs.currM) ? Math.round(specs.magnifier.h / specs.currM) : specs.img.h
                    });
                    specs.$bigimage.css({
                        width: Math.round(specs.currM * specs.bigimage.w * (specs.img.w / specs.bigimage.w)),
                        height: Math.round(specs.currM * specs.bigimage.h * (specs.img.h / specs.bigimage.h))
                    });

                    self.cld.controlTimer2 = setTimeout(function() {
                        self.controlLoop2($tracker);
                    }, 30);

                },

                cld: {},

                showimage: function($tracker) {

                    var self = this,
                        specs = $tracker.data('specs'),
                        width = specs.setting.magnifiersize[0],
                        height = specs.setting.magnifiersize[1],
                        magcoords = {},
                        coords = specs.$img.offsetsl(),
                        func = function() {},
                        left1 = 0,
                        top1 = 0;

                    magcoords.left = coords.left + (specs.setting.magnifierpos === 'left' ? -specs.magnifier.w - specs.setting.leftoffset : specs.img.w + specs.setting.rightoffset);
                    if (specs.setting.switchsides && !specs.setting.innerzoom) {

                        if (specs.setting.magnifierpos !== 'left' && magcoords.left + specs.magnifier.w + specs.setting.leftoffset >= $(window).width() && coords.left - specs.magnifier.w >= specs.setting.leftoffset)
                            magcoords.left = coords.left - specs.magnifier.w - specs.setting.leftoffset;
                        else if (specs.setting.magnifierpos === 'left' && magcoords.left < 0)
                            magcoords.left = coords.left + specs.img.w + specs.setting.rightoffset;
                    }

                    left1 = magcoords.left;
                    top1 = coords.top;
                    specs.$magnifier.css({ visibility: "visible", display: "none" });

                    if (specs.setting.descarea) {
                        left1 = $(specs.setting.descarea).offsetsl().left;
                        top1 = $(specs.setting.descarea).offsetsl().top;
                    }
                    if (specs.setting.innerzoommagnifier) {
                        left1 = self.cld.pageX999 - Math.round(specs.magnifier.w / 2);
                        top1 = self.cld.pageY999 - Math.round(specs.magnifier.h / 2);
                    }

                    //*
                    func = function() {

                            specs.$textdn.stop(true, true).fadeIn(specs.setting.magnifierspeedanimate);
                            if (!specs.setting.innerzoommagnifier)
                                specs.$textdn.css({ left: left1, top: top1 + height });
                        } // */     

                    if (specs.setting.innerzoom) {

                        left1 = coords.left;
                        top1 = coords.top;

                        func = function() {
                            specs.$img.css({ visibility: "hidden" });
                            specs.$textdn.css({ left: left1, top: top1 + height }).stop(true, true).fadeIn(specs.setting.magnifierspeedanimate);
                        };
                    }

                    switch (specs.setting.magnifiereffectanimate) {
                        case 'slideIn':
                            specs.$magnifier.css({
                                    left: left1,
                                    top: top1 - height / 3,
                                    width: width,
                                    height: height
                                })
                                .stop(true, true).show()
                                .animate({ top: top1 }, specs.setting.magnifierspeedanimate, "easeOutBounceSL", func);
                            break;
                        case 'showIn':
                            specs.$magnifier.css({
                                    left: coords.left + Math.round(specs.img.w / 2),
                                    top: coords.top + Math.round(specs.img.h / 2),
                                    width: Math.round(specs.magnifier.w / 5),
                                    height: Math.round(specs.magnifier.h / 5)
                                })
                                .stop(true, true).show().css({ opacity: "0.1" })
                                .animate({
                                    left: left1,
                                    top: top1,
                                    opacity: "1",
                                    width: width,
                                    height: height

                                }, specs.setting.magnifierspeedanimate, func);
                            break;
                        default:
                            specs.$magnifier.css({
                                    left: left1,
                                    top: top1,
                                    width: width,
                                    height: height
                                })
                                .stop(true, true)
                                .fadeIn(specs.setting.magnifierspeedanimate, func);
                    }
                    if (specs.setting.showstatus && (specs.title999 || specs.help))
                        specs.$statusdiv.html(specs.title999 + '<div style="font-size:80%">' + specs.help + '</div>')
                        .stop(true, true)
                        .fadeIn().delay(specs.setting.showstatustime).fadeOut("slow");
                    else specs.$statusdiv.hide();
                },

                hideimage: function($tracker) {

                    var self = this,
                        specs = $tracker.data('specs'),
                        coords = specs.$img.offsetsl();

                    switch (specs.setting.magnifiereffectanimate) {

                        case 'showIn':
                            specs.$magnifier.stop(true, true)
                                .animate({
                                        left: coords.left + Math.round(specs.img.w / 2),
                                        top: coords.top + Math.round(specs.img.h / 2),
                                        opacity: "0.1",
                                        width: Math.round(specs.magnifier.w / 5),
                                        height: Math.round(specs.magnifier.h / 5)
                                    },
                                    specs.setting.magnifierspeedanimate,
                                    function() { specs.$magnifier.hide(); });
                            break;

                        default:
                            specs.$magnifier.stop(true, true).fadeOut(specs.setting.magnifierspeedanimate);
                    }

                },

                /* Init function start.  */
                init: function($img, options, gallery) {;
                    var setting = $.extend({}, this.dsetting, options),
                        basezindex = setting.zindex || this.highestzindex($img),
                        img = { w: $img.width(), h: $img.height() },
                        cld = new cld(),
                        title = $img.attr("data-title") ? $img.attr("data-title") : '',
                        help = $img.attr("data-help") ? $img.attr("data-help") : '',
                        textdn = $img.attr("data-text-bottom") ? $img.attr("data-text-bottom") : '',
                        self = this,
                        newpower,
                        key,
                        $magnifier,
                        $cursorshade,
                        $statusdiv,
                        $tracker,
                        $textdn;

                    if (img.h === 0 || img.w === 0) {;
                        $(new Image()).load(function() {
                            self.init($img, options);
                        }).attr("src", $img.attr("src"));
                        return;
                    }

                    $img.css({ visibility: "visible" });
                    setting.largeimage = $img.attr("data-large") || $img.attr("src");

                    for (key in setting)
                        if (setting[key] === '') setting[key] = this.dsetting[key];

                    if (setting.zoomrange[0] < setting.zoomstart)
                        newpower = setting.zoomstart;
                    else newpower = setting.zoomrange[0];

                    if (setting.magnifiersize.toString() === '0,0' ||
                        setting.magnifiersize.toString() === '')
                        if (setting.innerzoommagnifier)
                            setting.magnifiersize = [img.w / 2, img.h / 2];
                        else setting.magnifiersize = [img.w, img.h];

                    if (setting.descarea && $(setting.descarea).length) {
                        if ($(setting.descarea).width() === 0 || $(setting.descarea).height() === 0)
                            setting.descarea = false;
                        else setting.magnifiersize = [$(setting.descarea).width(), $(setting.descarea).height()];
                    } else setting.descarea = false;

                    if (setting.innerzoom) {
                        setting.magnifiersize = [img.w, img.h];
                        if (!options.cursorshade)
                            setting.cursorshade = false;
                        if (!options.scrollspeedanimate)
                            setting.scrollspeedanimate = 10;
                    }

                    if (setting.innerzoommagnifier) {
                        if (!options.magnifycursor)
                            if (window.chrome || window.sidebar)
                                setting.magnifycursor = "none";
                        setting.cursorshade = false;
                        setting.magnifiereffectanimate = "fadeIn";
                    }

                    // === == === //

                    function cld() {
                        this.pageX999 = 0;
                        this.pageY999 = 0;
                    }
                    // === == === //

                    function getspecs($bigimage) {

                        $tracker.data("specs", {

                            setting: setting,
                            title999: title,
                            help: help,

                            $img: $img,
                            $magnifier: $magnifier,
                            $bigimage: $bigimage,
                            $statusdiv: $statusdiv,
                            $cursorshade: $cursorshade,
                            $textdn: $textdn,

                            img: img,
                            bigimage: { w: $bigimage.width(), h: $bigimage.height() },
                            magnifier: { w: $magnifier.width(), h: $magnifier.height() },
                            cursorshade999: {
                                w: $cursorshade.width(),
                                h: $cursorshade.height(),
                                border999: {
                                    left999: parseInt($cursorshade.css("border-left-width")) || 0,
                                    top999: parseInt($cursorshade.css("border-top-width")) || 0
                                }
                            },

                            currM: newpower,
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

                    if ($.event.fixHooks) {
                        for (var i = toFix.length; i;) {
                            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
                        }
                    }

                    $.event.special.mousewheel = {
                        setup: function() {
                            if (this.addEventListener) {
                                for (var i = toBind.length; i;) {
                                    this.addEventListener(toBind[--i], handler, false);
                                }
                            } else {
                                this.onmousewheel = handler;
                            }
                        },

                        teardown: function() {
                            if (this.removeEventListener) {
                                for (var i = toBind.length; i;) {
                                    this.removeEventListener(toBind[--i], handler, false);
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
                        if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta; }
                        if (orgEvent.detail) { delta = orgEvent.detail * -1; }

                        // New school wheel delta (wheel event)
                        if (orgEvent.deltaY) {
                            deltaY = orgEvent.deltaY * -1;
                            delta = deltaY;
                        }
                        if (orgEvent.deltaX) {
                            deltaX = orgEvent.deltaX;
                            delta = deltaX * -1;
                        }

                        // Webkit
                        if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY; }
                        if (orgEvent.wheelDeltaX !== undefined) { deltaX = orgEvent.wheelDeltaX * -1; }

                        // Look for lowest delta to normalize the delta values
                        absDelta = Math.abs(delta);
                        if (!lowestDelta || absDelta < lowestDelta) { lowestDelta = absDelta; }
                        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
                        if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) { lowestDeltaXY = absDeltaXY; }

                        // Get a whole value for the deltas
                        fn = delta > 0 ? "floor" : "ceil";
                        delta = Math[fn](delta / lowestDelta);
                        deltaX = Math[fn](deltaX / lowestDeltaXY);
                        deltaY = Math[fn](deltaY / lowestDeltaXY);

                        // Add event and delta to the front of the arguments
                        args.unshift(event, delta, deltaX, deltaY);

                        return ($.event.dispatch || $.event.handle).apply(this, args);
                    }

                    // === == === //

                    $.fn.offsetsl = function() {
                        var elem = this.get(0);

                        function getOffsetSum(elem) {
                            var top999 = 0,
                                left999 = 0;
                            while (elem) {
                                top999 = top999 + parseInt(elem.offsetTop);
                                left999 = left999 + parseInt(elem.offsetLeft);
                                elem = elem.offsetParent;
                            }
                            return { top: top999, left: left999 }
                        }
                        if (elem.getBoundingClientRect)
                            return this.offset();
                        else return getOffsetSum(elem)
                    }

                    // === == === //

                    $.easing.easeOutBounceSL = function(x, t, b, c, d) {
                        if ((t /= d) < (1 / 2.75)) {
                            return c * (7.5625 * t * t) + b;
                        } else if (t < (2 / 2.75)) {
                            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                        } else if (t < (2.5 / 2.75)) {
                            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                        } else {
                            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                        }
                    }

                    // === == === //      

                    $magnifier = $("<div />")
                        .attr({ "class": setting.classmagnifier })
                        .css({
                            position: "absolute",
                            zIndex: basezindex,
                            width: setting.magnifiersize[0],
                            height: setting.magnifiersize[1],
                            left: -10000,
                            top: -10000,
                            visibility: "hidden",
                            overflow: "hidden"
                        })
                        .appendTo(document.body);

                    if (!options.classmagnifier)
                        $magnifier.css({ border: setting.magnifierborder });

                    $cursorshade = $("<div />");
                    if (setting.cursorshade) {
                        $cursorshade.attr({ "class": setting.classcursorshade })
                            .css({
                                zIndex: basezindex,
                                display: "none",
                                position: "absolute",
                                width: Math.round(setting.magnifiersize[0] / setting.zoomstart),
                                height: Math.round(setting.magnifiersize[1] / setting.zoomstart),
                                top: 0,
                                left: 0
                            })
                            .appendTo(document.body);

                        if (!options.classcursorshade)
                            $cursorshade.css({
                                border: setting.cursorshadeborder,
                                opacity: setting.cursorshadeopacity,
                                backgroundColor: setting.cursorshadecolor
                            });
                    }

                    if (!setting.loadinggif)
                        setting.loadinggif = "data:image/gif;base64,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";

                    $statusdiv = $("<div />")
                        .attr({ "class": setting.classstatusdiv + " preloadevt" })
                        .css({
                            position: "absolute",
                            display: "none",
                            zIndex: basezindex,
                            top: 0,
                            left: 0
                        })
                        .html('<img src="' + setting.loadinggif + '" />')
                        .appendTo(document.body);

                    $tracker = $("<div />")
                        .attr({ "class": setting.classtracker })
                        .css({
                            zIndex: basezindex,
                            backgroundImage: self.isie ? "url(cannotbe)" : "none",
                            position: "absolute",
                            width: img.w,
                            height: img.h,
                            left: gallery ? $img.offsetsl().left : -10000,
                            top: gallery ? $img.offsetsl().top : -10000
                        }).appendTo(document.body);

                    $textdn = $("<div />");
                    if (textdn) {
                        $textdn.attr({ "class": setting.classtextdn })
                            .css({
                                position: "absolute",
                                zIndex: basezindex,
                                left: 0,
                                top: 0,
                                display: "none"
                            })
                            .html(textdn)
                            .appendTo(document.body);
                        if (!options.classtextdn)
                            $textdn.css({
                                border: setting.magnifierborder,
                                background: setting.textdnbackground,
                                padding: setting.textdnpadding,
                                font: setting.textdnfont
                            });
                        $textdn.css({ width: setting.magnifiersize[0] - parseInt($textdn.css("padding-left")) - parseInt($textdn.css("padding-right")) });
                    }
                    $tracker.data("largeimage", setting.largeimage);


                    // EVENTS     
                    $(window).bind("resize", function() {
                        var o = $img.offsetsl();
                        if ($tracker.data("loadimgevt"))
                            $tracker.css({ left: o.left, top: o.top });
                        $statusdiv.filter(".preloadevt").css({ left: o.left + img.w / 2 - $statusdiv.width() / 2, top: o.top + img.h / 2 - $statusdiv.height() / 2, visibility: 'visible' });
                    });
                    $(document).mousemove(function(e) {
                        self.cld.docX = e.pageX;
                        if (self.cld.pageX999 !== self.cld.docX) {
                            clearTimeout(self.cld.controlTimer);
                            clearTimeout(self.cld.controlTimer2);
                            $img.css({ visibility: "visible" });
                            //$tracker.hide().css({left: 10000, top: 10000});         
                        }
                    });
                    $img.mouseover(function(e) {
                        var o = $img.offsetsl();
                        $tracker.css({ left: o.left, top: o.top }).show();
                    });
                    $tracker.mouseover(function(e) {

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

                        $tracker.css({ cursor: setting.magnifycursor });
                        setting.largeimage = $img.attr("data-large") || $img.attr("src");

                        $statusdiv.show();
                        clearTimeout(self.cld.controlTimer);
                        clearTimeout(self.cld.controlTimer2);

                        if (setting.largeimage !== $tracker.data('largeimage')) {

                            ;
                            $(new Image()).load(function() {}).attr("src", setting.largeimage);

                            $($tracker).unbind();
                            $($statusdiv).remove();
                            $($cursorshade).remove();
                            $($magnifier).remove();
                            $($tracker).remove();
                            $($textdn).remove();

                            self.init($img, options, true);
                        }
                        if ($tracker.data("loadevt")) {
                            $cursorshade.fadeIn();
                            self.showimage($tracker);
                            self.controlLoop($tracker);
                            self.controlLoop2($tracker);
                        }

                    });
                    $tracker.mousemove(function(e) {
                        setting.largeimage = $img.attr("data-large") || $img.attr("src");
                        if (setting.largeimage !== $tracker.data("largeimage")) {

                            ;
                            $(new Image()).load(function() {}).attr("src", setting.largeimage);

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
                        $img.css({ visibility: "visible" });
                        $textdn.hide();
                        $cursorshade.add($statusdiv.not(".preloadevt")).stop(true, true).hide();
                    });
                    $tracker.one("mouseover", function(e) {

                        var imgcoords = $img.offsetsl();
                        var $bigimage = $('<img src="' + setting.largeimage + '"/>').css({ position: "relative", maxWidth: "none" }).appendTo($magnifier);
                        if (!self.loaded999[setting.largeimage]) {
                            $tracker.css({ opacity: setting.loadopacity, background: setting.loadbackground });
                            $tracker.data("loadimgevt", true);
                            $statusdiv.css({ left: imgcoords.left + img.w / 2 - $statusdiv.width() / 2, top: imgcoords.top + img.h / 2 - $statusdiv.height() / 2, visibility: 'visible' });
                        }
                        $bigimage.bind("loadevt", function(event, e) {

                            if (e.type === "error") return;
                            $tracker.mouseout(function(e) { //image onmouseout           
                                self.hideimage($tracker);
                                clearTimeout(self.cld.controlTimer);
                                clearTimeout(self.cld.controlTimer2);
                                $img.css({ visibility: "visible" });
                                $textdn.hide();
                                $tracker.hide().css({ left: -10000, top: -10000 });
                            });
                            $tracker.mouseover(function(e) { //image onmouseover 
                                specs.currM = specs.newpower;
                            });
                            $tracker.data("loadimgevt", false);
                            $tracker.css({ opacity: 0, cursor: setting.magnifycursor });
                            $statusdiv.empty();
                            if (!options.classstatusdiv)
                                $statusdiv.css({
                                    border: setting.statusdivborder,
                                    background: setting.statusdivbackground,
                                    padding: setting.statusdivpadding,
                                    font: setting.statusdivfont,
                                    opacity: setting.statusdivopacity
                                });
                            $statusdiv.hide().removeClass("preloadevt");
                            self.loaded999[setting.largeimage] = true;
                            getspecs($bigimage);
                            if (cld.pageX999 == self.cld.docX) {
                                $cursorshade.fadeIn();
                                self.showimage($tracker);
                                clearTimeout(self.cld.controlTimer);
                                clearTimeout(self.cld.controlTimer2);
                                self.controlLoop($tracker);
                                self.controlLoop2($tracker);
                            }

                            var specs = $tracker.data("specs");
                            $bigimage.css({ width: setting.zoomstart * specs.bigimage.w * (img.w / specs.bigimage.w), height: setting.zoomstart * specs.bigimage.h * (img.h / specs.bigimage.h) });
                            $tracker.data("loadevt", true);

                            if (setting.zoomrange && setting.zoomrange[1] > setting.zoomrange[0]) { //if zoom range enabled          
                                $tracker.bind("mousewheel", function(e, delta) {
                                    var zoomdir = delta < 0 ? "out" : "in",
                                        power = specs.newpower,
                                        newpower = (zoomdir == "in") ? Math.min(power + setting.stepzoom, setting.zoomrange[1]) : Math.max(power - setting.stepzoom, setting.zoomrange[0]);

                                    specs.newpower = newpower;
                                    specs.delta = delta;
                                    e.preventDefault();
                                });

                            } else if (setting.disablewheel) {
                                $tracker.bind("mousewheel", function(e) { e.preventDefault(); });
                            }

                        }); //end $bigimage onload */

                        if (isImageLoaded($bigimage.get(0)))
                            $bigimage.trigger("loadevt", { type: "load" });
                        else $bigimage.bind("load error", function(e) { $bigimage.trigger("loadevt", e) });
                    });
                },
                loaded999: {}
            });
        })(jQuery, window);




    }





    function buy_service(id) {

        ui = ` <div class="card-header card-header-primary">
            <h4 class="card-title">Legal Documents Portal(service name)</h4>
        </div>
  <div class="row">
  <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">Purchase Document(service)</h4>
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
              <th>Document</th>
              <th>Category</th>
              <th >Qty</th>
              <th >Amount</th>
              <th >Actions</th>
          </tr>
      </thead>
      <tbody id="mytable">
         
      </tbody>
  </table>
</div>
      </div>
  </div>
</div>


 `;


        $.get("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { getDocumentsService: id, token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }
            $("#mytable").empty();
            obj.documents.forEach(element => {


                console.log(element.payment_id);
                if (element.payment_id == "null") {

                    $("#mytable").append(`
      <tr>
      <td>
          <div class="img-container">
              <img class="my-foto" src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" alt="...">
          </div>
      </td>
      <td class="td-name">
          <a href="#jacket">${element.Name}</a>
      </td>
      <td>
          ${element.category}
      </td>
      <td class="td-number">
          1
      </td>
      <td>
          ${element.price}
      </td>
         <td>
         <button class="btn btn-default" id="main_id_in" data-op="makePayment" 
         onclick="sessionStorage.setItem('id',${element.id});sessionStorage.setItem('type_paid','documents');
         sessionStorage.setItem('name','${element.Name}');sessionStorage.setItem('billing_type','la');
         sessionStorage.setItem('price',${element.price * 1});sessionStorage.setItem('service_id',${element.service_id});
         ">
          Purchase</button>
      </td>
  </tr>             
                        `);
                } else {


                    $("#mytable").append(`
    <tr>
    <td>
        <div class="img-container">
            <img class="my-foto" src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" alt="...">
        </div>
    </td>
    <td class="td-name">
        <a href="#jacket">${element.Name}</a>
    </td>
    <td>
        ${element.category}
    </td>
    <td class="td-number">
        1
    </td>
    <td>
        ${element.price}
    </td>
       <td>
       
    </td>
</tr>             
                      `);

                }

            });
        });



        $(content).html(ui);

        $("#mytable").on("click", "#main_id_in", function() {
            console.log($(this).attr('data-op'));
            let myatt = $(this).attr('data-op');
            eval(`${myatt}()`);

        });



    }

    function orders() {
        ui = `<div class="card-header card-header-primary">
            <h4 class="card-title">Purchased Items</h4>
        </div>
  <div class="row">
  <div class="col-md-12">
      <div class="card">
        <div class="card-header card-header-text card-header-primary">
            <div class="card-text">
              <h4 class="card-title">View</h4>
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
              <th>Document</th>
              <th class="th-description">Category</th>
              <th class="text-right">Price</th>
              <th class="text-right">Qty</th>
              <th class="text-right">Amount</th>
              <th  class="text-right">Actions</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>
                  <div class="img-container">
                      <img src="https://images.thenorthface.com/is/image/TheNorthFace/NF0A2VFL_619_hero" alt="...">
                  </div>
              </td>
              <td class="td-name">
                  <a href="#jacket">Document Name</a>
              </td>
              <td>
                  commercial law
              </td>
              <td class="td-number">
                  <small>&#x20AC;</small>549
              </td>
              <td class="td-number">
                  1
              </td>
              <td class="td-number">
                  <small>&#x20AC;</small>549
              </td>
                 <td class="td-actions">
                      <button type="button" rel="tooltip" data-placement="left" title="Remove item" class="btn btn-simple">
                      <i class="material-icons">close</i>
                  </button>
              </td>
          </tr>
      </tbody>
  </table>
</div>
      </div>
  </div>
</div>`;

        $(content).html(ui);
    }


    function choose_subscription_form() {
        ui = `<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
           
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title "></h4>
                </div>
                <div class="card-body">
                    <form  class="row" enctype="multiple/form-data">
                    <div class="form-group col-6">
                    <div class="form-group">
    <label for="exampleFormControlSelect2">Choose Subscription To Cancel</label>
    <select style="height:50px;" multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
      <option>standard </option>
      <option>elite </option>
    </select>
  </div>
                          <div class="col-12">
                        <button type="button" class="btn btn-primary">Cancel Subscription</button> 
                          </div>
                          
                          
                    </form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

        $(content).html(ui);
    }

    function choose_billing_form() {
        ui = `<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
           
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title "></h4>
                </div>
                <div class="card-body">
                    <form  class="row" enctype="multiple/form-data">
                    <div class="form-group col-6">
                    <div class="form-group">
    <label for="exampleFormControlSelect2">Choose Subscription To Bill Annually</label>
    <select style="height:50px;" multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
      <option>standard </option>
      <option>elite </option>
    </select>
  </div>
                          <div class="col-12">
                        <button type="button" class="btn btn-primary">Proceed</button> 
                          </div>
                          
                          
                    </form>


              
                </div>
              </div>
            </div>
      
          </div>
        </div>`;

        $(content).html(ui);
    }


    function subscription_payment_history() {
        ui = `<div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Billing History</h4>
                </div>

                    <form class="navbar-form">
              <div class="input-group no-border">
                
              <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
              <button type="submit" id="searchbtn" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                </button>
              </div>
            </form>
                <div class="card-body table-responsive">
                  <table class="table table-hover">
                    <thead class="text-warning">
                      <th>Product ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Order No</th>
                      <th>Amount</th>
                      <th>Type Paid</th>
                      <th>Payment Status</th>
                    </thead>
                    <tbody id="mytable">
                      

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          `;


        $.get("https://cmversiontwo.cmadvocates.com/controller/Payment.php", { payment: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
            }
            $("#mytable").empty();
            obj.payments.forEach(element => {
              
                let btn = '';
                if (element.billing_type == 'annually') {
                    btn = `<button type="button" id="main_id_in" data-op="choose_subscription_form" class="btn btn-primary">Cancel Subscription</button>`;
                } else if (element.billing_type == 'monthly') {
                    btn = `<button type="button" id="main_id_in" data-op="choose_billing_form" class="btn btn-primary"><span class="material-icons">paid</span> Bill Annually</button>`;

                }else{
                  btn ="Life Time ";
                }


                $("#mytable").append(`<tr>
                                <td>${element.product_id}</td>
                                <td>${element.name}</td>
                                <td>${element.date}</td>
                                <td>${element.reg}</td>
                                <td>${element.amount}</td>
                                <td>${element.type_paid}</td>
                                <td>${element.status}</td>
                              </tr>
                                `);
            });
        });



        $(content).html(ui);

        const main_id_in = document.querySelectorAll("#main_id_in");

        console.log(main_id_in.length);

        $("#mytable").on("click", "#main_id_in", function() {
          let myatt = $(this).attr('data-op');
          eval(`${myatt}()`);

      });

        // main_id_in.forEach((ele) => {
        //     // Here comes the Code that should be executed on every Element, e.g.
        //     ele.addEventListener("click", () => {

        //         while (content.firstChild) {
        //             content.removeChild(content.lastChild);
        //         }
        //         let myatt = ele.getAttribute("data-op");
        //         eval(`${myatt}()`);

        //     });

        // });

        

    }





    function proceed_unpurchased() {
        ui = `    <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Purchase Here</h4>
                  <p class="card-category"> View documents here</p>
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
              </div>
            </form>
                    
                        <th>
                         Document Name
                        </th>
                        <th>
                         Category
                        </th>
                        <th>
                        </th>
                        <th>
                          Amount
                        </th>
                          <th>
                          Actions
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                        
                          <td>
                            Employment Registration form
                          </td>
                          <td>
                            Education
                          </td>
                          <td><span class="material-icons">lock</span></td>
                            <td>
                          kshs 3000
                          </td>
                          <td>
                          <button class="btn btn-primary"><span class="material-icons">attach_money</span>Purchase Here </button>
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


    function document_purchase() {

        ui = `<div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Purchased Documents</h4>
                  <p class="card-category"> View documents here</p>
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
              </div>
            </form>
                        <th>
                         Document Name
                        </th>
                        <th>
                         Category
                        </th>
                          <th>
                         Date
                        </th>
                        <th>
                         Description
                        </th>
                        <th>
                          Amount
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
                            Employment Registration form
                          </td>
                          <td>
                            Education
                          </td>
                            <td>
                            12/09/2021
                          </td>
                          <td>
                          lorem ipsum
                          </td>
                            <td>
                          kshs 3000
                          </td>
                          <td>
                          <button class="btn btn-primary">Export </button>
                          <button class="btn btn-danger">Download</button>
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
    }









    function edit_profile() {
        ui = `<div class="container-fluid">
  <div class="row">
 <div class="col-lg-4 col-md-6 col-sm-6">
   <div class="card card-stats">
     <div class="card-header card-header-warning card-header-icon">
       <div class="card-icon">
         <i class="material-icons">content_copy</i>
       </div>
       <p class="card-category"> Documents purchased</p>
       <h3 class="card-title" id="doc_purch">0
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
 <div class="col-lg-4 col-md-6 col-sm-6">
   <div class="card card-stats">
     <div class="card-header card-header-success card-header-icon">
       <div class="card-icon">
         <i class="material-icons"><span style="font-size:40px;" class="material-icons">support_agent</span></i>
       </div>
       <p class="card-category">Consultations</p>
       <h3 class="card-title">0</h3>
     </div>
     <div class="card-footer">
       <div class="stats">
         <i class="material-icons">date_range</i> Last 24 Hours
       </div>
     </div>
   </div>
 </div>
 <div class="col-lg-4 col-md-6 col-sm-6">
   <div class="card card-stats">
     <div class="card-header card-header-danger card-header-icon">
       <div class="card-icon">
         <i class="material-icons">credit_card</i>
       </div>
       <p class="card-category">Total Subscriptions</p>
       <h3 class="card-title" id="sub_purch">0</h3>
     </div>
     <div class="card-footer">
       <div class="stats">
         <i class="material-icons">date_range</i> last 24 hours
       </div>
     </div>
   </div>
 </div>
</div>
<div class="row">
 <div class="col-md-8">
   <div class="card">
     <div class="card-header card-header-primary">
       <h4 class="card-title">Edit Profile</h4>
       <p class="card-category">Complete your profile</p>
     </div>
     <div class="card-body">
       <form method="POST" id="edit_user">
         <div class="row">
           <div class="col-md-4">
             <div class="form-group">
               <input type="email" name="emailp" id="up_email" class="form-control" placeholder="Email">
             </div>
           </div>
           <div class="col-md-4">
             <div class="form-group">
               <input type="email" name="con_email" id="up_con_email" class="form-control" placeholder="Confirm Email">
             </div>
           </div>
           <div class="col-md-4">
             <div class="form-group">
               <input type="text" name="businessName" id="businessName" class="form-control" placeholder="Business Name">
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-md-6">
             <div class="form-group">
               <input type="text" name="registrationNumber" id="registrationNumber" class="form-control" placeholder="Registration Number">
             </div>
           </div>
           <div class="col-md-6">
             <div class="form-group">
               <input type="text" name="physicalAddress" id="physicalAddress" class="form-control" placeholder="Physical Adress">
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-md-6">
             <div class="form-group">
               <input type="text" name="phoneNumber" id="phoneNumber" class="form-control" placeholder="Office Telephone">
             </div>
           </div>

           
           <div class="col-md-6">
             <div class="form-group">
               <input type="text" name="contactFirstName" id="userName" class="form-control" placeholder="Username">
             </div>
           </div>

         </div>
         <button type="submit" class="btn btn-primary pull-right">Submit</button>
        

         <div class="clearfix"></div>
       </form>
     </div>
   </div>
 </div>
 <div class="col-md-4">
   <div class="card card-profile">
     <div class="card-avatar">
       <a href="javascript:;">
         <img class="img" src="assets/img/faces/marc.jpg" />
       </a>
     </div>
     <div class="card-body">
       <h6 class="card-category text-gray">CEO / Co-Founder</h6>
       <h4 class="card-title"><?php echo $userDetails[0]['firstName']; ?></h4>
       <p class="card-description">
         Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
       </p>
       <a href="javascript:;" class="btn btn-primary btn-round">Choose Photo</a>
     </div>
   </div>
 </div>

 <div class="col-md-8">
  <div class="card">
    <div class="card-header card-header-primary">
      <h4 class="card-title">Add Certificates</h4>
      <p class="card-category">Required to access payment</p>
    </div>
    <div class="card-body">
      <form id="moodal_data" enctype="multipart/form-data" method="POST">
          <div class="form-group form-file-upload form-file-multiple">
              <input type="file" name="cert_of_reg" required class="inputFileHidden">
              <div class="input-group">
              <input type="text" name="cert_of_reg" class="form-control inputFileVisible" placeholder="Certificate Of Registration">
              <span class="input-group-btn">
              <button type="button" class="btn btn-fab btn-round btn-primary">
              <i class="material-icons">description</i>
              </button>
              </span>
              </div>
          </div>
      
          <div class="form-group form-file-upload form-file-multiple">
              <input type="file" name="kra" required class="inputFileHidden">
              <div class="input-group">
              <input type="text" name="kra" class="form-control inputFileVisible" placeholder="Kra Pin">
              <span class="input-group-btn">
              <button type="button" class="btn btn-fab btn-round btn-primary">
              <i class="material-icons">description</i>
              </button>
              </span>
              </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
             
    </div>
  </div>
</div>


</div>
</div>



`;


$.get("https://cmversiontwo.cmadvocates.com/controller/UserStats.php", {documents_number: "D", token1: sessionStorage.getItem("token") }, function(data) {
      const obj = JSON.parse(data);
      

      $("#doc_purch").text(obj.value_doc);

  });

  $.get("https://cmversiontwo.cmadvocates.com/controller/UserStats.php", {subscription_number: "D", token1: sessionStorage.getItem("token") }, function(data) {
    const obj = JSON.parse(data);

    $("#sub_purch").text(obj.value_sub)
});

        $.get("https://cmversiontwo.cmadvocates.com/controller/User.php", { user_profile: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }

            obj.profile.forEach(element => {

                $("#up_email").val(element.email);
                $("#up_con_email").val(element.email);
                $("#businessName").val(element.businessName);
                $("#registrationNumber").val(element.registrationNumber);
                $("#physicalAddress").val(element.physicalAddress);
                $("#phoneNumber").val(element.contactPhoneNumber);
                $("#userName").val(element.userName);

                if (element.user_image == "null" || element.user_image == "NULL") {

                    $(".img").attr("src", "assets/img/faces/marc.jpg");
                } else {
                    $(".img").attr("src", element.user_image);

                }

            });
        });




        $(content).html(ui);
        $("#moodal_data").submit(function(event) {
            event.preventDefault();
            let formData = new FormData(moodal_data);

            $.ajax({
                type: "POST",
                enctype: 'multipart/form-data',
                url: url_send,
                data: formData,
                crossDomain: true,
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function(data) {

                    console.log(data);
                    const obj = JSON.parse(data);
                    if (obj.result == "session") {
                        $("#reauth").modal();
                        return;
                    }
                    if (obj.result == 'error') {
                        alert("Error in adding of certificates");
                    } else if (obj.result == 'success') {

                        alert("We will notify you to commence payment");
                    }
                },
                error: function(e) {

                    console.log(data);

                }

            });

        });

        $("#edit_user").submit((e) => {
            e.preventDefault();

            var edit_user = document.querySelector("#edit_user");

            if ($("#up_email").val() != "" && $("up_con_email").val() != "" && $("#up_email").val() == $("#up_con_email").val()) {

                const formData = new FormData(edit_user);
                formData.append('tokenp', sessionStorage.getItem("token"));

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
                    success: function(data) {
                        console.log(data);

                        const obj = JSON.parse(data);
                        if (obj.result == "session") {
                            $("#reauth").modal();
                            return;
                        }
                        if (obj.result == "success") {
                            alert(obj.value);
                            edit_profile();
                        } else {
                            alert(obj.value);
                        }


                    },
                    error: function(e) {

                        console.log(data);

                    }

                });

            } else {
                alert("Email must match");
            }

        });

        /*
          $("#moodal_data").on("submit",()=>{
            e.preventDefault();
            });
          */
        $('.form-file-simple .inputFileVisible').click(function() {
            $(this).siblings('.inputFileHidden').trigger('click');
        });

        $('.form-file-simple .inputFileHidden').change(function() {
            var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
            $(this).siblings('.inputFileVisible').val(filename);
        });

        $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function() {
            $(this).parent().parent().find('.inputFileHidden').trigger('click');
            $(this).parent().parent().addClass('is-focused');
        });

        $('.form-file-multiple .inputFileHidden').change(function() {
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

        $('.form-file-multiple .btn').on('focus', function() {
            $(this).parent().siblings().trigger('focus');
        });

        $('.form-file-multiple .btn').on('focusout', function() {
            $(this).parent().siblings().trigger('focusout');
        });
    }

    function select_document() {
        ui = `<div class="container-fluid">
          <div class="row">
          <div class="col-md-12 alert d-none" role="alert">
 
          </div>
             <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Where is the document?</h4>
                </div>
                <div class="card-body">
             <form  enctype="multiple/form-data">

<div class="form-group">
    <label for="exampleFormControlSelect2">Choose Subscription</label>
    <select style="height:50px;" multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
      <option>standard </option>
      <option>elite </option>
    </select>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect2">Choose Service</label>
    <select style="height:50px;" multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
      <option>standard </option>
      <option>elite </option>
    </select>
  </div>
  <button type="submit" data-op="proceed_unpurchased" id="main_id_in" class="btn btn-primary">Proceed</button>
</form>


              
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

    function add_review_document() {
        ui = ` <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Upload Document</h4>
                </div>
                <div class="card-body">
             <form>

                      <div class="form-group">
    <label for="exampleFormControlSelect2">Select Document</label>
    <select multiple class="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect2">
      <option>document 1</option>
      <option>document 2</option>
      <option>document 3</option>
      <option>document 4</option>
      <option>document 5</option>
    </select>
  </div>
 



  <div class="form-group form-file-upload form-file-multiple">
    <input type="file" multiple="" class="inputFileHidden">
    <div class="input-group">
        <input type="text" class="form-control inputFileVisible" placeholder="Multiple Files" multiple>
        <span class="input-group-btn">
            <button type="button" class="btn btn-fab btn-round btn-info">
                <i class="material-icons">article</i>
            </button>
        </span>
    </div>
  </div>
   
   <button type="button" class="btn btn-primary">Send</button>

  </div>

`;

        $(content).html(ui);

        // FileInput
        $('.form-file-simple .inputFileVisible').click(function() {
            $(this).siblings('.inputFileHidden').trigger('click');
        });

        $('.form-file-simple .inputFileHidden').change(function() {
            var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
            $(this).siblings('.inputFileVisible').val(filename);
        });

        $('.form-file-multiple .inputFileVisible, .form-file-multiple .input-group-btn').click(function() {
            $(this).parent().parent().find('.inputFileHidden').trigger('click');
            $(this).parent().parent().addClass('is-focused');
        });

        $('.form-file-multiple .inputFileHidden').change(function() {
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

        $('.form-file-multiple .btn').on('focus', function() {
            $(this).parent().siblings().trigger('focus');
        });

        $('.form-file-multiple .btn').on('focusout', function() {
            $(this).parent().siblings().trigger('focusout');
        });

    }


    function view_document() {
        ui = `     <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
            <div class="alert review_doc-al d-none" role="alert"></div>
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Purchased Documents</h4>
                  <p class="card-category"> View documents here</p>
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
                  <button class="btn btn-primary" id="main_id_in" data-op="select_document">Continue Shopping </button>

                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
                        <th>Type</th>
                        <th>
                         Document Name
                        </th>
                        <th>
                         Category
                        </th>
                        <th>
                          Downloads Limit
                        </th>
                          <th>
                          Actions
                        </th>
                        <th>
                          Review Limit
                        </th>
                        <th>
                          Review
                        </th>
                      </thead>
                      <tbody id="mytable">
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        $.get("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { getPurchasedDocuments: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }
            $("#mytable").empty();
            obj.documents.forEach(element => {

                if (element.type == "solo") {

                    $("#mytable").append(` <tr>
                <td>Service</td>
                <td>${element.Name}</td>
                <td>${element.category}</td>
                <td>${element.download_count}</td>
                <td><a href="${element.document}" download class="btn"  data_type="local" data_service_id="${element.service_id}" data_update="${element.id}" id="main_id_in">Download</a><td>
                <td>Life Time</td>
                <td><!--<button class="btn" onclick="review_document(${element.id})">Review</button>--></td>
              </tr>
                                  `);
                } 
                else if (element.type == "subscriptions") {


                  if(element.download_count < 1){
                    btn_download = `<button class="btn" disabled>Download</button>`;
                  }else{
                    btn_download = `<a href="${element.document}" download class="btn" data_type="sub" data_update="${element.id}" id="main_id_in">Download</a>`;
                    
                  }

                  if(element.review_status == "review" || element.review_count < 1){
                    btn = `<button class="btn" disabled data_type="sub" data_id="${element.document}" data_update="${element.id}" id="main_id_in">Review</button>`;
                   
                  }else{
                    btn = `<button class="btn" data_type="review" data_update="${element.id}" id="main_id_in" data-toggle="modal" data-target="#exampleModal" 
                    >Review</button>`;

                   }

                  $("#mytable").append(` <tr>
                  <td>${element.type}</td>
                  <td>${element.Name}</td>
                  <td>${element.category}</td>
                  <td>${element.download_count}</td>
                  <td>${btn_download}</td>
                  <td>${element.review_count}</td>
                  <td>${btn}</td>
                </tr>
                                    `);

                }
            });
        });

        $(content).html(ui);

        $("#mytable").on("click", "#main_id_in", function() {
            
            if ($(this).attr('data_type') == "sub") {

                //
                $.post("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { id: $(this).attr('data_update') })
                    .done(function(data) {
                        const obj = JSON.parse(data);

                        if (obj.result == "error") {
                            console.log(data);
                        } else if (obj.result == "success") {
                          view_document();

                        }
                    });

                //
            } 
            else if($(this).attr('data_type') == "local"){

              $.post("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { rem_id: $(this).attr('data_update'),service_id: $(this).attr('data_service_id')})
              .done(function(data) {
                  const obj = JSON.parse(data);

                  if (obj.result == "error") {
                      console.log(data);
                  } else if (obj.result == "success") {
                    view_document();

                  }
              });


            }
            
            else if ($(this).attr('data_type') == "review") {
                //

                review_send.addEventListener("submit", (e) => {
                  e.preventDefault();
              
            let myft = document.querySelector("#feedback");   
                  const formData = new FormData(review_send);
                  formData.append("review",$(this).attr('data_update'));
              
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
                      success: function(data) {
                          const obj = JSON.parse(data);
                          
                          if (obj.result == "error"){
                            alert(data);    
              
                          }
                          else if (obj.result == "success"){
              
                                view_document();
                            
                          }
              
              
                      },
                      error: function(e) {
              
                          console.log(data);
              
                      }
              
                  });
              
               
              
              });
            } else {
                eval(`${myatt}("${doc}")`);
            }



        });



    }

    function readDocument(doc) {

        ui = `
  <!--<embed src="${doc}"><embed>-->
  <iframe
    src="${doc}"
    frameBorder="0"
    scrolling="auto"
    height="100vh"
    width="100%"
></iframe>
  
  `;
        $(content).html(ui);

    }


    function product_document() {
        ui = ``;

        $(content).html(ui);
    }





    function profile_consultation() {
        ui = `       <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">My Consulting Hours</h4>
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
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Purchase Date
                        </th>
                        <th>
                          Type
                        </th>
                        <th>
                        Total Purchased
                        </th>
                         <th>
                        Balance
                        </th>
                         <th>
                        Expiry Date
                        </th>
                         <th>
                        Status
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            03/08/2021
                          </td>
                          <td>
                            Subscription plan Default
                          </td>
                          <td>
                            5 hours
                          </td>
                          <td>
                            0
                          </td>
                          <td>
                          31/08/2021
                          </td>
                          <td>
                          Expired
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <button onclick="window.location.href='modal.html'"  class="btn btn-primary">Book an Appointment</button>
           <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Consultation History</h4>
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
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Date
                        </th>
                        <th>
                          Subject
                        </th>
                        <th>
                        Duration
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            lorem ipsum dolor sit amet
                          </td>
                          <td>
                            Webinar
                          </td>
                          <td>
                            6 hours
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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


    function profile_training() {
        ui = `    <div class="container-fluid">
           <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Upcoming Trainings and webinars</h4>
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
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Type
                        </th>
                        <th>
                        Host
                        </th>
                         <th>
                        Date
                        </th>
                         <th>
                        Time
                        </th>
                         <th>
                        Duration
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
                            Family Business
                          </td>
                          <td>
                            Webinar
                          </td>
                          <td>
                            CM Academy
                          </td>
                          <td>
                            14/08/2021
                          </td>
                          <td>
                          0800 HRS
                          </td>
                          <td>
                          2 HRS
                          </td>
                          <td>
                         <button class="btn btn-success">Details</button>
                          <button class="btn btn-danger">order</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">My trainings and webinars</h4>
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
              </div>
            </form>
                        <th>
                          ID
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Type
                        </th>
                        <th>
                        Host
                        </th>
                         <th>
                        Date
                        </th>
                         <th>
                        Time
                        </th>
                         <th>
                        Duration
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
                            Family Business
                          </td>
                          <td>
                            Webinar
                          </td>
                          <td>
                            CM Academy
                          </td>
                          <td>
                            14/08/2021
                          </td>
                          <td>
                          0800 HRS
                          </td>
                          <td>
                          2 HRS
                          </td>
                          <td>
                         <button class="btn btn-success">Details</button>
                          <button class="btn btn-danger">Re-order</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

    function review_document() {
        ui = `      <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
              <div class="alert " role="alert"></div>
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Allowed Documents To Review</h4>
                  <p class="card-category"> View documents here</p>
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
              </div>
            </form>
            <th>
            Document Name
           </th>
           <th>
            Category
           </th>
           <th>
             Status
           </th>
                      </thead>
                      <tbody id="mytable"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

            `;


        $.get("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { getPurchasedDocumentsOnReview: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
            const obj = JSON.parse(data);

            if (obj.result == "session") {
                $("#reauth").modal();
                return;
            }
            $("#mytable").empty();
            obj.documents.forEach(element => {
                let reviewHolder = null;
                if (element.type == "subscriptions") {

                    
                        $("#mytable").append(` <tr>
                      <td>
                        ${element.Name}
                      </td>
                      <td>
                        ${element.category}
                      </td>
                      <td>
                      ${element.review_status}
                      </td>
                    </tr>
                                        `);
                    

                }
            });
        });



        $(content).html(ui);


        $("#mytable").on("click", "#main_id_in", function() {
          while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
          let myatt = $(this).attr('data-op');
          eval(`${myatt}(${$( this ).attr( 'data_id')})`);

        });

    }

    var url = "http://localhost/cma/controller/authG.php";



});


function review_document(doucment_id) {

    const formData = new FormData();
    formData.append("document_id", doucment_id);
    formData.append("token", sessionStorage.getItem("token"));
    formData.append("user", "client");

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: 'https://cmversiontwo.cmadvocates.com/controller/Review.php',
        data: formData,
        crossDomain: true,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function(data) {
            console.log(data);

            let myft = document.querySelector(".review_doc-al");
    
            const obj = JSON.parse(data);

            myft.classList.remove('d-none');
            myft.classList.add(obj.result);
            myft.innerHTML = obj.value;
            myft.classList.remove('d-none');
  
            setTimeout(function () {
              myft.classList.add('d-none');
              
            myft.classList.remove(obj.result);
            myft.innerHTML = '';
            window.location.replace("https://cmversiontwo.cmadvocates.com/profile.html");
            }, 5000);//wait 2 seconds
  


        },
        error: function(e) {

            console.log(e);

        }

    });

}