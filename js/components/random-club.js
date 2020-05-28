import {ClubHighlight} from "./club-highlight.js";

class RandomClub extends ClubHighlight {
    constructor() {
        super()

        // HTML structure
        this.beginningHTML = `
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 mb-3">
                    <h3 class="text-white">Random team highlight:</h3>
                </div>
        `
    }
}

export {RandomClub}