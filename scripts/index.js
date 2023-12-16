const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Общие функции
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Попап редактирования профиля
let formElementProfile = document.querySelector('.popup__form');
let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup_edit');

let buttonProfilePopupOpen = document.querySelector('.profile__edit-button');
let buttonPopupClose = document.querySelector('.popup__button-close');

let nameInput = document.querySelector('.popup__input_name_value');
let jobInput = document.querySelector('.popup__input_info_value');

let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__info');

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    let nameValue = nameInput.value;
    let infoValue = jobInput.value;
    
    profileName.textContent = nameValue;
    profileInfo.textContent = infoValue;

   closePopup(popupEdit);
}

function openEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;

  openPopup(popupEdit);
}

buttonProfilePopupOpen.addEventListener('click', openEditPopup);
buttonPopupClose.addEventListener('click', function () {
  closePopup(popupEdit);
});  
formElementProfile.addEventListener('submit', handleFormSubmit);

//Попап добавления карточки
let formElementCards = document.querySelector('.popup__form-element');

let buttonCardsPopupOpen = document.querySelector('.profile__add-button');
let buttonCardsPopupClose = document.querySelector('.popup__button-close-cards');
let popupCards = document.querySelector('.popup_cards');

let placeInput = document.querySelector('.popup__input_place_value');
let linkInput = document.querySelector('.popup__input_link_value');

let cardsPlace = document.querySelector('.element__title');
let cardsLink = document.querySelector('.element__item');


function handleAddCards (evt) {
  evt.preventDefault(); 
    let placeValue = placeInput.value;
    let linkValue = linkInput.value;

    renderCard(placeValue, linkValue);
}

buttonCardsPopupOpen.addEventListener('click', function () {
  openPopup(popupCards);
});  
buttonCardsPopupClose.addEventListener('click', function () {
  closePopup(popupCards);
});  
formElementCards.addEventListener('submit', handleAddCards);

let cardTemplate = document.querySelector('#cards').content
let elements = document.querySelector('.elements')

const createCard = (link, name,) => {
  const li = cardTemplate.querySelector('.element').cloneNode(true)
  li.querySelector('.element__item').src = link
  li.querySelector('.element__title').textContent = name
  
  li.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active')
  });

  li.querySelector('.element__trash').addEventListener('click', () => {
    li.remove()
  })

  li.querySelector('.element__item').addEventListener('click', () => {
    textImage.textContent = name;
    bigImage.src = link;
    bigImage.alt = name;
    openPopup(popupImage);
  });

  return li
}

initialCards.forEach(card => { 
  const newCard = createCard(card.link, card.name)
  elements.prepend(newCard)
})

const renderCard = (placeValue, linkValue) => {
  const newCard = createCard(placeValue, linkValue);
  elements.prepend(newCard);
}

//Попап просмотра фотографии
let popupImage = document.querySelector('.popup_image');
let buttonImagePopupClose = document.querySelector('.popup__button-close-image');

let bigImage = document.querySelector('.popup__big-image');
let textImage = document.querySelector('.popup__title-big-image');

buttonImagePopupClose.addEventListener('click', function () {
  closePopup(popupImage);
});