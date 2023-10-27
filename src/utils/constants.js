const cardTemplateSelector = "#place-template";
const profileFormElement = document.querySelector("#profile");
const imageFormElement = document.querySelector("#image");
const nameInput = document.querySelector("#name-input");
const employmentInput = document.querySelector("#employment-input");
const buttonEdit = document.querySelector(".button_action_edit");
const buttonAdd = document.querySelector(".button_action_add");
const submitButtonProfile = document.querySelector('#submit-profile');
const submitButtonImage = document.querySelector('#submit-image');

const profileFormConfig = {
  formSelector: ".form__set",
  inputSelector: ".form__input",
  submitButtonSelector: "#submit-profile",
  inactiveButtonClass: "button_action_create-inactive",
  inputErrorClass: "form__input_type-error",
  errorClass: "form__input-error_active"
};

const imageFormConfig = {
  formSelector: ".form__set",
  inputSelector: ".form__input",
  submitButtonSelector: "#submit-image",
  inactiveButtonClass: "button_action_create-inactive",
  inputErrorClass: "form__input_type-error",
  errorClass: "form__input-error_active"
};

const initialCards = [
  {
    title: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    title: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    title: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    title: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

export { cardTemplateSelector, imageFormElement , buttonEdit, buttonAdd, submitButtonProfile,
submitButtonImage, nameInput, employmentInput , profileFormConfig, imageFormConfig, initialCards, profileFormElement };