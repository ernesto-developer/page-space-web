 export class Locations  {

     ubicacion;
     
    constructor(){
        this.ubicacion = document.location.href; 
    };

    locationPrincipalsPages(){    
        if(this.ubicacion.includes("index")){
            return 0;
        }else if(this.ubicacion.includes("destination")){
            return 1;
        }else if(this.ubicacion.includes("crew")){
            return 2;
        }else if(this.ubicacion.includes("technology")){
            return 3;
        }
    };

    locationDestinationsPages(){
        if(this.ubicacion.includes("moon")){
            return 0;
        }else if(this.ubicacion.includes("mars")){
            return 1;
        }else if(this.ubicacion.includes("europa")){
            return 2;
        }else if(this.ubicacion.includes("titan")){
            return 3;
        }
    };

    locationCrewPages(){
        if(this.ubicacion.includes("commander")){
            return 0;
        }else if(this.ubicacion.includes("specialist")){
            return 1;
        }else if(this.ubicacion.includes("pilot")){
            return 2;
        }else if(this.ubicacion.includes("engineer")){
            return 3;
        }
    };

    locationTechnologyPages(){
        if(this.ubicacion.includes("vehicle")){
            return 0;
        }else if(this.ubicacion.includes("spaceport")){
            return 1;
        }else if(this.ubicacion.includes("capsule")){
            return 2;
        }
    };
};
