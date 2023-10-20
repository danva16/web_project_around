class Card {
  constructor({ name, link, handleCardClick }, templateSelector) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners(cardElement) {
    /*cardElement.querySelector(".place__image").addEventListener("click", () => {
    const formElement = document.querySelector(".form");
    const popupElement = document.querySelector(".popup");
    formElement.classList.add("form_mode_active");
    popupElement.classList.add("popup_mode_active");
    popupElement.querySelector(".popup__image").setAttribute('src', this._link);
    popupElement.querySelector(".popup__image").setAttribute('alt', this._name);
    popupElement.querySelector(".popup__title").textContent = this._name;
    document.addEventListener("keydown", closePopupOnEsc);
    })*/

    cardElement.querySelector(".button_action_like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("button_action_like--active");
    })

    cardElement.querySelector(".button_action_trash").addEventListener("click", () => {
      cardElement.remove();
      const index = initialCards.findIndex(card => !(card.name === this._name && card.link === this._link));
      if(index !== -1) {
        initialCards.splice(index, 1);
      }
    })
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".place__title").textContent = this._name;
    this._element.querySelector(".place__image").setAttribute("src", this._link);
    this._element.querySelector(".place__image").setAttribute("alt", this._name);

    this._setEventListeners(this._element);

    return this._element;
  }
};

export default Card;