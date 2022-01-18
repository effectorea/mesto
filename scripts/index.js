'use strict';

import Card from './Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const initialCards = [{
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

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };

const info = {
    nameSelector: '.profile__title',
    missionSelector: '.profile__subtitle',
    inputNameSelector: '.popup__input_add_name',
    inputMissionSelector: '.popup__input_add_mission'
};

const elements = document.querySelector('.elements');
const profileEditButtonElement = document.querySelector('.profile__edit-button');
const addPlaceButtonElement = document.querySelector('.profile__add-button');

const profilePopup = document.querySelector('#profileEditPopup');
const profileEditForm = profilePopup.querySelector('.popup__form');

//вторая форма
const popupAddArticleElement = document.querySelector('#articleAddPopup');
const formAddArticleElement = popupAddArticleElement.querySelector('.popup__form');
const placeInput = popupAddArticleElement.querySelector('#place');
const imageInput = popupAddArticleElement.querySelector('#image');
const saveBtn = document.querySelector('#articleSave-btn');

//получаем по экземпляру валидации форм 
const profileValidation = new FormValidator(config, profileEditForm);
profileValidation.enableValidation();
const addArticleValidation = new FormValidator(config, formAddArticleElement);
addArticleValidation.enableValidation();

//создаем экземпляр класса для раьботы с профилем пользователя
const userInfo = new UserInfo(info);

//создаем попап профиля
const profileEditPopup = new PopupWithForm('#profileEditPopup', submitProfileEditForm, config);
profileEditPopup.setEventListeners();

//функция подтверждения изменения профиля
function submitProfileEditForm() {
    userInfo.setUserInfo();
    profileEditPopup.close();
    
}

//создаем попап с показом большого изображения
const imageBigPopup = new PopupWithImage('#imageBigPopup');
imageBigPopup.setEventListeners();
const handleCardClick = (info) => imageBigPopup.open(info);


//создаем попап с формой добавления карточки
const addCard = new PopupWithForm('#articleAddPopup', cardFormSubmit, config);
addCard.setEventListeners();

//отрисовываем все карточки с помощью класса Section 
const cardList = new Section({
    items: initialCards, 
    renderer: (item) => cardRender(item)
  }, '.elements');
cardList.renderItems();

//функция отрисовки карточки 
function cardRender(item) {
    const card = new Card(item, '.item_template', handleCardClick);
    const cardElement = card.generate();
    cardList.addItem(cardElement);
    addCard.close();
}

//функция добавления карточки при нажатии кнопки "создать"
function cardFormSubmit() {
    const cardItems = {
        name: placeInput.value,
        link: imageInput.value,
    };
    elements.prepend(new Card(cardItems, '.item_template', handleCardClick).generate());
    addCard.close();
}


//обработчик события на кнопу добавления карточки
addPlaceButtonElement.addEventListener('click', () => {
    addCard.open();
    addArticleValidation.clearValidation();
    saveBtn.classList.add('popup__save-btn_disabled');
    saveBtn.disabled = true;
});

//обработчик события на форму редактирования профиля
profileEditButtonElement.addEventListener('click', () => {
    userInfo.getUserInfo();
    profileValidation.clearValidation();
    profileEditPopup.open();
});