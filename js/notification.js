import {Helper} from "./helper.js";

class NotificationManager {
    static async init() {
        if ('Notification' in window) {
            const result = await NotificationManager.reqPermission()

            if (result === 'granted') {
                const registration = await navigator.serviceWorker.ready
                registration.showNotification('Permission Granted!')
                await NotificationManager.subscribe()
            }
        } else {
            console.error('Browser kamu ga support notification dong, jadul amat')
        }
    }

    static async reqPermission() {
        try {
            return Notification.requestPermission()
        } catch (e) {
            console.error(`Gagal request permission: ${e}`)
        }
    }

    static async subscribe() {
        try {
            if ('PushManager' in window) {
                const registration = await navigator.serviceWorker.getRegistration()
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: Helper.base64ToUInt8Arr(
                        'BH7CLufxTvpmkPiFUHx5Z880MgRruU2BBa1dwOsE55oonIw2sOnuWAGpo0eKW2rI7GqIpZysG6QOfLjQ3EoekHA'
                    )
                })
                console.log(`BERHASIL LAH YA WALAU GA NGERTI ${subscription.endpoint}`)
                console.log(`APAAN SIH ANJIR p256h: ${btoa(
                    String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('p256dh'))))}`
                )
                console.log(`APAAN SIH ANJIR auth: ${btoa(
                    String.fromCharCode.apply(null, new Uint8Array(subscription.getKey('auth'))))}`
                )
            }
        } catch (e) {
            console.error(`Hmmm error ya pas subscribe: ${e}`)
        }
    }
}

export {NotificationManager}