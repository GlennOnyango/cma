import { redirect } from './collection.js';


var reg_form = document.querySelector("#myreg_form");
var log_form = document.querySelector("#log_form");
var for_form = document.querySelector("#for_form");
var feedback = document.querySelector("#feedback_reg");
var feed_for = document.querySelector("#feedback_fog");
var log_out_btn = document.querySelector("#log_out_btn");
var url = "https://cmversiontwo.cmadvocates.com/controller/authG.php";
let myft = document.querySelector(".alert");
    

const path = window.location.origin;
redirect(url,path);


reg_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(reg_form);

    
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

                console.log(feedback.classList);

                feedback.classList.add(obj.result);
                feedback.innerHTML = obj.value;
                feedback.classList.remove('d-none');
      
                
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

    console.log("done");
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

                console.log(myft);
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

for_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(for_form);

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

            const obj = JSON.parse(data);
            
            feed_for.classList.add('alert-success');
            feed_for.innerHTML = obj.value;
            feed_for.classList.remove('d-none');

            

        },
        error: function(e) {

            console.log(data);

        }

    });

 


});



