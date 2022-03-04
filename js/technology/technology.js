import createNavBar from "../functions/navBar/createNavBar.js";
import { Locations } from "../functions/navBar/locationRef.js";
import createStepsToTravel from "../functions/steps-to-travel/steps-to-travel-text.js";
import createTechnologyNav from "./tech-functions/create-tech-nav.js";
import technologyContent from "./tech-functions/technology-content.js";
import windowSizeCheckTechPage from "./tech-functions/window-size-check.js";

const location = new Locations();
var xhr = new XMLHttpRequest;
xhr.open("GET","/docs/data.json");
xhr.addEventListener("load",function (){

    let respuesta = xhr.responseText;
    let data = JSON.parse(respuesta);
    const actualPage = location.locationTechnologyPages();

    const dataPage = data.technology[actualPage]; 

    technologyContent(dataPage);
    

});
xhr.send();
createNavBar();
createTechnologyNav();
windowSizeCheckTechPage();

createStepsToTravel(location.locationPrincipalsPages());

