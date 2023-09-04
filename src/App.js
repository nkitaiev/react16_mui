import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login/Login";
import { LoginBusiness } from "./components/LoginBussiness/LoginBussiness";
import { LoginBusinessStep2 } from "./components/LoginBussinessStep2/LoginBussinessStep2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "business-login",
    element: <LoginBusiness />,
  },
  {
    path: "business-login-step2",
    element: <LoginBusinessStep2 />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Login />
      </div>
    </RouterProvider>
  );
}

export default App;
