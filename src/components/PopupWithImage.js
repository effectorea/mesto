import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageBig = this._popup.querySelector('.popup__image');
        this._imageTitle = this._popup.querySelector('.popup__place-name');
    }
    //перезаписывает родительский метод и позволяет вставлять в попап картинку с src изображения и подписью
    open(data) {
        this._imageBig.src = data.link;
        this._imageTitle.textContent = data.name;
        this._imageBig.alt = data.name;
        super.open();
    }
}
