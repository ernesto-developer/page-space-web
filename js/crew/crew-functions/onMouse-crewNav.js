import { Locations } from "../../functions/navBar/locationRef.js";

function onMouseCrewDestinations() {
    let locations = new Locations();
    const navList = document.querySelectorAll(".crew__data__dotNav__dot");
    const navegador = document.querySelector(".crew__data__dotNav");
    let actualLocation = locations.locationCrewPages();
 
    navList.forEach((element, index) => {
        
       
        const dot = element;
        const dotSelect = navList[actualLocation];
        dotSelect.style.opacity = "1";

        element.onmouseover = function () {
        
           
            element.style.transform = "scale(1.1)";
            element.style.opacity = "1";
            index == actualLocation ? dotSelect.style.opacity = "1": dotSelect.style.opacity = "0.1"; 
            
        };
        element.onmouseout = function () {
    
           element.style.transform = "scale(1)";
           element.style.opacity = "0.1";
            index == actualLocation ? dotSelect.style.opacity = "1" : dotSelect.style.opacity = "0.1";
            
    };

     navegador.addEventListener("mouseleave", function(__){
        var dotSelect = navList[actualLocation];
        dotSelect.style.opacity = "1";
    });

});
}

export default onMouseCrewDestinations;