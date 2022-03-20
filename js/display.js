
var url = "https://cmversiontwo.cmadvocates.com/controller/Display.php";


// jQuery document ready
$(document).ready(function () {

    
    if($("#practice_area_home").length || $("#all_practice").length){

        $.get(`${url}?getPracticeArea`, function(data, status){

            const obj = JSON.parse(data);
            if($("#practice_area_home").length){
    
                $("#practice_area_home").empty(); 
                if(obj.hasOwnProperty('result')){
                    $("#practice_area_home").append(`
                    <p>${obj.value}</p>                      
                    
                    `);  
                } 
                else{
        
                    for (let index = 0; index < 3; index++) {
                        console.log(obj.pas[index]);
                        $("#practice_area_home").append(`
                        <div class="course-col">
                        <h3>${obj.pas[index].Name}</h3>
                        <p>${obj.pas[index].pa_description}</p>
                        <button type="submit" data_id="${obj.pas[index].id}" class="hero-btn red-btn">View</button>
                    </div>                      
                        
                        `);
              
                      }
        
                } 
            }
            else if($("#all_practice").length){
                $("#all_practice").empty(); 
                if(obj.hasOwnProperty('result')){
                    $("#all_practice").append(`
                    <p>${obj.value}</p>                      
                    
                    `);  
                } else{


                  obj.pas.forEach(element => {
                    
                    $("#all_practice").append(`
                        
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-3" id="output">

                        <div class="card" style="background: #fff3f3">
                            <div class="card-body">
                              <h5 class="card-title">${element.Name}</h5>
                              <a href="https://cmversiontwo.cmadvocates.com/practiseDetails.html?getBusinessUnit=${element.id}&name=${element.Name}" class="hero-btn red-btn">View</a>

                            </div>
                        </div>

                    </div>
        
                        `);

                  });
        
        
                } 
            }
            else{
                console.log("I don't know");
            }
        
    
        });
    
    }
    
    if($("#pa_name").length){
        var PageURL = window.location.search.substring(1);
        console.log(PageURL.split('&')[0].split('=')[1]);
        console.log(PageURL.split('&')[1].split('=')[1].replace('%20'," ").toUpperCase());
        $("#pa_name").append(PageURL.split('&')[1].split('=')[1].replace('%20'," ").toUpperCase());
         
        $.get(url, { getBusinessUnits: PageURL.split('&')[0].split('=')[1]}, function (data) {
            const obj = JSON.parse(data);
      
            obj.busis.forEach(element => {
            $("#desc").append(element.desc);
              
            });
          });
    }

    if($("#display_service").length){
        $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Service.php", { getService: "Donald" }, function (data) {
            const obj = JSON.parse(data);
            $("#display_service").empty();
      
            obj.services.forEach(element => {
          

                                if(element.service_type == "documents"){
                                  $("#display_service").append(`
                                
                                  <div class="course-col">
                                    <h3>${element.Name}</h3>
                                    <a href="https://cmversiontwo.cmadvocates.com/service-detail.html?id=${element.id}" class="hero-btn red-btn">View</a>
                                  </div>
                                  
                                  `);
                                }
                                else if(element.service_type == "videos"){
                                  $("#display_service").append(`
                                
                                  <div class="course-col">
                                    <h3>${element.Name}</h3>
                                    <a href="https://cmversiontwo.cmadvocates.com/video-detail.html?id=${element.id}" class="hero-btn red-btn">View</a>
                                  </div>
                                  
                                  `);
                                }


      
            });
          });
    }
    if($("#document").length){
        $("#document").click(()=>{
            //
            window.location.href = "https://cmversiontwo.cmadvocates.com/service-detail.html?id="+window.location.search.substring(1).split('=')[1]; 
            //
        });
    }
    if($("#tech_packs").length){
        $("#tech_packs").click(()=>{
            //
            window.location.href = `https://cmversiontwo.cmadvocates.com/service-detail.html?id=${window.location.search.substring(1).split('=')[1]}&type=tech_packs`; 
            //
        });

    }
    if($("#legal_templates").length){
        $("#legal_templates").click(()=>{
            //
            window.location.href = `https://cmversiontwo.cmadvocates.com/service-detail.html?id=${window.location.search.substring(1).split('=')[1]}&type=legal_templates`; 
            //
        });

    }
    if($("#mytable").length){
      $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Documents.php", { getDocumentsTypes: window.location.search.substring(1).split('&')[0].split('=')[1] }, function (data) {
          const obj = JSON.parse(data);

          $("#mytable").empty();
          obj.documents.forEach(element => {
  
                $("#mytable").append(`
                  <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div class="card">
                    <img src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" style="height:40vh" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.Name}</h5>
                        <small class="text-muted">${element.category}</small>
                        <p class="display-6">kes ${element.price}</p>
                        <a class="btn btn-md" style="background:#1c355e;  color: white;" href="https://cmversiontwo.cmadvocates.com/documentDescription.html?id=${element.id}">View More</a>
                        <!--<button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn" 
                        onclick="sessionStorage.setItem('product_id_${element.id}_document', JSON.stringify({'id':'${element.id}','type_paid':'documents','name':'${element.Name}','billing_type':'la','price':'${element.price * 1}'}) );
                        let total = $('#lblCartCount').text();
                        total++;
                        $('#lblCartCount').text(total);
                        ">
                        Add To Cart</button>-->
                    </div>
                  </div>

                  </div>`);
  

          });
});


