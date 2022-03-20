export function logout(url) {
    $.post( url, { log_me_out: "true"})
    .done(function( data ) {
        sessionStorage.removeItem("token");

        const obj = JSON.parse(data);
             
        window.location.replace(`${obj.path}`);
        
      console.log("Thank you");
    });

}      

export function redirect(url,path){
   
    if(sessionStorage.getItem("token") === null && window.location.href != "https://cmversiontwo.cmadvocates.com/login.html"){
        window.location.replace(`https://cmversiontwo.cmadvocates.com/login.html`);
       
    }
    else if (sessionStorage.getItem("token") != null && window.location.href == "https://cmversiontwo.cmadvocates.com/login.html") {
        $.get( `${url}?token=${sessionStorage.getItem('token')}`, function( data ) {

            const obj = JSON.parse(data);

                if(obj.result == sessionStorage.getItem('token')){
                    console.log(`${path}${obj.path}`);
                    window.location.replace(`${path}${obj.path}`);
                }

          });
    }
    else {
        $.get( `${url}?token=${sessionStorage.getItem('token')}`, function( data ) {

            const obj = JSON.parse(data);

            if(obj.result == "session" && window.location.href != "https://cmversiontwo.cmadvocates.com/login.html"){
               // window.location.replace(`${obj.path}`);
               //ACTIVATE modal for log in
            }
            
            
          });
    }
}

export function getUser() {
    $.get( `https://cmversiontwo.cmadvocates.com/controller/authG.php?mydetails=${sessionStorage.getItem('token')}`, function( data ) {

        const obj = JSON.parse(data);

        document.querySelector("#mymail").value = obj.email;
        document.querySelector("#myname").value = obj.username;


      });
}