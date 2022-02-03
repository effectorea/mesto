function onResponse(res) {
    if (res.ok) {
        return res.json();
      }
    
      return Promise.reject(`Ошибка: ${res.status}`);
}

export default class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
          })
            .then(onResponse);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
          })
            .then(onResponse);
    }
}