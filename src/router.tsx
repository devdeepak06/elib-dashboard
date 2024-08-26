import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import BooksPage from "@/pages/BooksPage";
import AuthLayout from "@/layouts/AuthLayout";
import CreateBookPage from "./pages/CreateBookPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard/home" />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "books/create",
        element: <CreateBookPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
