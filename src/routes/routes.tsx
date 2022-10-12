import Characters from "../pages/characters/characters";
import ErrorPage from "../pages/404/404";
import Home from "../pages/home/home";


export const routes = [
    {path: "/", element: <Home/>},
    {path: "characters", element: <Characters/>},
    {path: "*", element: <ErrorPage/>}
]