import React from "react";
import EmployeesListing from "./pages/EmployeesListing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeDetails from "./pages/EmployeeDetails";
import AddEmployee from "./pages/AddEmployee";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <EmployeesListing />,
      },
      {
        path: "/employee/:empId",
        element: <EmployeeDetails />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
