class UserInfo {
  constructor({ nameSelector, employmentSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._employmentElement = document.querySelector(employmentSelector);
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