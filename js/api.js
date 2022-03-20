var log_out_btn = document.querySelector("#log_out_btn");
var url = "https://cmversiontwo.cmadvocates.com/controller/authG.php";

log_out_btn.addEventListener("click", (e) => {
  $.post( url, { log_me_out: "true"})
  .done(function( data ) {
      sessionStorage.removeItem("token");

      console.log(data);
      const obj = JSON.parse(data);

      console.log(data);
           
      window.location.replace(`${obj.path}`);
      
    console.log("Thank you");
  });
});