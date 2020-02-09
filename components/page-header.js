class PageHeader {
    constructor(headerElement, pageHeader){
        this.headerElement = headerElement;
        this.pageHeader = pageHeader;
    }
    updateAverage(newAverage){
        console.log(newAverage);
        this.headerElement.querySelector("span").textContent = newAverage;
    }
}