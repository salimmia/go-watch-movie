import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Genres from "./components/Genres";
import EditMovies from "./components/EditMovies";
import ManageCatalogue from "./components/ManageCatalogue";
import GraphQL from "./components/GraphQL";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/genres", element: <Genres /> },
      { path: "/admin/movies/0", element: <EditMovies /> },
      { path: "/admin", element: <ManageCatalogue /> },
      { path: "/graphql", element: <GraphQL /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
