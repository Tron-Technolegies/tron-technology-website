import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../utils/blogData";
export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-white mt-20"
        // style={{
        //   backgroundImage: `url('/footer-bg.png')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Blogs</h1>
          <p className="text-lg text-gray-200">
            Insights, strategies, and creative ideas from our team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blogs/${post.id}`}
              className="block bg-stone-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={post.mainImage}
                alt={post.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold uppercase">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-4 line-clamp-2">
                  {post.title}
                </h2>
                <span className="text-orange-500 font-medium hover:underline">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
