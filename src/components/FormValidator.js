
export default class FormValidator {
    constructor (config, form) {
        this._config = config;
        this._form = form;
        this._inactiveButton = this._config.inactiveButtonClass;
        this._inputError = this._config.inputErrorClass;
        this._error = this._config.errorClass;
        this._inputs = this._form.querySelectorAll(this._config.inputSelector);
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
    }

    //создаем приватный метод показа ошибки
    _showError(input) {
    //находим все спаны под инпутами 
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    //присваем этим спанам браузерный текст ошибки 
    errorMessage.textContent = input.validationMessage;
    //добавляем класс чтобы появилась и сама ошибка и стили для инпута
    input.classList.add(this._inputError);
    errorMessage.classList.add(this._error);
    }


    //создаем приватный метод, который убирает ошибку (все по аналогии с показом)
    _hideError(input) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    //обнуляем текст ошибки
    errorMessage.textContent = '';
    input.classList.remove(this._inputError);
    errorMessage.classList.remove(this._error);
    }

    //приватный метод, который проверяет, есть ли  невалидные инпуты
    _hasInvalidInput() {
    return Array.from(this._inputs).some((el) => !el.validity.valid);
    }

    //приватный метод, переключающий кнопки с активных на неактивные
    _toggleButtonError(button) {
    if (this._hasInvalidInput()) {
        this._submitButton.classList.add(this._inactiveButton);
        this._submitButton.disabled = true;
    } else {
        this._submitButton.classList.remove(this._inactiveButton);
        this._submitButton.disabled = false;
    }
    }
    //приватный метод, который уже непосредственно принимает решение, показывать ошибки или нет
    _checkInputValidity(input) {
    if (!input.validity.valid) {
        this._showError(input);
    } else {
        this._hideError(input);
    }
    }
    //навешиваем обработчики событий на все инпуты
    _setInputListeners () {
    
    //вызываем тут эту функцию тоже, чтобы кнопка изначально была неактивной
        this._toggleButtonError();
        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonError();
        });
    });
    }
    

    //включаем валидацию
    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setInputListeners();
    }
    //метод для удаления ошибок и деактивации кнопки
    clearValidation() {
        this._toggleButtonError();
        this._inputs.forEach((input) => {
            this._hideError(input);
        });
    }
}

