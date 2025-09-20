"use client";

import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";

const ServicesTab = () => {
  const [activeTab, setActiveTab] = useState("therapy");

  const servicesData = {
    therapy: {
      title: "Consultation",
      description: "Psychotherapy involves talking with a trained therapist to address emotional challenges and improve mental well-being through supportive conversation and coping strategies.",
      duration: "60 minutes",
      price: "749",
      buttonText: "BOOK A SESSION"
    },
    counselling: {
      title: "Counselling",
      description: "Professional counselling provides guidance and support to help you navigate life challenges, improve relationships, and develop effective coping strategies for personal growth.",
      duration: "45 minutes",
      price: "649",
      buttonText: "BOOK A SESSION"
    },
    psychiatrist: {
      title: "Psychiatrist Consultation",
      description: "Medical psychiatric consultation for diagnosis, medication management, and comprehensive treatment planning for mental health conditions and disorders.",
      duration: "30 minutes",
      price: "899",
      buttonText: "BOOK A SESSION"
    },
    couple: {
      title: "Couple Therapy",
      description: "Couple therapy sessions help partners improve communication, resolve conflicts, and strengthen their relationship through guided therapeutic interventions.",
      duration: "90 minutes",
      price: "1299",
      buttonText: "BOOK A SESSION"
    }
  };

  const tabs = [
    { id: "therapy", label: "Therapy" },
    { id: "counselling", label: "Counselling" },
    { id: "psychiatrist", label: "Psychiatrist" },
    { id: "couple", label: "Couple" }
  ];

  const currentService = servicesData[activeTab];

  return (
    <div className="w-full bg-white py-12 px-4 flex justify-center mt-8">
      <div className="max-w-4xl w-full">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-green-700 text-white"
                    : "bg-white border border-gray-300 text-black hover:bg-gray-50"
                }`}
                style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '600' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl text-gray-800 mb-4" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}>
            {currentService.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}>
            {currentService.description}
          </p>

          {/* Duration */}
          <p className="text-gray-800 mb-4" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}>
            Duration: {currentService.duration}
          </p>

          {/* Booking Info and Button */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg text-orange-700" style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontWeight: '400' }}>
                Book a session, Starting from ₹{currentService.price}
              </p>
            </div>
            
            <button className="flex items-center gap-2 bg-gray-50 border border-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-200">
              <span style={{ fontFamily: 'var(--font-quicksand), sans-serif', fontSize: '12px', fontWeight: '300' }}>
                {currentService.buttonText}
              </span>
              <FaVideo className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTab;
