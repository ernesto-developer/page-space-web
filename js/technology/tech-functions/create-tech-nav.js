import PageController from "../../functions/navBar/pageController.js";
import onMouseNavTechnology from "./onMouseTechnolgy.js";

function createTechnologyNav(){

    const routesPages = [
        "technology-vehicle.html",
        "technology-spaceport.html",
        "technology-capsule.html"
    ];

    const pageController = new PageController(routesPages, ".technology__data__dotNav__link");
    const technologyPagelist = ["1","2","3"];
    const ulTechnologyData = document.getElementById("technology--dotNav");

    routesPages.forEach((elemnt,index) => {
        
        const aTag = document.createElement("a");
        aTag.classList.add("technology__data__dotNav__link");

        const pTag = document.createElement("p");
        pTag.classList.add("technology__data__dotNav__number");
        pTag.textContent = technologyPagelist[index];

        const divTag = document.createElement("div");
        divTag.classList.add("technology__data__dotNav__dot");

        divTag.appendChild(pTag);
        aTag.appendChild(divTag);

        ulTechnologyData.appendChild(aTag);
        

    });

    onMouseNavTechnology();
    pageController.createHrefLinks();




}

export default createTechnologyNav;