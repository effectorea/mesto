export default class Card {
    constructor (data, selector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;

    }
    _getTemplate() {
        const cardElement = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }
    generate() {
        this._template = this._getTemplate();
        const elementImage = this._template.querySelector('.element__image');
        elementImage.src = this._link;
        this._template.querySelector('.element__title').textContent = this._name;
        elementImage.alt = this._name;

        this._setEventListeners();
        return this._template;
    }
    _setEventListeners() {
        this._template.querySelector('.element__heart').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__heart_active');
        });
        this._template.querySelector('.element__trasher').addEventListener('click', () => {
            this._template.remove();
            this._template = null;
        });
        this._template.querySelector('.element__image').addEventListener('click', () => {
            const info = {link: this._link, name: this._name};
            this._handleCardClick(info);
        });

    }
}

