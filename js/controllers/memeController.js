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

function renderMeme() {
    const selectedImg = gImgs.find(img => img.id === gMeme.selectedImgId)
    const img = new Image()
    img.onload = function () {
        gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
        gCtx.fillStyle = '#ffffff'
        gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

        gMeme.lines.forEach((line, idx) => {
            drawText(line.txt,line.size, line.color, gCanvas.width / 2, 40 + idx * 50)
        })
    }
    img.src = selectedImg.url
}

function drawText(text, size, color, x, y) {
    gCtx.strokeStyle = '#000000'
    gCtx.fillStyle = color
    gCtx.font = `${size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function getColor() {
    return document.getElementById('color').value
}

function onDownloadImg(elLink) {
    const imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onImgSelect(elImg) {
    const selectedImgId = +elImg.dataset.imgId
    gMeme.selectedImgId = selectedImgId
    renderMeme()
}

function onChangeFontSize(dir) {
    changeFontSize(dir)
    renderMeme()
}

function OnAddText(){
    addLine(gMeme, 'Extra line of the meme')
    console.log(gMeme)
    renderMeme()
}

function onEditText(elText){
    console.log('elText: ', elText)
    editText(elText)
    renderMeme()
}