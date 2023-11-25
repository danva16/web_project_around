class Card {
  constructor({ data, handleCardClick, handleCardDelete }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
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
      this._handleCardDelete();
      cardElement.remove();
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

  isOwner(userId) {
    return this._userId == userId;
  }
};

export default Card;