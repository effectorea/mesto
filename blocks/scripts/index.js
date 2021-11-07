"use strict"

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileEditButtonElement = document.querySelector('.profile__edit-button');

const togglePopupVisibility = function() {
    popupElement.classList.toggle('popup_opened');
};

profileEditButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);

let formElement = document.querySelector('.popup__save-btn');
let nameInput = document.querySelector('.popup__input-name');
let missionInput = document.querySelector('.popup__input-mission');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = missionInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('click', togglePopupVisibility);