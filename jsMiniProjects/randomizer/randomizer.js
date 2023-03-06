const circle = document.querySelector('.random-place')
const link = document.querySelector('.link')
const mesange = document.querySelector('.mesange')

setInterval(coordinate, 2000)

function coordinate() {
    const randomRotate = Math.floor(Math.random() * 300)
    const randomX = Math.floor(Math.random() * 100)
    const randomY = Math.floor(Math.random() * 100)
    link.style.top = `${randomY}vh`
    link.style.left = `${randomX}vw`
    circle.style.transform = `rotate(${randomRotate}deg)`
    if (randomX > 50 && randomY > 50) {link.href='mesange-4.html'}
    if (randomX > 50 && randomY <= 50) {link.href='mesange-2.html'}
    if (randomX <= 50 && randomY > 50) {link.href='mesange-3.html'}
    if (randomX <= 50 && randomY <= 50) {link.href='mesange-1.html'}
    if (randomX == 50 && randomY == 50) {link.href='mesange-1.html'}
}
let i=0
const clicked = link.addEventListener('click', function () {
    
    if(mesange.style.visibility=='visible'){}else{ i = 0
        mesange.style.visibility = 'visible'
        const timer=setInterval(() => {
            i=i+1
            if (i == 6) {
                mesange.style.visibility = 'hidden'
                clearInterval(timer)}
            }, 1000)
    }
    
    
}
)


