class Elements {
    static div = () => document.createElement('div')
    static table = () => document.createElement('table')
    static tr = () => document.createElement('tr')

    static td(innerText='') {
        const tdElement = document.createElement('td')
        tdElement.innerText = innerText
        return tdElement
    }

    static img(src = '') {
        const imgElement = document.createElement('img')
        imgElement.src = src
        return imgElement
    }

    static button(innerText = '') {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = innerText
        return buttonElement
    }

    static heading(size=1, innerText = '') {
        const headingElement = document.createElement(`h${size}`)
        headingElement.innerText = innerText
        return headingElement
    }

    static p(innerText = '') {
        const pElement = document.createElement('p')
        pElement.innerText = innerText
        return pElement
    }

    // Materialize components

    static row() {
        const rowElement = Elements.div()
        rowElement.classList.add('row')
        return rowElement
    }

    static container() {
        const containerElement = Elements.div()
        containerElement.classList.add('container')
        return containerElement
    }

    static card() {
        const cardElement = Elements.div()
        cardElement.classList.add('card')
        return cardElement
    }

    static divider() {
        const dividerElement = Elements.div()
        dividerElement.classList.add('divider')
        return dividerElement
    }
}

// Kenapa sih masih ga bisa extend selain HTMLElement -_-
// Kan enak kalo langsung extend HTMLTableElement
class Table {
    constructor() {
        this.instance = Elements.table()
        // this.instance.classList.add('responsive-table')
        this.rowCount = 0
    }

    addRow() {
        this[`row${this.rowCount}`] = Elements.tr()
        this.instance.append(this[`row${this.rowCount}`])
        return this[`row${this.rowCount++}`]
    }

    addData(data='', rowNum=this.rowCount-1) {
        const tdElement = Elements.td(data)
        this[`row${rowNum}`].append(tdElement)
    }
}

export {Elements, Table}