import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Wordle from "./components/Wordle";
import TicTacToe from "./components/TicTacToe";
import Connect4 from "./components/Connect4";
import Checkers from "./components/Checkers";
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
        path: "experience",
        element: <Experience />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "wordle",
        element: <Wordle />,
      },
      {
        path: "tictactoe",
        element: <TicTacToe />,
      },
      {
        path: "connect4",
        element: <Connect4 />,
      },
      {
        path: "checkers",
        element: <Checkers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
