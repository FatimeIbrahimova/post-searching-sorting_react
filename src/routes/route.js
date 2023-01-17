import Modal from "../components/Modal"
import MainRoot from "../components/MainRoot";
import Add from "../pages/Add";
import Home from "../pages/Home";

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:":id",
                element:<Modal/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"modal",
                element:<Modal/>
            }
        ]
    }
]
export default ROUTES;