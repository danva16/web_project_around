class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_mode_active");
    document.addEventListener("keydown", handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_mode_active");
    document.removeEventListener("keydown", handleEscClose);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape' || evt.keyCode === 27) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if(evt.target.classList.contains("button_action_close") || !(evt.target === this._popup)) {
        this.close();
      }
    })
  }
}

export default Popup;