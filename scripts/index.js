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
const popup = document.querySelector('.popup');
const formElementProfile = popup.querySelector('.popup__form');
const popupEdit = document.querySelector('.popup_edit');

const buttonProfilePopupOpen = document.querySelector('.profile__edit-button');
const buttonPopupClose = document.querySelector('.popup__button-close');

const nameInput = document.querySelector('.popup__input_name_value');
const jobInput = document.querySelector('.popup__input_info_value');

const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    const nameValue = nameInput.value;
    const infoValue = jobInput.value;
    
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
const formElementCards = document.querySelector('.popup__form-element');

const buttonCardsPopupOpen = document.querySelector('.profile__add-button');
const buttonCardsPopupClose = document.querySelector('.popup__button-close-cards');
const popupCards = document.querySelector('.popup_cards');

const placeInput = document.querySelector('.popup__input_place_value');
const linkInput = document.querySelector('.popup__input_link_value');

const cardsPlace = document.querySelector('.element__title');
const cardsLink = document.querySelector('.element__item');


function handleAddCards (evt) {
  evt.preventDefault(); 
    const placeValue = placeInput.value;
    const linkValue = linkInput.value;

    renderCard(placeValue, linkValue);

    formElementCards.reset();
    closePopup(popupCards);
}

buttonCardsPopupOpen.addEventListener('click', function () {
  openPopup(popupCards);
});  
buttonCardsPopupClose.addEventListener('click', function () {
  closePopup(popupCards);
});  
formElementCards.addEventListener('submit', handleAddCards);

const cardTemplate = document.querySelector('#cards').content
const elements = document.querySelector('.elements')

const createCard = (link, name,) => {
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

const renderCard = (placeValue, linkValue) => {
  const newCard = createCard(linkValue, placeValue);
  elements.prepend(newCard);
}

initialCards.forEach((card) => {
  renderCard(card.name, card.link);
})

//Попап просмотра фотографии
const popupImage = document.querySelector('.popup_image');
const buttonImagePopupClose = document.querySelector('.popup__button-close-image');

const bigImage = document.querySelector('.popup__big-image');
const textImage = document.querySelector('.popup__title-big-image');

buttonImagePopupClose.addEventListener('click', function () {
  closePopup(popupImage);
});