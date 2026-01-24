import React from "react";

const BrandScroller = () => {
  const logos = ["/dahab.png", "/handcar.png", "intermine.png"];

  return (
    <section className="bg-[#1A1A1A] py-8  overflow-hidden" id="brands">
      <div className="bg-[#2D2D2D]mx-auto">
        <div className="flex gap-16 py-6 ">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand logo"
              className="w-32 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandScroller;
