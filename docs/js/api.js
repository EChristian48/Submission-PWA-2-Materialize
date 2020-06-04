import {API_KEY, API_URL} from "./constants.js";
import {Helper} from "./helper.js";

class API {
    static async getRandomClub() {
        try {
            const randomClub = Helper.random(0, 47)
            const response = await fetch(`https://${API_URL}/teams`, {
                headers: {
                    'X-Auth-Token': API_KEY,
                },
            })
            const json = await response.json()
            return await json.teams[randomClub]
        } catch (e) {
            console.error(`HMM GAGAL NGAMBIL DATA LHO ${e}`)
            return false
        }
    }

    static async getStandings(leagueID) {
        try {
            const response = await fetch(`https://${API_URL}/competitions/${leagueID}/standings`, {
                headers: {
                    'X-Auth-Token': API_KEY,
                },
            })
            return await response.json()
        } catch (e) {
            console.error(`HMM GAGAL NGAMBIL DATA LHO ${e}`)
            return false
        }
    }

    static async getClub(clubID) {
        try {
            const response = await fetch(`https://${API_URL}/teams/${clubID}`, {
                headers: {
                    'X-Auth-Token': API_KEY,
                },
            })
            return await response.json()
        } catch (e) {
            console.error(`HMM GAGAL NGAMBIL DATA LHO ${e}`)
            return false
        }
    }
}

export {API}