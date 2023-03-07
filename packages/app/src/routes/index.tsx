import * as React from "react";
import { createHashRouter } from "react-router-dom";
import { Bet, Book, Login } from "@promise-front/components";

export default createHashRouter([
  {
    path: "/",
    element: <Bet />,
  },
  { path: "login", element: <Login /> },
  {
    path: "book",
    element: <Book book={null} />,
  },
]);
