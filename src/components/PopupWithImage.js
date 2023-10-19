import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._title = this._popup.querySelector(".popup__title");
  }

  open(link, title) {
    this._image.src = link;
    this._image.alt = title;
    this._title.textContent = title;
    super.open();
  }
}

export default PopupWithImage;