'use strict'

let gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'president'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny','dog', 'baby'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny','dog'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', ] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', ] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny','baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny',] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny','baby' ] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny','president' ] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', ] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', ] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', ] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', ] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', ] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', ] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'president'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', ] }

]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes est Falafel',
            size: 20,
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}
