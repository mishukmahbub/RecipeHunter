import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ],
    },
]);

export default router;