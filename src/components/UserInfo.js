class UserInfo {
  constructor({ nameSelector, employmentSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._employmentElement = document.querySelector(employmentSelector);
    this._nameInput = document.querySelector("#name-input");
    this._employmentInput = document.querySelector("#employment-input");
  }

  getUserInfo() {
    const name = this._nameElement.textContent;
    const employment = this._employmentElement.textContent;
    return { name, employment };
  }

  setUserInfo( {name, employment} ) {
    this._nameInput.value = name;
    this._employmentInput.value = employment;
  }
}

export default UserInfo;