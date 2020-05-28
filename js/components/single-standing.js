// I know this is not really a component
// Just for easier grouping you know
// know lah, iya ga?

class SingleStanding {
    constructor(standingRecord) {
        this.position = standingRecord.position
        this.id = standingRecord.team.id
        this.teamName = standingRecord.team.name
        this.playedMatches = standingRecord.playedGames
        this.won = standingRecord.won
        this.draw = standingRecord.draw
        this.lost = standingRecord.lost
        this.points = standingRecord.points
        this.goalsFor = standingRecord.goalsFor
        this.goalsAgainst = standingRecord.goalsAgainst
        this.goalDiff = standingRecord.goalDifference
    }

    html() {
        return `
            <tr>
            <td>${this.position}</td>
            <td><a href="#/clubs/${this.id}" class="text-white"><u>${this.teamName}</u></a></td>
            <td>${this.playedMatches}</td>
            <td>${this.won}</td>
            <td>${this.draw}</td>
            <td>${this.lost}</td>
            <td>${this.points}</td>
            <td>${this.goalsFor}</td>
            <td>${this.goalsAgainst}</td>
            <td>${this.goalDiff}</td>
            </tr>
        `
    }
}

export {SingleStanding}