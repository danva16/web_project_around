buttonEdit.addEventListener("click", () => {
  formElement.classList.add("form_mode_active");
  profileFormElement.classList.add("form__set_mode_active");
  openformProfile();
  document.addEventListener("keydown", submitFormOnEnter);
  document.addEventListener("keydown", closePopupOnEsc);
})

buttonAdd.addEventListener("click", () => {
  formElement.classList.add("form_mode_active");
  imageFormElement.classList.add("form__set_mode_active");
  document.addEventListener("keydown", submitFormOnEnter);
  document.addEventListener("keydown", closePopupOnEsc);
})

closeButtons.forEach(button => {
  button.addEventListener("click", closePopup);
})

submitButtonProfile.addEventListener("click", submitProfileForm);
submitButtonImage.addEventListener("click", submitImageForm);

function submitProfileForm(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const employmentValue = employmentInput.value;

  nameElement.textContent = nameValue;
  employmentElement.textContent = employmentValue;
  closePopup();
}

export function closePopupOnEsc(evt) {
  if(evt.key === 'Escape' || evt.keyCode === 27) {
    closePopup();
  }
}

function submitFormOnEnter(evt) {
  if (evt.key === 'Enter' || evt.keyCode === 13) {
    if (imageFormElement.classList.contains('form__set_mode_active') && !submitButtonImage.classList.contains('button_action_create-inactive')) {
      submitImageForm(evt);
    } else if (profileFormElement.classList.contains('form__set_mode_active') && !submitButtonProfile.classList.contains('button_action_create-inactive')) {
      submitProfileForm(evt);
    }
    evt.preventDefault();
}
}

formElement.addEventListener('click', function(evt) {
  if(!profileFormElement.contains(evt.target) && !imageFormElement.contains(evt.target)) {
    closePopup();
  }
});