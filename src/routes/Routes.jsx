import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Recipes from "../pages/Recipes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "home",
                element: <Home />,
                loader: () => fetch(`https://b7a10-chef-recipe-hunter-server-side-mishukmahbub-mishukmahbub.vercel.app/chefData`)
            },
            {
                path: "recipes",
                element: <Recipes />,
                loader: () => fetch(`https://b7a10-chef-recipe-hunter-server-side-mishukmahbub-mishukmahbub.vercel.app/chefData`)
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ],
    },
]);

export default router;