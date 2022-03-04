export default class PageController {

    #routesPages;
    #aTagLinkClass;

    constructor(routesPages, aTagLinkClass){
        this.#routesPages   = routesPages;
        this.#aTagLinkClass = aTagLinkClass;
    }


    createHrefLinks(){

        const routesPages = this.#routesPages;
        const optionsNavList = document.querySelectorAll(this.#aTagLinkClass);

        optionsNavList.forEach((element,index) => {
            
            element.setAttribute("href", routesPages[index]);

        });
    }

};