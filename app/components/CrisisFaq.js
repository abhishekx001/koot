"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const crisisFaqItems = [
  {
    question: "What types of treatment are available in crisis intervention?",
    answer: "Crisis intervention may include immediate stabilization, safety planning, brief supportive therapy, grounding techniques, and referrals for ongoing care such as psychotherapy or psychiatry when needed.",
  },
  {
    question: "What are the different approaches used in crisis intervention therapy?",
    answer: "Common approaches include Solution-Focused Brief Therapy, Psychological First Aid, Trauma-Informed Care, and Cognitive Behavioral strategies tailored to reduce acute distress and improve functioning.",
  },
  {
    question: "How does crisis intervention therapy differ from traditional therapy?",
    answer: "Crisis therapy is short-term and focused on stabilization and safety, while traditional therapy often explores long-term patterns and deeper causes over multiple sessions.",
  },
  {
    question: "What happens during a crisis intervention therapy session?",
    answer: "A therapist will assess immediate risks, validate your experience, co-create a safety plan, teach coping skills (like breathing and grounding), and connect you with support resources.",
  },
  {
    question: "Can crisis intervention therapy be conducted remotely or online?",
    answer: "Yes. Secure online sessions are effective for crisis support, allowing fast access to care, privacy, and flexibility when in-person visits aren’t possible.",
  },
];

const CrisisFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleIndex = (index) => setActiveIndex(index === activeIndex ? null : index);

  return (
    <div
      className="flex justify-center items-center py-12 px-4 bg-white"
      style={{ fontFamily: 'var(--font-quicksand), sans-serif' }}
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-8">Frequently Asked Questions on Crisis Intervention</h2>
        <div className="max-h-80 overflow-y-auto pr-2">
          {crisisFaqItems.map((item, index) => (
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
                <p className="mt-3 text-black text-sm leading-relaxed tracking-wide font-light">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrisisFaq;


