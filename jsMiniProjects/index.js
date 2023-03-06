const html = document.querySelector('html')
const stickyMenu = document.querySelector('.sticky-menu')
const leftBar = document.querySelector('.left-bar')
const h1 = document.querySelector('h1')

leftBar.addEventListener('click', function (event) {
    if (event.target.closest = '.a-link') {
        h1.style.display = 'none'
    }
})
stickyMenu.addEventListener('click', function (event) {
    if (event.target.closest = '.a-link') {
        h1.style.display = 'none'
        stickyMenu.style.display='none'
    }
})

const menuIcon = document.querySelector('.q')
stickyMenu.style.display = 'none'
 menuIcon.addEventListener('click', function(){
     if(stickyMenu.style.display=='none'){
         stickyMenu.style.display='flex'
     } else {stickyMenu.style.display='none'}
 })

