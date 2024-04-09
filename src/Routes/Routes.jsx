import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";

import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Agents from "../Pages/Agents/Agents";
import SpecialEstate from "../Pages/SpecialEstate/SpecialEstate";
import EstateDetails from "../components/EstateDetails/EstateDetails";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/profile",
            element: <Profile></Profile>,
        },
        {
          path: "/agent",
          element: <Agents></Agents>,
        },
        {
          path: "/specialEstate",
          element: <SpecialEstate></SpecialEstate>,
          loader: () => fetch("/special.json")
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/EstateDetails/:id",
          element: <EstateDetails></EstateDetails>,
          loader: () => fetch("/data.json")
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        }
    ]
  },
]);

export default router;
