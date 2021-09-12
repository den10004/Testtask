const itemA = document.querySelector('#item-a')
const itemB = document.querySelector('.item-b')
const itemE = document.querySelector('.item-e')


const gc = document.querySelector('.grid-container')

const button1 = document.querySelector('.btn-warning')
const button2 = document.querySelector('.btn-success')

alert ('Привет, мир')

function hideHeadline() { //функция показа/скрытия заголовка
    if (itemA.style.display == "none") {
        itemA.style = "display: block"
    } else {
        itemA.style = "display: none"
    }
}

function changeBlocks() { //функция смены блоков
    itemB.classList.toggle('ib')
    itemE.classList.toggle('ie')
}

button1.addEventListener('click', hideHeadline) //обработчик событий показа/скрытия заголовка
button2.addEventListener('click', changeBlocks) //обработчик событий смены блоков



