import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";
import EstatesDetails from "../pages/EstatesDetails/EstatesDetails";
import PrivateRoutes from "../root/PrivateRoutes";

const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />

                },
                {
                    path: '/:id',
                    element: <PrivateRoutes><EstatesDetails /></PrivateRoutes>
                },
                {
                    path: 'contact',
                    element: <Contact />
                },
                {
                    path: 'sign-up',
                    element: <SignUp />
                },
                {
                    path: 'sign-in',
                    element: <SignIn />
                }
            ]
        }
    ],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
)

export default routes;