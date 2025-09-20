"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ReferSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentData = [
    {
      image: "/referimageleft.png",
      title: "Somatic Symptom Disorder: When Your Body Speaks Your Mind"
    },
    {
      image: "/teens.png",
      title: "Teen Mental Health: Understanding Adolescent Challenges"
    },
    {
      image: "/couples.png",
      title: "Couples Therapy: Building Stronger Relationships Together"
    },
    {
      image: "/access.png",
      title: "Accessibility in Mental Health: Breaking Down Barriers"
    }
  ];

  const nextContent = () => {
    setCurrentIndex((prev) => (prev + 1) % contentData.length);
  };
  return (
    <section 
      className="flex justify-between items-center bg-[#f9f9f9] px-8 py-12"
      style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
    >
      {/* Left Image with Arrow */}
      <div className="relative w-1/5">
        <img
          src={contentData[currentIndex].image}
          alt="Content Image"
          className="w-full h-auto rounded-md transition-opacity duration-300"
        />
        <button 
          onClick={nextContent}
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <FaChevronRight />
        </button>
        <p className="mt-3 text-sm font-medium text-center">
          {contentData[currentIndex].title}
        </p>
      </div>

      {/* Center Text Block */}
      <div className="w-1/2 text-center px-8">
        <h2 className="text-2xl font-semibold mb-4">Help Someone.</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          As somebody's dear one you are the first one to reach out when they
          are in pain. You were there to feel them and were really worried about
          them. So, now be there to make sure that they get what they actually
          need, mental health care is the best gift to your loved ones.
        </p>
        <button className="text-white px-6 py-2 rounded-full font-semibold transition" style={{ backgroundColor: '#71bb86' }}>
          REFER A FRIEND
        </button>
      </div>

      {/* Right Image with Social Icons */}
      <div className="relative w-1/4 group">
        <img
          src="/referimageright.png"
          alt="Right Image"
          className="w-full h-auto rounded-md transition-all duration-300"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="text-center px-4">
            <h3 className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}>
              urban.weekends
            </h3>
            <p className="text-white text-sm leading-relaxed" style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}>
              UKIYO • Japanese for "the floating world." Living in the moment, detached from the bothers of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferSection;
