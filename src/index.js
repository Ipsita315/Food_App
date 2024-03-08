import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Head";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantProfile from "./components/RestaurantProfile";

const Grocery = lazy(()=> import("./components/Grocery"));

const heading = <h1>Namaste Food App</h1>;

// const styleObj = {
//     "backgroundColor": "yellow"
// };

const AppLayout = () => {
    return (
        <div className="app">
            <Head />
            <Outlet />
        </div>
    )
};

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantProfile />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);