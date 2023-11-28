import Popup from "./Popup.js";

class PopupOfConfirmation extends Popup {
  constructor({ handleCardDelete }  ,popupSelector) {
    super(popupSelector);
    this.handleCardDelete = handleCardDelete;
  }

  open() {
    super.open();
    this._popup.classList.add("form__set_mode_active");
    this._setEventListeners();
  }

  close() {
    super.close();
    this._popup.classList.remove("form__set_mode_active");
    this._removeListeners();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popup.querySelector(".button_action_create").addEventListener("click", this.handleCardDelete);
  }

  _removeListeners() {
    super._removeListeners();
    this._popup.querySelector(".button_action_create").removeEventListener("click", this.handleCardDelete);
  }
}

export default PopupOfConfirmation;