import { openPopup } from "./modal.js";
import { popupImage, bigImage, textImage } from "./index.js";

export const cardTemplate = document.querySelector('#cards').content
export const elements = document.querySelector('.elements')


export const createCard = (link, name,) => {
  const card = cardTemplate.querySelector('.element').cloneNode(true)
  card.querySelector('.element__item').src = link
  card.querySelector('.element__item').alt = name
  card.querySelector('.element__title').textContent = name
  
  card.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active')
  });

  card.querySelector('.element__trash').addEventListener('click', () => {
    card.remove()
  })

  card.querySelector('.element__item').addEventListener('click', () => {
    textImage.textContent = name;
    bigImage.src = link;
    bigImage.alt = name;
    openPopup(popupImage);
  });

  return card
}