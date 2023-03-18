const html = document.querySelector('html')
const stickyMenu = document.querySelector('.sticky-menu')
const leftBar = document.querySelector('.left-bar')
const blackBg = document.querySelector('.black-bg')
const floatZ=document.querySelector('.float-z')
leftBar.addEventListener('click', function (event) {
    if (event.target.closest = '.a-link') {
        floatZ.style.display = 'none'
    }
}) 
stickyMenu.addEventListener('click', function (event) {
    if (event.target.closest = '.a-link') {
        floatZ.style.display = 'none'
        stickyMenu.style.display = 'none'
        blackBg.style.display='none'
        menuIcon.style.transform='rotate(180deg)'
    }
})
const menuIcon = document.querySelector('.menu-icon')
stickyMenu.style.display = 'none'
menuIcon.addEventListener('click', function () {
    if (stickyMenu.style.display == 'none') {
        stickyMenu.style.display = 'flex'
        blackBg.style.display = 'block'
        menuIcon.style.animationName = 'paused';
        menuIcon.style.transform='rotate(90deg) scale(1, 1)'
    } else {
        stickyMenu.style.display = 'none'
        blackBg.style.display = 'none'
        menuIcon.style.transform='rotate(180deg)'
    }
})

const floatText = document.querySelector('.float-text')

let change1 = 0
let change2 = 0
let change3 = 0
const prop = (el) => {
    odin = Math.random()
    if (odin <= 0.5) {
        el = Math.floor((-1) * Math.random() * 100)
    } else { el = Math.floor(Math.random() * 100) }
    return el
}
floatText.addEventListener('mouseover', function () {
    floatText.style.transform = `translate(${prop(change1)}px, ${prop(change2)/10}px) rotate(${prop(change3)/10}deg)`
})