import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import KeralaHeroSection from "../components/KeralaPage/HeroSection/KeralaHeroSection";
import StrangerMessage from "../components/KeralaPage/StrangerMessage";
import KlService from "../components/KeralaPage/KlService";
import KlWorks from "../components/KeralaPage/KlWorks";
import WhyUs from "../components/WhyUs/WhyUs";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/Faq/Faq";
import Testimonial from "../components/Testimonials/Testimonial";

export default function KeralaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Best Website & App Developers in India | Tron Technologies
        </title>
        <meta
          name="description"
          content="Hire the best website designers, mobile app developers, and AI experts in India. Tron Technologies offers Flutter app development, UI/UX design, and smart web solutions built for growth."
        />
        <meta
          name="keywords"
          content="best website designers in india, best mobile app developers in india, best web developers in india, ai developers in india, ui ux designers in india, flutter india"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Best Website & App Developers in India | Tron Technologies"
        />
        <meta
          property="og:description"
          content="Hire the best website designers, mobile app developers, and AI experts in India. Tron Technologies offers Flutter app development, UI/UX design, and smart web solutions built for growth."
        />
      </Helmet>

      <KeralaHeroSection />
      <StrangerMessage />
      <KlService />
      <KlWorks />
      <WhyUs />
      <Testimonial />
      <Contact />
      <FAQ />
    </div>
  );
}
