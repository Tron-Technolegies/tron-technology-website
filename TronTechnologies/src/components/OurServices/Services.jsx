import React from "react";
import "./Services.css";
import { BsGlobe2, BsPalette, BsBag, BsWordpress } from "react-icons/bs";

import { handleChatClickCustom } from "../../utils/whatsapp";

const Services = () => {
  const services = [
    {
      icon: <BsGlobe2 className="text-2xl" />,
      title: "Mobile Application",
      description:
        "Custom Android and iOS apps built for performance, usability, and long-term scalability.",
      image: "/mobile.jpeg",
    },
    {
      icon: <BsPalette className="text-2xl" />,
      title: "UI/UX Design",
      description:
        "User-centered design that improves usability, engagement, and conversion across all platforms.",
      image: "/ui.jpeg",
    },
    {
      icon: <BsBag className="text-2xl" />,
      title: "Engineering Websites",
      description:
        "Robust, secure, and scalable websites engineered for speed, reliability, and growth.",
      image: "/website.jpeg",
    },
    {
      icon: <BsWordpress className="text-2xl" />,
      title: "Intelligent Web App ",
      description:
        "Smart web applications powered by automation and data to enhance efficiency and decision-making.",
      image: "/web.jpeg",
    },
  ];

  return (
    <section className="services-section relative" id="services">
      <div className="why-us-title-container">
        <span className="line"></span>
        <p className="why-us-title">Our Services</p>
        <span className="line"></span>
      </div>

      {/* Hero Content - Responsive */}
      <div className="service-content-container flex flex-col lg:flex-row gap-8 lg:gap-20 mt-8 lg:mt-20 px-4 lg:pl-64">
        <div className="w-full text-left lg:max-w-[500px]">
          <h3 className="mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-4xl font-light font-manrope">
            Crafting the Future of Digital Products
          </h3>
          <p className="mb-3 w-full lg:w-2/3 text-base lg:text-lg text-gray-300">
            We design and develop scalable web and mobile applications that help
            businesses grow and adapt in a digital-first world.
          </p>
        </div>
        <div className="lg:self-start lg:ml-36 lg:mr-20 z-50">
          <button
            onClick={() =>
              handleChatClickCustom(
                "I would like to get a work started with Tron Technologies",
              )
            }
            className="bg-white cursor-pointer text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Get started
          </button>
        </div>
      </div>

      {/* Decorative Lines - Hide below 1200px */}
      <div className="right-bottom-line hidden min-[1200px]:block"></div>
      <div className="hidden min-[1200px]:block absolute max-w-[1000px] w-full top-50 left-50">
        <div className="w-full border-[#FC640A] border-r-3 border-b rounded-tr-3xl rounded-br-3xl p-5 ml-5 h-[300px]"></div>
        <div className="w-full border-[#FC640A] border-l-3 border-t rounded-tl-3xl rounded-bl-3xl p-5 h-[200px]"></div>
      </div>

      {/* Services Grid - Responsive */}
      <section className="relative mt-12 lg:mt-25 py-8 lg:py-16 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#2D2D2D42] service-card rounded-xl p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  {/* Left side - Icon and Text */}
                  <div className="flex-1 w-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFFFFF66] rounded-full flex items-center justify-center text-gray-300 mb-3 sm:mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-manrope leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right side - Image */}
                  <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-end">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-32 rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
