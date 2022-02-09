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

   /*  getUserInfo() {
        return {
            name: this._name.textContent, 
            about: this._mission.textContent,
        };
    } */
    //метод установки данных после заполнения инпутов
    setUserInfo(info) {
        this._name.textContent = info.name;
        this._mission.textContent = info.about;    
    }
    //метод отрисовки данных при открытии окна
    renderUserInfo() {
        this._inputName.value = this._name.textContent;
        this._inputMission.value = this._mission.textContent;
    } 
    //метод получения аватара
    getAvatar() {
        return {
            avatar: this._avatar.src
        }
    }
    //метод установки аватара
    setAvatar(info) {
        this._avatar.src = info.avatar;
    }
}