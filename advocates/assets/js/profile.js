var log_form = document.querySelector("#log_form");
var changePass = document.querySelector("#change_password");
let document_id_assign = "";
let client_id = "";

if ($("#skill_set").length) {

    $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Skillset.php",{all:true},function(data) {
        const obj = JSON.parse(data);
        console.log(obj);

        $("#skill_set").empty();

        obj.sss.forEach(element => {
            $("#skill_set").append(`<option value="${element.id}">${element.Name}</option>`);



        });
    });
}
if ($("#country").length) {
    $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Countries.php", function(data) {
        const obj = JSON.parse(data);
        console.log(obj);

        $("#country").empty();

        obj.countries.forEach(element => {
            if(element.id == 116){
                $("#country").append(`<option selected value="${element.id}">${element.name}</option>`);

            }
            $("#country").append(`<option value="${element.id}">${element.name}</option>`);
            


        });
    });

}
if ($("#lawyer_group").length) {
    $.get("https://cmversiontwo.cmadvocates.com/controller/Display/LawyerType.php",{all:true}, function(data) {
        const obj = JSON.parse(data);
        console.log(obj);

        $("#lawyer_group").empty();

        obj.lts.forEach(element => {
            $("#lawyer_group").append(`<option value="${element.id}">${element.Name}</option>`);



        });
    });

}
if ($("#practice_area").length) {
    $.get("https://cmversiontwo.cmadvocates.com/controller/Display/PracticeArea.php",{all:true}, function(data) {
        const obj = JSON.parse(data);
        console.log(obj);

        $("#practice_area").empty();

        obj.pas.forEach(element => {
            $("#practice_area").append(`<option value="${element.id}">${element.Name}</option>`);



        });
    });

}

if($("#profile_container").length){

    $.get("https://cmversiontwo.cmadvocates.com/controller/Advocates.php", { token: sessionStorage.getItem("token") }, function(data) {
        const obj = JSON.parse(data);
        console.log(obj);
        obj.advocate.forEach(element => {
            $("#exampleInputEmail1").val(`${element.email}`);
            $("#exampleInputText1").val(`${element.name}`);
            $("#exampleInputPhone1").val(`${element.phone}`);
            
            $("#list_country").html(`<label>${element.country}</label>`);
    
            let string = element.skillset;
            let pa = element.practieArea;
            let lawg = element.lawyergroup;

            string.forEach(element => {
                console.log(element);
                $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Skillset.php",{id:element},function(data) {
                    const obj = JSON.parse(data);
                    console.log(obj);

                    
                        obj.sss.forEach(ele => {

                            $("#list_skill_set").append(`<label>${element}: ${ele.Name} &nbsp;</label>`);


                        });


                    });
    
    
                });
            
            $.get("https://cmversiontwo.cmadvocates.com/controller/Display/LawyerType.php",{id:lawg}, function(data) {
                const obj = JSON.parse(data);
        
                obj.lts.forEach(ele => {
                    $("#list_lawyer_group").html(`<label>1 : ${ele.Name} &nbsp;</label>`);
        
        
                });
            });
        
            pa.forEach(element => {
                $.get("https://cmversiontwo.cmadvocates.com/controller/Display/PracticeArea.php",{id:element}, function(data) {
                    const obj = JSON.parse(data);
            
                    obj.pas.forEach(ele => {
                        $("#list_practice_area").append(`<label>${element} : ${ele.Name} &nbsp;</label>`);    
            
            
                    });
                });
    
                });    

                
            
                
    
    });
});
}

if ($("#change_password").length) {

    changePass.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(changePass);
        formData.append('token', sessionStorage.getItem("token"));

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

                console.log(data);

            }

        });

        console.log(formData);

    });
}


