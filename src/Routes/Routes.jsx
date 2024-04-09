import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";

import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Agents from "../Pages/Agents/Agents";
import SpecialEstate from "../Pages/SpecialEstate/SpecialEstate";

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
          element: <SpecialEstate></SpecialEstate>
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
    ]
  },
]);

export default router;
