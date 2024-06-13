'use strict'

function renderGallery() {
    var elGalleryContainer = document.querySelector('.gallery-container')
const strHTMLS = gImgs.map(img=> `
    <img src="${img.url}" alt="Gallery Image" onclick="onImgSelect(this)" class="image">
        `)
elGalleryContainer.innerHTML=strHTMLS.join('')
}
