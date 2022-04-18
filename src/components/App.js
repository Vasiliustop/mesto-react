import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
export default function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelected] = React.useState(null)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelected(card)
  }


  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelected(null)
  }
  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />
      <PopupWithForm
        name="form-element"
        title="Новое место"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input required
          className="popup__input popup__input_type_namecards"
          placeholder="Название"
          type="text"
          minLength="2"
          maxLength="30"
          id='name-place'
          name='namecard'
        />
        <span id='name-place-error' className="error"></span>

        <input required
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          type="url"
          id='link'
          name='linkcard'
        />

        <span id='link-error' className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="form-profile"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input placeholder="Имя"
          required className="popup__input popup__input_type_name"
          name="name"
          type="text"
          minLength="2"
          maxLength="40"
          id="name-profile"
        />
        <span id='name-profile-error' className="error"></span>

        <input placeholder="Деятельность"
          required className="popup__input popup__input_type_job"
          name="job"
          type="text"
          minLength="2"
          maxLength="200"
          id="name-work"
        />

        <span id='name-work-error' className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add-avatar-form"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input id="avatar" type="url" name="avatar" placeholder="Ссылка на картинку"
          className="popup__input popup__input_avatar-link" required />
        <span id='avatar-error' className="error"></span>

      </PopupWithForm>

      <ImagePopup
        data={selectedCard || {}}
        isOpen={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}


