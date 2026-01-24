import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    company: "TechCorp",
    review:
      "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui.",
    image: "/testimonial1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Head",
    company: "CreativeWorks",
    review:
      "Their professionalism and creativity really stood out. We saw amazing results from our project.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Founder",
    company: "StartupX",
    review:
      "They transformed our ideas into a working solution faster than we imagined. Highly recommended!",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "CTO",
    company: "InnovateHub",
    review:
      "A dedicated and talented team that brought real innovation to our project. We’re very satisfied.",
    image: "https://via.placeholder.com/80",
  },
];

export default function UaeTestimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const prevTestimonial = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 2));
  };

  const nextTestimonial = () => {
    setStartIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2));
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 2);

  return (
    <section className="bg-white text-black py-20 px-7 font-manrope">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-black uppercase text-sm tracking-wide">Testimonials</p>
        <h2 className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mt-4">
          Voices of Trust: Client Stories, Testimonials that Illuminate Our Shared Success.
        </h2>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
        {visibleTestimonials.map((t) => (
          <div key={t.id} className="flex bg-gray-50 p-6 flex-1">
            {/* Left Image */}
            <div className="mr-4 flex-shrink-0">
              <img src={t.image} alt={t.name} className=" object-cover" />
            </div>

            {/* Right Content */}
            <div className="p-6">
              <h4 className="text-lg font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">
                {t.position}, {t.company}
              </p>
              <p className="mt-3 text-gray-700 text-sm">{t.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-16">
        <button
          onClick={prevTestimonial}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
        >
          <img src="/left-arrow-btn.svg" alt="Previous" />
        </button>
        <button
          onClick={nextTestimonial}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
        >
          <img src="/right-arrow-btn.svg" alt="Next" />
        </button>
      </div>
    </section>
  );
}
