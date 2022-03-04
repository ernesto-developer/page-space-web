import { Locations } from "./locationRef.js";

function onMouseNav() {

    window.addEventListener("load",function(){
        let locations = new Locations();
        var navList = document.querySelectorAll(".nav__options__list__items");
        var navegador = document.querySelector(".nav__options");
        let actualLocation = locations.locationPrincipalsPages();
     
        navList.forEach((element, index) => {
            var navText = element.querySelector(".nav__options__list__item__text");
            var underLine = element.querySelector(".subLine");
            var underLine2 = navList[actualLocation].querySelector(".subLine");
            underLine2.style.visibility = "visible";
    
            element.onmouseover = function () {
            
                navText.style.fontWeight = "bold";
                navText.style.transform = "scale(1.1)";
                underLine.style.visibility = "visible";
                index == actualLocation ? underLine.style.visibility = "visible": underLine2.style.visibility = "hidden";              
                
            };
            element.onmouseout = function () {
        
                navText.style.transform = "scale(1)";
                navText.style.fontWeight = "lighter";
                index == actualLocation ? underLine.style.visibility = "visible" : underLine.style.visibility = "hidden";
                
        };
    
         navegador.addEventListener("mouseleave", function(__){
            var underLine2 = navList[actualLocation].querySelector(".subLine");
            underLine2.style.visibility = "visible";
        });
    
    });
    });
   
}

export default onMouseNav;