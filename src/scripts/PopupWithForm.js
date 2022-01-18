import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitHandler, config) {
        super(popupSelector);
        this._config = config;
        this._formSubmitHandler = formSubmitHandler;
        this._form = this._popup.querySelector(this._config.formSelector);
        this._inputs = this._form.querySelectorAll(this._config.inputSelector);
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    }
    close() {
        super.close();
        this._form.reset();
    }
    _getInputValues() {
        this._formValues = {};
        this._inputs.forEach(element => {
            this._formValues[element.name] = element.value;
        });
        return this._formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this._formSubmitHandler(this._getInputValues);
        });
    }
}