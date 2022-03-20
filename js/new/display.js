
var url = "https://cmversiontwo.cmadvocates.com/controller/Display.php";


// jQuery document ready
$(document).ready(function () {

    console.log(sessionStorage.length);
    $("#lblCartCount").text(sessionStorage.length);
    
    if($("#practice_area_home").length || $("#all_practice").length){

        $.get(`${url}?getPracticeArea`, function(data, status){

            const obj = JSON.parse(data);
            if($("#practice_area_home").length){
    
                $("#practice_area_home").empty(); 
                if(obj.hasOwnProperty('result')){
                    $("#practice_area_home").append(`
                    <p>${obj.value}</p>                      
                    
                    `);  
                } else{
        
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
        
                    for (let index = 0; index < obj.pas.length; index++) {
                        console.log(obj.pas[index]);
                        $("#all_practice").append(`
                        
                    <div class="course-col" id="output">
                    <h3>${obj.pas[index].Name} </h3>
                      <a href="https://cmversiontwo.cmadvocates.com/practiseDetails.html?getBusinessUnit=${obj.pas[index].id}&name=${obj.pas[index].Name}" class="hero-btn red-btn">View</a>
                </div>
        
                        `);
              
                      }
        
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
              $("#display_service").append(`
                                
                                <div class="course-col">
                <h3>${element.Name}</h3>
                <a href="service-category.html?id=${element.id}" class="hero-btn red-btn">View</a>
            </div>
                                
                                `);
      
            });
          });
    }
    if($("#document").length){
        $("#document").click(()=>{
            //
            window.location.href = "https://cmversiontwo.cmadvocates.com/document-type.html?id="+window.location.search.substring(1).split('=')[1]; 
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
        $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Documents.php", { getDocumentsTypes: window.location.search.substring(1).split('&')[0].split('=')[1], document_type:"tech packs" }, function (data) {
  const obj = JSON.parse(data);

  $("#mytable").empty();
  obj.documents.forEach(element => {

      $("#mytable").append(`
      <tr>
      <td>
              <img class="my-foto" style="width:10vw;height:auto" src="images/Affidavit for Lost Certificate of Incorporation of a Trust.PNG" alt="...">
          
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
      <button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn" 
      onclick="sessionStorage.setItem('product_id_${element.id}_document', {id:${element.id},type_paid:'documents',name:'${element.Name}',billing_type:'la',price:${element.price * 1}} );">
       Add To Cart</button>
   </td>
  </tr>             
                        `);
    

  });
});

    }

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
      <iframe src="${element.preview.replace("./", "controller/")   }" title="YouTube video" allowfullscreen></iframe>
      </div>     

      </div>
       <div class="card-footer text-muted">
       <div class="row">
       <div class="col-12">
       <button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn" 
       onclick="sessionStorage.setItem('product_id_${element.id}_document', {id:${element.id},type_paid:'videos',name:'${element.Name}',billing_type:'la',price:${element.price * 1}} );">
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
  onclick="sessionStorage.setItem('subscription_${element.id}',{id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'annually',price:${element.annual_price * 12}} );">
   Purchase Anually </button>
  <button class="btn btn-default" 
  onclick="sessionStorage.setItem('subscription_${element.id}',{id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'monthly',price:${element.annual_price * 1}} );">
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
                            onclick="sessionStorage.setItem('subscription_${element.id}',{id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'annually',price:${element.annual_price * 12}} );">
                             Purchase Anually </button>
                            <button style="background:linear-gradient(60deg, #1c355e, #7f2729);" class="btn btn-default" 
                            onclick="sessionStorage.setItem('subscription_${element.id}',{id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'monthly',price:${element.annual_price * 1}} );">
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
  onclick="sessionStorage.setItem('subscription_${element.id}',{id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'annually',price:${element.annual_price * 12}} );">
   Purchase Anually </button>
  <button class="btn btn-default" 
  onclick="sessionStorage.setItem('subscription_${element.id}',{id:${element.id},type_paid:'subscriptions',name:'${element.Name}',billing_type:'monthly',price:${element.annual_price * 1}} );">
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
    //sessionStorage.
}

console.log(Object.keys(sessionStorage));
Object.keys(sessionStorage).forEach(element => {
    console.log(element);
    if(element.includes("product_id")){
        console.log("log");
    }
});



});




