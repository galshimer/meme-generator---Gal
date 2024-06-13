'use strict'

let gCtx
let gCanvas

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme('')
    const memeTextInput = document.getElementById('memeText')
    memeTextInput.addEventListener('input', function () {
        renderMeme(memeTextInput.value)
    })

    renderGallery()

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
        gCtx.fillStyle = getColor()
        gCtx.font = '20px Ariel'
        gCtx.textAlign = 'center'
        gCtx.fillText(memeText, gCanvas.width / 2, 40)

        gCtx.strokeStyle = getColor()
        gCtx.lineWidth = 2
        gCtx.strokeText(memeText, gCanvas.width / 2, 40)

    }
    img.src = selectedImg.url
}

function getColor() {
    return document.getElementById('color').value
}

function onDownloadImg(elLink) {
    const imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onImgSelect(elImg) {
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height)
}

// function onClearCanvas() {
//     gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
// }