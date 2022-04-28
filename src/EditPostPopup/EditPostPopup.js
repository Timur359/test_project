import React, { useState } from 'react';

import './EditPostPopup.css';

function EditPostPopup({ isOpen, onClose, handleEditPost }) {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleEditPost({
      text,
      date,
    });
  }

  return (
    <div
      className={`edit-post-popup ${isOpen ? 'edit-post-popup__visible' : ''}`}
    >
      <div className="edit-post-popup__box">
        <h1 className="edit-post-popup__title">Изменение</h1>
        <button className="edit-post-popup__close" onClick={onClose} />
        <form onSubmit={handleSubmit}>
          <textarea
            name="text"
            type="text"
            className="edit-post-popup__input"
            minLength="2"
            maxLength="200"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Введите текст"
          />
          <textarea
            name="date"
            type="text"
            className="edit-post-popup__input"
            minLength="2"
            maxLength="200"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            placeholder="Введите дату"
          />
          <button type="submit" className="edit-post-popup__btn">
            Изменить пост
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPostPopup;