//getcat
$.get("https://cmversiontwo.cmadvocates.com/controller/Display/Category.php", { getCategories: "Donald"}, function (data) {
        const obj = JSON.parse(data);
        
        obj.categories.forEach(element => {
  
  
          $("#category").append(`<li><a class="dropdown-item" onclick="searchCat('${element.Name}')" id=" ${element.id}">${element.Name}</a></li>`);
        });
      });
//getcat


//getsubcat
$.get("https://cmversiontwo.cmadvocates.com/controller/Display/Category.php", { getsubCategories: "Donald"}, function (data) {
        const obj = JSON.parse(data);
        
        obj.subcategories.forEach(element => {
  
  
          $("#category").append(`<li><a class="dropdown-item" onclick="searchCat('${element.Name}')" id=" ${element.id}">${element.Name}</a></li>`);
        });
      });
//getsubcat

  }


//Document DEtail
    if($("#document_details_custom").length){
   console.log("ssadasdas");
      $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Documents.php", { id_single: window.location.search.substring(1).split('&')[0].split('=')[1] }, function (data) {
        const obj = JSON.parse(data);
      
        $("#document_name").text(obj.documents[0].Name);
        $("#document_description").text(obj.documents[0].document_description);
        $("#price").text(obj.documents[0].price);
        $("#cat").text(obj.documents[0].category);
        $("#cart_btn_holder").append(`<button  
        class="btn btn-info shadow-lg rounded-0" 
        onclick="sessionStorage.setItem('product_id_${obj.documents[0].id}_document', JSON.stringify({'id':'${obj.documents[0].id}','type_paid':'documents','name':'${obj.documents[0].Name}','billing_type':'la','price':'${obj.documents[0].price * 1}'}) );
        let total = $('#lblCartCount').text();
        total++;
        $('#lblCartCount').text(total);
        ">
         Add To Cart</button>`);
      });
    }


