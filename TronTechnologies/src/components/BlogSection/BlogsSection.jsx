import React from "react";
import "./BlogsSection.css";
import { Link } from "react-router-dom";
import blogPosts from "../../utils/blogData";
export default function BlogsSection() {
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <section className="blogs-section" id="blogs">
      <div className="container">
        <div className="blogs-header">
          <div className="blogs-badge">Blogs</div>
          <h2>
            Explore insights for <br /> acceleration
          </h2>
          <p>
            Over the years we've created a unique process that delivers
            exceptional results with blazing-fast efficiency.
          </p>
        </div>

        <div className="blogs-grid">
          {featuredBlogs.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.mainImage} alt={post.title} />
              </div>
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <Link to={`/blogs/${post.id}`} className="blog-link">
                  Read →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-blogs">
          <Link to="/blogs" className="view-all-blog-link">
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
