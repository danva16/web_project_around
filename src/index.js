//importacion de css
import "./pages/index.css";

//importacion de clases
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";

//importacion de constantes
import { buttonAdd, buttonEdit, cardTemplateSelector, employmentInput, imageFormConfig, imageFormElement, nameInput,
  profileFormConfig, profileFormElement, submitButtonImage,
  submitButtonProfile } from "./utils/constants.js";

//creacion de instancias

const popupWithImage = new PopupWithImage(".popup");

const initialCardList = new Section({
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

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_09",
  headers: {
    authorization: "e0d01e4f-01c5-4081-b9ff-c482a3e73038",
    "Content-Type": "application/json"
  }
});

api.getInitialCards()
.then(cards => {
  console.log(cards);

  initialCardList.rendererItems(cards);
})
.catch(err => {
  console.log(err);
});

const userInfo = new UserInfo({ nameSelector: ".profile__username", employmentSelector: ".profile__useremployment" });

api.getUserData()
.then(data => {
  console.log(data);
  userInfo.setUserInfo(data);
})
.catch(err => {
  console.log(err);
})

const popupWithUserInfo = new PopupWithForm({
  submitCallback: () => {
    const formData = popupWithUserInfo._getInputValues();

    api.updateUserInfo(formData)
    .then(updateUserData => {
      userInfo.setUserInfo(updateUserData);
      popupWithUserInfo.close();
      console.log(updateUserData);
    })
    .catch(err => {
      console.log(err);
    })
  }
}
, "#profile"
);

const popupWithCardInfo = new PopupWithForm({
  submitCallback: () => {
    const cardData = popupWithCardInfo._getInputValues();
    console.log(cardData);

    api.addCard(cardData)
    .then(newCardData => {
      const newCardElement = new Card({
        data: newCardData,
        handleCardClick: () => {
          popupWithImage.open(newCardData);
        }
      }, cardTemplateSelector);

      const newCard = newCardElement.generateCard();
      initialCardList.addItem(newCard);
      popupWithCardInfo.close();
    })
    .catch(err => {
      console.log(err);
    })
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
});

submitButtonImage.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupWithCardInfo._submitCallback();
});