//dOCUMENT dETAILS
    //video
    
    if($("#video").length){
        $("#video").click(()=>{
            //
            window.location.href = "https://cmversiontwo.cmadvocates.com/video-detail.html?id="+window.location.search.substring(1).split('=')[1]; 
            //
        });
    }
    if($("#videos").length){
        $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Videos.php", { getServicevideos: window.location.search.substring(1).split('&')[0].split('=')[1] }, function (data) {
  const obj = JSON.parse(data);
  
  $("#videos").empty();
  obj.videos.forEach(element => {


      $("#videos").append(`
      <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
      
      <div class="card ">
      <div class="card-header">
      <h5 class="card-title">${element.Name}</h5>
    </div>
      <div class="card-body">
      <div class="ratio ratio-16x9">
      <iframe src="${element.preview.replace("./", "controller/")   }" title="YouTube video" allowfullscreen sandbox></iframe>
      </div>     

      </div>
       <div class="card-footer text-muted">
       <div class="row">
       <div class="col-12">
       <button style="background:linear-gradient(60deg, #1c355e, #7f2729); color:white;" class="btn" 
       onclick="sessionStorage.setItem('product_id_${element.id}_video', JSON.stringify({id:${element.id},type_paid:'videos',name:'${element.Name}',billing_type:'la',price:${element.price * 1}}) );
       let total = $('#lblCartCount').text();
        total++;
        $('#lblCartCount').text(total);
       ">
       <i class="fa fa-cart-plus" aria-hidden="true"></i>
        Add To Cart</button>
       </div>
       </div>
                       </div>
      </div>
      </div>                
         `);



  });
});
    }
    //video

    //subscription

    
   //subscription

    
    if($("#subscription").length){
        $("#subscription").click(()=>{
            //
            window.location.href = "https://cmversiontwo.cmadvocates.com/service-subscription.html?id="+window.location.search.substring(1).split('=')[1]; 
            //
        });
    }
    if($("#subscriptions").length){
             
$.get("https://cmversiontwo.cmadvocates.com/controller/Display/Subscriptions.php", {service_id: window.location.search.substring(1).split('&')[0].split('=')[1] }, function (data) {
    const obj = JSON.parse(data);
    
    
    $("#subscriptions").empty();
    obj.subscriptions.forEach(element => {
  
    
        $("#subscriptions").append(`<div class="col-md-4">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">${element.Name}</h4>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center mb-3">
                <p>Free legal templates</p>
               <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                  <div class="d-flex justify-content-center mb-3">
                <p>Guaranteed faster turn arounds</p>
               <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                  <div class="d-flex justify-content-center mb-3">
                <p>Legal advice consultation</p>
              <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                <div class="d-flex justify-content-center mb-3">
                <p>Unlimited contract reviews and amendments</p>
                  <p style="margin-left: 20px;">:<b>Limited to 5 per month</b></p> 
                </div>
    
                <div class="d-flex justify-content-center mb-3">
                <p>Inhouse counsel Secondment</p>
              <i class="fa fa-times-circle"></i>
                </div>
                <div class="d-flex justify-content-center mb-3">
                <p>Setup your inhouse legal department</p>
               <i class="fa fa-times-circle"></i>
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
  
     <div class="dropdown">
  <button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Actions
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
  <button class="btn btn-primary" 
  onclick="sessionStorage.setItem('product_id_${element.id}_subscription',JSON.stringify({id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'annually',price:${element.annual_price * 12}} ));
  let total = $('#lblCartCount').text();
  total++;
  $('#lblCartCount').text(total);
  ">
   Purchase Anually </button>
  <button class="btn btn-default" 
  onclick="sessionStorage.setItem('product_id_${element.id}_subscription',JSON.stringify({id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'monthly',price:${element.annual_price * 1}} ));
  let total = $('#lblCartCount').text();
  total++;
  $('#lblCartCount').text(total);
  ">
   Purchase</button>
  </div>
</div>
            </div>
        </div>
      </div>
                          
                          `);
        
    });
  });
    }

    //subscription
    
    //membership
    if($("#memberships").length){
        
$.get("https://cmversiontwo.cmadvocates.com/controller/Display/Products.php", { getproducts: "Donald", token1: sessionStorage.getItem("token") }, function (data) {
    const obj = JSON.parse(data);
  
    $("#memberships").empty();
    obj.products.forEach(element => {
  
      $("#memberships").append(`



  	<div class="swiper-slide">
  		<div class="card">
  		<div class="description">
  		<i class="fa fa-quote-left"></i>	<p style="font-size:30px; font-weight:bold;">${element.Name}</p>
  		</div>	

  			<div class="profile">
  			<img src="images/cmalogo.png" >	
  			<h4>John Doe</h4>
  			<a href="">
  				<i class="fa fa-facebook"></i>
  				<i class="fa fa-twitter"></i>
  					<i class="fa fa-linkedin"></i>


  			</a>
  			</div>
  			<button onclick="window.location.href='sme.html?id=${element.id}'"  type="submit" class="hero-btn red-btn">View</button>
  		</div>
  	</div>
                        
                        `);
    });
  });
    }
    //membership

        //subscription

        if($("#subs").length){
            $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Subscriptions.php", {sub_id: window.location.search.substring(1).split('&')[0].split('=')[1] }, function (data) {
                const obj = JSON.parse(data);
                
            
                $("#subs").empty();
                obj.subscriptions.forEach(element => {
              
                    $("#subs").append(`<div class="col-md-6">
                    <div class="card">
                        <div class="card-header card-header-primary">
                            <h4 class="card-title">${element.Name}</h4>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-center mb-3">
                            <p>Free legal templates</p>
                          <i class="fa fa-check" aria-hidden="true"></i> 
                            </div>
                              <div class="d-flex justify-content-center mb-3">
                            <p>Guaranteed faster turn arounds</p>
                            <i class="fa fa-check" aria-hidden="true"></i> 
                            </div>
                              <div class="d-flex justify-content-center mb-3">
                            <p>Legal advice consultation</p>
                            <i class="fa fa-check" aria-hidden="true"></i> 
                            </div>
                            <div class="d-flex justify-content-center mb-3">
                            <p>Unlimited contract reviews and amendments</p>
                              <p style="margin-left: 20px;">:<b>Limited to 5 per month</b></p> 
                            </div>
                
                            <div class="d-flex justify-content-center mb-3">
                            <p>Inhouse counsel Secondment</p>
                            <i class="fa fa-times-circle"></i> 
                            </div>
                            <div class="d-flex justify-content-center mb-3">
                            <p>Setup your inhouse legal department</p>
                            <i class="fa fa-times-circle"></i> 
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
              
                            <button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn btn-primary" 
                            onclick="sessionStorage.setItem('product_id_${element.id}_subscription',JSON.stringify({id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'annually',price:${element.annual_price * 12}} ));
                            let total = $('#lblCartCount').text();
                            total++;
                            $('#lblCartCount').text(total);
                            ">
                             Purchase Anually </button>
                            <button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn btn-default" 
                            onclick="sessionStorage.setItem('product_id_${element.id}_subscription',JSON.stringify({id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'monthly',price:${element.annual_price * 1}} ));
                            let total = $('#lblCartCount').text();
                            total++;
                            $('#lblCartCount').text(total);
                            ">
                             Purchase</button>
                        </div>
                    </div>
                  </div>
                                      
                                      `);
               
                });
              });
            
                }    
        //subscription
    

    //onemembershipsubscription



