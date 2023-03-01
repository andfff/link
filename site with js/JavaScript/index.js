import { model } from './model.js'

const site = document.getElementById('site')//<<<діставання доступу до блока по id
model.forEach(block=>{
    let html=''
    if (block.type==='title'){
        html=`
        <div class="row"><h1>${block.value}</h1></div>
        `
    } else if(block.type==='text'){
        html=`<div class="row"><p>${block.value}</p></div>`
    }
    else if(block.type==='column'){
        let ht=''
    block.value.forEach(block=>{ht+=`<div class="column">${block.value}</div>`})
        html=`<div class="row container-for-col">
        ${ht}
    </div>`
    }
    else if(block.type==='image'){
        html=`<img class="dio-img" src=${block.src} alt="">`
    }
    site.insertAdjacentHTML('beforeend', html)//<<тут імпортується
})
// для кожного елемента model присвоюється відповідний текст(код html) який імпортується в файл html