class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._form = document.querySelector(".form");
  }

  open() {
    this._form.classList.add("form_mode_active");
    this._popup.classList.add("form__set_mode_active");
    //document.addEventListener("keydown", this._handleEscClose);
    this.setEventListeners();
  }

  close() {
    this._form.classList.remove("form_mode_active");
    this._popup.classList.remove("form__set_mode_active");
    //this._popup.classList.remove("form_mode_active");
    //document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape' || evt.keyCode === 27) {
      this.close();
    }
  }

  setEventListeners() {
    this._form.addEventListener("click", (evt) => {
      if(evt.target.classList.contains("button_action_close") || !this._popup.contains(evt.target)) {
        this.close();
      }
    })
  }
}

export default Popup;