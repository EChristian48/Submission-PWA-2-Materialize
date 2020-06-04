import {Leagues} from "./leagues.js";
import {Program} from "./program.js";
import {HOME} from "./constants.js";

class Routes {
    static routeList = {
        '#/home': Program.loadRandomClub,
        '#/saved': Program.loadSavedClubs,

        // Club
        '#/clubs': Program.loadClub,

        // Standings
        '#/standings/laLiga': {
            func: Program.loadStandings,
            param: Leagues.LA_lIGA,
        },
        '#/standings/premierLeague': {
            func: Program.loadStandings,
            param: Leagues.PREMIER_LEAGUE,
        },
        '#/standings/bundesliga': {
            func: Program.loadStandings,
            param: Leagues.BUNDESLIGA,
        },
        '#/standings/serieA': {
            func: Program.loadStandings,
            param: Leagues.SERIE_A,
        },
    }

    static init() {
        Routes.loadPage()
        window.addEventListener('hashchange', Routes.loadPage)
    }

    static loadPage() {
        const hash = window.location.hash

        if (!hash) {
            window.location.href = HOME
            return
        }

        if (hash.indexOf('standings') > -1) {
            const route = Routes.routeList[hash]
            route.func(route.param)
        } else if (hash.indexOf('clubs') > -1) {
            const clubID = hash.split('/')[2]
            Routes.routeList['#/clubs'](clubID)
        } else {
            Routes.routeList[hash]()
        }
    }
}

export {Routes}