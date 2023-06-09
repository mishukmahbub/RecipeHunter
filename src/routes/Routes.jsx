import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Recipes from "../pages/Recipes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch(`https://b7a10-chef-recipe-hunter-server-side-mishukmahbub-mishukmahbub.vercel.app/chefData`)
            },

            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "recipes",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><Recipes /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a10-chef-recipe-hunter-server-side-mishukmahbub-mishukmahbub.vercel.app/chefData/${params.id}`)
            }
        ]
    },
]);

export default router;