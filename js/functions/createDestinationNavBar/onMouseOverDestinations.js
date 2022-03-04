import { Locations } from "../navBar/locationRef.js";

function onMouseNavDestinations() {
    let locations = new Locations();
    const navList = document.querySelectorAll(".destination__data__nav__group__list");
    const navegador = document.querySelector(".destination__data__nav");
    let actualLocation = locations.locationDestinationsPages();
 
    navList.forEach((element, index) => {
        const navText = element.querySelector(".destination__data__nav__group__list__text");
        const underLine = element.querySelector(".destination__data__nav__group__list__underLine");
        const underLine2 = navList[actualLocation].querySelector(".destination__data__nav__group__list__underLine");
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
        underLine2.style.visibility = "visible";
    });

});
}
export default onMouseNavDestinations;