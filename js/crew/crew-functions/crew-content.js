import { Locations } from "../../functions/navBar/locationRef.js";

function crewContent(crewPage){

    const indexPage = new  Locations();

    const crewImg  = document.getElementById("crew--img");
    const crewRole = document.getElementById("crew--role");
    const crewName = document.getElementById("crew--name");
    const crewBio  = document.getElementById("crew--bio");

    crewImg.setAttribute("src", `${crewPage.images.png}` );
    if(indexPage.locationCrewPages() == 0) { crewImg.style.marginLeft = "10%";}
    crewRole.textContent          = crewPage.role;
    crewName.textContent          = crewPage.name;
    crewBio.textContent           = crewPage.bio;
    
 
}
export default crewContent;