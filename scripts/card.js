
class Card {
    constructor (data, selector) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;

    }
    _getTemplate() {
        const cardElement = document
        .querySelector(this._selector)
        .content
        .querySelector('.element')
        .cloneNode(true);

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
        this._template.querySelector('.element__heart').addEventListener('click', () => {
            this._handleLike();
        });
        this._template.querySelector('.element__trasher').addEventListener('click', (evt) => {
            evt.target.closest('.element').remove();
        });
    }
    _handleLike() {
        this._template.querySelector('.element__heart').classList.toggle('element__heart_active');
    }  
}

initialCards.forEach((item) => {
	const card = new Message(item, '.item_template');
	const cardElement = card.generate();

	elements.append(messageElement);
});