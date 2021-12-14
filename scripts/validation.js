
//создаем функцию показа ошибки
const showError = (form, input, errorMessageText, inputErrorClass, errorClass) => {
    //находим все спаны под инпутами 
    const errorMessage = form.querySelector(`#${input.id}-error`);
    //присваем этим спанам браузерный текст ошибки 
    errorMessage.textContent = errorMessageText;
    //добавляем класс чтобы появилась и сама ошибка и стили для инпута
    input.classList.add(inputErrorClass);
    errorMessage.classList.add(errorClass);
    
}
//создаем функцию, которая убирает ошибку (все по аналогии с показом)
const hideError = (form, input, inputErrorClass, errorClass) => {
    const errorMessage = form.querySelector(`#${input.id}-error`);
    //обнуляем текст ошибки
    errorMessage.textContent = '';
    input.classList.remove(inputErrorClass);
    errorMessage.classList.remove(errorClass);
}

//функция, которая проверяет инпуты на валидность
const hasInvalidInput = (inputs) => {
    return Array.from(inputs).some((el) => !el.validity.valid);
}

//функция, переключающая кнопки с активных на неактивные
const toggleButtonError = (inputs, button, inactiveButtonClass) => {
    if (hasInvalidInput(inputs)) {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    }
}
//функция которая уже непосредственно принимает решение, показывать ошибки или нет
const checkInputValidity = (form, input, { inputErrorClass, errorClass }) => {
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, inputErrorClass, errorClass);
    } else {
        hideError(form, input, inputErrorClass, errorClass);
    }
}
//навешиваем обработчики событий на все инпуты
const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputs = form.querySelectorAll(inputSelector);
    const submitButton = form.querySelector(submitButtonSelector);
    //вызываем тут эту функцию тоже, чтобы кнопка изначально была неактивной
    toggleButtonError(inputs, submitButton, inactiveButtonClass);
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, rest);
            toggleButtonError(inputs, submitButton, inactiveButtonClass);
        });
    });
}
//включаем валидацию
const enableValidation = ({ formSelector, ...rest }) => {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });


        setInputListeners(form, rest);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });