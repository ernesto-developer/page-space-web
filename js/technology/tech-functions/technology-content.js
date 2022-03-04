function technologyContent(techPage){

    const technologyImg          = document.getElementById("technology--img");
    const technologyTerminolgy   = document.getElementById("technology--terminology");
    const technologyName         = document.getElementById("technology--name");
    const technologyDescription  = document.getElementById("technology--description");

    if (window.matchMedia("(min-width: 400px)").matches)
        {technologyImg.style.backgroundImage = `url(${techPage.images.portrait})`;}
    else{technologyImg.style.backgroundImage = `url(${techPage.images.landscape})`;}    
    technologyTerminolgy.textContent    = "The terminology...";
    technologyName.textContent          = techPage.name;
    technologyDescription.textContent   = techPage.description;
}

export default technologyContent;