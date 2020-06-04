// // Why can't I use module inside sw
// // Because it's standalone
// // Ba dum tss
// // That's not even funny
//
// // Cache things
// const CACHE_NAME = 'KNACK-IS-BACK-BAYBEE-V-16'
//
// // Production cache
// const CACHED_ITEMS = [
//     // Image, Fonts, Icons and Manifest
//     './img/icons/android-chrome-192x192.png',
//     './img/icons/android-chrome-512x512.png',
//     './img/icons/apple-touch-icon.png',
//     './img/icons/favicon-16x16.png',
//     './img/icons/favicon-32x32.png',
//     './img/icons/favicon.ico',
//     './manifest.json',
//     './img/jangan-bunuh-aku-dicoding.png',
//     'https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
//
//     // HTML
//     './',
//     './index.html',
//
//     // CSS
//     './css/materialize.min.css',
//     './css/font.css',
//     './css/main.css',
//     './css/normalize.css',
//     './css/color.css',
//     './css/style.css',
//
//     // JS
//     './release/app.js',
//     './js/lib/materialize.min.js',
// ]
//
// // Dev cache
// // const CACHED_ITEMS = [
//     // // HTML
//     // './',
//     // './index.html',
//     //
//     // // CSS
//     // './css/materialize.min.css',
//     // './css/color.css',
//     // './css/style.css',
//     //
//     // // JS
//     // './js/lib/idb.js',
//     // './js/lib/materialize.min.js',
//     //
//     // './js/components/club-highlight.js',
//     // './js/components/random-club.js',
//     // './js/components/saved-club.js',
//     // './js/components/single-standing.js',
//     // './js/components/standings.js',
//     //
//     // './js/api.js',
//     // './js/app.js',
//     // './js/constants.js',
//     // './js/database.js',
//     // './js/helper.js',
//     // './js/leagues.js',
//     // './js/notification.js',
//     // './js/program.js',
//     // './js/routes.js',
//     //
//     // // Images
//     //
//     // // Icons and Manifest
//     // './img/icons/android-chrome-192x192.png',
//     // './img/icons/android-chrome-512x512.png',
//     // './img/icons/apple-touch-icon.png',
//     // './img/icons/favicon-16x16.png',
//     // './img/icons/favicon-32x32.png',
//     // './img/icons/favicon.ico',
//     // './manifest.json',
// // ]
//
// // API Things
// const API_URL = 'api.football-data.org/v2'
//
// self.addEventListener('install', (e) => {
//     e.waitUntil(addCache());
//
//     async function addCache() {
//         try {
//             const cache = await caches.open(CACHE_NAME);
//             await cache.addAll(CACHED_ITEMS);
//             console.log('Berhasil nambahin cache, alhamdulillah')
//         } catch (error) {
//             console.error(`Hmmm kok error ya saat nambahin cache: ${error}`)
//         }
//     }
// })
//
// self.addEventListener('fetch', (e) => {
//     e.respondWith(loadCache())
//
//     async function getFromCache(cache) {
//         const response = await cache.match(e.request)
//         return response || fetch(e.request)
//     }
//
//     async function loadCache() {
//         try {
//             const requestURL = e.request.url
//             console.log(requestURL)
//             if (requestURL.indexOf(API_URL) > -1) {
//                 const cache = await caches.open(CACHE_NAME)
//                 const cacheResponse = await cache.match(e.request)
//
//                 if (cacheResponse) {
//                     console.log(`Memperbarui cache: ${requestURL}`)
//                     cache.add(e.request)
//                         .then(() => {
//                             console.log(`Cache berhasil diperbarui (${requestURL})`)
//                         })
//                         .catch(e => {
//                             console.error(`Update cache gagal, nih error: ${e}`)
//                         })
//                     return cacheResponse
//                 }
//
//                 await cache.add(e.request)
//                 return getFromCache(cache)
//             } else if (requestURL.indexOf('wikimedia') > -1 || requestURL.indexOf('null') > -1) {
//                 const newURL = requestURL.replace(/^http:\/\//i, 'https://');
//                 const response = await fetch(newURL)
//                 if (response.status === 404) {
//                     const cache = await caches.open(CACHE_NAME)
//                     const img404 = await cache.match('./img/jangan-bunuh-aku-dicoding.png')
//                     return img404 || fetch('./img/jangan-bunuh-aku-dicoding.png')
//                 }
//                 return response
//             } else {
//                 const cache = await caches.open(CACHE_NAME)
//                 return getFromCache(cache)
//             }
//         } catch (e) {
//             console.error(e)
//         }
//     }
// })
//
// self.addEventListener('activate', (e) => {
//     e.waitUntil(deleteOldCache())
//
//     async function deleteOldCache() {
//         const cacheNames = await caches.keys()
//         await Promise.all(
//             cacheNames.map(cacheName => {
//                 if (cacheName !== CACHE_NAME) {
//                     console.log(`Menghapus cache ${cacheName}`)
//                     return caches.delete(cacheName)
//                 }
//             })
//         )
//     }
// })
//
// self.addEventListener('push', (e) => {
//     const body = e.data.text() || 'Ini Payload'
//     console.log(e.data)
//
//     const options = {
//         body: body,
//         data: {
//             dateOfArrival: Date.now()
//         },
//     }
//
//     e.waitUntil(
//         self.registration.showNotification('Ini Push Notification', options)
//     )
// })
