//класс отвечает за управление отображением информации о пользователе на странице
export default class UserInfo{
    constructor(info) {
        this._info = info;
        this._name = document.querySelector(this._info.nameSelector);
        this._mission = document.querySelector(this._info.missionSelector);
        this._avatar = document.querySelector(this._info.avatarSelector);
    }
    //все методы в этом классе отвечают за то, чтобы получить всю имеющуюся информацию о пользователе
    //всё кроме когорты - эта инфа нам тут не нужна

    //метод получения информации о пользователе
    getUserInfo() {
        return {
            name: this._name.textContent, 
            about: this._mission.textContent,
        };
    }
    //метод установки данных после заполнения инпутов
    setUserInfo(info) {
        this._name.textContent = info.name;
        this._mission.textContent = info.about;    
    }
    //метод отрисовки данных при открытии окна
    renderUserInfo(input, value) {
        input.value = value;
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
    //метод получения айди пользователя
    getUserId() {
        return this._id
    }
    //метод установки айди пользователя
    setUserId(id) {
        this._id = id;
    }
}