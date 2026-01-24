import React, { useState } from "react";
import { BsArrowUpRightCircle, BsArrowDownCircle } from "react-icons/bs";

const services = [
  {
    id: 1,
    title: "Product Strategy",
    description: "",
    images: [],
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu senectus posuere consequat donec suspendisse lorem enim. Elit in viverra nisl non nisi eleifend.",
    images: [
      { src: "/ai.jpg", text: "Artificial Intelligence" },
      { src: "/frontend.jpg", text: "Front-End Development" },
      { src: "/developer.jpg", text: "Dedicated Developer" },
      { src: "/mobile.jpg", text: "Mobile App Development" },
    ],
  },
  {
    id: 3,
    title: "UX/UI Design",
    description: "",
    images: [],
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "",
    images: [],
  },
  {
    id: 5,
    title: "Web App Development",
    description: "",
    images: [],
  },
  {
    id: 6,
    title: "AI Strategy & Development",
    description: "",
    images: [],
  },
];

const UaeServicesSection = () => {
  const [active, setActive] = useState(2);

  const toggleService = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="bg-[#111] text-white py-20 px-6 font-manrope">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 mb-4">Our Services</p>
        <h2 className="text-xl md:text-2xl font-medium leading-relaxed">
          Your Aspiration, Our Expertise: Tailored Services for <br />
          Unmatched Excellence.
        </h2>
      </div>

      {/* Services List */}
      <div className="max-w-4xl mx-auto divide-y divide-gray-700">
        {services.map((service) => (
          <div key={service.id} className="py-6">
            {/* Service Header */}
            <div
              onClick={() => toggleService(service.id)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span className="text-white font-semibold w-12">
                {service.id.toString().padStart(2, "0")}
              </span>
              <h3 className="flex-1 text-lg  text-gray-300  font-medium">{service.title}</h3>
              <span
                className={`text-gray-400 transition-transform ${
                  active === service.id ? "text-white rotate-" : ""
                }`}
              >
                {active === service.id ? <BsArrowDownCircle /> : <BsArrowUpRightCircle />}
              </span>
            </div>

            {/* Dropdown Content */}
            {active === service.id && (
              <div className="mt-4 pl-12">
                {service.description && (
                  <p className="text-gray-400 text-sm mb-4 max-w-2xl">{service.description}</p>
                )}

                {/* Image Cards */}
                <div className="flex flex-wrap gap-4">
                  {service.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative w-40 h-28 rounded-md overflow-hidden bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.src})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
                        <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                          {img.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UaeServicesSection;
