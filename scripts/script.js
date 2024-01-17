const infoBtns = document.querySelectorAll('.info-dot');
const selectChoices = document.querySelectorAll('.header__select');


// show/hide choice

for (let infoBtn of infoBtns) {
    infoBtn.addEventListener('click', select)
}

function select(event) {
    event.stopPropagation()
    this.parentNode.querySelector('.header__select').classList.toggle('none');
}

// hide all chocies

document.addEventListener('click', hideSelect)

function hideSelect() {
    for (let selectChoice of selectChoices) {
        selectChoice.classList.add('none')
    }
}

// hide choices doesn't work for choices

for (let selectChoice of selectChoices) {
    selectChoice.addEventListener('click', (e) => {e.stopPropagation()})
}