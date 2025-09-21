"use client";
import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";

const TestimonialsSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      author: "Adam John",
      time: "1 month ago",
      content: "It is difficult to talk. I was lying to my therapist to hide my emotions, I guess she knew it. but over 1 to 2 sessions I was able to open up.",
    },
    {
      id: 2,
      author: "Sarah Wilson",
      time: "2 weeks ago",
      content: "The online therapy sessions were a game-changer for me. I felt more comfortable opening up from my own space. My therapist was incredibly patient.",
    },
    {
      id: 3,
      author: "Michael Chen",
      time: "3 days ago",
      content: "I was skeptical about online therapy at first, but Koott made it so easy and comfortable. The sessions felt natural and I could be myself.",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentReviewIndex(index);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="py-8 px-4 bg-white mt-8" style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-6 text-left">
          Thoughts After the First Session <span role="img" aria-label="heart">💕</span>
        </h2>

        <div className="p-6 relative h-48 bg-gradient-to-b from-blue-100 to-blue-50">
          <div className="absolute top-4 right-4 p-2" style={{ color: '#3d995c' }}>
            <FaVideo size={16} />
          </div>

          <div className="mb-3">
            <h3 className="text-base font-semibold text-gray-800">{currentReview.author}</h3>
            <p className="text-xs text-gray-600">{currentReview.time}</p>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {currentReview.content}
          </p>

          <a href="#" className="text-blue-600 hover:underline text-xs font-medium">
            Read more
          </a>

          <div className="flex justify-center mt-4 space-x-1">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  currentReviewIndex === index ? 'bg-green-500' : 'bg-green-300'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to review ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;