"use strict"

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileEditButtonElement = document.querySelector('.profile__edit-button');
const submitButtonElement = document.querySelector('.popup__save-btn');
const togglePopupVisibility = function() {
    popupElement.classList.toggle('popup_opened');
    nameInput.value = profileTitle.textContent;
    missionInput.value = profileSubtitle.textContent;
};

profileEditButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let missionInput = document.querySelector('.popup__input_mission');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = missionInput.value;
    submitButtonElement.addEventListener('click', togglePopupVisibility);
}
formElement.addEventListener('submit', formSubmitHandler);
