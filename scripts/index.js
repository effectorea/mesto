"use strict"
const initialCards = [
    {
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
const itemTemplate = document.querySelector('.item_template');
const elements = document.querySelector('.elements');

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileEditButtonElement = document.querySelector('.profile__edit-button');
const addPlaceButtonElement = document.querySelector('.profile__add-button');

const profileEditForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_add_name');
const missionInput = document.querySelector('.popup__input_add_mission');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

//вторая форма
const popupAddArticleElement = document.querySelector('#articleAddPopup');
const popupAddArticleClose = popupAddArticleElement.querySelector('.popup__close');
const formAddArticleElement = popupAddArticleElement.querySelector('.popup__form');
const placeInput = popupAddArticleElement.querySelector('#place');
const imageInput = popupAddArticleElement.querySelector('#image');
//третья форма с изображением

const imageBigPopup = document.querySelector('#imageBigPopup');
const imageBigClose = imageBigPopup.querySelector('.popup__close');
const imageBig = imageBigPopup.querySelector('.popup__image');
const imageTitle = imageBigPopup.querySelector('.popup__place-name');

// общие функции открытия/закрытия окна для всех попапов
const openPopupContainer = function (popup) {
    if (!popup.classList.contains('popup_opened', 'fade')) { 
        popup.classList.add('popup_opened', 'fade'); 
    }
}
const closePopupContainer = function (popup) {
    popup.classList.remove('popup_opened');
}

//обработчик события
//открытие/закрытие второй формы с добавлением нового места 
addPlaceButtonElement.addEventListener('click', () => {
    openPopupContainer(popupAddArticleElement);
});
popupAddArticleClose.addEventListener('click', () => {
    closePopupContainer(popupAddArticleElement);
});

//присваивание значение со страницы
const insertValues = () => {
    nameInput.value = profileTitle.textContent;
    missionInput.value = profileSubtitle.textContent;
};

//обработчик события 
//открытие/закрытие первой формы
profileEditButtonElement.addEventListener('click', () => {
    insertValues();
    openPopupContainer(popupElement);
});
popupCloseButtonElement.addEventListener('click', () => {
    closePopupContainer(popupElement);
});

//функция подтверждения изменения профиля
function profileEditFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = missionInput.value;
    closePopupContainer(popupElement);
}
profileEditForm.addEventListener('submit', profileEditFormSubmit);

//организация показа большого изображения 
const handleBigImageOpen = (cardImage, cardTitle) => {
    imageBig.src = cardImage.src;
    imageTitle.textContent = imageBig.alt = cardTitle.textContent;
    openPopupContainer(imageBigPopup);
    imageBigClose.addEventListener('click', () => {
        closePopupContainer(imageBigPopup);
    });
};

//обработчик события на кнопку "создать новое место" 
formAddArticleElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardItems = {
        name: placeInput.value,
        link: imageInput.value,
    };
    addCard(elements, createCard(cardItems));
    formAddArticleElement.reset();
    closePopupContainer(popupAddArticleElement);
});

//применен перебирающий метод для отрисовки всех элементов массива 
initialCards.forEach((element) => {
    addCard(elements, createCard(element));
});

//функция создания карточки
function createCard(item) {
    const htmlElement = itemTemplate.content.cloneNode(true);
    const likeButtonElement = htmlElement.querySelector('.element__heart');
    const trasherElement = htmlElement.querySelector('.element__trasher');
    const elementTitle =  htmlElement.querySelector('.element__title');
    const elementImage = htmlElement.querySelector('.element__image');
    elementTitle.innerText = elementImage.alt = item.name;
    elementImage.src = item.link;
    likeButtonElement.addEventListener('click', () => {
        likeButtonElement.classList.toggle('element__heart_active');
    });
    trasherElement.addEventListener('click', () => {
        trasherElement.parentElement.remove();
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






