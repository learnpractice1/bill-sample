import Add_product from "../components/Add_product";
import View_product from "../components/View_product";
import Sidebar from "../components/Sidebar";

const product_router = [
    {
        path:"/product",
        element: <Sidebar />,
        children: [
           { 
            path: "add_product",
            element: <Add_product />
        },
        {
            path: "view_product",
            element: <View_product />
        }

        ]

    }];

    export default product_router;

