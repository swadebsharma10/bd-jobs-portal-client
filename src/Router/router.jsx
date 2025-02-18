import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not Found</h2>,
    children:[
      {
            path: '/',
            element: <Home/>
      },
      {
            path: '/register',
            element: <Register></Register>
      },
      {
            path: '/login',
            element: <Login></Login>
      },
    ]
  },
]);


export default router;