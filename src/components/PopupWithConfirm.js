import Popup from "./Popup.js";
//создаем отдельный класс для попапа подтверждения удаленияб чтобы потом можно было удалить конкретную карточку через аргумент
export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, formSubmitHandler, config) {
        super(popupSelector);//принимает селектор попап
        this._formSubmitHandler = formSubmitHandler;//колбэк сабмита формы
        this._config = config;
        this._form = this._popup.querySelector(this._config.formSelector);
    }
  
    open(card) {
        super.open();
        this._cardElement = card;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmitHandler(this._cardElement); 
        });
    }
}