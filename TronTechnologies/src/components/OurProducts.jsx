import React from "react";

const Products = () => {
  const products = [
    {
      tag: "Development Project",
      title: "Handcar (UAE)",
      image: "/projects/handcar.png",
      description: "Web + Mobile app for auto spare parts & services.",
    },
    {
      tag: "Development Project",
      title: "Dahab Mining (UAE)",
      image: "/projects/dahab.png",
      description: "Blockchain-based mining ecosystem",
    },
    {
      tag: "Development Project",
      title: "Tron Academy (India)",
      image: "/projects/tronacademy.png",
      description: " E-learning platform with courses & community.",
    },
    {
      tag: "Development Project",
      title: "EarthCraft (India)",
      image: "/projects/earthcraft.png",
      description: "Real estate showcase for premium properties",
    },
    {
      tag: "Development Project",
      title: "Precious (India)",
      image: "/projects/precious.png",
      description: "Fashion & lifestyle eCommerce website.",
    },
  ];

  return (
    <section className="services-section relative">
      {/* Title Section */}
      <div className="why-us-title-container">
        <span className="line"></span>
        <p className="why-us-title">Our Portfolio</p>
        <span className="line"></span>
      </div>

      {/* Hero Content - Responsive */}
      <div className="service-content-container flex flex-col lg:flex-row gap-8 lg:gap-20 mt-8 lg:mt-20 px-4 lg:pl-64">
        <div className="w-full text-left lg:max-w-[500px]">
          <h3 className="mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-4xl font-light font-manrope">
            Our Product
          </h3>
          <p className="mb-3 w-full lg:w-2/3 text-base lg:text-lg text-gray-300">
            help you to build website company that is modern, user friendly, good CEO, and Clean
            design
          </p>
        </div>
        <div className="lg:self-start lg:ml-36 lg:mr-20">
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
            All Portfolio
          </button>
        </div>
      </div>

      {/* Decorative Lines - Hide below 1400px */}
      <div className="hidden min-[1200px]:block absolute max-w-[1000px] w-full top-50 left-50">
        <div className="w-full border-[#FC640A] border-r-3 border-b rounded-tr-3xl rounded-br-3xl p-5 ml-5 h-[200px]"></div>
        <div className="w-full border-[#FC640A] border-l-3 border-t rounded-tl-3xl rounded-bl-3xl p-5 h-[200px]"></div>
      </div>

      {/* Product Cards - Responsive */}
      <section className="relative mt-12 lg:mt-25 py-8 lg:py-16 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#2D2D2D42] rounded-xl overflow-hidden hover:bg-[#2D2D2D66] transition-colors"
              >
                {/* Image */}
                <div className="w-full h-48 sm:h-56 md:h-48 overflow-hidden">
                  <img src={product.image} alt={product.title} className=" object-fill" />
                </div>

                {/* Text Content */}
                <div className="p-4 sm:p-6">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">
                    {product.tag}
                  </span>
                  <h3 className="text-white text-lg sm:text-xl font-bold mt-2 mb-2 font-manrope">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Products;
