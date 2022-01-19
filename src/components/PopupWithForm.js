import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitHandler, config) {
        super(popupSelector);//принимает селектор попапа
        this._config = config;//добавил этот аргумент, чтобы класс был максимально переиспользуемым
        this._formSubmitHandler = formSubmitHandler;//колбэк сабмита формы
        this._form = this._popup.querySelector(this._config.formSelector);
        this._inputs = this._form.querySelectorAll(this._config.inputSelector);
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    }
    //в этом методе форма еще и сбрасывается
    close() {
        super.close();
        this._form.reset();
    }
    //метод, который собирает данные всех полей формы
    _getInputValues() {
        this._formValues = {};//создаем пустой объект, который наполняем значениями со всех инпутов
        this._inputs.forEach(element => {
            this._formValues[element.name] = element.value;
        });
        return this._formValues;
    }
    //метод, который добавляет обработчик клика иконке закрытия и добавляет обработчик сабмита формы
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this._formSubmitHandler(this._getInputValues);
        });
    }
}