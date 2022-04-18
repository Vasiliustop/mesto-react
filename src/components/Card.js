import React from 'react';


export default function Card({ data, onCardClick }) {

    function handleClick() {
        onCardClick(data);
    }
    return (

        <article className="elements__card">
            <button className="elements__delete-button" type="button"></button>
            <img className="elements__rectagle" src={data.link} alt={data.name} onClick={handleClick} />
            <div className="elements__element-info">
                <h2 className="elements__element-title">{data.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__element-button" type="button"></button>
                    <span className="elements__like-counter">{data.likes.length}</span>
                </div>
            </div>
        </article>

    )
}