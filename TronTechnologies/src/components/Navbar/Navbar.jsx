import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // ✅ Import react-scroll Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "Services", to: "services" },
    { name: "Industries", to: "products" },
    { name: "Clients", to: "brands" },
    { name: "About us", to: "about" },
    { name: "Insights", to: "blogs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="flex items-center group cursor-pointer"
            >
              <img src="./logo.png" alt="Tron Technologies" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 px-6 py-2.5 rounded-full bg-zinc-800/50 backdrop-blur-md border border-zinc-700/50 shadow-xl">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-700/50 rounded-full transition-all duration-200 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-orange-500 border border-orange-500/40 rounded-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 cursor-pointer"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-50 p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-1 bg-zinc-900/95 backdrop-blur-lg rounded-b-2xl">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 text-base font-medium text-orange-500 border border-orange-500/40 rounded-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 cursor-pointer"
              >
                Get in touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
