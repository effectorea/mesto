export default class Card {
    constructor (data, selector, userId, handleCardClick, handleLikeClick, handleDelete) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._selector = selector;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDelete = handleDelete;

    }
    _getTemplate() {
        const cardElement = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);
        this._heartButton = cardElement.querySelector('.element__heart');
        this._counter = cardElement.querySelector('.element__counter');  
        return cardElement;
    }

    deleteCardElement() {
        this._template.remove();
        this._template = null;
    }

    setLikes(likesData) {
        this._likes = likesData;
        this._counter.textContent = this._likes.length;
        this._updateHeartView();
        
    }
 
    isLiked() {
        return this._likes.some((user) => {
            user._id === this._ownerId;
        })
    }

    _updateHeartView() {
        if (!this.isLiked()) {
            this._elementHeart.classList.remove('element__heart_active');
        } else {
            this._elementHeart.classList.add('element__heart_active');
        }    
    }
 
    _setEventListeners() {
        this._elementHeart = this._template.querySelector('.element__heart');
        this._elementHeart.addEventListener('click', () => {
            this._handleLikeClick(this);
        });

        this._trasher = this._template.querySelector('.element__trasher');
        if(this._ownerId !== this._userId) {
            this._trasher.classList.remove('element__trasher_disabled');
        } else {
            this._trasher.classList.add('element__trasher_disabled');
        }
        this._trasher.addEventListener('click', () => {
            this._handleDelete(this);
        })

        this._template.querySelector('.element__image').addEventListener('click', () => {
            const info = {link: this._link, name: this._name};
            this._handleCardClick(info);
        });

    }

    generate() {
        this._template = this._getTemplate();
        this._counter.textContent = this._likes.length;
        this._setEventListeners();
        this._updateHeartView();
        const elementImage = this._template.querySelector('.element__image');
        elementImage.src = this._link;
        this._template.querySelector('.element__title').textContent = this._name;
        elementImage.alt = this._name;
        return this._template;
    }

    getId() {
        return this._id
    }
}

