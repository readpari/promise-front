import * as React from "react";
import { createHashRouter, RouteObject } from "react-router-dom";
import { About, Bet, Book, Login } from "@promise-front/components";

interface RouteAdditionalInfo {
  title: string;
}

export const routes: (RouteObject & RouteAdditionalInfo)[] = [
  {
    path: "/",
    title: "test",
    element: <About />,
  },
  {
    path: "login",

    title: "test",
    element: <Login />,
  },
  { path: "bet", title: "test", element: <Bet /> },
  {
    path: "books",
    title: "test",
    element: <Book book={null} />,
  },
];

export default createHashRouter(routes);
