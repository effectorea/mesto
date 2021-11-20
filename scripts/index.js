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
const likeButtonElements = document.querySelectorAll('.element__heart');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_add_name');
let missionInput = document.querySelector('.popup__input_add_mission');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function render() {
    for (let i = 0; i < initialCards.length; i++) {
        const element = initialCards[i];
        renderItem(element);
    }
}
render();

function renderItem(initialCards) {
    const htmlElement = itemTemplate.content.cloneNode(true);
    const likeButtonElement = htmlElement.querySelector('.element__heart');
    const trasherElement = htmlElement.querySelector('.element__trasher');
    htmlElement.querySelector('.element__title').textContent = initialCards.name;
    htmlElement.querySelector('.element__image').src = initialCards.link;
    likeButtonElement.addEventListener('click', () => {
        likeButtonElement.classList.toggle('element__heart_active');
    });
    trasherElement.addEventListener('click', () => {
        trasherElement.parentElement.remove();
    });
    elements.appendChild(htmlElement);
}
renderItem(initialCards);



const togglePopupVisibility = function () {
    if (!popupElement.classList.contains('popup_opened')) {
        popupElement.classList.add('popup_opened');
        nameInput.value = profileTitle.textContent;
        missionInput.value = profileSubtitle.textContent;
    } else {
        popupElement.classList.remove('popup_opened');
    }
};

profileEditButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = missionInput.value;
    togglePopupVisibility();
}
formElement.addEventListener('submit', formSubmitHandler);
