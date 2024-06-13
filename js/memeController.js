'use strict'

let gCtx
let gCanvas

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme()
    const memeTextInput = document.getElementById('memeText')
    memeTextInput.addEventListener('input', function() {
        renderMeme(memeTextInput.value)
    })
}

function renderMeme(memeText) {
    const selectedImg = gImgs.find(img => img.id === gMeme.selectedImgId)
    const img = new Image()
    img.onload = function () {
        gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
        gCtx.fillStyle = '#ffffff'
        gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

        // var memeText = 'fbh dbjhfdkd dfb hj'
        gCtx.fillStyle = '#000000'
        gCtx.font = '20px Ariel'
        gCtx.textAlign = 'center'
        gCtx.fillText (memeText,gCanvas.width/2, 40)

        gCtx.strokeStyle = '#ffffff'
        gCtx.lineWidth = 2
        gCtx.strokeText(memeText, gCanvas.width / 2, 40)

    }
    img.src = selectedImg.url
}

