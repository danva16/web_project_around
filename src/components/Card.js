class Card {
  constructor({ data, handleCardClick, handleDeleteClick, handleLike }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._userId = data.owner._id;
    this._cardId = data._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLike = handleLike;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners(cardElement) {
    cardElement.querySelector(".button_action_like").addEventListener("click", (evt) => {
      evt.target.classList.toggle("button_action_like--active");
      this._handleLike();
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
    this.updateLikes(this._likes);

    return this._element;
  }

  updateLikes(likes) {
    const likeCountElement = this._element.querySelector(".like-elements__count");
    likeCountElement.textContent = likes.length.toString();
  }

  toggleButtonTrash() {
    this._element.querySelector(".button_action_trash").classList.add("button_action_trash-active");
  }

  updateCard() {
    this._element.remove();
  }

  isLiked() {
    if(this._element.querySelector(".button_action_like").classList.contains("button_action_like--active")) {
      return false;
    } else {
      return true;
    }
  }

  checkedUserLiked(userId) {
    return this._likes.some(user => user._id === userId);
  }
};

export default Card;