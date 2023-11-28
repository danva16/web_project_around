const cardTemplateSelector = "#place-template";
const profileFormElement = document.querySelector("#profile");
const imageFormElement = document.querySelector("#image");
const confirmationElement = document.querySelector("#confirmation");
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

export { cardTemplateSelector, imageFormElement , buttonEdit, buttonAdd, submitButtonProfile,
submitButtonImage, nameInput, employmentInput , profileFormConfig, imageFormConfig, profileFormElement, confirmationElement };