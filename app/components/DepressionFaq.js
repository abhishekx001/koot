"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const depressionFaqItems = [
  {
    question: "How common is depression in Kerala?",
    answer: "Depression affects approximately 1 in 5 people in Kerala, similar to global statistics. The prevalence has been increasing, especially among young adults and working professionals. Cultural factors, work stress, and lifestyle changes contribute to this trend.",
  },
  {
    question: "Can depression be treated?",
    answer: "Yes, depression is highly treatable! With proper therapy, medication (when needed), and lifestyle changes, most people with depression can recover completely. Early intervention and consistent treatment lead to better outcomes.",
  },
  {
    question: "How do I know if I have depression?",
    answer: "Common signs include persistent sadness, loss of interest in activities, changes in sleep or appetite, fatigue, difficulty concentrating, feelings of worthlessness, and thoughts of self-harm. If these symptoms last for more than 2 weeks, it's important to seek professional help.",
  },
  {
    question: "Can depression affect physical health?",
    answer: "Yes, depression can significantly impact physical health. It can weaken the immune system, increase risk of heart disease, cause chronic pain, digestive issues, and sleep problems. Treating depression often improves physical health as well.",
  },
  {
    question: "Can lifestyle changes help manage depression?",
    answer: "Absolutely! Regular exercise, healthy eating, adequate sleep, stress management techniques, and maintaining social connections can all help manage depression symptoms. However, professional therapy is still recommended for comprehensive treatment.",
  },
  {
    question: "Is online therapy effective for depression?",
    answer: "Yes, online therapy has been proven to be as effective as in-person therapy for treating depression. It offers convenience, privacy, and accessibility, especially important for those who might feel hesitant about seeking help in person.",
  },
  {
    question: "How long does depression treatment take?",
    answer: "Treatment duration varies for each person. Some people see improvement within 6-8 weeks, while others may need several months or longer. The key is consistency and working with a qualified therapist who can adjust the treatment plan as needed.",
  },
  {
    question: "Can family members help someone with depression?",
    answer: "Yes, family support is crucial! Being understanding, patient, encouraging professional help, and avoiding judgmental comments can make a significant difference. Family members should also take care of their own mental health.",
  },
];

const DepressionFaq = () => {
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
        {/* Heading */}
        <h2 
          className="text-xl md:text-2xl font-bold text-black mb-8"
          style={{fontFamily: 'var(--font-quicksand), sans-serif'}}
        >
          Frequently Asked Questions on Depression
        </h2>
        
        {/* Scrollable FAQ Container */}
        <div className="max-h-80 overflow-y-auto pr-2">
          {/* FAQ Items */}
          {depressionFaqItems.map((item, index) => (
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

export default DepressionFaq;
