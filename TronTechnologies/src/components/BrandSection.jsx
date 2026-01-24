import React from "react";
import mstore from "/mstore.png";
import google from "/google.png";
import mangcoding from "/mangcoding.png";

const BrandScroller = () => {
  const logos = [mstore, mangcoding, google, mstore, google, mangcoding];

  return (
    <section className="bg-[#1A1A1A] py-8  overflow-hidden">
      <div className="bg-[#2D2D2D]mx-auto">
        <div className="flex gap-16 py-6 ">
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt="brand logo" className="h-8 md:h-10 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandScroller;
