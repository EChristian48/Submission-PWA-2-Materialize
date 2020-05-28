import {API} from "./api.js";
import {ClubHighlight} from "./components/club-highlight.js";
import {Helper} from "./helper.js";
import {RandomClub} from "./components/random-club.js";
import {Standings} from "./components/standings.js";
import {Database} from "./database.js";
import {SavedClub} from "./components/saved-club.js";

class Program {
    static db = new Database('cobola', 1)

    static async init() {
        try {
            customElements.define('random-club', RandomClub)
            customElements.define('standings-table', Standings)
            customElements.define('club-highlight', ClubHighlight)
            customElements.define('saved-club', SavedClub)

            await Program.registerSW()
            await Program.db.init()
        } catch (e) {
            console.error(`Hmmm entah kenapa program-nya error: ${e}`)
        }
    }

    static async registerSW() {
        try {
            if ('serviceWorker' in navigator) {
                await navigator.serviceWorker.register('../sw.js')
                console.log('Registrasi sw berhasil! Kece kan')
            } else {
                throw new Error('Browsermu ga support mas')
            }
        } catch (e) {
            console.error(`Kenapa ya? kok error register sw: ${e}`)
        }
    }

    static async loadStandings(leagueID) {
        try {
            Helper.removeOldContent()
            Helper.showElement('#contentSpinner')

            const content = document.querySelector('#content')
            const standingsTable = document.createElement('standings-table')
            const standingsData = await API.getStandings(leagueID)

            standingsTable.setStandings(standingsData)
            standingsTable.render()

            content.append(standingsTable)
            Helper.hideElement('#contentSpinner')
        } catch (e) {
            console.error(`Kok gagal render standings ya? ${e}`)
        }
    }

    static async loadRandomClub() {
        try {
            Helper.removeOldContent()
            Helper.showElement('#contentSpinner')

            const content = document.querySelector('#content')
            const randomClub = document.createElement('random-club')
            const randomClubData = await API.getRandomClub()

            if (randomClubData) {
                randomClub.setClub(randomClubData)
                randomClub.render()
            } else {
                randomClub.renderError()
            }

            content.append(randomClub)
            Helper.hideElement('#contentSpinner')

            const button = document.getElementById('saveButton')
            button.addEventListener('click', async () => {
                try {
                    await Program.db.saveClub(randomClubData)
                } catch (e) {
                    console.error(`Gagal menyimpan club: ${e}`)
                }
            })
        } catch (e) {
            console.error(`Hmmm entah kenapa gagal render: ${e}`)
        }
    }

    static async loadClub(clubID) {
        try {
            Helper.removeOldContent()
            Helper.showElement('#contentSpinner')

            const content = document.querySelector('#content')
            const club = document.createElement('club-highlight')
            const clubData = await API.getClub(clubID)

            if (clubData) {
                club.setClub(clubData)
                club.render()
            } else {
                club.renderError()
            }

            content.append(club)
            Helper.hideElement('#contentSpinner')

            const button = document.getElementById('saveButton')
            button.addEventListener('click', async () => {
                try {
                    await Program.db.saveClub(clubData)
                } catch (e) {
                    console.error(`Gagal menyimpan club: ${e}`)
                }
            })
        } catch (e) {
            console.error(`Hmmm entah kenapa gagal render: ${e}`)
        }
    }

    static async loadSavedClubs() {
        try {
            Helper.removeOldContent()
            Helper.showElement('#contentSpinner')

            const content = document.querySelector('#content')
            const savedClubsData = await Program.db.getAllClubs()

            for (const savedClubData of savedClubsData) {
                const savedClub = document.createElement('saved-club')
                savedClub.setClub(savedClubData)
                savedClub.render()
                content.append(savedClub)
            }

            Helper.hideElement('#contentSpinner')
        } catch (e) {
            console.error(`HMM ERROR WAE: ${e}`)
        }
    }
}

export {Program}