if($("#membershipsubscription").length){
        $("#membershipsubscription").click(()=>{
            //
            window.location.href = "https://cmversiontwo.cmadvocates.com/service-subscription.html?id="+window.location.search.substring(1).split('=')[1]; 
            //
        });
    }
    if($("#membershipsubscription").length){
             
$.get("https://cmversiontwo.cmadvocates.com/controller/Display/", {service_id: window.location.search.substring(1).split('&')[0].split('=')[1] }, function (data) {
    const obj = JSON.parse(data);
    
    
    $("#membershipsubscription").empty();
    obj.subscriptions.forEach(element => {
  
    
        $("#membershipsubscription").append(`<div class="col-md-4">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">${element.Name}</h4>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center mb-3">
                <p>Free legal templates</p>
               <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                  <div class="d-flex justify-content-center mb-3">
                <p>Guaranteed faster turn arounds</p>
               <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                  <div class="d-flex justify-content-center mb-3">
                <p>Legal advice consultation</p>
              <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                <div class="d-flex justify-content-center mb-3">
                <p>Unlimited contract reviews and amendments</p>
                  <p style="margin-left: 20px;">:<b>Limited to 5 per month</b></p> 
                </div>
    
                <div class="d-flex justify-content-center mb-3">
                <p>Inhouse counsel Secondment</p>
              <i class="fa fa-times-circle"></i>
                </div>
                <div class="d-flex justify-content-center mb-3">
                <p>Setup your inhouse legal department</p>
               <i class="fa fa-times-circle"></i>
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
  
     <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Actions
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    
  <button class="btn btn-primary" 
  onclick="sessionStorage.setItem('product_id_${element.id}_subscription',JSON.stringify({id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'annually',price:${element.annual_price * 12}}) );
  let total = $('#lblCartCount').text();
  total++;
  $('#lblCartCount').text(total);
  ">
   Purchase Anually </button>
  <button class="btn btn-default" 
  onclick="sessionStorage.setItem('product_id_${element.id}_subscription',JSON.stringify({'id':'${element.id}','type_paid':'subscriptions','name':'${element.Name}','billing_type':'monthly',price:${element.annual_price * 1}}) );
  let total = $('#lblCartCount').text();
  total++;
  $('#lblCartCount').text(total);
  ">
   Purchase</button>
  </div>
</div>
            </div>
        </div>
      </div>
                          
                          `);
        
    });
  });
    }


    if($("#cart_table").length){
        let total = 0;
    
        Object.keys(sessionStorage).forEach(element => {
            console.log(element);
            if(element.includes("product_id")){
                const obj = JSON.parse(sessionStorage.getItem(element));
            
                $("#cart_table").append(`
                <tr>
                <td>${obj.name}</td>
                <td>${obj.type_paid}</td>
                <td>${obj.billing_type}</td>
                <td>1</td>
                <td>${obj.price}</td>
                <td><button class="hero-btn red-btn" id="remove_item" data-element="${element}">Remove Item</button></td>
                </tr>
                `);
                total += obj.price * 1;
        
            }
        });
        
        $("#subtotal").text(total.toFixed(2));
        $("#tax").text((total * 0.1).toFixed(2));
        $("#total").text((total + (total * 0.1)).toFixed(2));

        
   $( "#cart_table" ).on( "click", "#remove_item", function() {
    sessionStorage.removeItem($( this ).attr( 'data-element'));
    window.location.href = 'https://cmversiontwo.cmadvocates.com/cart.html';
  });
  
  if(sessionStorage.getItem("token") === null){
    $("#check_btn").text("Login to Proceed To Checkout");
    $("#check_btn").attr("onclick",`window.location.href = 'https://cmversiontwo.cmadvocates.com/login.html';sessionStorage.setItem('cart', 'go');`);
}else{
  $("#check_btn").text("Proceed To Checkout");
  $("#check_btn").attr("onclick",`window.location.href = 'https://cmversiontwo.cmadvocates.com/login.html';sessionStorage.setItem('cart', 'go');`);
}
    }
    

    if($("#clear").length){
        $("#clear").click(()=>{
            
        Object.keys(sessionStorage).forEach(element => {
            if(element.includes("product_id")){
                sessionStorage.removeItem(element);
                window.location.href = 'https://cmversiontwo.cmadvocates.com/cart.html'
                $("#cart_table").append(`
                <tr>
                <td colspan="5">No Item</td>
                </tr>
                `);
                total += obj.price * 1;
        
            }
        });
        });
    }
    

    if ($("#advocates_display").length) {
      
      $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Advocates.php", {all: true }, function(data) {
          const obj = JSON.parse(data);
          $("#advocates_display").empty();
  
          obj.advocates.forEach(element => {
             
          $("#advocates_display").append(`
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">

          <div class="card" id="${element.id}">
          <img src="${element.user_image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text" id="lt_${element.id}"></p>
            <a href="team-lawyer.html?id=${element.id}" class="btn btn-primary ${element.id}">VIEW</a>
          </div>
        </div>

          </div>
          `);


          element.practieArea.forEach(elem => {
            $.get("https://cmversiontwo.cmadvocates.com/controller/Display/PracticeArea.php",{id:elem}, function(data) {
                const obj = JSON.parse(data);

                obj.pas.forEach(ele => {
                    $(`<label> * : ${ele.Name} &nbsp;</label>`).insertBefore(`.${element.id}`);
                });
            });

            });


            $.get("https://cmversiontwo.cmadvocates.com/controller/Display/LawyerType.php",{id:element.lawyergroup}, function(data) {
                const obj = JSON.parse(data);

                obj.lts.forEach(ele => {
                    $(`#lt_${element.id}`).text(ele.Name);


                });
            });

  
              //
  
  
  
          });
      });
    }
  
    if($("#one_lawyer").length){

      
      $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Advocates.php", {lawyer_id: window.location.search.substring(1).split('=')[1] }, function(data) {
          const obj = JSON.parse(data);
          $("#advocates_display").empty();
  
          obj.advocate.forEach(element => {
            
            $("#title_name").text(element.name);
            $("#lawyer_name").text(element.name);
            $("#con_name").text(element.name);
            $("#con_name_2").text(element.name);

            $.get("https://cmversiontwo.cmadvocates.com/controller/Display/LawyerType.php",{id:element.lawyergroup}, function(data) {
                const obj = JSON.parse(data);

                obj.lts.forEach(ele => {
                    $(`#lawyer_type`).text(ele.Name);


                });
            });

            
          element.practieArea.forEach(elem => {
            $.get("https://cmversiontwo.cmadvocates.com/controller/Display/PracticeArea.php",{id:elem}, function(data) {
                const obj = JSON.parse(data);

                obj.pas.forEach(ele => {
                  $("#pa_area").append(`<li class="list-group-item">${ele.Name}</li>`);
                });
            });

            });

          element.descriptions.forEach(elem => {
            $("#descriptions").append(`<p style="color:#000;display:list-item;  list-style-type: disc;    list-style-position: inside;">${elem}</p`);
          });  

          element.qualifications.forEach(elem => {
            $("#qualifications").append(`<p style="color:#000;display:list-item;  list-style-type: disc;    list-style-position: inside;">${elem}</p`);
          });  

  
          });
      });

    }

    if($("#members").length){
      
      $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Member.php", {all: true }, function(data) {
          const obj = JSON.parse(data);
          $("#member_area").empty();


  
          obj.members.forEach(element => {
            
            $("#member_area").append(`
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
  
            <div class="card" id="${element.id}">
            <img src="${element.user_image.replace("./", "https://cmversiontwo.cmadvocates.com/controller/")}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.Name}</h5>
              <a href="team-operation.html?id=${element.id}" class="btn btn-primary ${element.id}">VIEW</a>
            </div>
          </div>
  
            </div>
            `);

  
          });


      });
    }
    if($("#member").length){
      
      $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Member.php", {member_id: window.location.search.substring(1).split('=')[1] }, function(data) {
          const obj = JSON.parse(data);
          
          obj.members.forEach(element => {
          
            $("#member_name").text(element.Name);
            $("#image_holder").html(`<img class="img" src="${element.user_image.replace("./", "https://cmversiontwo.cmadvocates.com/controller/")}" style="border-radius: 50%;width:135px;">`)

            $("#role").text(element.role);
            $("#desc").append(`<p style="color:#000;display:list-item;  list-style-type: disc;    list-style-position: inside;">${element.description}.</p>`);
  
          });


      });
    }

    if($("#categories_table").length){
      
      $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Category.php", {getCategories: true }, function(data) {
          const obj = JSON.parse(data);
          
          obj.categories.forEach(element => {

            console.log(element);
          
            $("#categories_table").append(`
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${element.Name}</h5>
                <a href="category-documents.html?category_id=${element.id}" class="btn btn-primary">View Documents</a>
              </div>
            </div>
          </div>
            `);
          });


      });
    }

    if($("#categories_document").length){

      $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Documents.php", {category_id: window.location.search.substring(1).split('=')[1] }, function (data) {
        const obj = JSON.parse(data);

        $("#categories_document").empty();
        obj.documents.forEach(element => {

              $("#categories_document").append(`
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div class="card">
                  <img src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" style="height:40vh" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${element.Name}</h5>
                      <small class="text-muted">${element.category}</small>
                      <p class="display-6">kes ${element.price}</p>
                      <a class="btn btn-md" style="background:#1c355e;  color: white;" href="https://cmversiontwo.cmadvocates.com/documentDescription.html?id=${element.id}">View More</a>
                      <!--<button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn" 
                      onclick="sessionStorage.setItem('product_id_${element.id}_document', JSON.stringify({'id':'${element.id}','type_paid':'documents','name':'${element.Name}','billing_type':'la','price':'${element.price * 1}'}) );
                      let total = $('#lblCartCount').text();
                      total++;
                      $('#lblCartCount').text(total);
                      ">
                      Add To Cart</button>-->
                  </div>
                </div>

                </div>`);


        });
      });

    }



});




