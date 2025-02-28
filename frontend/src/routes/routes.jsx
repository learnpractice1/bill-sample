import { createBrowserRouter, RouterProvider } from "react-router-dom";
import product_router from "./product_routes";


import Not_found from "../components/Not_found";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            ...product_router
        ]},
        {path:"*",
        element:<Not_found />
        }
    ]);
    function Routes() {
        return <RouterProvider router={router} />;
      }
      
      export default Routes;