import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import About from "../components/About/About";
import Services from "../components/OurServices/Services";
import WhyUs from "../components/WhyUs/WhyUs";
import Testimonial from "../components/Testimonials/Testimonial";
import BlogsSection from "../components/BlogSection/BlogsSection";
import TechStackSection from "../components/TechStackSection/TechStackSection";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/Faq/Faq";
import BrandSection from "../components/BrandSection";
import Products from "../components/OurProducts";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      {/* <BrandSection /> */}
      <Products />
      <WhyUs />
      <Testimonial />
      {/* <BlogsSection /> */}
      <TechStackSection />
      <Contact />
      <FAQ />
    </>
  );
}
