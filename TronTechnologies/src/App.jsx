import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KeralaPage from "./pages/KeralaPage";
import UaePage from "./pages/UaePage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kerala" element={<KeralaPage />} />
        <Route path="/uae" element={<UaePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
