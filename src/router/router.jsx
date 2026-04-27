import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Dashboard from "../view/dashboard/page/Dashboard";
import Users from "../view/user/page/User";

const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ),
      // element: (
      //     <Authentication>
      //         <Dashboard />
      //     </Authentication>
      // ),
    },
    {
      path: "/user",
      element: (
        <MainLayout>
          <Users />
        </MainLayout>
      ),
    },
    {
      path: "/report",
      element: <MainLayout>Report</MainLayout>,
    },
    {
      path: "/setting",
      element: <MainLayout>setting</MainLayout>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
