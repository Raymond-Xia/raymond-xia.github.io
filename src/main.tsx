import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import Resume from "./Resume";
import Links from "./Links";
import Games from "./Games";
import Wordle from "./Wordle";
import TicTacToe from "./TicTacToe";
import Connect4 from "./Connect4";
import Checkers from "./Checkers";
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
