import PageController from "../navBar/pageController.js";
import onMouseNavDestinations from "./onMouseOverDestinations.js";


function createDestinationNav() {
    const routesPages = [
     "destination-moon.html",
     "destination-mars.html", 
     "destination-europa.html", 
     "destination-titan.html"
    ];
    const pageController = new PageController(routesPages, ".destination__data__nav__link");
    const destinationsList = ["Moon","Mars","Europa","Titan"];
    const ulDestinationData = document.getElementById("destination--data--list");

    destinationsList.forEach((destino,index) => {
        let aTag = document.createElement("a");
        aTag.classList.add("destination__data__nav__link");
            
        let liTag = document.createElement("li");
        liTag.classList.add("destination__data__nav__group__list");
        
        let pTag = document.createElement("p");
        pTag.classList.add("destination__data__nav__group__list__text");
        pTag.innerHTML = destinationsList[index];
        
        let divTag = document.createElement("div");
        divTag.classList.add("destination__data__nav__group__list__underLine");
        
        
        liTag.appendChild(pTag);
        liTag.appendChild(divTag);
        aTag.appendChild(liTag);
        ulDestinationData.appendChild(aTag);
        
    });


    onMouseNavDestinations();
    pageController.createHrefLinks();


}
export default createDestinationNav;