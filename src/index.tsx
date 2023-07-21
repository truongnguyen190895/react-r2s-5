import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./screens/Root";
import NotFound from "./screens/NotFound";
import Contact from "./screens/Contact";
import Posts from "./screens/Posts";
import { Post } from "./screens/Posts/Post";
import Comments from "./screens/Comments";
import { Comment } from "./screens/Comments/Comment";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens/Login";
import { Provider } from "react-redux";
import store from "./store";
import CounterPage from "./screens/Counter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:postId",
        element: <Post />,
      },
      {
        path: "/posts/:postId/comments",
        element: <Comments />,
      },
      {
        path: "/posts/:postId/comments/:commentId",
        element: <Comment />,
      },
      {
        path: "/counter",
        element: <CounterPage />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/error", element: <h1>You are not logged in, just go home!</h1> },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
