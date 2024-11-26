import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/pages/MainPage";
import MainTemplate from "../components/templates/MainTemplate";
import WhoamiPage from "../components/pages/WhoamiPage";

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
        path: '/whoami',
        element: <WhoamiPage />
      }
    ],
  },
];

export const routes = createBrowserRouter(rawRoutes);