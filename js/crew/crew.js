import createNavBar from "../functions/navBar/createNavBar.js";
import { Locations } from "../functions/navBar/locationRef.js";
import createStepsToTravel from "../functions/steps-to-travel/steps-to-travel-text.js";
import crewContent from "./crew-functions/crew-content.js";
import createCrewNav from "./crew-functions/crew-nav.js";
import windowSizeCheckCrewPage from "./crew-functions/window-size-check.js";

const bodyTag   = document.getElementById("bodyTag");
    const headerTag = document.querySelector(".nav");
    const navBar    = document.getElementById("nav-option");
    console.log(bodyTag);
    console.log(headerTag);
    console.log(navBar);

const location = new Locations();
var xhr = new XMLHttpRequest;
xhr.open("GET","/docs/data.json");
xhr.addEventListener("load",function (){
    let respuesta = xhr.responseText;
    let data = JSON.parse(respuesta);
    const actualPage = location.locationCrewPages();

    const dataPage = data.crew[actualPage]; 


   crewContent(dataPage);
    
    
    
});
xhr.send();
createNavBar();
createCrewNav();
windowSizeCheckCrewPage();


createStepsToTravel(location.locationPrincipalsPages());