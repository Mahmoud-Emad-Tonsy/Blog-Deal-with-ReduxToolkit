import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTilte] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);
  const onChangeTitle = (e) => setTilte(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const handelSaveForm = () => {
    if (title && content ) {
        dispatch(postsAdded(title, content, userId));
    }
    setTilte("");
    setContent("");
  };
const onSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          onChange={onChangeTitle}
          value={title}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          onChange={onChangeContent}
          value={content}
        />
        <button disabled={!onSave} onClick={handelSaveForm} type="button">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
