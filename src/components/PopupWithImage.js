import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._title = this._popup.querySelector(".popup__title");
  }

  open({ link, name}) {
    this._popup.classList.add("popup_mode_active")
    this._image.src = link;
    this._title.textContent = name;
    this._image.alt = name;
    super.open();
    this._setEventListeners();
  }

  close() {
    super.close();
    this._popup.classList.remove("popup_mode_active");
  }

  _setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if(evt.target.classList.contains("button_action_close") || !this._popup.contains(evt.target)) {
        this.close();
      }
    })
  }
}

export default PopupWithImage;