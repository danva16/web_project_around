const cardTemplateSelector = "#place-template";
const profileFormElement = document.querySelector("#profile");
const imageFormElement = document.querySelector("#image");
const avatarFormElement = document.querySelector("#avatar");
const nameInput = document.querySelector("#name-input");
const employmentInput = document.querySelector("#employment-input");
const buttonEdit = document.querySelector(".button_action_edit");
const buttonAdd = document.querySelector(".button_action_add");
const buttonUpdate = document.querySelector(".button_type_photo")
const submitButtonProfile = document.querySelector('#submit-profile');
const submitButtonImage = document.querySelector('#submit-image');
const submitButtonAvatar = document.querySelector("#submit-avatar");

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

const avatarFormConfig = {
  formSelector: ".form__set",
  inputSelector: ".form__input",
  submitButtonSelector: "#submit-avatar",
  inactiveButtonClass: "button_action_create-inactive",
  inputErrorClass: "form__input_type-error",
  errorClass: "form__input-error_active"
};

export { cardTemplateSelector, imageFormElement , buttonEdit, buttonAdd, buttonUpdate, submitButtonProfile,
submitButtonImage, submitButtonAvatar, nameInput, employmentInput , profileFormConfig, imageFormConfig, profileFormElement,
avatarFormConfig, avatarFormElement };