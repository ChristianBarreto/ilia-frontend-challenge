import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/pages/MainPage";
import MainTemplate from "../components/templates/MainTemplate";
import WhoamiPage from "../components/pages/WhoamiPage";
import PokemonPage from "../components/pages/PokemonPage";

export const rawRoutes = [
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/pokemon/:id',
        element: <PokemonPage />,
      }
    ],
  },
];

export const routes = createBrowserRouter(rawRoutes);