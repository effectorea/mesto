"use strict"

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileEditButtonElement = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_add_name');
let missionInput = document.querySelector('.popup__input_add_mission');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

const togglePopupVisibility = function () {
    if (!popupElement.classList.contains('popup_opened')) {
        popupElement.classList.add('popup_opened');
        nameInput.value = profileTitle.textContent;
        missionInput.value = profileSubtitle.textContent;
    } else {
        popupElement.classList.remove('popup_opened');
    }
};

profileEditButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = missionInput.value;
    togglePopupVisibility();
}
formElement.addEventListener('submit', formSubmitHandler);