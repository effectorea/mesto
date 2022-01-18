'use strict';

import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import {
    initialCards,
    config,
    info,
    elements,
    profileEditButtonElement,
    addPlaceButtonElement,
    profileEditForm,
    formAddArticleElement,
    placeInput,
    imageInput,
    saveBtn
} from '../scripts/constants.js';


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