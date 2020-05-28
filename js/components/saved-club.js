import {ClubHighlight} from "./club-highlight.js";

class SavedClub extends ClubHighlight {
    constructor() {
        super();

        this.beginningHTML = `
        <div class="container">
            <div class="row align-items-center justify-content-center">
        `
    }

    render() {
        this.innerHTML = this.beginningHTML +
            this.getNameHTML() +
            this.getImgHTML() +
            this.getCountryHTML() +
            this.getAddressHTML() +
            this.getAddressHTML() +
            this.getPhoneNumHTML() +
            this.getWebsiteHTML() +
            this.getFoundedHTML() +
            this.getVenueHTML() +
            this.endingHTML
    }
}

export {SavedClub}