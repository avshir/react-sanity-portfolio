import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Root from "./components/Root";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Ooops! Some error!</p>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "post/:slug",
        element: <SinglePost />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "project",
        element: <Project />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
