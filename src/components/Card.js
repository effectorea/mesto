export default class Card {
    constructor (data, selector, handleCardClick, handleLikeClick, handleDelete) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this.id = data._id;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._currentUserId = data.currentUserId;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDelete = handleDelete;

    }
    _getTemplate() {
        const cardElement = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);
        return cardElement;
    }

    setLikes(likesData) {
        this._likes = likesData;
        this._counter = this._template.querySelector('.element__counter');
        this._counter.textContent = this._likes.length;
        /* console.log(likesData);
        console.log(this._likes.length);
        console.log(this._counter) */
    }

    isLiked() {
        console.log(this._likes)
        return this._likes.some((user) => {
            user._id === this._currentUserId;
        })
    }

    _updateHeartView() {
        if (!this.isLiked()) {
            this._elementHeart.classList.remove('element__heart_active');
        } else {
            this._elementHeart.classList.add('element__heart_active');
        }
        
    }

    generate() {
        this._template = this._getTemplate();
        const elementImage = this._template.querySelector('.element__image');
        elementImage.src = this._link;
        this._template.querySelector('.element__title').textContent = this._name;
        elementImage.alt = this._name;
        this._trasher = this._template.querySelector('.element__trasher');
        this._setEventListeners();
/*         if (this._currentUserId !== this._ownerId) {
            this._trasher.classList.add('element__trasher_disabled');
        } else {
            this._trasher.classList.remove('element__trasher_disabled');
        } */
        return this._template;
    }

    deleteCardElement() {
        this._template.remove();
        this._template = null;
    }

    _setEventListeners() {
        this._elementHeart = this._template.querySelector('.element__heart');
        this._elementHeart.addEventListener('click', () => {
            this._handleLikeClick(this);

        });
        this._template.querySelector('.element__trasher').addEventListener('click', () => {
            this._handleDelete(this);
            
        });
        this._template.querySelector('.element__image').addEventListener('click', () => {
            const info = {link: this._link, name: this._name};
            this._handleCardClick(info);
        });

    }

    getId() {
        return this.id
    }

 




}

