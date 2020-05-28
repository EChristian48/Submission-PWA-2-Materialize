// import "./lib/idb.js";
import * as idb from "./lib/idb.js";

class Database {
    constructor(databaseName, version) {
        this.databaseName = databaseName
        this.version = version
    }

    // Override ini kalo mau ganti struktur
    upgradeCallback(upgradeDb) {
        upgradeDb.createObjectStore('clubs', {keyPath: 'id'})
    }

    async init() {
        this.dbInstance = await idb.open(this.databaseName, this.version, this.upgradeCallback)
    }

    async saveClub(clubData) {
        try {
            console.log('Menyimpan club...')
            const transaction = await this.dbInstance.transaction('clubs', 'readwrite')
            const store = await transaction.objectStore('clubs')
            await store.put(clubData)
            console.log('Club berhasil disimpan!')
            return transaction.complete
        } catch (e) {
            console.error(`Error woi pas nge-save: ${e}`)
        }
    }

    async getAllClubs() {
        try {
            const transaction = await this.dbInstance.transaction('clubs', 'readonly')
            const store = await transaction.objectStore('clubs')
            console.log('Club berhasil diambil (lol bahasanya aneh)!')
            return store.getAll()
        } catch (e) {
            console.error(`Error woi pas nge-save: ${e}`)
        }
    }
}

export {Database}