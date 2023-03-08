import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  // local states for the component
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onPostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="author">Author:</label>
        <select
          name="author"
          id="author"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onPostClicked} disabled={!canSave}>
          Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
