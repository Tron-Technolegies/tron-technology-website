import React, { useState } from "react";

const services = [
  { id: 1, title: "Product Strategy", color: "from-blue-500 to-indigo-700" },
  { id: 2, title: "UX/UI Design", color: "from-green-400 to-lime-600" },
  { id: 3, title: "App Development", color: "from-pink-400 to-purple-600" },
  { id: 4, title: "Web App Development", color: "from-red-400 to-yellow-600" },
  { id: 5, title: "AI Strategy & Development", color: "from-blue-300 to-indigo-400" },
];

export default function KlService() {
  const [openId, setOpenId] = useState(null);

  const toggleService = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-black text-white px-6 md:px-20 py-20  font-manrope">
      <h3 className="text-sm text-[#FC650B] mb-6 max-w-4xl mx-auto">↳ Our Services</h3>

      <div className="flex flex-col divide-y divide-gray-800 max-w-4xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="py-4">
            <button
              onClick={() => toggleService(service.id)}
              className="flex items-center justify-between w-full"
            >
              {/* Left section with gradient icon + title */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-6 rounded-full bg-gradient-to-r ${service.color}`}></div>
                <span className="text-lg">{service.title}</span>
              </div>

              {/* Expand / Collapse icon */}
              <span className="text-xl">{openId === service.id ? "−" : "+"}</span>
            </button>

            {/* Expanded content */}
            {openId === service.id && (
              <div className="mt-3 ml-16 text-gray-400 text-sm max-w-2xl">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Duis et
                  sapien at libero interdum.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
