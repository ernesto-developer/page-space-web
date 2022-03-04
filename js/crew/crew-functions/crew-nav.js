import PageController from "../../functions/navBar/pageController.js";
import onMouseCrewDestinations from "./onMouse-crewNav.js";


function createCrewNav(){

    const routesPages = [
        "crew-commander.html",
        "crew-specialist.html",
        "crew-pilot.html",
        "crew-engineer.html"
    ];

const pageController = new PageController(routesPages, ".crew__data__dotNav__link");
const ulCrewDataGroup = document.getElementById("crew--dotNav");

routesPages.forEach( (__) => {

    const aTag = document.createElement("a");
    aTag.classList.add("crew__data__dotNav__link");
    
    const liTagDot = document.createElement("li");
    liTagDot.classList.add("crew__data__dotNav__dot");

    aTag.appendChild(liTagDot);
    ulCrewDataGroup.appendChild(aTag);

});

    onMouseCrewDestinations();
    pageController.createHrefLinks();

}

export default createCrewNav;