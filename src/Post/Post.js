import React from 'react';

import './Post.css';

function Post({
  key,
  text,
  date,
  onPostDelete,
  post,
  onPostEdit,
  handlePostEdit,
}) {
  const handleDelete = (e) => {
    e.preventDefault();
    onPostDelete(post);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    onPostEdit(post);
    handlePostEdit();
  };

  return (
    <li className="post__post" key={key}>
      {text}
      <p>{date}</p>
      <button type="button" className="post__delete" onClick={handleDelete} />
      <button type="button" className="post__edit" onClick={handleEdit} />
    </li>
  );
}

export default Post;
