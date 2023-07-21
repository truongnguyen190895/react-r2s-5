import React from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { postId } = useParams();
  return <h1>Display all Comments of post number {postId}</h1>;
};

export default Comments;
