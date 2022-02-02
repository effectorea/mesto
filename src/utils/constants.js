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
inputMissionSelector: '.popup__input_add_mission',
avatarSelector: '.profile__avatar',
inputAvatarSelector: '.popup__input_change_avatar'
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
export const avatarPopup = document.querySelector('#changeAvatarPopup');
export const avatarEditForm = avatarPopup.querySelector('.popup__form');
export const avatarEditButton = document.querySelector('.profile_wrapper');

export const castle = new URL('../images/castle.jpg', import.meta.url);
export const japan = new URL('../images/china.jpg', import.meta.url);
export const church = new URL('../images/church.jpg', import.meta.url);
export const field = new URL('../images/field.jpg', import.meta.url);
export const mountainhouse = new URL('../images/mountainhouse.jpg', import.meta.url);
export const stronghold = new URL('../images/philip-jahn-hacFJtpL-L4-unsplash.jpg', import.meta.url);


export const initialCards = [{
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