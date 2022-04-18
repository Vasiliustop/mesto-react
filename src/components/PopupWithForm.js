import React from 'react';


export default function PopupWithForm({name, title, buttonTitle, children, isOpen, onClose, onSubmit} ) {
    return (
        <div>
            <article className={`popup popup_type_${name} ${isOpen && 'popup_active'}`}>
                <div className="popup__container">
                    <form className="popup__form" name={name} noValidate onSubmit={onSubmit}>
                        
                        <h3 className="popup__title">{title}</h3>
                        {children}
                        <button className="popup__save-button" type="submit">{buttonTitle}</button>
                    </form>
                    <button className="popup__close-button" type="button" 
                    onClick={onClose}
                    > </button>
                </div>
            </article>


   

        </div>
    )
}


{/* <article className="popup popup_type_profile">
<div className="popup__container">
    <form className="popup__inputform popup__form" name="form-profile" noValidate>
        <h3 className="popup__title">Редактировать профиль</h3>
        <input placeholder="Имя" required className="popup__input popup__input_type_name" name="name" type="text"
            minLength="2" maxLength="40" id="name-profile" />
        <span id='name-profile-error' className="error"></span>
        <input placeholder="Деятельность" required className="popup__input popup__input_type_job" name="job" type="text"
            minLength="2" maxLength="200" id="name-work" />
        <span id='name-work-error' className="error"></span>
        <button className="popup__save-button" type="submit">Сохранить</button>
    </form>
    <button className="popup__close-button" type="button"></button>
</div>
</article>

<article className="popup popup_type_place">
<div className="popup__container">
    <form className="popup__inputformcards popup__form" name="form-element" noValidate>
        <h3 className="popup__title">Новое место</h3>
        <input required className="popup__input popup__input_type_namecards" placeholder="Название" type="text"
            minLength="2" maxLength="30" id='name-place' name='namecard' />
        <span id='name-place-error' className="error"></span>
        <input required className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" type="url"
            id='link' name='linkcard' />
        <span id='link-error' className="error"></span>
        <button className="popup__save-button" type="submit">Создать</button>
    </form>
    <button className="popup__close-button" type="button"></button>
</div>
</article>

<article className="popup popup_type-delete">
<div className="popup__container">
    <button className="popup__close-button"></button>
    <h2 className="popup__title">Вы уверены?</h2>
    <form className="popup__form" name="delete-card-form" noValidate>
        <button type="submit" className="popup__save-button">Да</button>
    </form>
</div>
</article>

<article className="popup popup_type-avatar">
<div className="popup__container">
    <button className="popup__close-button"></button>
    <h2 className="popup__title">Обновить аватар</h2>
    <form className="popup__form add-avatar-form" name="add-avatar-form" noValidate>
        <input id="avatar" type="url" name="avatar" placeholder="Ссылка на картинку"
            className="popup__input popup__input_avatar-link" required />
        <span id='avatar-error' className="error"></span>
        <button type="submit" className="popup__save-button popup__save-button_place_avatar-change"
            value="Сохранить">Сохранить</button>
    </form>
</div>
</article> */}
