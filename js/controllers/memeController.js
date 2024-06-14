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
            const isSelected = idx === gMeme.selectedLineIdx;
            drawText(line.txt, line.size, line.color, gCanvas.width / 2, 40 + idx * 50, isSelected)
        })
    }
    img.src = selectedImg.url
}

function drawText(text, size, color, x, y, isSelected) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = '#000000'
    gCtx.fillStyle = color
    gCtx.font = `${size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

    if (isSelected) {
        const textWidth = gCtx.measureText(text).width
        const textHeight = size
        gCtx.strokeStyle = '#ffffff'
        gCtx.lineWidth = 2
        gCtx.strokeRect(x - textWidth / 2 - 10, y - textHeight / 2, textWidth + 20, textHeight)
    }
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

function OnAddText() {
    addLine(gMeme, 'Extra line of the meme')
    console.log(gMeme)
    renderMeme()
}

function onEditText(elText) {
    console.log('elText: ', elText)
    editText(elText)
    renderMeme()
}

function onSwitchLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
    console.log(`Switched to line ${gMeme.selectedLineIdx}`)
    renderMeme()
}