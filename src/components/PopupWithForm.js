import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ submitCallback }, popupSelector) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this.submitButton = this._popup.querySelector(".button_action_create");
  }

  _getInputValues() {
    const inputElements = this._popup.querySelectorAll(".form__input");
    const inputValues = {};

    inputElements.forEach(input => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener("submit", evt => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._submitCallback(inputValues);
    });
  }

  open() {
    super.open();
    this._popup.classList.add("form__set_mode_active");
  }

  close() {
    super.close();
    this._popup.reset();
  }
}

export default PopupWithForm;