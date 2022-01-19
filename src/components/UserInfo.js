//класс отвечает за управление отображением информации о пользователе на странице
export default class UserInfo{
    constructor(info) {
        this._info = info;
        this._name = document.querySelector(this._info.nameSelector);
        this._mission = document.querySelector(this._info.missionSelector);
        this._inputName = document.querySelector(this._info.inputNameSelector);
        this._inputMission = document.querySelector(this._info.inputMissionSelector);
    }
    getUserInfo() {
        this._inputName.value = this._name.textContent;
        this._inputMission.value = this._mission.textContent;
    }
    setUserInfo() {
        this._name.textContent = this._inputName.value;
        this._mission.textContent = this._inputMission.value;    
    }
}