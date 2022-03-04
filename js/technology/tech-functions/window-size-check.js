function windowSizeCheckTechPage(){
    
  const sectionTag = document.querySelector(".technology");
  const divTechDataDotNav = document.querySelector(".technology__data__dotNav");
  const divTechData = document.querySelector(".technology__data");
  const divTechImg = document.querySelector(".technology__img");
  
      window.addEventListener("resize",function () {
  
          if (window.matchMedia("(min-width: 400px)").matches) {
         
              sectionTag.insertBefore(divTechDataDotNav, divTechData);
              
            } else {
                
            sectionTag.insertBefore(divTechDataDotNav, divTechImg);
            
        }
        
    });
    if (window.matchMedia("(min-width: 400px)").matches) {
        
        sectionTag.insertBefore(divTechDataDotNav, divTechData);
          
        } else {
            
            sectionTag.insertBefore(divTechDataDotNav, divTechImg);
            
            }
  }
  
  export default windowSizeCheckTechPage;