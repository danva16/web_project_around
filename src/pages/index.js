//importacion de clases
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

//importacion de constantes
import { cardTemplateSelector, initialCards, placesElement, popupElement, profileFormElement } from "../utils/constants.js";

//creacion de instancias

const initialCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = new Card({
      data: item,
      handleCardClick: (evt) => {
        if(evt.target.classList.contains("place__image")) {
          const popupWithImage = new PopupWithImage(popupElement);
          popupWithImage.open();
        }
      }
    }
    , cardTemplateSelector);
    const card = cardElement.generateCard();
    initialCardList.addItem(card);
  }
}
, placesElement);

const userInfo = new UserInfo({ nameSelector: ".profile__username", employemntSelector: ".profile__employment" });

const popupWithUserInfo = new PopupWithForm({
  submitCallback: (data) => {
    userInfo.setUserInfo(data);
  }
}
, profileFormElement
);

const profileFormValidator = new FormValidator(profileFormConfig, profileFormElement);
profileFormValidator.enableValidation();

const imageFormValidator = new FormValidator(imageFormConfig, imageFormElement);
imageFormValidator.enableValidation();

export function submitImageForm(evt) {
  evt.preventDefault();

  const newCard = new Card(newCardData, cardTemplateSelector);
  const newCardElement = newCard.generateCard();
  placesElement.prepend(newCardElement);

  document.querySelector("#title-input").value = "";
  document.querySelector("#image-input").value = "";

  closePopup();
}