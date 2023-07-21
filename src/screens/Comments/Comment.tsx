import React from "react";
import { useParams } from "react-router-dom";

export const Comment = () => {
  const { postId, commentId } = useParams();

  return (
    <h1>
      Comment number {commentId} of post number {postId}
    </h1>
  );
};
