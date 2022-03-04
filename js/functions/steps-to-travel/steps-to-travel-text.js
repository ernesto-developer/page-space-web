// import locationRef from "../navBar/locationRef.js";

function createStepsToTravel(indexPage){
    
    const listNumbers = ["01","02","03"];
    const listStepsTravel = ["Pick your destination","Meet your crew","Space launch 101"];
    const h2tagStepsToTravel = document.getElementById("steps-to-travel");
    
    h2tagStepsToTravel.innerHTML = `<strong>${listNumbers[indexPage-1]} </strong>${listStepsTravel[indexPage-1]}`;

}

export default createStepsToTravel;