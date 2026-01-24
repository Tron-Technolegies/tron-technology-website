import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import About from "../components/About/About";
import Services from "../components/OurServices/Services";
import WhyUs from "../components/WhyUs/WhyUs";
import Testimonial from "../components/Testimonials/Testimonial";
import BlogsSection from "../components/BlogSection/BlogsSection";
import TechStackSection from "../components/TechStackSection/TechStackSection";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import BrandSection from "../components/BrandSection";
import Products from "../components/OurProducts";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="brands">
        <BrandSection />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="whyus">
        <WhyUs />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="blogs">
        <BlogsSection />
      </section>
      <section id="techstack">
        <TechStackSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </>
  );
}
