import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import ContactUs from "../Components/ContactUs";
import Dashboard from "../Components/Dashboard";
import OurMenu from "../Components/OurMenu";
import OurShop from "../Components/OurShop";

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
        element:<OurMenu></OurMenu>,
      },
      {
        path:"/ourShop",
        element:<OurShop></OurShop>,
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
