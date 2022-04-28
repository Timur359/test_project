import React from 'react';
import { useState } from 'react';
import AddPostPopup from '../AddPostPopup/AddPostPopup';
import EditPostPopup from '../EditPostPopup/EditPostPopup';
import Post from '../Post/Post';

import './GetPost.css';

function GetPost() {
  const [posts, setPosts] = useState([
    {
      text: 'пост 1 много текста для галочки пост ',
      date: '23.04.2022',
    },
    {
      text: 'пост 2 много текста для галочки пост ',
      date: '23.04.2022',
    },
    {
      text: 'пост 3 много текста для галочки пост ',
      date: '23.04.2022',
    },
  ]);

  const [isAddPostPopup, setIsAddPostPopup] = useState(false);

  const [isEditPostPopup, setIsEditPostPopup] = useState(false);

  const [editPost, setEditPost] = useState({});

  //

  const onAddPostPopup = () => {
    setIsAddPostPopup(!isAddPostPopup);
  };

  const onEditPostPopup = () => {
    setIsEditPostPopup(!isEditPostPopup);
  };

  const isClosePopup = () => {
    setIsAddPostPopup(false);
    setIsEditPostPopup(false);
  };

  //

  const isAddPost = (post) => {
    setPosts([post, ...posts]);
    isClosePopup();
  };

  const isDeletePost = (post) => {
    const newPostList = posts.filter((c) => c !== post);
    setPosts(newPostList);
  };

  const isEditPost = (post) => {
    console.log(post);
    isClosePopup();
  };

  return (
    <div className="get-post">
      <button className="get-post__btn" onClick={onAddPostPopup}>
        Добавить пост
      </button>
      <h1 className="get-post__title">Список постов</h1>
      <ul className="get-post__list">
        {posts.map((post) => {
          return (
            <Post
              key={Math.random() * 10}
              date={post.date}
              text={post.text}
              post={post}
              onPostDelete={isDeletePost}
              onPostEdit={isEditPost}
              handlePostEdit={onEditPostPopup}
            />
          );
        })}
      </ul>
      <AddPostPopup
        isOpen={isAddPostPopup}
        onClose={isClosePopup}
        handleSubmitPost={isAddPost}
      />
      <EditPostPopup
        isOpen={isEditPostPopup}
        onClose={isClosePopup}
        handleEditPost={isEditPost}
      />
    </div>
  );
}

export default GetPost;
