import React from "react";
//import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials ";
import Industries from "./Industries ";
import TechStack from "./TechStack";
import CompanyValues from "./CompanyValues";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
// import ServiceTabs from "./ServiceTabs";
// import AppTypeTabs from "./AppTypeTabs";
// import ProcessTabs from './ProcessTabs'
// import MobileAppDevelopment from './MobileAppDevelopment'
// import MobileAppServices from "./MobileAppServices";
// import DevelopmentCapabilities from "./DevelopmentCapabilities";
// import CoreMobileFeatures from "./CoreMobileFeatures";
// import AdvancedMobileFeatures from "./AdvancedMobileFeatures";
// import BestPractices from "./BestPractices";
// import UXUIServices from "./UXUIServices";
// import UXUIServicesDetailed from "./UXUIServicesDetailed";
// import WhenToInvolveUX from "./WhenToInvolveUX";
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Industries />
      <TechStack />
      <CompanyValues />
      <ContactSection />
      <FAQSection />
      {/* <ServiceTabs/>
      <AppTypeTabs/>
      <ProcessTabs/>
      <MobileAppDevelopment/>
      <MobileAppServices/>
      <DevelopmentCapabilities/>
      <CoreMobileFeatures/>
      <AdvancedMobileFeatures/>
      <BestPractices/>
      <UXUIServices/>
      <UXUIServicesDetailed/>
      <WhenToInvolveUX/> */}
    </div>
  );
};

export default Home;
