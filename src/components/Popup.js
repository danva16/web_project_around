class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._form = document.querySelector(".form");
    this._handlerOnEsc = this._handleEscClose.bind(this);
    this._handlerSupClose = this._handleSuperClose.bind(this);
  }

  open() {
    this._form.classList.add("form_mode_active");
    this.setEventListeners();
  }

  close() {
    this._form.classList.remove("form_mode_active");
    this._removeListeners();
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  _handleSuperClose(evt) {
    if(!this._popup.contains(evt.target)) {
      this.close();
    }
  }

  _removeListeners() {
    document.removeEventListener("keydown", this._handlerOnEsc);
    this._form.removeEventListener("click", this._handlerSupClose);
  }

  setEventListeners() {
    this._popup.querySelector(".button_action_close").addEventListener("click", () => {
      this.close();
    })
    this._form.addEventListener("click", this._handlerSupClose);
    document.addEventListener("keydown", this._handlerOnEsc);
  }
}

export default Popup;