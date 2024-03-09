const parent = document.querySelector('#parent')
const menu = document.querySelector('.menu')
const tabs = document.querySelectorAll('.tab')
const tab = document.querySelector('.tab')

menu.addEventListener('click', (e) => {
    // выведем в консоль значение дата атрибута кнопки по которой кликнули
    for (let taball of tab) {
        taball.classList.remove('active')
    }


})