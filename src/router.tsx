import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Main = React.lazy(() => import("./pages/main"));
const User = React.lazy(() => import("./pages/user"));

export const router = createBrowserRouter([
  {
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "/user",
        Component: User,
      },
    ],
  },
]);
