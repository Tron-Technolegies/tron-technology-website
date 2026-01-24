import React from "react";
import { Helmet } from "react-helmet";
import UaeHeroSection from "../components/UAEPage/UaeHero/UaeHeroSection";
import Navbar from "../components/Navbar/Navbar";
import StrangerMessage from "../components/KeralaPage/StrangerMessage";
import UaeServicesSection from "../components/UAEPage/UaeServiceSection";
import UaePortfolio from "../components/UAEPage/UaePortfolio";
import UaeTestimonials from "../components/UAEPage/UaeTestimonials";
import OurProcess from "../components/UAEPage/OurProcess";
import ITSoltion from "../components/UAEPage/ITSoltion";
import Footer from "../components/Footer/Footer";

export default function UaePage() {
  return (
    <div>
      <Helmet>
        <title>Best Website & App Developers in UAE | Tron Technologies</title>
        <meta
          name="description"
          content="Hire the best website designers, mobile app developers, and AI experts in the UAE. Tron Technologies delivers Flutter apps, UI/UX design, and intelligent web solutions for businesses across Dubai and Abu Dhabi."
        />
        <meta
          name="keywords"
          content="best website designers in uae, best mobile app developers in uae, best web developers in uae, ai developers in uae, ui ux designers in uae, flutter uae"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Best Website & App Developers in UAE | Tron Technologies"
        />
        <meta
          property="og:description"
          content="Hire the best website designers, mobile app developers, and AI experts in the UAE. Tron Technologies delivers Flutter apps, UI/UX design, and intelligent web solutions for businesses across Dubai and Abu Dhabi."
        />
      </Helmet>

      <Navbar />
      <UaeHeroSection />
      <StrangerMessage />
      <UaeServicesSection />
      <UaePortfolio />
      <OurProcess />
      <UaeTestimonials />
      <ITSoltion />
      <Footer />
    </div>
  );
}
