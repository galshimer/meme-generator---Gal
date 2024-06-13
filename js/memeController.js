'use strict'

let gCtx
let gCanvas

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme()
}

function renderMeme() {
    const selectedImg = gImgs.find(img => img.id === gMeme.selectedImgId)
    const img = new Image()
    img.onload = function () {
        gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
        gCtx.fillStyle = '#ffffff'
        gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
    img.src = selectedImg.url
}

