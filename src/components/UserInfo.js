class UserInfo {
  constructor({ nameSelector, employemntSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._employmentElement = document.querySelector(employemntSelector);
  }

  getUserInfo() {
    const name = this._nameElement.textContent;
    const employment = this._employmentElement.textContent;
    return { name, employment };
  }

  setUserInfo( {name, employment} ) {
    this._nameElement.textContent = name;
    this._employmentElement.textContent = employment;
  }
}

export default UserInfo;