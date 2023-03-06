const content = document.querySelector('.squad')
const button = document.querySelector('.tabMe')
const current= document.querySelector('.color-p')

const colored = button.addEventListener('click', function () {
    let code= Math.floor(Math.random() * 16777215).toString(16)
    content.style.background= `linear-gradient(135deg, #${code}cb, #${code}57)`
    content.style.borderColor=`#${code}`
    current.textContent=`Current color: #${code}`
})



