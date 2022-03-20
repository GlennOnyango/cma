// jQuery document ready
$(document).ready(function() {
    var side = document.querySelector("#nav");

    let sideNav = `
    <div class="navbar-custom">
      <i class='bx bx-menu'></i>
      <div class="logo"><a href="index.html"><img class="img" src="images/cmalogo.png"></a></div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name">CM Advocates</span>
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links">
          <li><a href="about.html">ABOUT</a></li>
          <li>
          <a  href="practise.html">PRACTICE AREAS</a>
          <i class='bx bxs-chevron-down js-arrow arrow '></i>
          <ul class="js-sub-menu sub-menu">
            <li><a href="#">commercial</a></li>
            <li><a href="#">Aviation law</a></li>
          </ul>
        </li>
          <li>
            <a href="services.html">CM PORTAL</a>
            <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            <ul class="htmlCss-sub-menu sub-menu">
              <li><a href="services.html">Services</a></li>
              <li><a href="video-detail.html?id=0">Videos</a></li>
              <li><a href="category.html">Documents</a></li>
            </ul>
          </li>
          <li><a href="contact.html">CONTACT US</a></li>
          <li><a href="memberships.html">MEMBERSHIPS</a></li>
          <li><a href="team.html">OUR TEAM</a></li>
          <li><a href='login.html'"class="hero-btn"><i style="fontsize:20px;" class="fa fa-user" aria-hidden="true"></i> MEMBER LOGIN</a></li>
        </ul>
      </div>
      <div class="search-box">
      <a href="cart.html"><i class='fa fa-shopping-cart'><span class='badge badge-warning custom' id='lblCartCount'> 5 </span></i></a>
    </div>
    </div>
    
`;


    $(side).html(sideNav);
    let total = 0;

    Object.keys(sessionStorage).forEach(element => {
        console.log(element);
        if (element.includes("product_id")) {
            total++;

        }
    });
    console.log(total);
    $("#lblCartCount").text(total);

      // search-box open close js code
  let navbar = document.querySelector(".navbar-custom");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");
  
  searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
      searchBox.classList.replace("bx-x" ,"bx-search");
    }
  });
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar-custom .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }
  


});