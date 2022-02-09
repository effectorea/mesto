'use strict';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
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
    avatarPopup,
    avatarEditForm,
    avatarEditButton,
    confirmationForm,
    confirmationPopup,
    profileSaveBtn,
    avatarSaveBtn,
    addArticleBtn
} from '../utils/constants.js';

import './index.css';

//получаем экземпляр для работы с сервером
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-35',
    headers: {
        authorization: '396aec5a-cf08-4342-be3f-c1c3fdb65106',
        'Content-Type': 'application/json'
    }
});

let userId = null;

//записываем данные (когда выполнятся все промисы)
Promise.all([api.getCards(), api.getUserInfo()])
.then(([dataCards, dataUser]) => {
    userId = dataUser._id;
    cardList.renderItems(dataCards);
    userInfo.setUserInfo(dataUser);
    userInfo.setAvatar(dataUser);
    console.log('Данные карточек', dataCards);
    console.log('Данные полбзователя', dataUser);
});

//получаем по экземпляру валидации форм 
const profileValidation = new FormValidator(config, profileEditForm);
profileValidation.enableValidation();
const addArticleValidation = new FormValidator(config, formAddArticleElement);
addArticleValidation.enableValidation();
const changeAvatarValidation = new FormValidator(config, avatarEditForm);
changeAvatarValidation.enableValidation();
const confirmationValidation = new FormValidator(config, confirmationForm);
confirmationValidation.enableValidation();

//создаем экземпляр класса для раьботы с профилем пользователя
const userInfo = new UserInfo(info);

//создаем попап профиля
const profileEditPopup = new PopupWithForm('#profileEditPopup', submitProfileEditForm, config);
profileEditPopup.setEventListeners();

//создаем попап аватара
const avatarEditPopup = new PopupWithForm('#changeAvatarPopup', submitAvatarEditForm, config);
avatarEditPopup.setEventListeners();

//создаем попап подтверждения удаления карточки
const confirmationDeletePopup = new PopupWithConfirm('#confirmationPopup', submitConfirmationForm, config);
confirmationDeletePopup.setEventListeners();

//функция подтверждения изменения профиля
function submitProfileEditForm(values) {
    profileSaveBtn.textContent = 'Сохранение...'
    api.setInfo(values)
        .then((res) => {
        userInfo.setUserInfo({
            name: res.name,
            about: res.about
        });
        profileEditPopup.close();
    })
    .catch((err) => {
        console.log(`Ошибка при попытке изменить данные пользователя ${err}`);
    })
    .finally(() => {
        profileSaveBtn.textContent = 'Сохранить';
    });
      
}

//функция подтверждения изменения аватара
function submitAvatarEditForm(value) {
    avatarSaveBtn.textContent = 'Сохранение...'
    api.setUserAvatar(value)
        .then((res) => {
            userInfo.setAvatar({
                avatar: res.avatar
            });
            avatarEditPopup.close();
        })
        .catch((err) => {
            console.log(`Нельзя загрузить аватар ${err}`);
        })
        .finally(() => {
            avatarSaveBtn.textContent = 'Сохранить';
        });
}

//функция подтверждения удаления
function submitConfirmationForm(card) {
    api.deleteCard(card.getId())
        .then(() => {
            console.log(card.getId());
            card.deleteCardElement();
            confirmationDeletePopup.close();
        })
        .catch((err) => {
            console.log(`Нельзя удалить карточку ${err}`);
        });
}

function confirmDelete(card) {
    confirmationDeletePopup.open(card);
}

//создаем попап с показом большого изображения
const imageBigPopup = new PopupWithImage('#imageBigPopup');
imageBigPopup.setEventListeners();



const handleCardClick = (info) => imageBigPopup.open(info);
const handleLikeClick = (card) => {
    if (card.isLiked()) {
        api.removeCardLike(card.id)
        .then(cardsData => card.setLikes(cardsData.likes));
    } else {
        api.setCardLike(card.id)
        .then(cardsData => card.setLikes(cardsData.likes));
    }
    
    console.log(card.isLiked());
     
}


//создаем попап с формой добавления карточки
const addCard = new PopupWithForm('#articleAddPopup', cardFormSubmit, config);
addCard.setEventListeners();

//отрисовываем все карточки с помощью класса Section 
const cardList = new Section({
    renderer: (data) => cardRender(data)
  }, '.elements');


//функция отрисовки карточки 
function cardRender(cardElement) {
    cardList.addItem(createCard(cardElement));
}
//функция создания карточки
function createCard(data) {
    const card = new Card(data, '.item_template', handleCardClick, handleLikeClick, confirmDelete);
    data.currentUserId = userId;
    const cardElement = card.generate();
    return cardElement
}

//функция добавления карточки при нажатии кнопки "создать"
function cardFormSubmit(inputs) {
    const cardItem = {
        name: inputs.name,
        link: inputs.link,
    };
    addArticleBtn.textContent = 'Создание...'
    api.addCard(cardItem)
        .then((res) => {
            cardList.addItemPrepend(createCard(res));
            addArticleValidation.toggleButtonError();
            addCard.close();
        })
        .catch((err) => {
            console.log(`Невозможно создать новую карточку ${err}`);
        })
        .finally(() => {
            addArticleBtn.textContent = 'Создать';
        });
}

//обработчик события на кнопу добавления карточки
addPlaceButtonElement.addEventListener('click', () => {
    addCard.open();
    addArticleValidation.clearValidation();
    addArticleValidation.toggleButtonError();   
});

//обработчик события на форму редактирования профиля
profileEditButtonElement.addEventListener('click', () => {
    userInfo.renderUserInfo();
    profileValidation.toggleButtonError();
    profileValidation.clearValidation();
    profileEditPopup.open();
});

//обработчик события на аватар
avatarEditButton.addEventListener('click', () => {
    changeAvatarValidation.toggleButtonError();
    changeAvatarValidation.clearValidation();
    avatarEditPopup.open();
});