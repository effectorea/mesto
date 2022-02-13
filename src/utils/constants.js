export const config = {
formSelector: '.popup__form',
inputSelector: '.popup__input',
submitButtonSelector: '.popup__save-btn',
inactiveButtonClass: 'popup__save-btn_disabled',
inputErrorClass: 'popup__input_type_error',
errorClass: 'popup__error_visible'
};

export const info = {
nameSelector: '.profile__title',
missionSelector: '.profile__subtitle',
avatarSelector: '.profile__avatar'
};

export const elements = document.querySelector('.elements');
export const profileEditButtonElement = document.querySelector('.profile__edit-button');
export const addPlaceButtonElement = document.querySelector('.profile__add-button');
export const profilePopup = document.querySelector('#profileEditPopup');
export const profileSaveBtn = profilePopup.querySelector('.popup__save-btn');
export const profileEditForm = profilePopup.querySelector('.popup__form');
export const popupAddArticleElement = document.querySelector('#articleAddPopup');
export const addArticleBtn = popupAddArticleElement.querySelector('.popup__save-btn');
export const formAddArticleElement = popupAddArticleElement.querySelector('.popup__form');
export const placeInput = popupAddArticleElement.querySelector('#place');
export const imageInput = popupAddArticleElement.querySelector('#image');
export const inputName = profilePopup.querySelector('#name');
export const inputAbout = profilePopup.querySelector('#about');
export const saveBtn = document.querySelector('#articleSave-btn');
export const avatarPopup = document.querySelector('#changeAvatarPopup');
export const avatarSaveBtn = avatarPopup.querySelector('.popup__save-btn');
export const avatarEditForm = avatarPopup.querySelector('.popup__form');
export const avatarEditButton = document.querySelector('.profile__wrapper');
export const confirmationPopup = document.querySelector('#confirmationPopup');
export const confirmationForm = confirmationPopup.querySelector('.popup__form');

