//importacion de clases
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

//importacion de constantes
import { buttonAdd, buttonEdit, cardTemplateSelector, imageFormConfig, imageFormElement, initialCards,
  popupElement, profileFormConfig, profileFormElement, submitButtonImage,
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
  submitCallback: (data) => {
    userInfo.setUserInfo(data);
  }
}
, "#profile"
);

const popupWithCardInfo = new PopupWithForm({
  submitCallback: (data) => {
    const newCardElement = new Card({
      data
      , handleCardClick: () => {
          const popupWithImage = new PopupWithImage(".popup");
          popupWithImage.open(data);
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
  const popupWithUserInfo = new PopupWithForm({
    submitCallback: (data) => {
    }
  }
  , "#profile"
  );
  const currentUserInfo = userInfo.getUserInfo();
  userInfo.setUserInfo(currentUserInfo);
  profileFormValidator.enableValidation();
  popupWithUserInfo.open();
});

buttonAdd.addEventListener("click", () => {
  const imagePopup = new Popup("#image");
  imageFormValidator.enableValidation();
  imagePopup.open();
});

//controladores para botones submit
submitButtonProfile.addEventListener("click", () => {
  popupWithUserInfo.setEventListeners();
  popupWithUserInfo.close();
});

submitButtonImage.addEventListener("click", () => {
  popupWithCardInfo.setEventListeners();
  popupWithCardInfo.close();
});

initialCardList.rendererItems();