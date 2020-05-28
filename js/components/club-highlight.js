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

        // HTML structure
        this.saveButton = document.createElement('button')
        this.saveButton.id = 'saveButton'
        this.saveButton.classList.add('btn', 'btn-block', 'btn-light')
        this.saveButton.innerText = 'Save this club!'

        this.buttonContainer = document.createElement('div')
        this.buttonContainer.classList.add('col-12', 'mb-3')
        this.buttonContainer.append(this.saveButton)

        this.beginningHTML = `
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 mb-3">
                    <h3 class="text-white">Team highlight:</h3>
                </div>
        `

        this.endingHTML = `
            </div>
        </div>
        `
    }

    setClub(club) {
        this._id = club.id
        this._name = club.name
        this._img = club.crestUrl
        this._country = club.area.name
        this._address = club.address
        this._phoneNum = club.phone
        this._website = club.website
        this._founded = club.founded
        this._venue = club.venue
    }

    // Karena males bikin element jadi gini lol
    getNameHTML() {
        return `
            <div class="col-12 col-md-3 col-lg-4">
            <h2 class="text-white text-center">${this._name}</h2>
        `
    }

    getImgHTML() {
        if (this._img !== null) {
            return `
                <img alt="The team's logo, kalo broken, salahkan API-nya karena kasih link yang salah. Atau kamu lagi offline ya?" class="card-img mb-3" src="${this._img}">
                </div>
            `
        }
        return `
            <h4 class="text-white text-center"><i>This team doesn't have a logo</i></h4>
            </div>
        `
    }

    getCountryHTML() {
        return `
            <div class="col-12 col-md-9 col-lg-8">
            <h4 class="mb-3 text-center text-white">Profile:</h4>
            <table class="table table-responsive-sm text-white">
            <tbody>
            <tr>
            <td>Country</td>
            <td>${this._country}</td>
            </tr>
        `
    }

    getAddressHTML() {
        return `
            <tr>
            <td>Address</td>
            <td>${this._address}</td>
            </tr>
        `
    }

    getPhoneNumHTML() {
        return `
            <tr>
            <td>Phone Number</td>
            <td>${this._phoneNum}</td>
            </tr>
        `
    }

    getWebsiteHTML() {
        return `
            <tr>
            <td>Website</td>
            <td><a class="text-white" href="${this._website}"><u>${this._website}</u></a></td>
            </tr>
        `
    }

    getFoundedHTML() {
        return `
            <tr>
            <td>Year Founded</td>
            <td>${this._founded}</td>
            </tr>
        `
    }

    getVenueHTML() {
        return `
            <tr>
            <td>Venue</td>
            <td>${this._venue}</td>
            </tr>
            </tbody>
            </table>
            </div>
        `
    }

    render() {
        this.innerHTML = this.beginningHTML +
            this.buttonContainer.outerHTML +
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

    renderError() {
        this.innerHTML = this.beginningHTML +
            `
            <h5 class="text-center text-white">Maaf, kamu harus online setidaknya sekali untuk melihat ini</h5>
            ` +
            this.endingHTML
    }
}

export {ClubHighlight}