import createDestinationNav from "../functions/createDestinationNavBar/createDestinationNav.js";
import createNavBar from "../functions/navBar/createNavBar.js";
import createStepsToTravel from "../functions/steps-to-travel/steps-to-travel-text.js";
import { Locations } from "../functions/navBar/locationRef.js";
import destiantionContent from "./funciones-destination/destination-content.js";

    

    const location = new Locations();

    var xhr = new XMLHttpRequest;
    xhr.open("GET","../../../docs/data.json");
    xhr.addEventListener("load",function (){
        let respuesta = xhr.responseText;
        let data = JSON.parse(respuesta);
        const actualPage = location.locationDestinationsPages();

        const dataPage = data.destinations[actualPage]; 
        

        destiantionContent(dataPage);
           
    });
    xhr.send();
    
createStepsToTravel(location.locationPrincipalsPages());
createNavBar();
createDestinationNav();



