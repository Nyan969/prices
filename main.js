function closePopup() {
    document.querySelector('.popup__close').removeEventListener('click', closePopup);
    document.querySelector('.popup_is-opened').removeEventListener('mousedown', closeClickOutsidePopup);
    document.querySelector('.popup').classList.remove('popup_is-opened');

    const container = document.querySelector('.templateContainer');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function closeClickOutsidePopup(event) {
    if (!(event.target).closest('.popup__content')) {
        closePopup();
    }
}

function openCard() {
    const container = document.querySelector('.templateContainer');
    container.insertAdjacentHTML('afterbegin', this.outerHTML);
    document.querySelector('.popup').classList.add('popup_is-opened');
    document.querySelector('.popup__close').addEventListener('click', closePopup);
    document.querySelector('.popup_is-opened').addEventListener('mousedown', closeClickOutsidePopup);
}

const elements = document.querySelectorAll('.card');
elements.forEach(card => {
    card.addEventListener('click', openCard);
});
