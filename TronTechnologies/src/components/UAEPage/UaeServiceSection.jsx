import React, { useState } from "react";
import { BsArrowUpRightCircle, BsArrowDownCircle } from "react-icons/bs";

const services = [
  {
    id: 1,
    title: "Product Strategy",
    description:
      "We help you define what to build—and why—before writing a single line of code.<br/>From idea validation to feature prioritization, we work with you to create a clear product roadmap aligned with your business goals, users, and market realities.<br/>What this includes:<br/>● Product discovery &amp; planning<br/>● Market &amp; user research<br/>● Feature prioritization<br/>● MVP &amp; roadmap definition",
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "We build fast, secure, and scalable websites designed to perform—not just look good.<br/>Whether it’s a business website, landing page, or custom platform, our focus is on clean code, strong UX, and long-term maintainability.<br/>Capabilities:<br/>● Front-end development<br/>● Custom website development<br/>● Performance &amp; SEO-ready builds<br/>● Dedicated developers (project-based or ongoing)<br/><br/>Artificial Intelligence<br/>Practical AI solutions designed to automate processes, improve decision-making, and enhance digital products—without unnecessary complexity.<br/><br/>Front-End Development<br/>Clean, responsive, and accessible interfaces built for speed, usability, and cross-device compatibility.<br/><br/>Dedicated Developer<br/>Work directly with a skilled developer who integrates seamlessly with your team and project requirements.<br/><br/>Mobile App Development<br/>Reliable and scalable mobile applications built for performance, usability, and future growth.",
    images: [],
  },
  {
    id: 3,
    title: "UX/UI Design",
    description:
      "Design focused on clarity, usability, and real user behavior.<br/>We create interfaces that are intuitive, functional, and aligned with your brand—ensuring users can navigate, understand, and act without friction.<br/>What we deliver:<br/>● User research &amp; flows<br/>● Wireframes &amp; prototypes<br/>● UI design systems<br/>● Usability-focused design decisions",
    images: [],
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "We develop mobile applications that are stable, scalable, and easy to use.<br/>From concept to deployment, we focus on performance, security, and a smooth user experience across devices.<br/>Includes:<br/>● Android &amp; iOS apps<br/>● Cross-platform development<br/>● Backend integration<br/>● App performance optimization",
    images: [],
  },
  {
    id: 5,
    title: "Web App Development",
    description:
      "Custom web applications built to support business operations, platforms, and digital products.<br/>We prioritize clean architecture, scalability, and ease of future enhancements.<br/>Use cases:<br/>● Business dashboards<br/>● SaaS platforms<br/>● Internal tools<br/>● Custom portals &amp; systems",
    images: [],
  },
  {
    id: 6,
    title: "AI Strategy & Development",
    description:
      "AI should solve problems—not create confusion.<br/>We help businesses identify where AI adds real value, then design and implement solutions that integrate smoothly into existing systems.<br/>Focus areas:<br/>● AI use-case identification<br/>● Automation &amp; workflow optimization<br/>● Custom AI-powered features<br/>● Integration with existing platforms",
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
      <div className="text-center mb-12 flex flex-col gap-2">
        <p className="text-sm text-gray-400 ">Our Services</p>
        <h2 className="text-xl md:text-2xl max-w-[700px] font-medium leading-relaxed mx-auto">
          Your Goals, Our Expertise - Services Built for Real-World Impact
        </h2>
        <p className="max-w-[800px] mx-auto">
          We focus on practical digital solutions that solve real business
          problems. Every service is tailored to your objectives, timeline, and
          growth stage—no unnecessary complexity, no generic packages.
        </p>
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
              <h3 className="flex-1 text-lg  text-gray-300  font-medium">
                {service.title}
              </h3>
              <span
                className={`text-gray-400 transition-transform ${
                  active === service.id ? "text-white rotate-" : ""
                }`}
              >
                {active === service.id ? (
                  <BsArrowDownCircle />
                ) : (
                  <BsArrowUpRightCircle />
                )}
              </span>
            </div>

            {/* Dropdown Content */}
            {active === service.id && (
              <div className="mt-4 pl-12">
                {service.description && (
                  <>
                    <p
                      className="text-gray-400 text-sm mb-4 max-w-2xl"
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    ></p>
                  </>
                )}

                {/* Image Cards */}
                <div className="flex flex-wrap gap-4">
                  {service.images?.map((img, index) => (
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
