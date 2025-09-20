"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqItems = [
  {
    question: "Can I have therapy sessions entirely in Malayalam?",
    answer:
      "Yes, you can! Koott offers therapy sessions entirely in Malayalam. Speaking in your native language is important and that's a great option. It can help you feel more comfortable and express yourself clearly during your sessions.",
  },
  {
    question: "I often experience anxiety - Am I overthinking things?",
    answer: `അത്  ഉത്കണ്ഠയുടെ ലക്ഷണങ്ങൾ ആയിരിക്കാം. (That could be symptoms of anxiety.)

ഒരു കാരണവുമില്ലാതെ ടെൻഷൻ അനുഭവപ്പെടുന്നത് സാധാരണമാണ്, പക്ഷേ അത് നിങ്ങളുടെ ജീവിതത്തെ ബാധിക്കുകയാണെങ്കിൽ ഒരു ഡോക്ടറെ കാണുന്നത് നല്ലതാണ്. (Feeling tense for no reason is common, but if it's impacting your life, seeing a doctor is good.)`,
  },
  {
    question: "Is online therapy just as effective as traditional therapy?",
    answer:
      "Online or offline, what matters the most is the quality of therapy you get. Only face to face sessions can heal is just like believing cancer is due to evil possession, just the absurd myth.",
  },
  {
    question: "Is online counseling a good option for family issues?",
    answer:
      "Family tensions got you down? Koott can help! Talk things out safely, learn to communicate better, and build a stronger family. Koott tackles family issues and relationship struggles. Remember, seeking help is a sign of strength!",
  },
  {
    question: "Can I book a Malayali Psychologist while I'm outside the country?",
    answer:
      "Yes, Koott services are 100% online. So booking a Psychologist, Counsellors or Psychiatrist is now easy.",
  },
  {
    question:
      "I don't necessarily feel like I have a mental health condition, but I'm just not feeling happy. Can therapy help me figure out why?",
    answer:
      "Therapy can be a valuable tool even if you don't have a diagnosed mental health condition. It can be a safe space to explore your feelings, identify negative thought patterns, and develop coping mechanisms for stress or anxiety. A therapist can also help you set goals and work towards a more fulfilling life.",
  },
];

const FaqAccordion = () => {
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
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 py-5">
            <button
              className="flex justify-between items-center w-full text-left text-lg font-normal focus:outline-none tracking-wide"
              onClick={() => toggleIndex(index)}
            >
              <span className="tracking-wide">{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-base" />
              ) : (
                <FaChevronDown className="text-base" />
              )}
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed tracking-wide font-light">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
