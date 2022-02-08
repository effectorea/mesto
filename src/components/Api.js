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

    setInfo(data) {
            return fetch(`${this._url}/users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.about
                })
            })
            .then(onResponse);
    }

    setUserAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: data.avatar
          })
        })
        .then(onResponse)
      }
    
    addCard(element) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(element)
      })
      .then(onResponse)
    }
      
    setCardLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers
          })
            .then(onResponse);
    }

    removeCardLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers
          })
            .then(onResponse);
    }
}