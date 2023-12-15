import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import ContactUs from "../Components/ContactUs";
import Dashboard from "../Components/Dashboard";
import OurMenu from "../Components/OurMenu";
import OurShop from "../Components/OurShop";
import Register from "../Components/Register";
import Login from "../Components/Login";
import PrivetRoute from "../Components/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/contactUs",
        element:<ContactUs></ContactUs>,
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
      },
      {
        path:"/ourMenu",
        element:<PrivetRoute><OurMenu></OurMenu></PrivetRoute>,
      },
      {
        path:"/ourShop",
        element:<OurShop></OurShop>,
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
    ],
  },
]);

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
