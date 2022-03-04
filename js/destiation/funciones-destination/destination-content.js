
function destiantionContent(DestinationPage){
    
    const destinationImg         = document.getElementById("destination-img");
    const destinationName        = document.getElementById("destination-name");
    const destinationDescription = document.getElementById("destination-description");
    const destinationDistance    = document.getElementById("destiantion-distance");
    const destinationTravel      = document.getElementById("destination-travel");


    destinationImg.style.backgroundImage = `url(${DestinationPage.images.png})`;
    destinationName.textContent          = DestinationPage.name;
    destinationDescription.textContent   = DestinationPage.description;
    destinationDistance.textContent      = DestinationPage.distance;
    destinationTravel.textContent        = DestinationPage.travel;

}

export default destiantionContent;