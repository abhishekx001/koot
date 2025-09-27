import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ConnectSection from "./components/ConnectSection";
import ExpertSection from "./components/ExpertSession";
import JourneySection from "./components/JourneySection";
import ServicesTab from "./components/ServicesTab";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import FaqAccordion from "./components/FaqAccordion ";
import ReferSection from "./components/ReferSection";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
      <ConnectSection/>
      <ExpertSection/>
      <JourneySection/>
      <ServicesTab/>
      <TestimonialsSection/>
      <FaqAccordion/>
      <ReferSection/>
      <Footer/>

      {/* Social Media Icons - Fixed Position */}
      <div className="fixed top-1/2 right-2 transform -translate-y-1/2 flex flex-col gap-4 text-gray-700 z-40">
        <a href="#" className="hover:text-green-600 transition-colors">
          <FaWhatsapp size={20} />
        </a>
        <a href="#" className="hover:text-pink-600 transition-colors">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </>
  );
};

export default Home;