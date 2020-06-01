const webPush = require('web-push')

const vapidKeys = {
    publicKey: 'BH7CLufxTvpmkPiFUHx5Z880MgRruU2BBa1dwOsE55oonIw2sOnuWAGpo0eKW2rI7GqIpZysG6QOfLjQ3EoekHA',
    privateKey: '42JkJOt402eI8sLZxYKwxXemOUz2smOBs19SXO8TDHY',
}

webPush.setVapidDetails(
    'mailto:example@com.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey,
)

// Mungkin key sama endpoint-nya expired, tapi udah di-log pas aplikasinya jalan
const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/fN-GydWkI_8:APA91bFmOLXoKInLrRg2nR7xokJ7kHJlF-_jIrWVicuDEYZZCQqx_kt-u35lZILfLuk1k-1CZFfcScn-GC-IflYqxZW90T_OcaNlF8elRlUsfee9xGS6hCL0FGWbMB-jf0491pzd3D2T',
    keys: {
        p256dh: 'BKe2r1o+3vCt/BgWCvDnqsuT2FBxfevsizaKCqLS8Dn3HpsoSs3fJ1OOhXJYqJagGoEc9yFKNq9nwh6aNCo6BEs=',
        auth: 'jp9Q0+I8qxoSUtb7WblFow==',
    },
}

const payload = 'uyey berhasil'

const options = {
    gcmAPIKey: '658962116588',
    TTL: 60,
}

webPush.sendNotification(
    pushSubscription,
    payload,
    options,
).catch(e => {
    console.error(e)
})