import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials ";
import Industries from "./Industries ";
import TechStack from "./TechStack";
import CompanyValues from "./CompanyValues";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Industries />
      <TechStack />
      <CompanyValues />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default Home;
