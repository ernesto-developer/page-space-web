
function createTextContentPage00(){
    
    const subtitleText     = document.querySelector(".intro__subtitle");
    const titleText        = document.querySelector(".intro__title");
    const infoText         = document.querySelector(".intro__info"); 
    const exploreText      = document.querySelector(".explore__text");
    const textContentIndex = {
        title:    "Space",
        subtitle: "So, you want to travel to",
        info:     `Let’s face it; if you want to go to space, you might as well genuinely go to
                   outer space and not hover kind of on the edge of it. Well sit back, and relax
                   because we’ll give you a truly out of this world experience!`,
        explore: "Explore"
    };

    subtitleText.textContent = textContentIndex.subtitle;
    titleText.textContent    = textContentIndex.title;
    infoText.textContent     = textContentIndex.info;
    exploreText.textContent  = textContentIndex.explore;

}

export default createTextContentPage00;
