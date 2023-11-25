class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  getUserId() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
    .then(userData => {
      return userData._id;
    })
  }

  updateUserInfo({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ name, about })
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  addCard({ name, link }) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, link })
    })
    .then(res => {
      if(res.ok) {
          return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

}

export default Api;