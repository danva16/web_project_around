import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";


const profileFormValidator = new FormValidator(profileFormConfig, profileFormElement);
profileFormValidator.enableValidation();

const imageFormValidator = new FormValidator(imageFormConfig, imageFormElement);
imageFormValidator.enableValidation();

initialCards.forEach(cardData => {
  const card = new Card(cardData, cardTemplateSelector);
  const cardElement = card.generateCard();
  placesElement.prepend(cardElement);
})

export function submitImageForm(evt) {
  evt.preventDefault();

  const newCardData = {
    name: document.querySelector("#title-input").value,
    link: document.querySelector("#image-input").value
  };

  const newCard = new Card(newCardData, cardTemplateSelector);
  const newCardElement = newCard.generateCard();
  placesElement.prepend(newCardElement);

  document.querySelector("#title-input").value = "";
  document.querySelector("#image-input").value = "";

  closePopup();
}