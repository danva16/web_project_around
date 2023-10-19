const cardTemplateSelector = "#place-template";
const popupElement = document.querySelector(".popup");
const placesElement = document.querySelector(".places");
const profileFormElement = document.querySelector("#profile");
const imageFormElement = document.querySelector("#image");
const nameElement = document.querySelector('.profile__username');
const employmentElement = document.querySelector('.profile__useremployment');
const nameInput = profileFormElement.querySelector('input[placeholder="Nombre"]');
const employmentInput = profileFormElement.querySelector('input[placeholder="Acerca de mí"]');
const formElement = document.querySelector(".form");
const buttonEdit = document.querySelector(".button_action_edit");
const buttonAdd = document.querySelector(".button_action_add");
const closeButtons = document.querySelectorAll(".button_action_close");
const submitButtonProfile = document.querySelector('#submit-profile');
const submitButtonImage = document.querySelector('#submit-image');

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