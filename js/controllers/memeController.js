'use strict'

let gCtx
let gCanvas

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')
    gCanvas.onclick = onCanvasClick
    renderMeme()
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
            const isSelected = idx === gMeme.selectedLineIdx
            drawText(line.txt, line.size, line.color, line.x || gCanvas.width / 2, line.y, isSelected, line.font, line.align)

        })
    }
    img.src = selectedImg.url
}

function drawText(text, size, color, x, y, isSelected, font = 'Impact', align = 'center') {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = '#000000'
    gCtx.fillStyle = color
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

    const textWidth = gCtx.measureText(text).width
    const textHeight = size
    gMeme.lines[gMeme.selectedLineIdx].x = x
    gMeme.lines[gMeme.selectedLineIdx].width = textWidth
    gMeme.lines[gMeme.selectedLineIdx].height = textHeight

    if (isSelected) {
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
    var elEditor = document.querySelector('.editor')
    console.log('elEditor: ', elEditor)
    elEditor.classList.remove('none')
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

function onCanvasClick(ev) {
    const { offsetX, offsetY } = ev
    const meme = getMeme()

    for (let idx = meme.lines.length - 1; idx >= 0; idx--) {
        const line = meme.lines[idx]

        const textWidth = line.width
        const textHeight = line.height
        const startX = line.x - textWidth / 2 - 10
        const endX = startX + textWidth + 20
        const startY = line.y - textHeight / 2
        const endY = startY + textHeight

        if (
            offsetX >= startX &&
            offsetX <= endX &&
            offsetY >= startY &&
            offsetY <= endY
        ) {
            meme.selectedLineIdx = idx
            const selectedLine = meme.lines[meme.selectedLineIdx]
            const elTextInput = document.querySelector('.input-text')
            elTextInput.value = selectedLine.txt
            renderMeme()
            return
        }
    }
}

function onChangeTextAlign(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align
    renderMeme()
}

function onChangeFontFamily(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
    renderMeme()
}

function moveLine(dir) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (dir === 'up') line.y -= 5
    if (dir === 'down') line.y += 5
    renderMeme()
}

function onDeleteLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx - 1 + gMeme.lines.length) % gMeme.lines.length
    renderMeme()
    }