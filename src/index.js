'use strict';

import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
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
    saveBtn
} from './components/constants.js';

import './pages/index.css';

const castle = new URL('./images/castle.jpg', import.meta.url);
const japan = new URL('./images/china.jpg', import.meta.url);
const church = new URL('./images/church.jpg', import.meta.url);
const field = new URL('./images/field.jpg', import.meta.url);
const mountainhouse = new URL('./images/mountainhouse.jpg', import.meta.url);
const stronghold = new URL('./images/philip-jahn-hacFJtpL-L4-unsplash.jpg', import.meta.url);


const initialCards = [{
    name: 'Замок',
    link: castle
},
{
    name: 'Япония',
    link: japan
},
{
    name: 'Церковь',
    link: church
},
{
    name: 'Поле',
    link: field
},
{
    name: 'Дом в горах',
    link: mountainhouse
},
{
    name: 'Крепость',
    link: stronghold
}
];
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


const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10