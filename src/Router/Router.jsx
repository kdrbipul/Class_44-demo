import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Home from "../Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('products.json'),
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>
            }
        ]
    }
])

export default router;