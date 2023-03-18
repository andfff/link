//data base
const data = []
//global const
const zero=[]
//DOM
const $btnDone = document.querySelector('.btn-input')
const $list = document.getElementById('list')
const $btnClear = document.querySelector('.btn-clear')
//innering

//buttons
$btnDone.addEventListener('click', doneFn)
window.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        $btnDone.click();
    }
})
$btnClear.addEventListener('click', clearFn)
$list.addEventListener('click', likeFn)
$list.addEventListener('click', downFn)
$list.addEventListener('click', deleteFn)
//functions
const html = (chooseIndex) => {
    return `
    <div class="row" id="row${chooseIndex}" dataid="${chooseIndex}">
        <p class="row-text" id="text${chooseIndex}" dataid="${chooseIndex}">${data[chooseIndex].text}</p>
        <div class="button-container" id="btn-cont${chooseIndex}" dataid="${chooseIndex}">
        <button class="btn-like" id="like${chooseIndex}" dataid="${chooseIndex}">&#9734;</button>
        <button class="btn-down" id="down${chooseIndex}" dataid="${chooseIndex}">&#129035;</button>
        <button class="btn-delete" id="delete${chooseIndex}" dataid="${chooseIndex}">&#10006;</button>
        </div>
        </div>
    `
}

const innerFn = () => {
    const index = data.length - 1
    $list.insertAdjacentHTML('afterbegin', html(index))
}


const likedColor = (event) => {
    document.getElementById(`${event.target.id}`).style.color = "gold"
}

const unlikedColor = (event) => {
    document.getElementById(`${event.target.id}`).style.color = ""
}


function doneFn() {
    if (document.getElementById('input').value !== '') {
        $list.style.visibility="visible"
        data.push({ text: document.getElementById('input').value })
        document.getElementById('input').value = ''
        innerFn()
    }
    
}

function clearFn() {
    data.length = 0
    $list.innerHTML = ''
    $list.style.visibility="hidden"
}

function likeFn(event) {
    if (event.target.className == ('btn-like')) {
        const dataId = event.target.getAttribute('dataid')
        if (data[dataId].liked == true) {
            data[dataId].liked = false
            unlikedColor(event)
        } else {
            data[dataId].liked = true
            likedColor(event)
        }
    }
}

const checkFollowFn = (event) => {
    const dataId = event.target.getAttribute('dataid')
    if (data[dataId].liked == false) {
        unlikedColor(event)
    } else {
        likedColor(event)
    }
}

function downFn(event) {
    if (event.target.className == ('btn-down') && event.target.getAttribute('dataid') != 0) {
        //get like styles
        const first = document.getElementById(`like${event.target.getAttribute('dataid')}`).style.color
        const second = document.getElementById(`like${event.target.getAttribute('dataid') - 1}`).style.color
        //change massive
        const a = data[event.target.getAttribute('dataid')]
        data[event.target.getAttribute('dataid')] = data[event.target.getAttribute('dataid') - 1]
        data[event.target.getAttribute('dataid') - 1] = a

        //removing and innering into html
        const dataId = event.target.getAttribute('dataid')
        document.getElementById(`row${dataId}`).remove()
        document.getElementById(`row${dataId - 1}`).remove()
        const code = html(dataId) + html(dataId - 1)

        if (document.getElementById(`row${dataId - 2}`) == null) {
            $list.insertAdjacentHTML('beforeend', code)
        } else {
            document.getElementById(`row${dataId - 2}`).insertAdjacentHTML('beforebegin', code)
        }

        document.getElementById(`like${dataId}`).style.color = second
        document.getElementById(`like${dataId - 1}`).style.color = first
    }
}

function deleteFn(event) {
    if (event.target.className == ('btn-delete')) {
        data.splice(event.target.getAttribute('dataid'), 1)
        $list.innerHTML = ''
        for (let i = 0; i < data.length; i++) {
            $list.insertAdjacentHTML('afterbegin', html(i))
        }
        }
        if (data==''){
            $list.style.visibility="hidden"
        }
    }
