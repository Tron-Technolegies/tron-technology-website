import React, { useState } from "react";

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

export default function KlService() {
  const [openId, setOpenId] = useState(null);

  const toggleService = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-black text-white px-6 md:px-20 py-20  font-manrope">
      <h3 className="text-sm text-[#FC650B] mb-6 max-w-4xl mx-auto">
        ↳ Our Services
      </h3>

      <div className="flex flex-col divide-y divide-gray-800 max-w-4xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="py-4">
            <button
              onClick={() => toggleService(service.id)}
              className="flex items-center justify-between w-full"
            >
              {/* Left section with gradient icon + title */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-6 rounded-full bg-gradient-to-r ${service.color}`}
                ></div>
                <span className="text-lg">{service.title}</span>
              </div>

              {/* Expand / Collapse icon */}
              <span className="text-xl">
                {openId === service.id ? "−" : "+"}
              </span>
            </button>

            {/* Expanded content */}
            {openId === service.id && (
              <div className="mt-3 ml-16 text-gray-400 text-sm max-w-2xl">
                <p
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
