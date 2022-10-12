import React from "react";

const Home = React.lazy(() => import("../pages/Home"))

export default [
    {
        path: "/",
        exact: true,
        component: Home
    }
]