"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";

const badges = [
  "Depression",
  "Relationship Issues",
  "Stress",
  "Eating Disorders",
  "Anxiety",
  "Mood Disorders",
  "Anger Issues",
  "ADHD",
  "Trauma",
  "Chronic Illness",
  "OCD",
  "Panic Attacks",
];

const therapists = [
  "/personimg.png",
  "/teens.png",
  "/couples.png",
  "/access.png",
  "/scndimage.png",
  "/thirdimg.png",
  "/fourthimg.png",
  "/fifthimg.png",
  "/firstimg.png",
];

const logos = [
  "/firstimg.png",
  "/scndimage.png",
  "/thirdimg.png",
  "/fourthimg.png",
  "/fifthimg.png",
];

const ExpertSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 8;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + itemsPerPage;
        return nextIndex >= therapists.length ? 0 : nextIndex;
      });
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const prevIndexCalc = prevIndex - itemsPerPage;
        return prevIndexCalc < 0 ? Math.max(0, therapists.length - itemsPerPage) : prevIndexCalc;
      });
      setIsTransitioning(false);
    }, 500);
  };

  const visibleTherapists = therapists.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-white py-6 md:py-10 px-4 md:px-6 text-center font-poppins">
      {/* Title */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-3 leading-tight" style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}>
        Kerala's best Malayali counsellors and therapists are your{" "}
        <span className="text-pink-600">koott</span> now.
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 max-w-xl mx-auto px-4 font-medium" style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}>
        We pick the best of the best by looking at their experience and
        qualifications to help and understand you better.
      </p>

      {/* Logos */}
      <div className="flex justify-center flex-wrap gap-3 md:gap-6 mb-6 md:mb-8 px-4">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={40}
            height={40}
            className="md:w-[60px] md:h-[60px]"
          />
        ))}
      </div>

      {/* Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0.5 md:gap-x-1 gap-y-0.5 md:gap-y-1 mb-6 md:mb-10 px-4 max-w-5xl mx-auto">
        {badges.map((text, index) => (
          <span
            key={index}
            className="flex items-center gap-2 px-2 py-1 text-xs md:text-sm text-gray-700 justify-center sm:justify-start"
            style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
          >
            <FaCheckSquare className="text-green-500 text-xs md:text-sm" />
            {text}
          </span>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative max-w-5xl mx-auto">
        <div className="flex justify-center items-center gap-4">
          {/* Left Arrow Button */}
          <button 
            onMouseEnter={prevSlide}
            className={`bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-all duration-200 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-105'}`}
            disabled={isTransitioning}
          >
            <span className="text-gray-600 text-xl font-light">‹</span>
          </button>

          {/* Therapist Images Container with Overflow Hidden */}
          <div className="overflow-hidden w-full max-w-4xl">
            <div 
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (96 + 24)}px)`,
                width: `${therapists.length * (96 + 24)}px`
              }}
            >
              {therapists.map((img, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-300 transition-all duration-300 ease-in-out hover:scale-105 flex-shrink-0"
                  >
                  <Image
                    src={img}
                    alt={`Therapist ${index + 1}`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button 
            onMouseEnter={nextSlide}
            className={`bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-all duration-200 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-105'}`}
            disabled={isTransitioning}
          >
            <span className="text-gray-600 text-xl font-light">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
