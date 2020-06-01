import {ClubHighlight} from "./club-highlight.js";
import {Elements} from "../elements.js";
import {Program} from "../program";

class SavedClub extends ClubHighlight {
    constructor() {
        super()
        this.titleTextText = ''
    }

    render() {
        this.saveButton.innerText = 'Delete this club'
        this.saveButton.addEventListener('click', async () => {
            try {
                await Program.db.deleteClub(this._id)
                const content = document.querySelector('#content')
                content.removeChild(this)
            } catch (e) {
                console.error(`Gagal Menghapus club: ${e}`)
            }
        })
        this.mainRow.append(
            this.titleContainer,
            this.buttonContainer,
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