const showError = (form, input, errorMessageText, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = errorMessageText;
    input.classList.add(inputErrorClass);
    
}

const hideError = (form, input, inputErrorClass) => {
    const errorMessage = form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = '';
    input.classList.remove(inputErrorClass);
}


const checkInputValidity = (form, input, { inputErrorClass, errorClass }) => {
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, inputErrorClass, errorClass);
    } else {
        hideError(form, input, inputErrorClass, errorClass);
    }
}

const setInputListeners = (form, { inputSelector, ...rest }) => {
    const inputs = form.querySelectorAll(inputSelector);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, rest);
        });
    });
}

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