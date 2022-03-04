function windowSizeCheckCrewPage(){
    
  const mainTag = document.querySelector(".crew__Container__all");
  const imgTag  = document.getElementById("crew--img");
  const sectionTag = document.querySelector(".crew");
  const divCrewTag = document.querySelector(".crew__data");
  const lineUnderImg = document.createElement("hr");
  lineUnderImg.classList.add("crew__img__underline");
  


    window.addEventListener("resize",function () {

        if (window.matchMedia("(min-width: 400px)").matches) {
          mainTag.appendChild(imgTag);
          lineUnderImg.style.display = "none";
          
        } else {
          sectionTag.appendChild(imgTag);
          sectionTag.appendChild(lineUnderImg);
          sectionTag.insertBefore(lineUnderImg,divCrewTag);
          sectionTag.insertBefore(imgTag, lineUnderImg);
          lineUnderImg.style.display = "block";
        }
        
      });
      if (window.matchMedia("(min-width: 400px)").matches) {
        mainTag.appendChild(imgTag);
        
        
      } else {
        sectionTag.appendChild(imgTag);
        sectionTag.appendChild(lineUnderImg);
        sectionTag.insertBefore(lineUnderImg,divCrewTag);
        sectionTag.insertBefore(imgTag, lineUnderImg);
        lineUnderImg.style.display = "block";
          }
}

export default windowSizeCheckCrewPage;