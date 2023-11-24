import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._title = this._popup.querySelector(".popup__title");
  }

  open({ name, link}) {
    super.open();
    this._popup.classList.add("popup_mode_active");
    this._image.src = link;
    this._title.textContent = name;
    this._image.alt = link;
  }

  close() {
    super.close();
    this._popup.classList.remove("popup_mode_active");
  }
}

export default PopupWithImage;