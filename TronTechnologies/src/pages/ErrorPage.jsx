import React from "react";
import { Link } from "react-router-dom"; // if you're using React Router

export default function ErrorPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black text-white font-manrope">
      <div className="text-center px-6">
        {/* Big 404 */}
        <h1 className="text-8xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-2xl font-semibold">Oops! Page Not Found</h2>
        <p className="mt-2 text-gray-400 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-gray-500 hover:border-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
