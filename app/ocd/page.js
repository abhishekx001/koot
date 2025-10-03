"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import OCDPage from "../components/OCDPage";
import OCDSymptoms from "../components/OCDSymptoms";
import MalayaliTherapists from "../components/MalayaliTherapists";
import Footer from "../components/Footer";
import JourneySection from "../components/JourneySection";
import BeginToday from "../components/BeginToday";
import TestimonialsSection from "../components/TestimonialsSection";
import OCDFaq from "../components/OCDFaq";
import OCDOverview from "../components/OCDOverview";
import MalayaliPsychologists from "../components/MalayaliPsychologists";
import RelatedConditions from "../components/RelatedConditions";
import OCDBlogs from "../components/OCDBlogs";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaEllipsisH, FaTimes, FaPhone, FaComments } from "react-icons/fa";

const OCDPageRoute = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Navbar />
      <OCDPage />
      <OCDSymptoms />
      <MalayaliTherapists />
      <JourneySection />
      <BeginToday />
        <TestimonialsSection />
        <OCDFaq />
        <div id="what-is-ocd">
          <OCDOverview />
        </div>
        <MalayaliPsychologists />
        <RelatedConditions />
        <OCDBlogs />
        <Footer />

      {/* Social Media Icons - Fixed Position */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 text-gray-700 z-40 hidden md:flex">
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

      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        {/* Popup Menu */}
        {isMenuOpen && (
          <div className="absolute bottom-16 right-0 min-w-48">
            <div className="space-y-3">
              {/* WhatsApp */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors p-3">
                <div className="flex items-center">
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium">WhatsApp</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-green-500">
                    <FaWhatsapp className="text-green-500 text-sm" />
                  </div>
                </div>
              </div>
              
              {/* Instagram */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors p-3">
                <div className="flex items-center">
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium">Instagram</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-black">
                    <FaInstagram className="text-black text-sm" />
                  </div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors p-3">
                <div className="flex items-center">
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium">Phone</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-green-500">
                    <FaPhone className="text-green-500 text-sm" />
                  </div>
                </div>
              </div>
              
              {/* Chat */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors p-3">
                <div className="flex items-center">
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium">Chat</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-blue-500">
                    <FaComments className="text-blue-500 text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Floating Button */}
        <button 
          onClick={toggleMenu}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors"
        >
          <FaEllipsisH size={24} />
        </button>
      </div>
    </>
  );
};

export default OCDPageRoute;
