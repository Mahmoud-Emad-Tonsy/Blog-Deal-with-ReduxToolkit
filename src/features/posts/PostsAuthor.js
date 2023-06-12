import { selectAllUsers } from "../users/usersSlice";
import { useSelector } from "react-redux";

import React from 'react'

const PostsAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <span> By {author ? author.name : "Unkown Author"}</span>;
};

export default PostsAuthor