import * as React from "react";
import { createHashRouter, RouteObject } from "react-router-dom";
import {
  About,
  Bet,
  Books,
  Login,
  BookPage,
  AppLayout,
} from "@promise-front/components";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      { path: "bet", element: <Bet /> },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "/book/:id?",
        element: <BookPage />,
      },
    ],
  },
];

export default createHashRouter(routes);
