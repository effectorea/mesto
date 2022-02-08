export default class Card {
    constructor (data, selector, handleCardClick, handleLikeClick) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this.id = data._id;
        this._likes = data.likes;
        this._currentUserId = data.currentUserId;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;

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
        this._elementHeart = this._template.querySelector('.element__heart');
        this._elementHeart.addEventListener('click', () => {
            this._handleLikeClick(this);
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

    isLiked() {
        console.log(this._likes)
        return this._likes.some((user) => {
            user._id === this._currentUserId;
        })
    }

    setLikes(likesData) {
        this._likes = likesData;
        this._counter = this._template.querySelector('.element__counter');
        this._counter.textContent = this._likes.length;
        /* console.log(likesData);
        console.log(this._likes.length);
        console.log(this._counter) */
    }

    _updateHeartView() {
        if (!this.isLiked()) {
            this._elementHeart.classList.remove('element__heart_active');
        } else {
            this._elementHeart.classList.add('element__heart_active');
        }
        
    }


}