if ($("#log_form").length) {
    log_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(log_form);

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

                console.log(data);

            }

        });

        console.log(formData);

    });
}
if ($("#all_advocates").length) {

    $.get("https://cmversiontwo.cmadvocates.com/controller/Advocates.php", { token1: sessionStorage.getItem("token"), all: true }, function(data) {
        const obj = JSON.parse(data);
        $("#all_advocates").empty();

        obj.advocates.forEach(element => {
            $("#all_advocates").append(`<div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
          <div class="card bg-light d-flex flex-fill">
              <div class="card-header text-muted border-bottom-0">
              </div>
              <div class="card-body pt-0">
                  <div class="row">
                      <div class="col-7">
                          <h2 class="lead"><b>  ${element.name}</b></h2>
                          <p class="text-muted text-sm par_${element.name}"><b>Practice Areas: <br></b> </p>
                          <ul class="ml-4 mb-0 fa-ul text-muted">
                              <li class="small ${element.name}"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span> skill sets:
                              <br>
                              </li>
                              <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> Phone #: ${element.phone}</li>
                          </ul>
                      </div>
                      <div class="col-5 text-center">
                          <img src="${element.user_image}" alt="user-avatar" class="img-circle img-fluid">
                      </div>
                  </div>
              </div>
          </div>
      </div>`);

            //


             let str = element.skillset;
            let pa = element.practieArea;
            let lawg = element.lawyergroup;

            if(str != null){
                str.forEach(elem => {
                    $.get("https://cmversiontwo.cmadvocates.com/controller/Display/Skillset.php",{id:elem},function(data) {
                        const obj = JSON.parse(data);
                        console.log(obj);
    
                        
                            obj.sss.forEach(ele => {
    
                                $(`.${element.name}`).append(`<label>${elem}: ${ele.Name} &nbsp;</label>`);
    
    
                            });
    
    
                        });
    
    
                    });
    
            }
            

            if(pa != null){
                pa.forEach(elem => {
                    $.get("https://cmversiontwo.cmadvocates.com/controller/Display/PracticeArea.php",{id:elem}, function(data) {
                        const obj = JSON.parse(data);
    
                        obj.pas.forEach(ele => {
                            $(`.par_${element.name}`).append(`<label>${elem} : ${ele.Name} &nbsp;</label>`);    
    
    
                        });
                    });
    
                    });  
    
            }
            
            
            $.get("https://cmversiontwo.cmadvocates.com/controller/Display/LawyerType.php",{id:lawg}, function(data) {
                const obj = JSON.parse(data);

                obj.lts.forEach(ele => {
                    $(".card-header").text(ele.Name);


                });
            });
    

            

        });
    });
}

if($("#my_done_reivews").length){
    
    $.get("https://cmversiontwo.cmadvocates.com/controller/Review.php", { token_review_done: sessionStorage.getItem("token") }, function(data) {
        $("#my_done_reivews").empty();
        console.log(data);
        const obj = JSON.parse(data);
       
        if(obj.result == "2"){

            $("#my_done_reivews").append(`<tr>
            <td colspan="4" >No New Assignment</td>
                </tr>`);           
        }else{

                obj.reviews.forEach(element => {
                    
                        $("#my_done_reivews").append(`<tr>
                        <td>${element.client_name}</td>
                        <td>${element.rm_name}</td>
                        <td>${element.document_name}</td>
                        <td>
                            <button type="button" onclick="window.location.href='review-specific.html?document_id=${element.id}&client_id=${element.client_id}'" class="btn btn-block bg-gradient-primary" >Completed</button>
                            <button type="button" onclick="window.location.href='review-specific.html?document_id=${element.id}&client_id=${element.client_id}'" class="btn btn-block bg-gradient-primary" >Back Review</button>
                            
                        </td>
                    </tr>`);
                    
        
                });

        }
    });
}

if ($(".table_documents_reviewed").length) {

    $.get("https://cmversiontwo.cmadvocates.com/controller/Review.php", { token_review: sessionStorage.getItem("token") }, function(data) {
        $(".table_documents_reviewed").empty();
       
        console.log(data);
        const obj = JSON.parse(data);
       
        if(obj.result == "2"){

            $(".table_documents_reviewed").append(`<tr>
            <td colspan="4" >No New Assignment</td>
                </tr>`);           
        }else{

                obj.reviews.forEach(element => {
                    if (element.assingee == 1) {
        
                        $(".table_documents_reviewed").append(`<tr>
                        <td>${element.client_name}</td>
                        <td>${element.rm_name}</td>
                        <td>${element.document_name}</td>
                        <td>
                        <button type="button" onclick="window.location.href='review-specific.html?document_id=${element.document_id}&client_id=${element.client_id}&assignee=1'" class="btn btn-block bg-gradient-primary" >Review</button>
                        
                        </td>
                    </tr>`);
                    } else if (element.assingee == 0) {
        
                        $(".table_documents_reviewed").append(`<tr>
                        <td>${element.client_name}</td>
                        <td>${element.rm_name}</td>
                        <td>${element.document_name}</td>
                        <td>
                            <button type="button" onclick="window.location.href='review-specific.html?document_id=${element.document_id}&client_id=${element.client_id}&assignee=0'" class="btn btn-block bg-gradient-primary" >Review</button>
                            <button type="button" data-toggle="modal" data-target="#modal-xl" onclick="add_send(${element.id},${element.client_id})" class="btn btn-block bg-gradient-primary ">Assign</button>
                        </td>
                    </tr>`);
                    }
        
        
        
                });

        }
    });
}

