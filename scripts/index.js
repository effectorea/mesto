'use strict';

import Card from './Card.js';
import FormValidator from '../scripts/FormValidator.js';

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



const elements = document.querySelector('.elements');
const popupElementsAll = document.querySelectorAll('.popup');
const popupElement = document.querySelector('.popup');

const profileEditButtonElement = document.querySelector('.profile__edit-button');
const addPlaceButtonElement = document.querySelector('.profile__add-button');

const profilePopup = document.querySelector('#profileEditPopup');
const profileEditForm = profilePopup.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_add_name');
const missionInput = document.querySelector('.popup__input_add_mission');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//вторая форма
const popupAddArticleElement = document.querySelector('#articleAddPopup');
const formAddArticleElement = popupAddArticleElement.querySelector('.popup__form');
const placeInput = popupAddArticleElement.querySelector('#place');
const imageInput = popupAddArticleElement.querySelector('#image');
const saveBtn = document.querySelector('#articleSave-btn');

//получаем экземпляр валидации формы именно профиля, чтобы потом его использовать в очистке ошибок
const profileValidation = new FormValidator(config, profileEditForm);
//третья форма с изображением

export const imageBigPopup = document.querySelector('#imageBigPopup');
export const imageBig = imageBigPopup.querySelector('.popup__image');
export const imageTitle = imageBigPopup.querySelector('.popup__place-name');

// общие функции открытия/закрытия окна для всех попапов
export const openPopupContainer = function (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape); //накидываем обработчик чтобы закрывалось на эскейпе
};
const closePopupContainer = function (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
};
//перебираем все попапы и на каждый навешиваем обработчик события, чтобы закрывался нажатием на крестик и на оверлей
popupElementsAll.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
            closePopupContainer(popup);
        }
    });
});

//обработчик события для открытия второй формы с добавлением нового места
//здесь же сразу деактивируем кнопу при каждом новом открытии 
addPlaceButtonElement.addEventListener('click', () => {
    openPopupContainer(popupAddArticleElement);
    saveBtn.classList.add('popup__save-btn_disabled');
    saveBtn.disabled = true;
});

//присваивание значения со страницы
const insertValues = () => {
    nameInput.value = profileTitle.textContent;
    missionInput.value = profileSubtitle.textContent;
    
};

//обработчик события 
//открытие первой формы
profileEditButtonElement.addEventListener('click', () => {
    insertValues();
    openPopupContainer(popupElement);
    profileValidation.clearValidation(); //чистим окно, чтобы не пказывались сохраненные ошибки
});

//функция подтверждения изменения профиля
function submitProfileEditForm(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = missionInput.value;
    closePopupContainer(popupElement);
    
}
profileEditForm.addEventListener('submit', submitProfileEditForm);

//организация показа большого изображения 
const handleBigImageOpen = (cardImage, cardTitle) => {
    imageBig.src = cardImage.src;
    imageTitle.textContent = cardTitle.textContent;
    imageBig.alt = cardTitle.textContent;
    openPopupContainer(imageBigPopup);
};


//обработчик события на кнопку "создать новое место" 
formAddArticleElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardItems = {
        name: placeInput.value,
        link: imageInput.value,
    };
    elements.prepend(new Card(cardItems, '.item_template').generate());
    formAddArticleElement.reset();
    closePopupContainer(popupAddArticleElement);
});

//функция закрытия попапа нажатием на эскейп
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopupContainer(openedPopup);
    }
  }

  //применен перебирающий метод для отрисовки всех элементов массива 
  initialCards.forEach((item) => {
	const card = new Card(item, '.item_template');
	const cardElement = card.generate();

	elements.append(cardElement);
});

  const enableValidation = (config) => {
    const forms = document.querySelectorAll(config.formSelector);

    forms.forEach((form) => {
        const validation = new FormValidator(config, form);
        validation.enableValidation();
    });
};
enableValidation(config);