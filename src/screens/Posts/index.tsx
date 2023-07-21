import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { httpRequest } from "../../services";

interface Post {
  body: string;
  id?: number;
  title: string;
  userId: string;
}
// pure function

const Posts = () => {
  const [posts, setPost] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      userId: "",
    },
    onSubmit: (values) => updatePost(1, values),
  });

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = () => {
    setIsLoading(true);
    httpRequest
      .get("posts")
      .then((response) => {
        const { data } = response;
        setPost(data);
      })
      .finally(() => setIsLoading(false));
  };

  const updatePost = (id: number | string, post: Post) => {
    setIsLoading(true);
    httpRequest
      .patch(`posts/${id}`, post)
      .then((response) => console.log("Updated using axios ", response))
      .finally(() => setIsLoading(false));
  };

  const createNewPost = (post: Post) => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Created ", data))
      .finally(() => setIsLoading(false));
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Display all posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No post found</p>
      )}
      <div>
        <h2>Update a post</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <br />
          <label htmlFor="body">Body</label>
          <input
            id="body"
            name="body"
            type="body"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
          <br />
          <label htmlFor="userId">User ID</label>
          <input
            id="userId"
            name="userId"
            type="userId"
            onChange={formik.handleChange}
            value={formik.values.userId}
          />
          <br />
          <button type="submit">Update Post</button>
        </form>
      </div>
    </>
  );
};

export default Posts;
