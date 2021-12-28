import { imageBig, imageTitle, imageBigPopup, openPopupContainer} from './index.js';
export default class Card {
    constructor (data, selector) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;

    }
    _getTemplate() {
        const cardElement = document
        .querySelector(this._selector)
        .content.cloneNode(true);

        return cardElement;
    }
    generate() {
        this._template = this._getTemplate();
        this._template.querySelector('.element__image').src = this._link;
        this._template.querySelector('.element__title').textContent = this._name;
        this._template.querySelector('.element__image').alt = this._name;

        this._setEventListeners();
        return this._template;
    }
    _setEventListeners() {
        this._template.querySelector('.element__heart').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__heart_active');
        });
        this._template.querySelector('.element__trasher').addEventListener('click', (evt) => {
            evt.target.closest('.element').remove();
        });
        this._template.querySelector('.element__image').addEventListener('click', () => {
            this._handleBigImage();
        });

    }
    _handleBigImage() {
        imageBig.src = this._link;
        imageTitle.textContent = this._name;
        imageBig.alt = this._name;
        openPopupContainer(imageBigPopup);
    }
}

