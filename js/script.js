const parent = document.querySelector('#parent')
const menu = document.querySelector('.menu')
const tabs = document.querySelectorAll('.tab')
const tab = document.querySelector('.tab')



menu.addEventListener('click', (e) => {
    let targetBtn = e.target
    let dataText = targetBtn.dataset.text
    for (let tabAll of tabs) {
        tabAll.classList.remove('active')

        if (dataText === tabAll.id) {

            
            tabAll.classList.add('active')
            targetBtn.classList.add('active')
        }
    }

})