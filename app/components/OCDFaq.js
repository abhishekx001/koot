"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

const ocdFaqItems = [
  {
    question: "How common is OCD in Kerala?",
    answer: "OCD affects approximately 1-2% of the population in Kerala, similar to global statistics. The condition often begins in childhood or early adulthood and can affect people of all ages and backgrounds.",
  },
  {
    question: "Can OCD be cured?",
    answer: "While there's no complete 'cure' for OCD, it can be effectively managed with proper treatment. Many people with OCD achieve significant symptom reduction and can lead normal, fulfilling lives with therapy and, when needed, medication.",
  },
  {
    question: "How do I know if I have OCD?",
    answer: "Signs include persistent, unwanted thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) that you feel driven to perform. These symptoms must cause significant distress and interfere with daily life for a diagnosis.",
  },
  {
    question: "What is the best treatment for OCD?",
    answer: "Exposure and Response Prevention (ERP) therapy is considered the gold standard treatment for OCD. This form of cognitive behavioral therapy helps people face their fears without performing compulsions. Medication (SSRIs) can also be effective when combined with therapy.",
  },
  {
    question: "Can lifestyle changes help with OCD?",
    answer: "While lifestyle changes alone cannot treat OCD, they can support recovery. Regular exercise, stress management, adequate sleep, and avoiding alcohol and drugs can help reduce anxiety and improve overall well-being.",
  },
  {
    question: "Is online therapy effective for OCD?",
    answer: "Yes, online therapy can be very effective for OCD treatment, especially ERP therapy. It offers convenience and accessibility while maintaining the same evidence-based approaches used in face-to-face therapy.",
  },
  {
    question: "How long does OCD treatment take?",
    answer: "Treatment duration varies, but many people see improvement within 12-20 sessions of ERP therapy. Some may need longer-term support. The key is consistency and working with a qualified therapist experienced in treating OCD.",
  },
  {
    question: "Can family members help someone with OCD?",
    answer: "Yes, family support is crucial! However, it's important to avoid accommodating OCD behaviors. Instead, encourage treatment, be patient, and learn about OCD to better understand and support your loved one's recovery journey.",
  },
  {
    question: "What's the difference between OCD and being a perfectionist?",
    answer: "While perfectionists may have high standards, OCD involves unwanted, intrusive thoughts and compulsive behaviors that cause significant distress and interfere with daily life. OCD is a mental health condition that requires professional treatment.",
  },
  {
    question: "Can children have OCD?",
    answer: "Yes, OCD can begin in childhood, often around age 10-12. Early intervention is crucial for children with OCD. Treatment approaches are similar to adults but may be adapted for developmental appropriateness.",
  },
];

const OCDFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className="flex justify-center items-center py-12 px-4 bg-white"
      style={{
        fontFamily: 'var(--font-quicksand), sans-serif',
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Header with Title and Search */}
        <div className="flex justify-between items-center mb-6">
          <h2 
            className="text-xl md:text-2xl font-bold text-black"
            style={{fontFamily: 'var(--font-quicksand), sans-serif'}}
          >
            Frequently Asked Questions on OCD
          </h2>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Looking for something?"
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          </div>
        </div>
        
        {/* Scrollable FAQ Container */}
        <div className="max-h-80 overflow-y-auto pr-2">
          {/* FAQ Items */}
          {ocdFaqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="flex justify-between items-center w-full text-left text-base font-normal focus:outline-none tracking-wide"
                onClick={() => toggleIndex(index)}
              >
                <span className="tracking-wide">{item.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-3 text-black text-sm leading-relaxed tracking-wide font-light">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OCDFaq;
