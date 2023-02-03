import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Home from "../views/Home"
import Company from "../views/Company"
import Contact from "../views/Contact"
import Param from "../views/Param"
import ErrorView from "../views/ErrorView"

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorView />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/company',
                element: <Company />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/param/:something',
                element: <Param />
            }
        ]
    }
])

export default router