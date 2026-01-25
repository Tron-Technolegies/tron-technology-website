import React from "react";

export default function KlWorks() {
  return (
    <section className="bg-white text-black font-manrope py-16 px-6 md:px-12">
      <div className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected work!</h2>
        <p className="text-gray-400">
          We've loved working with many fantastic companies, <br /> and are
          really proud of what we've achieved together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
        <div className="relative">
          <img src="/work1.png" alt="Website Project" className="w-auto h-72" />
          <button className="absolute bg-black text-white w-10 h-10 rounded-full flex left-[130px] top-[270px] items-center justify-center">
            →
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Website Design</h3>
          <p className="text-gray-400 mb-8">
            Build a unique website. Figma/WordPress template
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="border px-4 py-1 rounded-full text-sm">
              Website
            </span>
            <span className="border px-4 py-1 rounded-full text-sm">
              Branding
            </span>
            <span className="border px-4 py-1 rounded-full text-sm">
              Application
            </span>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-2">Mobile App Design</h3>
          <p className="text-gray-400 mb-4">
            Build a unique website. Figma/WordPress template
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="border px-4 py-1 rounded-full text-sm">
              Website
            </span>
            <span className="border px-4 py-1 rounded-full text-sm">
              Branding
            </span>
            <span className="border px-4 py-1 rounded-full text-sm">
              Application
            </span>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <img
            src="/work2.png"
            alt="App Project"
            className="rounded-xl shadow-lg"
          />
          <button className="absolute bottom-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
            →
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
        <div className="relative">
          <img src="/work3.png" alt="Website Project" className="w-auto h-72" />
          <button className="absolute bg-black border-white border-2 text-white w-10 h-10 rounded-full flex left-[130px] top-[270px] items-center justify-center">
            →
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-gray-400 mb-8">
            Build a unique website / Web App. Using
            React/Angular/Wordpress/Shopify
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="border px-4 py-1 rounded-full text-sm">
              Website
            </span>
            <span className="border px-4 py-1 rounded-full text-sm">
              Branding
            </span>
            <span className="border px-4 py-1 rounded-full text-sm">
              Application
            </span>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-2">
            Mobile App Development
          </h3>
          <p className="text-gray-600 mb-4">
            Build a unique Mobile App. Build for Android / IOS
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="border px-4 py-1 rounded-full text-sm">
              Website
            </span>
            <span className="border px-4 py-1 rounded-full text-sm">
              Branding
            </span>
            <span className="border px-4 py-1 rounded-full text-sm">
              Application
            </span>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <img
            src="/work4.png"
            alt="App Project"
            className="rounded-xl shadow-lg"
          />
          <button className="absolute bottom-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
            →
          </button>
        </div>
      </div>
      {/* Bottom Heading Section */}
      <div className="relative flex items-center justify-center max-w-3xl mx-auto mt-20">
        {/* Left Text */}
        <h2 className="text-3xl md:text-4xl font-bold mr-6 text-center md:text-left">
          Take a Look <br /> at What
        </h2>
        {/* Line Left */}
        <div className="hidden md:block flex-1 h-[2px] bg-black ml-4"></div>

        {/* Orange Circle */}
        <div className="flex items-center justify-center bg-[#FC640A] text-white rounded-full w-28 h-28 text-lg font-semibold mx-6">
          All Work
        </div>

        {/* Line Right */}
        <div className="hidden md:block flex-1 h-[2px] bg-black mr-4"></div>
        {/* Right Text */}
        <h2 className="text-3xl md:text-4xl font-bold ml-6 text-center md:text-right">
          We Can Do <br /> For You
        </h2>
      </div>
    </section>
  );
}
