class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._form = document.querySelector(".form");
  }

  open() {
    this._form.classList.add("form_mode_active");
    this._popup.classList.add("popup_mode_active");
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
    this.setEventListeners();
  }

  close() {
    this._form.classList.remove("form_mode_active");
    this._popup.classList.remove("popup_mode_active");
    document.removeEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector(".button_action_close").addEventListener("click", () => {
      this.close();
    })
    this._form.addEventListener("click", (evt) => {
      if(!this._popup.contains(evt.target)) {
        this.close();
      }
    })
  }
}

export default Popup;