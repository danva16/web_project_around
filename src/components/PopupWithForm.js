import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ submitCallback }, popupSelector) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this.submitButton = this._popup.querySelector(".button_action_create");
    this._inputElements = this._popup.querySelectorAll(".form__input");
  }

  _getInputValues() {
    const inputValues = {};

    this._inputElements.forEach(input => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    this._popup.addEventListener("submit", evt => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._submitCallback(inputValues);
    });

    this._popup.querySelector(".button_action_close").addEventListener("click", () => {
      this.close();
    });
  }

  _reset() {
    this._inputElements.forEach(input => {
      input.value = "";
    });
  }

  open() {
    super.open();
    this._popup.classList.add("form__set_mode_active");
  }

  close() {
    super.close();
    this._popup.classList.remove("form__set_mode_active");
    this._reset();
  }
}

export default PopupWithForm;