function searchCat(id){

  $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Documents.php", { catid:id,getid: window.location.search.substring(1).split('&')[0].split('=')[1] }, function (data) {
    const obj = JSON.parse(data);
  
    $("#mytable").empty();
    obj.documents.forEach(element => {
      
        $("#mytable").append(`
  <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
  <div class="card">
      <img src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" style="height:40vh" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${element.Name}</h5>
          <small class="text-muted">${element.category}</small>
          <p class="display-6">kes ${element.price}</p>
          <a class="btn btn-md" style="background:#1c355e;  color: white;" href="https://cmversiontwo.cmadvocates.com/documentDescription.html?id=${element.id}">View More</a>
          <!--<button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn" 
          onclick="sessionStorage.setItem('product_id_${element.id}_document', JSON.stringify({'id':'${element.id}','type_paid':'documents','name':'${element.Name}','billing_type':'la','price':'${element.price * 1}'}) );
          let total = $('#lblCartCount').text();
          total++;
          $('#lblCartCount').text(total);
          ">
           Add To Cart</button>-->
      </div>
  </div>
  
  </div>
  
                          `);
      
  
    });
  });

}

function searchdoc(id){

  $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Documents.php", { searchid:id,getid: window.location.search.substring(1).split('&')[0].split('=')[1] }, function (data) {
    const obj = JSON.parse(data);
  
    $("#mytable").empty();
    obj.documents.forEach(element => {
      if(obj.documents.length == 0){
        $("#mytable").append(`
  <div class="col-12">
 <p class="text-center">No document</p>
  </div>
  
                          `);
      
      }
        $("#mytable").append(`
  <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
  <div class="card">
      <img src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" style="height:40vh" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${element.Name}</h5>
          <small class="text-muted">${element.category}</small>
          <p class="display-6">kes ${element.price}</p>
          <a class="btn btn-md" style="background:#1c355e;  color: white;" href="https://cmversiontwo.cmadvocates.com/documentDescription.html?id=${element.id}">View More</a>
          <!--<button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn" 
          onclick="sessionStorage.setItem('product_id_${element.id}_document', JSON.stringify({'id':'${element.id}','type_paid':'documents','name':'${element.Name}','billing_type':'la','price':'${element.price * 1}'}) );
          let total = $('#lblCartCount').text();
          total++;
          $('#lblCartCount').text(total);
          ">
           Add To Cart</button>-->
      </div>
  </div>
  
  </div>
  
                          `);
      
  
    });
  });

}