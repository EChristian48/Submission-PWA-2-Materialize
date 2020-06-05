import {Elements, Table} from "../elements.js";
import {Program} from "../program.js";

class ClubHighlight extends HTMLElement {
    constructor() {
        super()

        // Properties
        this._id = '-'
        this._name = '-'
        this._img = '...'
        this._country = '-'
        this._address = '-'
        this._phoneNum = '-'
        this._website = '-'
        this._founded = '-'
        this._venue = '-'

        // IDK what to call this
        this.titleTextText = 'Team Highlight:'
    }

    setClub(club) {
        this.club = club
        this._id = club.id
        this._name = club.name
        this._img = club.crestUrl
        this._country = club.area.name
        this._address = club.address
        this._phoneNum = club.phone
        this._website = club.website
        this._founded = club.founded
        this._venue = club.venue

        try {
            // HTML structure

            // Main container
            this.mainRow = Elements.row()

            this.container = Elements.container()
            this.container.append(this.mainRow)

            // Title text
            this.titleText = Elements.heading(3, this.titleTextText)

            this.titleContainer = Elements.div()
            this.titleContainer.classList.add('col', 's12')
            this.titleContainer.append(this.titleText)

            // Save button
            this.saveButton = Elements.button('Save this club!')
            this.saveButton.id = 'saveButton'
            this.saveButton.classList.add('btn', 'btn-large', 'waves-effect', 'waves-light')

            this.buttonContainer = Elements.div()
            this.buttonContainer.classList.add('col', 's12', 'mb-1')
            this.buttonContainer.append(this.saveButton)

            // Crest card
            if (this._img === null || this._img === '') {
                this.crestImg = Elements.heading(5, 'This team doesn\'t have a logo')
            } else {
                this.crestImg = Elements.img(this._img)
                this.crestImg.alt = 'The team\'s logo, kalo broken, salahkan API-nya karena kasih link yang salah. Atau kamu lagi offline ya?'
            }

            this.crestImgContainer = Elements.div()
            this.crestImgContainer.classList.add('card-image')
            this.crestImgContainer.append(this.crestImg)

            this.teamName = Elements.p(this._name)
            this.teamName.classList.add('flow-text')
            this.teamNameContainer = Elements.div()
            this.teamNameContainer.classList.add('card-content')
            this.teamNameContainer.append(this.teamName)

            this.card = Elements.card()
            this.card.append(this.crestImgContainer, this.teamNameContainer)

            this.cardContainer = Elements.div()
            this.cardContainer.classList.add('col', 's12', 'm4', 'center-align')
            this.cardContainer.append(this.card)

            // Profile table
            this.profileContainer = Elements.div()
            this.profileContainer.classList.add('col', 's12', 'm8')

            this.profileText = Elements.heading(4, 'Profile:')
            this.profileTable = new Table()


            // First row
            this.profileTable.addRow()
            this.profileTable.addData('Country')
            this.profileTable.addData(this._country)

            // Second row
            this.profileTable.addRow()
            this.profileTable.addData('Address')
            this.profileTable.addData(this._address)
            // Third row
            this.profileTable.addRow()
            this.profileTable.addData('Phone Number')
            this.profileTable.addData(this._phoneNum)
            // Fourth row
            this.profileTable.addRow()
            this.profileTable.addData('Website')
            this.profileTable.addData(this._website)
            // Fifth row
            this.profileTable.addRow()
            this.profileTable.addData('Year Founded')
            this.profileTable.addData(this._founded)
            // Sixth row
            this.profileTable.addRow()
            this.profileTable.addData('Venue')
            this.profileTable.addData(this._venue)

            this.profileContainer.append(this.profileText, this.profileTable.instance)
        } catch (e) {
            console.error(`Gagal bikin struktur HTML: ${e}`)
        }
    }

    render() {
        this.saveButton.addEventListener('click', async () => {
            try {
                await Program.db.saveClub(this.club)
            } catch (e) {
                console.error(`Gagal menyimpan club: ${e}`)
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

    renderError() {
        this.innerHTML = `
            <p>Maaf kamu harus online paling nggak sekali lah ya sampe keload, kalo engga coba reload</p>
        `
    }
}

export {ClubHighlight}