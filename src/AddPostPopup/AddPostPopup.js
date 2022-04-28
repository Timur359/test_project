import React, { useState } from 'react';

import './AddPostPopup.css';

export default function AddPost({ isOpen, onClose, handleSubmitPost }) {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitPost({
      text,
      date,
    });
  }

  return (
    <div
      className={`add-post-popup ${isOpen ? 'add-post-popup__visible' : ''}`}
    >
      <div className="add-post-popup__box">
        <h1 className="add-post-popup__title">Добавление поста</h1>
        <button className="add-post-popup__close" onClick={onClose} />
        <form onSubmit={handleSubmit}>
          <textarea
            name="text"
            type="text"
            className="add-post-popup__input"
            minLength="2"
            maxLength="200"
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите текст"
          />
          <textarea
            name="date"
            type="text"
            className="add-post-popup__input"
            minLength="2"
            maxLength="200"
            onChange={(e) => setDate(e.target.value)}
            placeholder="Введите дату"
          />
          <button type="submit" className="add-post-popup__btn">
            Добавить пост
          </button>
        </form>
      </div>
    </div>
  );
}
