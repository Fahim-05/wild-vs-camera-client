import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AllServices from "../../Pages/AllServices/AllServices";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs> 
        },
        {
          path: '/logIn',
          element: <Login></Login>
        },
        {
          path: '/allServices',
          element: <AllServices></AllServices>
        }
      ]
    }
  ]);

  export default router;