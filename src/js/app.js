/* Declaracion de variables globales */
let MAIN
let MODAL_POST
let BTN_SHOW_POST
let BTN_CANCEL_POST
let deferresPrompt

// Funciones
const showPostModal = () => {
    MAIN.style.display = 'none'
    MODAL_POST.style.display = 'block'
    setTimeout(() => {
        MODAL_POST.style.transform = 'translateY(0)'
    }, 1)
}
const closePostModal = () => {
    MAIN.style.display = 'block'
    MODAL_POST.style.transform = 'translateY(100vh)'
}

// Anula la ventana de instalar
window.addEventListener('beforeInstallprompt', (e) => {
    e.preventDefault()
    deferresPrompt = e
})

// Cuando se cargue todo nuestro DOM
window.addEventListener('load', async () => {
    MAIN = document.querySelector('#main')
    MODAL_POST = document.querySelector('#modal-post-section')
    BTN_SHOW_POST = document.querySelector('#btn-upload-post')
    BTN_SHOW_POST.addEventListener('click', showPostModal)
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel')
    BTN_CANCEL_POST.addEventListener('click', closePostModal)

    if ('serviceWorker' in navigator) {
        const response = await navigator.serviceWorker.register('sw.js')
        if (response) {
            console.log('Service worker registrado')
        }
    }

    const bannerInstall = document.querySelector('#banner-install')
    bannerInstall.addEventListener(('click', async () => {
        if (deferresPrompt) {
            deferresPrompt.prompt()
            const reponse = await deferresPrompt.userChoice
            if (response === 'dissmissed') {
                console.error('El usuario canceló la instalación')
            }
        }
    }))
})
