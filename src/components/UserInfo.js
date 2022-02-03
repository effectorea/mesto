//класс отвечает за управление отображением информации о пользователе на странице
export default class UserInfo{
    constructor(info) {
        this._info = info;
        this._name = document.querySelector(this._info.nameSelector);
        this._mission = document.querySelector(this._info.missionSelector);
        this._inputName = document.querySelector(this._info.inputNameSelector);
        this._inputMission = document.querySelector(this._info.inputMissionSelector);
        this._avatar = document.querySelector(this._info.avatarSelector);
        this._inputAvatar = document.querySelector(this._info.inputAvatarSelector);
    }
    //метод получения данных с сервака
    getUserInfo({name, about}) {
        this._name.textContent = name;
        this._mission.textContent = about;
    }
    //метод установки данных после заполнения инпутов
    setUserInfo() {
        this._name.textContent = this._inputName.value;
        this._mission.textContent = this._inputMission.value;    
    }
    //метод отрисовки данных при открытии окна
    renderUserInfo() {
        this._inputName.value = this._name.textContent;
        this._inputMission.value = this._mission.textContent;
    }
    //метод получения аватара
    getAvatar({avatar}) {
        this._avatar.src = avatar;
    }
    //метод установки аватара
    setAvatar() {
        this._avatar.src = this._inputAvatar.value;
    }
}