import React from 'react';
import edit_avatar from '../image/edit_avatar.png'
import krest from '../image/krest.svg'
import {api} from './../utils/Api';
import Card from './Card.js'

// import NewPostElement from './App.js'





export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick
  }) {

    const [userAvatar, setUserAvatar] = React.useState();
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [cards, setCards] = React.useState([]); 


    React.useEffect(() => {
      Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards)
        
      })
      .catch((err) => {
        console.log('err', err);
      })
    });

     

  return (

    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img src={userAvatar} className="profile__image" alt="Жак-Ив Кусто" />
          <button className="profile__edit-avatar" type="button" onClick={onEditAvatar}></button>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}>
              <img className="profile__image-button" src={edit_avatar} alt="карандаш" />
            </button>
            <p className="profile__subtitle"> {userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}>
          <img className="profile__add-image" src={krest} alt="плюс" />
        </button>
      </section>

      <section className="elements">
      {cards.map(item => (
            <Card key={item._id} data={item} onCardClick={onCardClick}/>
          ))}
      </section>

    </main>

  )
}