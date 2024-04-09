//Общие функции
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
}

export function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

export function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened)
  }
}