function add_send(doc_id,cl_id) {

    document_id_assign = doc_id;
    console.log("Add was clicked"+cl_id);
    client_id = cl_id;
    console.log("client was added"+client_id);
    
    
}

if($("#document_review_act").length){
    console.log(window.location.search.substring(1).split('=')[1]);
    
    
    $.get("https://cmversiontwo.cmadvocates.com/controller/Documents.php", { getDoc: window.location.search.substring(1).split('&')[0].split('=')[1]}, function(data) {
        const obj = JSON.parse(data);
        console.log(obj);
        obj.document.forEach(element => {
            $("#advocates").append(`<option value="${element.id}">${element.name}</option>`);
            $("#name").text(element.Name);
            $("#desc").text(element.document_description);
            let full_site =  element.document;
            $("#d_btn").attr("href",full_site.replace("./", "https://cmversiontwo.cmadvocates.com/controller/"));
        });
        

    });


}
if ($("#advocates").length) {

    $.get("https://cmversiontwo.cmadvocates.com/controller/Advocates.php", { token_available_assignee: sessionStorage.getItem("token"), all:true}, function(data) {
        const obj = JSON.parse(data);
        console.log(obj);

        obj.advocates.forEach(element => {
            $("#advocates").append(`<option value="${element.id}">${element.name}</option>`);
        });




    });

}
if($("#assing_form").length){
    $("#assing_form").submit((e)=>{
        e.preventDefault();
        const formData = new FormData(document.querySelector("#assing_form"));
        formData.append('document_review_id',document_id_assign);
        formData.append('client_id',client_id);
        formData.append('token_assign',sessionStorage.getItem("token"));
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

                const obj = JSON.parse(data);

                if(obj.value != "Assignment done"){
                    alert("Advocate not assigned");
                }else{
                    window.location.replace("https://cmversiontwo.cmadvocates.com/advocates/asignees.html")
                }



            },
            error: function(e) {

                console.log(data);

            }

        });
        console.log(formData);
    });
    
       
}



if($("#asignees_list").length){
    
    $.get("https://cmversiontwo.cmadvocates.com/controller/Review.php", { token_review_assignee: sessionStorage.getItem("token")}, function(data) {
        const obj = JSON.parse(data);
        console.log(obj);

        obj.reviews.forEach(element => {
            $("#asignees_list").append(`  <tr>
            <td>${element.advocate_assigned_name}</td>
            <td>${element.document_name}</td>
            <td>${element.duration}</td>
            <td>
                <button type="button" onclick="unassign_assignee(${(element.id)},${(element.advocate_assigned_id)},${(element.client_id)})" class="btn btn-block bg-gradient-danger ">Unassign</button>
                <!--<button type="button" onclick="edit_assignee(${(element.id)},${(element.advocate_assigned_id)},${element.duration},${(element.client_id)})" data-toggle="modal" data-target="#modal-xl" class="btn btn-block bg-gradient-primary ">Edit</button>-->
            </td>
        </tr>`);
        });




    });
}


function edit_assignee(doc_id,id,duration,client_id_aft){
    sessionStorage.setItem("assignee_id",id);
    sessionStorage.setItem("doc_id",doc_id);
    
    $("#duration_change").attr("placeholder",duration+" days remaining");
}
function unassign_assignee(doc_id,id,client_id_aft){
    let text = "Press OK to unassign.";
    if (confirm(text) == true) {
        
        const formData = new FormData();

        formData.append('token_edit_form_unassign',sessionStorage.getItem("token"));
        formData.append('doc_id',doc_id);
        formData.append('assignee_id',id);
        formData.append('client_id',client_id_aft);
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

                const obj = JSON.parse(data);

                
                if(obj.value != "Lawyer Unassigneed"){
                    alert("Advocate not assigned");
                }else{
                    window.location.replace("https://cmversiontwo.cmadvocates.com/advocates/documents-review.html");
                }


            },
            error: function(e) {

                console.log(data);

            }

        });
      sessionStorage.removeItem("assignee_id");
   
    } else {
      text = "You canceled!";
    }
 
   
}

