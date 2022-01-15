// Creamos un service worker
self.addEventListener('install', (e) => {
    // Nosotros deberíamos agregar al cache nuestros archivos
    console.info('[SW]: Adicionando nuestros archivos al cache...')

    const wu = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const adicionandoMisArchivos = ''
                const adicionarVariablesDinamicas = ''
                console.warn('[sw]: Se instaló correctamente')
                resolve()
            }, 1000)
            self.skipWaiting()
        } catch (err) {
            reject(err.message)
        }
    })
    // Cuando la promesa se cumple el flujo continua
    e.waitUntil(wu)
})

self.addEventListener('activate', (e) => {
    // La documentación nos indica elimiar todos los caches anteriores
    console.info('[SW]: Archivos exitosamente guardados...')
    // e.respondWith(null)
})

self.addEventListener('fetch', (e) => {
    console.info('[SW]: Instalando...')
    // console.log(e.request.url)
    // e.respondWith(fetch(e.request))
})

self.addEventListener('sync', (e) => {
    console.log('---------------')
    console.log(e)
    console.log('---------------')
})

self.addEventListener('push', (e) => {
    console.error(e)
})