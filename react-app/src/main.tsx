import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import Resume from "./Resume";
import Links from "./Links";
import "bootstrap/dist/css/bootstrap.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "links",
        element: <Links />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
