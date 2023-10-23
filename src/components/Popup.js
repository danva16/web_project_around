class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._form = document.querySelector(".form");
  }

  open() {
    this._form.classList.add("form_mode_active");
    //document.addEventListener("keydown", this._handleEscClose);
    this.setEventListeners();
  }

  close() {
    this._form.classList.remove("form_mode_active");
    //document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape' || evt.keyCode === 27) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector(".button_action_close").addEventListener("click", this.close)
  }
}

export default Popup;