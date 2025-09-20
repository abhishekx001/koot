"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      name: "Dr. Albin Eldhose",
      text: "Albin was super friendly and got what I was going through right away. It was easy to chat with him.",
      avatar: "/personimg.png"
    },
    {
      name: "Sinu Mehna", 
      text: "Sinu is super human women that i needed the most. Right Koott for me.",
      avatar: "/teens.png"
    },
    {
      name: "Shuhaima Katti",
      text: "Shuhaima helps to calm me down. Koott really helps especially people like me who lives in UK",
      avatar: "/couples.png"
    },
    {
      name: "Poonam Fernandez",
      text: "I was able to realize and come out of a toxic relationship. Thank you Koott",
      avatar: "/access.png"
    },
    {
      name: "Aswathy Raman",
      text: "Divorce to dancing together. We both didn't like the idea of counselling initially, Now look to us. Thank you Koott",
      avatar: "/scndimage.png"
    },
    {
      name: "Shuhaima Katti",
      text: "She guides you to a wellbeing side of the life. Career, Relationship, Studies all managing now.",
      avatar: "/thirdimg.png"
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 800); // Longer duration for smoother train-like movement
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 800); // Longer duration for smoother train-like movement
  };

  return (
    <div className="w-full bg-white py-16 px-4 flex justify-center mt-8">
      <div className="max-w-7xl w-full">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '500', fontSize: '20px' }}>
            <span className="text-black">We</span>
            <span className="bg-green-600 text-white px-2 py-1 mx-1 rounded-md">Helped</span>
            <span className="text-lg">🤝</span>
            <span className="text-black">7,000+ People Around The Globe.</span>
          </h2>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '500' }}>
            What people say about our therapists.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all duration-200 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-105'
            }`}
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all duration-200 ${
              isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-105'
            }`}
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                width: `${testimonials.length * (100 / 4)}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 pl-1 pr-3">
                  <div className="bg-green-50 rounded-xl p-6 h-full">
                    {/* Avatar and Info Row */}
                    <div className="flex items-center mb-4">
                      {/* Avatar */}
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      
                      {/* Stars and Name */}
                      <div className="ml-3 flex-1">
                        {/* Stars */}
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                          ))}
                        </div>
                        
                        {/* Name */}
                        <h3 className="text-black font-medium" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '500' }}>
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}>
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;
