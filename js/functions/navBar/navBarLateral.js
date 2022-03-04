function createLateralNavBar(){

    const hamburgerIcon = document.querySelector(".nav__hamburgerMenu");
    const closeIconTag  = document.createElement("img");
    closeIconTag.classList.add("close__icon");
    closeIconTag.setAttribute("src", "../docs/assets/shared/icon-close.svg");

    const bodyTag   = document.getElementById("bodyTag");
    const headerTag = document.querySelector(".nav");
    const navBar    = document.getElementById("nav-option");
   

    window.addEventListener("resize",function () {

        if (window.matchMedia("(min-width: 400px)").matches) {
            headerTag.appendChild(navBar);

            navBar.style.display = "flex";
            closeIconTag.style.display = "none";
            
        } else {
            bodyTag.appendChild(navBar);
            navBar.appendChild(closeIconTag);
            navBar.style.display = "none";
            closeIconTag.style.display = "flex";
        }
    });
    if (window.matchMedia("(min-width: 400px)").matches) {
        headerTag.appendChild(navBar);          
        navBar.style.display = "flex";
        closeIconTag.style.display = "none";
        
    } else {
        bodyTag.appendChild(navBar);      
        navBar.appendChild(closeIconTag);
        navBar.style.display = "none";
        closeIconTag.style.display = "flex";
          }


    hamburgerIcon.addEventListener("click", function(){
        
        navBar.style.display = "flex";

    });

    closeIconTag.addEventListener("click", function(){
        navBar.style.display = "none";
    });







}

export default createLateralNavBar;