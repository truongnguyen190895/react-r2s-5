import React from "react";
import { useParams } from "react-router-dom";

export const Post = () => {
  const { postId } = useParams();

  return <h1>Detail of post number {postId}</h1>;
};
