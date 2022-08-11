const starsEl = document.querySelectorAll('.fas')
const emojis = document.querySelectorAll('.far')
const colors = [
    "#FF0A00", 
    "#FF6A00", 
    "#5880FF",
    "#FFBA00",
    "#0DFF64"
]

const upgrateRaiting = (index) => {
    starsEl.forEach((star, idStar) => {
            if(idStar < index + 1) {
                star.classList.add('active')
            }else {
                star.classList.remove('active')
            }
    })

    emojis.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`
        emoji.style.color = colors[index]
    })
}

starsEl.forEach((star, index) => {
    star.addEventListener('click', () => {
        upgrateRaiting(index)
    })
})
