import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KeralaPage from "./pages/KeralaPage";
import UaePage from "./pages/UaePage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "kerala", element: <KeralaPage /> },
        { path: "uae", element: <UaePage /> },
        { path: "blogs", element: <BlogPage /> },
        { path: "blogs/:id", element: <BlogDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
