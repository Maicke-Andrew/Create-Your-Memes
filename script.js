const inpMeme = document.querySelector('#text-input')
const textMeme = document.querySelector('#meme-text')
const imgContainer = document.querySelector('#meme-image-container')
const btnFile = document.querySelector('#meme-insert')
const btnFireBorder = document.querySelector('#fire')
const btnWaterBorder = document.querySelector('#water')
const btnEarthBorder = document.querySelector('#earth')
const imgMeme = document.querySelector('#meme-image')
const firstMeme = document.querySelector('#meme-1')
const secondMeme = document.querySelector('#meme-2')
const thirdMeme = document.querySelector('#meme-3')
const fourthMeme = document.querySelector('#meme-4')
const buttons = [btnEarthBorder, btnWaterBorder, btnFireBorder, firstMeme, secondMeme, thirdMeme, fourthMeme]

const memeImg = (e) => {
    imgMeme.src = URL.createObjectURL(e.target.files[0])
    imgMeme.onload = () => { URL.revokeObjectURL(imgMeme.src) }
}

const memeText = () => {
    textMeme.innerHTML = inpMeme.value
}

const allFunctions = {
    'water': function () { imgContainer.style.border = '5px double blue' },
    'earth': function () { imgContainer.style.border = '6px groove green' },
    'fire': function () { imgContainer.style.border = '3px dashed red' },
    'meme-1': function () { imgMeme.src = './imgs/meme1.png' },
    'meme-2': function () { imgMeme.src = './imgs/meme2.png' },
    'meme-3': function () { imgMeme.src = './imgs/meme3.png' },
    'meme-4': function () { imgMeme.src = './imgs/meme4.png' }
}

const whereAreYouClick = (item) => {
    allFunctions[item.target.id]()
}

btnFile.addEventListener('change', memeImg)
inpMeme.addEventListener('input', memeText)
buttons.forEach(item => { item.addEventListener('click', whereAreYouClick) })