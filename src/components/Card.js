class Card {
  constructor({ data, handleCardClick, handleDeleteClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = data.owner._id;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners(cardElement) {
    cardElement.querySelector(".button_action_like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("button_action_like--active");
    })

    cardElement.querySelector(".button_action_trash").addEventListener("click", () => {
      this._handleDeleteClick();
    })

    cardElement.querySelector(".place__image").addEventListener("click", () => {
      this._handleCardClick();
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

  _updateLikes() {
    const likeCountElement = this._element.querySelector(".like-elements__count");
    likeCountElement.textContent = this._likes.length.toString();
  }

  toggleButtonTrash() {
    this._element.querySelector(".button_action_trash").classList.add("button_action_trash-active");
  }

  updateCard() {
    this._element.remove();
  }
};

export default Card;