import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../utils/blogData";
export default function BlogDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === Number(id));

  if (!blog) return <h2 className="text-center py-20">Blog not found</h2>;

  return (
    <>
      <div className="bg-white text-black">
        {/* Hero Section */}
        <section
          className="relative text-white py-20"
          style={{
            backgroundImage: `url(${blog.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="uppercase text-orange-400">{blog.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold my-4">
              {blog.title}
            </h1>
            <p className="text-gray-300">{blog.summary}</p>
            <div className="flex items-center justify-center gap-4 mt-6 text-gray-400">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
            </div>
            {/* Blog main image */}
            <div className="mt-8">
              <img
                src={blog.mainImage}
                alt={blog.title}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 py-16 px-6">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-gray-900 text-white p-4 rounded-lg  top-20">
              <h3 className="font-semibold mb-3">Topics</h3>
              <ul className="space-y-2 text-sm">
                {blog.sections.map((sec) => (
                  <li key={sec.id}>
                    <a href={`#${sec.id}`} className="hover:text-orange-400">
                      {sec.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <article className="md:col-span-3 space-y-12">
            {blog.sections.map((sec) => (
              <div key={sec.id} id={sec.id}>
                <h2 className="text-2xl font-bold mb-4">{sec.heading}</h2>
                <p className="text-gray-700 leading-7">{sec.content}</p>
                {sec.image && (
                  <img
                    src={sec.image}
                    alt={sec.heading}
                    className="mt-4 rounded-lg"
                  />
                )}
              </div>
            ))}
          </article>
        </section>

        {/* Related Blogs */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h3 className="text-2xl font-bold mb-6">Read more case studies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter((b) => b.id !== blog.id)
              .map((b) => (
                <div
                  key={b.id}
                  className="bg-gray-800 shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={b.mainImage}
                    alt={b.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold">{b.title}</h4>
                    <Link
                      to={`/blogs/${b.id}`}
                      className="text-orange-500 text-sm"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white text-center py-20">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="mb-6">Let’s get to work</p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
}
