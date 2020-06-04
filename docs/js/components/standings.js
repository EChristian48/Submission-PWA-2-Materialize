import {SingleStanding} from "./single-standing.js";

class Standings extends HTMLElement {
    constructor() {
        super()
    }

    setStandings(standings) {
        this.name = standings.competition.name
        this.lastUpdated = standings.competition.lastUpdated
        this.matchDay = standings.season.currentMatchday
        this.winner = standings.season.winner || 'Not yet'
        this.standingsTable = standings.standings[0].table
    }

    renderTable() {
        let html = ''
        for (const singleStanding of this.standingsTable) {
            html += new SingleStanding(singleStanding).html()
        }
        return html
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <h3>${this.name} Standings:</h3>
                    <h5>Last updated at: ${this.lastUpdated}</h5>
                    <h5>Match day: ${this.matchDay}</h5>
                    <h5>Winner: ${this.winner}</h5>
                </div>
                <div class="col s12">
                    <table class="responsive-table">
                        <thead>
                        <tr>
                            <th>Position</th>
                            <th>Team</th>
                            <th>Played Matches</th>
                            <th>Won</th>
                            <th>Draw</th>
                            <th>Lost</th>
                            <th>Points</th>
                            <th>Goals For</th>
                            <th>Goals Against</th>
                            <th>Goal Diff.</th>
                        </tr>
                        </thead>
                        <tbody>
                            ${this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `
    }

    renderError() {
        this.innerHTML = `
            <p>Maaf kamu harus online paling nggak sekali lah ya sampe keload</p>
        `
    }
}

export {Standings}