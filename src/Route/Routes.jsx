import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
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