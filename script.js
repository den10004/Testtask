const itemA = document.querySelector('#item-a')
const itemB = document.querySelector('.item-b')
const itemE = document.querySelector('.item-e')
const button1 = document.querySelector('.btn-warning')
const button2 = document.querySelector('.btn-success')

//alert ('Привет, мир')

function hideHeadline() { //функция показа/скрытия заголовка
    if(itemA.style.display =="none") {
        itemA.style = "display: block"
    } else {
        itemA.style = "display: none"  
    } 
}

function changeBloks() {
    if(itemB.style.gridArea == "content1") {
        itemB.style.gridArea = "content"
        itemE.style.gridArea = "content1"
    } else {
        itemB.style.gridArea = "content1"
        itemE.style.gridArea = "content"
    } 
}

button1.addEventListener('click', hideHeadline) //показ/скрытие заголовка
button2.addEventListener('click', changeBloks)



