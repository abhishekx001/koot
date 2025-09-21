"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MalayaliTherapists = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample therapist images - you can replace these with actual therapist images
  const therapists = [
    { id: 1, image: "/phsycologst1.png", name: "Dr. Priya" },
    { id: 2, image: "/personimg.png", name: "Dr. Rajesh" },
    { id: 3, image: "/phsycologst1.png", name: "Dr. Anitha" },
    { id: 4, image: "/personimg.png", name: "Dr. Suresh" },
    { id: 5, image: "/phsycologst1.png", name: "Dr. Meera" },
    { id: 6, image: "/personimg.png", name: "Dr. Kumar" },
    { id: 7, image: "/phsycologst1.png", name: "Dr. Lakshmi" },
    { id: 8, image: "/personimg.png", name: "Dr. Ravi" },
    { id: 9, image: "/phsycologst1.png", name: "Dr. Sunitha" },
    { id: 10, image: "/personimg.png", name: "Dr. Mohan" }
  ];

  const visibleCount = 7; // Number of therapists visible at once
  const maxIndex = Math.max(0, therapists.length - visibleCount);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
      {/* Heading */}
      <h2 className="text-center text-xl font-bold text-black mb-12" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
        We have got the best Malayali therapists for depression.
      </h2>

      {/* Therapist Carousel */}
      <div className="relative flex items-center justify-center mt-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        {/* Therapist Images */}
        <div className="flex items-center space-x-4 overflow-hidden">
          {therapists.slice(currentIndex, currentIndex + visibleCount).map((therapist) => (
            <div key={therapist.id} className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className="absolute right-0 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default MalayaliTherapists;
