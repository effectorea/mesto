'use strict';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
    config,
    info,
    elements,
    profileEditButtonElement,
    addPlaceButtonElement,
    profileEditForm,
    formAddArticleElement,
    placeInput,
    imageInput,
    saveBtn,
    castle,
    japan,
    church,
    field,
    mountainhouse,
    stronghold,
    initialCards
} from '../utils/constants.js';

import './index.css';


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
