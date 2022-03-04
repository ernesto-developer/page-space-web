import { Locations } from "../../functions/navBar/locationRef.js";

function onMouseNavTechnology(){

    const locations      = new Locations();
    const navList        = document.querySelectorAll(".technology__data__dotNav__dot");
    const navegador      = document.querySelector(".technology__data__dotNav");
    const actualLocation = locations.locationTechnologyPages();

    const actualDotDiv    = navList[actualLocation];
    const actualNumberDot = actualDotDiv.querySelector(".technology__data__dotNav__number");
    
    actualDotDiv.style.backgroundColor = "#fff";
    actualNumberDot.style.color        = "#0B0D17"; 
  
    
    navList.forEach((element,index) => {

        const numberDot = element.querySelector(".technology__data__dotNav__number");
        const dotDiv = element;



        element.onmouseover = function(){

            dotDiv.style.backgroundColor = "#fff";
            numberDot.style.color = "#0B0D17";
            if(index == actualLocation){
                actualDotDiv.style.backgroundColor = "#fff",
                actualNumberDot.style.color = "#0B0D17"
            }else{
                actualDotDiv.style.backgroundColor = "",
                actualNumberDot.style.color = "#fff"
            }

        };

        element.onmouseout = function(){

            dotDiv.style.backgroundColor = "";
            numberDot.style.color = "#fff";
        };

        navegador.addEventListener("mouseleave", function(__){

            actualDotDiv.style.backgroundColor = "#fff";
            actualNumberDot.style.color        = "#0B0D17"; 

        });
    });

}

export default onMouseNavTechnology;