//importacion de css
import "./pages/index.css";

//importacion de clases
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupOfConfirmation from "./components/PopupOfConfirmation.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import AvatarInfo from "./components/AvatarInfo.js";
import Api from "./components/Api.js";

//importacion de constantes
import { buttonAdd, buttonEdit, buttonUpdate, cardTemplateSelector, employmentInput, imageFormConfig, imageFormElement, nameInput,
  profileFormConfig, profileFormElement, submitButtonImage,
  submitButtonProfile, avatarFormConfig, avatarFormElement, submitButtonAvatar } from "./utils/constants.js";

//creacion de instancias

const popupWithImage = new PopupWithImage(".popup");

const userInfo = new UserInfo({ nameSelector: ".profile__username", employmentSelector: ".profile__useremployment" });

const avatarInfo = new AvatarInfo({ avatarSelector: ".profile__image" });

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_09",
  headers: {
    authorization: "e0d01e4f-01c5-4081-b9ff-c482a3e73038",
    "Content-Type": "application/json"
  }
});

api.getUserData()
.then(data => {
  userInfo.setUserInfo(data);
  avatarInfo.updateAvatarInfo(data.avatar);
})
.catch(err => {
  console.log(err);
})

const initialCardList = new Section({
  renderer: (item) => {
    const cardElement = new Card({
      data: item,
      handleCardClick: () => {
        popupWithImage.open(item);
      }
      , handleDeleteClick: () => {
        const popupOfConfirmation = new PopupOfConfirmation({
          handleCardDelete: () => {
            const dataId = cardElement._cardId.toString();
            api.deleteCard(dataId)
            .then(data => {
              console.log(data);
            })
            .catch(err => {
              console.log(err);
            })
            cardElement.updateCard();
            popupOfConfirmation.close();
          }
        }
        , "#confirmation")
        popupOfConfirmation.open();
      }
      , handleLike: () => {
        const isLiked = cardElement.isLiked();
        const cardId = cardElement._cardId.toString();

        if(isLiked) {
          api.unlikeCard(cardId)
          .then(updatedCard => {
            cardElement.updateLikes(updatedCard.likes);
          })
          .catch(err => {
            console.log(err);
          })
        } else {
          api.likeCard(cardId)
          .then(updatedCard => {
            cardElement.updateLikes(updatedCard.likes);
          })
          .catch(err => {
            console.log(err);
          })
        }
      }
    }
    , cardTemplateSelector);
    api.getUserId()
    .then(cardId => {
      const isOwner = cardElement._userId === cardId;

      if(isOwner) {
        cardElement.toggleButtonTrash();
      }

      const userLiked = cardElement.checkedUserLiked(cardId);
      if(userLiked) {
        cardElement._element.querySelector(".button_action_like").classList.add("button_action_like--active");
      }
    })
    const card = cardElement.generateCard();
    initialCardList.addItem(card);
  }
}
, ".places");

api.getInitialCards()
.then(cards => {
  initialCardList.rendererItems(cards);
})
.catch(err => {
  console.log(err);
});

const popupWithUserInfo = new PopupWithForm({
  submitCallback: () => {
    const formData = popupWithUserInfo._getInputValues();

    api.updateUserInfo(formData)
    .then(updateUserData => {
      userInfo.setUserInfo(updateUserData);
      popupWithUserInfo.close();
      submitButtonProfile.textContent = "Guardar"
    })
    .catch(err => {
      console.log(err);
    })
  }
}
, "#profile");

const popupWithCardInfo = new PopupWithForm({
  submitCallback: () => {
    const cardData = popupWithCardInfo._getInputValues();

    api.addCard(cardData)
    .then(newCardData => {
      const newCardElement = new Card({
        data: newCardData,
        handleCardClick: () => {
          popupWithImage.open(newCardData);
        }
        , handleDeleteClick: () => {
          const popupOfConfirmation = new PopupOfConfirmation({
            handleCardDelete: () => {
              const dataId = newCardElement._cardId.toString();
              api.deleteCard(dataId)
              .then(data => {
                console.log(data);
              })
              .catch(err => {
                console.log(err);
              })
              newCardElement.updateCard();
              popupOfConfirmation.close();
            }
          }
          , "#confirmation")
        }
        , handleLike: () => {
          const isLiked = newCardElement.isLiked();
        const cardId = newCardElement._cardId.toString();

        if(isLiked) {
          api.unlikeCard(cardId)
          .then(updatedCard => {
            newCardElement.updateLikes(updatedCard.likes);
          })
          .catch(err => {
            console.log(err);
          })
        } else {
          api.likeCard(cardId)
          .then(updatedCard => {
            newCardElement.updateLikes(updatedCard.likes);
          })
          .catch(err => {
            console.log(err);
          })
        }
        }
      }, cardTemplateSelector);
      api.getUserId()
      .then(userId => {
        const isOwner = newCardElement._userId === userId;

        if(isOwner) {
          newCardElement.toggleButtonTrash();
        }
      })
      const newCard = newCardElement.generateCard();
      initialCardList.addItem(newCard);
      popupWithCardInfo.close();
      submitButtonImage.textContent = "Crear";
    })
    .catch(err => {
      console.log(err);
    })
  }
}
, "#image");

const popupWithAvatarInfo = new PopupWithForm({
  submitCallback: () => {
    const avatarData = popupWithAvatarInfo._getInputValues();

    api.updateProfilePhoto(avatarData)
    .then(data => {
      avatarInfo.updateAvatarInfo(data);
      popupWithAvatarInfo.close();
      submitButtonAvatar.textContent = "Guardar";
    })
    .catch(err => {
      console.log(err);
    })
  }
}
, "#avatar");

const profileFormValidator = new FormValidator(profileFormConfig, profileFormElement);

const imageFormValidator = new FormValidator(imageFormConfig, imageFormElement);

const avatarFormValidator = new FormValidator(avatarFormConfig, avatarFormElement);

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

buttonUpdate.addEventListener("click", () => {
  popupWithAvatarInfo.open();
  avatarFormValidator.enableValidation();
})

//controladores para botones submit
submitButtonProfile.addEventListener("click", (evt) => {
  evt.preventDefault();
  submitButtonProfile.textContent = "Guardando...";
  popupWithUserInfo._submitCallback();
});

submitButtonImage.addEventListener("click", (evt) => {
  evt.preventDefault();
  submitButtonImage.textContent = "Creando...";
  popupWithCardInfo._submitCallback();
});

submitButtonAvatar.addEventListener("click", (evt) => {
  evt.preventDefault();
  submitButtonAvatar.textContent = "Guardando...";
  popupWithAvatarInfo._submitCallback();
})