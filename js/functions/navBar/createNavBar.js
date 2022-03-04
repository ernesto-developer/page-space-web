import onMouseNav from "../navBar/nav-function-onmouse.js";
import PageController from "../navBar/pageController.js";
import { Locations } from "./locationRef.js";
import createLateralNavBar from "./navBarLateral.js";

function createNavBar(){

const location = new Locations();
const actualLocation = location.locationPrincipalsPages();
console.log(actualLocation);

// const routesPagesHome = ["index.html","/starter-code/destination-moon.html","/starter-code/crew-commander.html","/starter-code/technology-vehicle.html"];
const routesPages = ["index.html","destination-moon.html","crew-commander.html","technology-vehicle.html"];
// var pageController;
    
const pageController = new PageController( routesPages,".nav__options__link__nav"); 
    


const listOptionsNav = [" Home"," Destination"," Crew"," Technology"];
const listNumbers = ["00","01","02","03"];

const navList = document.getElementById("nav--options--list");

listOptionsNav.forEach((text,index) => {
    
    let aTag = document.createElement("a");
    aTag.classList.add("nav__options__link__nav");
    
    let liTag = document.createElement("li");
    liTag.classList.add("nav__options__list__items");
    
    let pTag = document.createElement("p");
    pTag.classList.add("nav__options__list__item__text");
    pTag.innerHTML = `<strong>${listNumbers[index]}</strong>${listOptionsNav[index]}`;
    
    let divTag = document.createElement("div");
    divTag.classList.add("subLine");
    
    liTag.appendChild(pTag);
    liTag.appendChild(divTag);
    
    aTag.appendChild(liTag);

    navList.appendChild(aTag);
    
});

onMouseNav();
pageController.createHrefLinks();
createLateralNavBar();


}

export default createNavBar;