import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ submitCallback }, popupSelector) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._submitButton = this._popup.querySelector(".button_action_create");
    this._handlerSubmit = this._handleSubmit.bind(this);
    this._handlerSubmitOnEnter = this._hanldeSubmitOnEnter.bind(this);
  }

  _getInputValues() {
    const inputValues = {};
    const inputElements = this._popup.querySelectorAll(".form__input");

    inputElements.forEach(input => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  _reset() {
    const inputElements = this._popup.querySelectorAll(".form__input");
    inputElements.forEach(input => {
      input.value = "";
    });
  }

  open() {
    super.open();
    this._setEventListeners();
    this._popup.classList.add("form__set_mode_active");
  }

  close() {
    super.close();
    this._removeListeners();
    this._popup.classList.remove("form__set_mode_active");
    this._reset();
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._submitCallback();
  }

  _hanldeSubmitOnEnter(evt) {
    if(evt.key === "Enter") {
      evt.preventDefault();
      if(!this._submitButton.classList.contains("button_action_create-inactive")) {
        this._submitCallback();
      }
    }
  }

  _setEventListeners() {
    super._setEventListeners();
    this._popup.addEventListener("submit", this._handlerSubmit);
    document.addEventListener("keydown", this._handlerSubmitOnEnter);
  }

  _removeListeners() {
    super._removeListeners();
    this._popup.removeEventListener("submit", this._handlerSubmit);
    document.removeEventListener("keydown", this._handlerSubmitOnEnter);
  }
}

export default PopupWithForm;