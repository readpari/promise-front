import * as React from "react";
import { createHashRouter } from "react-router-dom";
import { About, Bet, Book, Login } from "@promise-front/components";

export default createHashRouter([
  {
    path: "/",
    element: <About />,
  },

  { path: "login", element: <Login /> },

  { path: "bet", element: <Bet /> },

  {
    path: "book",
    element: <Book book={null} />,
  },
]);
