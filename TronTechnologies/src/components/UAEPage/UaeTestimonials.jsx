import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rushil Kamarudheen",
    position: "Marketing Head",
    company: "Dahab Miners",
    review:
      "Working with this team was a smooth and professional experience from start to finish. They understood our requirements clearly and delivered a fast, clean, and scalable website that exceeded our expectations. Communication was excellent throughout the project.",
    image: "",
  },
  {
    id: 2,
    name: "Favas Ahmed",
    position: "ED",
    company: "Handcar",
    review:
      "We hired them to build our mobile application, and the result was a stable, high-performance app delivered on time. Their technical expertise and attention to detail really stood out",
    image: "",
  },
  {
    id: 3,
    name: "Fathima Hanaan",
    position: "Marketing Strategist",
    company: "Pizza Club",
    review:
      "Their design approach is very practical and user-focused. The UI they created not only looks great but significantly improved usability and user engagement on our platform",
    image: "",
  },
  {
    id: 4,
    name: "Mohammad Fayis",
    position: "SEO Specialist",
    company: "Dahab Miners",
    review:
      "From design to development, they handled the entire project with professionalism and clarity. The final product was exactly aligned with our business goals and user needs",
    image: "",
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
        <p className="text-black uppercase text-sm tracking-wide">
          Testimonials
        </p>
        <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mt-4">
          Voices of Trust: What Clients Say About Working With Us
        </p>
        <p>
          Real feedback from clients who value clarity, collaboration, and
          dependable delivery
        </p>
        <p>
          The transparency and cooperation during the project were also
          appreciated. The team had to learn our needs and provided a solution
          that was practical and simple to support.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
        {visibleTestimonials.map((t) => (
          <div key={t.id} className="flex bg-gray-50 p-6 flex-1">
            {/* Left Image */}
            {/* <div className="mr-4 flex-shrink-0">
              <img src={t.image} alt={t.name} className=" object-cover" />
            </div> */}

            {/* Right Content */}
            <div className="p-6">
              <h4 className="text-lg font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">
                {t.position}, {t.company}
              </p>
              <p className="mt-3 text-gray-700 text-sm italic">{t.review}</p>
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
