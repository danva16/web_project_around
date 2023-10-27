//importacion de clases
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

//importacion de constantes
import { buttonAdd, buttonEdit, cardTemplateSelector, employmentElement, employmentInput, imageFormConfig, imageFormElement, initialCards,
  nameElement,
  nameInput,
  profileFormConfig, profileFormElement, submitButtonImage,
  submitButtonProfile } from "../utils/constants.js";

//creacion de instancias
const popupWithImage = new PopupWithImage(".popup");

const initialCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = new Card({
      data: item,
      handleCardClick: () => {
        popupWithImage.open(item);
      }
    }
    , cardTemplateSelector);
    const card = cardElement.generateCard();
    initialCardList.addItem(card);
  }
}
, ".places");

const userInfo = new UserInfo({ nameSelector: ".profile__username", employmentSelector: ".profile__useremployment" });

const popupWithUserInfo = new PopupWithForm({
  submitCallback: () => {
    const formData = popupWithUserInfo._getInputValues();
    userInfo.setUserInfo(formData);
    console.log(formData);
    console.log("Hola");
  }
}
, "#profile"
);

const popupWithCardInfo = new PopupWithForm({
  submitCallback: () => {
    const formData = popupWithCardInfo._getInputValues();
    const newCardElement = new Card({
      data: formData
      , handleCardClick: () => {
          popupWithImage.open(formData);
      }
    }
    , cardTemplateSelector
    );
    const newCard = newCardElement.generateCard();
    initialCardList.addItem(newCard);
  }
}
, "#image"
);

const profileFormValidator = new FormValidator(profileFormConfig, profileFormElement);

const imageFormValidator = new FormValidator(imageFormConfig, imageFormElement);

//controladores de eventos para abrir popups
buttonEdit.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.name;
  employmentInput.value = currentUserInfo.employment;
  profileFormValidator.enableValidation();
  popupWithUserInfo.open();
});

buttonAdd.addEventListener("click", () => {
  popupWithCardInfo.open();
  imageFormValidator.enableValidation();
});

//controladores para botones submit
submitButtonProfile.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupWithUserInfo._submitCallback();
  popupWithUserInfo.close();
});

submitButtonImage.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupWithCardInfo._submitCallback();
  popupWithCardInfo.close();
});

initialCardList.rendererItems();