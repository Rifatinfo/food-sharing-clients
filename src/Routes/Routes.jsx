import  {createBrowserRouter} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/menu",
          element: <Menu></Menu>,
        },
        {
          path: "/order/:category",
          element: <Order/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      ],
    },
  ]);

  export default router;