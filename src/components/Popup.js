//класс, который отвечает за открытие и закрытие попапа

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);//селектор попапа
        this._handleEscClose = this._handleEscClose.bind(this);//забиндили специально, чтобы в качестве аргумента был именно этот контекст
        }
        //открытие попапа
        open() {
            this._popup.classList.add('popup_opened');
            document.addEventListener('keydown', this._handleEscClose);
        }
        //закрытие попапа
        close() {
            this._popup.classList.remove('popup_opened');
            document.removeEventListener('keydown', this._handleEscClose);
        }
        //метод с логикой для закрытия попапа клавишей ЭСК
        _handleEscClose(evt) {
            if (evt.key === 'Escape') {
                this.close();
            }
        }
        //метод, который добавляет слушатель клика иконке закрытия попапа
        //Модальное окно также закрывается при клике на затемнённую область вокруг формы (первое условие)
        setEventListeners() {
            this._popup.addEventListener('click', (evt) => {
                if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
                    this.close();
                }
            });
    }
}