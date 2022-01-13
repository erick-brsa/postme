self.addEventListener('install', (e) => {
    console.info('[SW] Install...')
})
self.addEventListener('activate', async (e) => {
    console.info('[SW] Activate...')
})
// Permite que podamos instalar nuestra aplicación
self.addEventListener('fetch', (e) => {
    console.info('[SW] Fetch...')
})