import {ClubHighlight} from "./club-highlight.js";
import {Elements} from "../elements.js";

class SavedClub extends ClubHighlight {
    constructor() {
        super()
        this.titleTextText = ''
    }

    render() {
        this.mainRow.append(
            this.titleContainer,
            this.cardContainer,
            this.profileContainer
        )
        this.append(
            this.container,
            Elements.divider()
        )
    }
}

export {SavedClub}