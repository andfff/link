const number=document.querySelector('.number')
const minus=document.querySelector('.minus')
const reset=document.querySelector('.reset')
const plus=document.querySelector('.plus')
let count=0
minus.addEventListener('click', function(){
    count--
    changeColor()
    number.textContent=count
})
reset.addEventListener('click', function(){
    count=0
    changeColor()
    number.textContent=count
})
plus.addEventListener('click', function(){
    count++
    changeColor()
    number.textContent=count
})
const changeColor=()=>{
if(count==0){
    number.style.color= `var(--fontColor)`
}
if(count>0){
    number.style.color= `#14ca23bd`
} 
if(count<0){
    number.style.color= `#ce2323bd`
} }