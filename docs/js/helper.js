class Helper {
    static random(min = 0, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    static showElement(selector) {
        const spinner = document.querySelector(selector)
        spinner.classList.remove('d-none')
    }

    static hideElement(selector) {
        const spinner = document.querySelector(selector)
        spinner.classList.add('d-none')
    }

    static removeOldContent() {
        const oldElements = document.querySelectorAll('#content > :not(#contentSpinner)')
        for (const element of oldElements) {
            element.remove()
        }
    }

    static base64ToUInt8Arr(string) {
        const padding = '='.repeat((4 - string.length % 4) % 4)
        const base64 = (string + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/')
        const raw = window.atob(base64)
        const output = new Uint8Array(raw.length)

        for (let i = 0; i < raw.length; ++i) {
            output[i] = raw.charCodeAt(i)
        }

        return output
    }
}

export {Helper}