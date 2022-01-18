export const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

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
inputNameSelector: '.popup__input_add_name',
inputMissionSelector: '.popup__input_add_mission'
};

export const elements = document.querySelector('.elements');
export const profileEditButtonElement = document.querySelector('.profile__edit-button');
export const addPlaceButtonElement = document.querySelector('.profile__add-button');
export const profilePopup = document.querySelector('#profileEditPopup');
export const profileEditForm = profilePopup.querySelector('.popup__form');
export const popupAddArticleElement = document.querySelector('#articleAddPopup');
export const formAddArticleElement = popupAddArticleElement.querySelector('.popup__form');
export const placeInput = popupAddArticleElement.querySelector('#place');
export const imageInput = popupAddArticleElement.querySelector('#image');
export const saveBtn = document.querySelector('#articleSave-btn');