if($("#edit_form_assign").length){
    $("#edit_form_assign").submit((e)=>{
        e.preventDefault();
        const formData = new FormData(document.querySelector("#edit_form_assign"));
        formData.append('document_id',sessionStorage.getItem("doc_id"));
        formData.append('id',sessionStorage.getItem("assignee_id"));
        formData.append('token_edit_assign',sessionStorage.getItem("token"));
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

                const obj = JSON.parse(data);
                window.location.replace("https://cmversiontwo.cmadvocates.com/advocates/asignees.html");



            },
            error: function(e) {

                console.log(data);

            }

        });
        console.log(formData);
    });
}
if($("#review_document").length){
    $("#review_document").submit((e)=>{
        e.preventDefault();
        const formData = new FormData(document.querySelector("#review_document"));
        formData.append('document_id',window.location.search.substring(1).split('&')[0].split('=')[1]);
        formData.append('client_id',window.location.search.substring(1).split('&')[1].split('=')[1]);
        formData.append('assignee',window.location.search.substring(1).split('&')[2].split('=')[1]);
        formData.append('token_upload',sessionStorage.getItem("token"));
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: 'https://cmversiontwo.cmadvocates.com/controller/Documents.php',
            data: formData,
            crossDomain: true,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function(data) {
                console.log(data);

                const obj = JSON.parse(data);

                myft = document.querySelector(".alert");
                if (obj.result == "alert-danger"){
                
                    myft.classList.add(obj.result);
                    myft.innerHTML = obj.value;
                    myft.classList.remove('d-none');
          
                    
                    setTimeout(function () {
                        myft.classList.add('d-none');
                        myft.classList.remove(obj.result);
                        myft.innerHTML = '';
                    
            
                    }, 5000);//wait 2 seconds
                }
                else{
    
                    myft.classList.add(obj.result);
                    myft.innerHTML = obj.value;
                    myft.classList.remove('d-none');
          
                    
                    setTimeout(function () {
                        myft.classList.add('d-none');
                        myft.classList.remove(obj.result);
                        myft.innerHTML = '';
                    
            
                    }, 5000);//wait 2 seconds

                    complete_review(window.location.search.substring(1).split('&')[0].split('=')[1],window.location.search.substring(1).split('&')[1].split('=')[1],window.location.search.substring(1).split('&')[2].split('=')[1],myft);


                }


            },
            error: function(e) {

                console.log(data);

            }

        });
        
    });
}

function complete_review(document_id,client_id,assignee,myft) {
    const formData = new FormData();
    formData.append('document_complete_review_id',document_id);
    formData.append('client_id',client_id);
    formData.append('assignee',assignee);
    
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

            const obj = JSON.parse(data);
     if (obj.result == "alert-danger"){
            
                myft.classList.add(obj.result);
                myft.innerHTML = obj.value;
                myft.classList.remove('d-none');
      
                
                setTimeout(function () {
                    myft.classList.add('d-none');
                    myft.classList.remove(obj.result);
                    myft.innerHTML = '';
                
        
                }, 5000);//wait 2 seconds
            }
            else{

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
  
    
}



// //to be removed
// function check_documents() {

//     ui = `
// <p> Checking Documents.... </p>
// `;


//     $.get(url_send, { user_cert: "Donald", token1: sessionStorage.getItem("token") }, function(data) {
//         const obj = JSON.parse(data);

//         if (obj.result == "session") {
//             $("#reauth").modal();
//             return;
//         }
//         if (obj.result == "error") {
//             window.confirm("Add certificate to purchase");
//             edit_profile();

//         } else if (obj.states[0].st == "declined") {
//             window.confirm("Request for certificate approval");

//         } else if (obj.states[0].st == "approved") {
//             makePayment();
//         }
//     });





//     $(content).html(ui);
//     $("#mytable").on("click", "#main_id_in", function() {
//         console.log($(this).attr('data-op'));
//         let myatt = $(this).attr('data-op');
//         eval(`${myatt}(${$( this ).attr( 'data_id')})`);

//     });

//     $("#sub").on("click", "#main_id_in", function() {
//         console.log($(this).attr('data-op'));
//         let myatt = $(this).attr('data-op');
//         eval(`${myatt}(${$( this ).attr( 'data_id')})`);

//     });

//     $("#service_name").on("click", "#main_id_in", function() {
//         console.log($(this).attr('data-op'));
//         let myatt = $(this).attr('data-op');
//         eval(`${myatt}(${$( this ).attr( 'data_id')})`);
//     });

// }