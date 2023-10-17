import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Events from "../pages/Events/Events";
import Help from "../pages/Help/Help";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/events",
                element: <Events></Events>
            },
            {
                path: "/help",
                element: <Help></Help>
            },
        ]
    },
]);