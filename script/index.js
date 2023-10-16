import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { closePopup } from "./utils.js";

const cardTemplateSelector = "#place-template";
const popupElement = document.querySelector(".popup");
const placesElement = document.querySelector(".places");
const profileFormElement = document.querySelector("#profile");
const imageFormElement = document.querySelector("#image");
const nameElement = document.querySelector('.profile__username');
const employmentElement = document.querySelector('.profile__useremployment');
const nameInput = profileFormElement.querySelector('input[placeholder="Nombre"]');
const employmentInput = profileFormElement.querySelector('input[placeholder="Acerca de mí"]');

const profileFormConfig = {
  formSelector: ".form__set",
  inputSelector: ".form__input",
  submitButtonSelector: "#submit-profile",
  inactiveButtonClass: "button_action_create-inactive",
  inputErrorClass: "form__input_type-error",
  errorClass: "form__input-error_active"
}

const imageFormConfig = {
  formSelector: ".form__set",
  inputSelector: ".form__input",
  submitButtonSelector: "#submit-image",
  inactiveButtonClass: "button_action_create-inactive",
  inputErrorClass: "form__input_type-error",
  errorClass: "form__input-error_active"
}

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

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

export { popupElement, initialCards, profileFormElement, imageFormElement, nameElement, employmentElement,
 nameInput, employmentInput, cardTemplateSelector, placesElement };