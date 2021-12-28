'use strict'

import Card from '../scripts/card.js';

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

const elements = document.querySelector('.elements');
const popupElementsAll = document.querySelectorAll('.popup');
const popupElement = document.querySelector('.popup');

const profileEditButtonElement = document.querySelector('.profile__edit-button');
const addPlaceButtonElement = document.querySelector('.profile__add-button');

const profileEditForm = document.querySelector('.popup__form');
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
//третья форма с изображением

export const imageBigPopup = document.querySelector('#imageBigPopup');
export const imageBig = imageBigPopup.querySelector('.popup__image');
export const imageTitle = imageBigPopup.querySelector('.popup__place-name');

// общие функции открытия/закрытия окна для всех попапов
export const openPopupContainer = function (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape); //накидываем обработчик чтобы закрывалось на эскейпе
}
const closePopupContainer = function (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}
//перебираем все попапы и на каждый навешиваем обработчик события, чтобы закрывался нажатием на крестик и на оверлей
popupElementsAll.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopupContainer(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopupContainer(popup)
        }
    })
})

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
/*
//применен перебирающий метод для отрисовки всех элементов массива 
initialCards.forEach((element) => {
    addCard(elements, createCard(element));
});

//функция создания карточки
function createCard(item) {
    const htmlElement = itemTemplate.content.cloneNode(true);
    const likeButtonElement = htmlElement.querySelector('.element__heart');
    const trasherElement = htmlElement.querySelector('.element__trasher');
    const elementTitle = htmlElement.querySelector('.element__title');
    const elementImage = htmlElement.querySelector('.element__image');
    elementTitle.innerText = item.name;
    elementImage.alt = item.name;
    elementImage.src = item.link;
    likeButtonElement.addEventListener('click', () => {
        likeButtonElement.classList.toggle('element__heart_active');
    });
    trasherElement.addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    });
    elementImage.addEventListener('click', () => {
        handleBigImageOpen(elementImage, elementTitle);
    });
    return htmlElement;
}
//функция добавления карточки
function addCard(container, cardElement) {
    container.prepend(cardElement);
}
*/
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