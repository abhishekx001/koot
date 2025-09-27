"use client";

import React from "react";
import { FaBolt, FaHeart, FaWhatsapp } from "react-icons/fa";

const EatingDisorderPage = () => {
  const scrollToEatingDisorderOverview = () => {
    const element = document.getElementById('what-is-eating-disorder');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-0">
      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 py-4 md:py-8">
        {/* Main Content Area */}
        <div className="bg-green-50 rounded-3xl p-6 md:p-20 lg:p-24 border border-green-100 relative overflow-hidden">
          {/* Main Heading */}
          <div className="max-w-4xl pt-6 md:pt-0">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-3 md:mb-4 leading-tight md:leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
              Online Malayali Psychologist<br />
              <span className="text-black">for Eating Disorders</span>
            </h1>
            
            {/* Description */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-64 mb-4 md:mb-6">
              <p className="text-sm text-black leading-relaxed md:leading-loose flex-1 max-w-md" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
                An eating disorder is a mental health condition that influences a person's eating habits, exercise patterns, and body image. Koott offers compassionate online Malayalam counselling with experienced Malayali psychologists to help you develop a healthy relationship with food and your body.
                <span 
                  className="text-green-600 cursor-pointer hover:underline" 
                  onClick={scrollToEatingDisorderOverview}
                >
                  ...read more
                </span>
              </p>
              {/* Image - Desktop Only */}
              <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 hidden md:block">
                <img 
                  src="/personimg.png" 
                  alt="Eating Disorder Counseling" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-4 md:mb-6">
              {/* People Treated */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <FaBolt className="text-orange-500 text-sm" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>1000+</div>
                  <div className="text-xs text-gray-600" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>People Treated</div>
                </div>
                {/* Image - Mobile Only, right of 1000+ */}
                <div className="w-16 h-16 flex-shrink-0 md:hidden ml-2 self-end">
                  <img 
                    src="/personimg.png" 
                    alt="Eating Disorder Counseling" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Satisfaction */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaHeart className="text-purple-500 text-sm" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>99%</div>
                  <div className="text-xs text-gray-600" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 md:gap-6">
              <p className="text-sm text-gray-700 font-medium text-center sm:text-left leading-relaxed md:leading-loose" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
                Get a free consultation from Clinical Psychologist
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center space-x-2 shadow-lg text-sm" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
                <FaWhatsapp className="text-sm" />
                <span>WhatsApp Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EatingDisorderPage;
