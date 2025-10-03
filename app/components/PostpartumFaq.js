"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

const postpartumFaqItems = [
  {
    question: "How common is postpartum depression in Kerala?",
    answer: "Postpartum depression affects approximately 10-15% of new mothers in Kerala, similar to global statistics. The condition can occur anytime within the first year after childbirth and may be underreported due to cultural stigma around mental health.",
  },
  {
    question: "What's the difference between baby blues and postpartum depression?",
    answer: "Baby blues are mild mood changes that occur in the first 2-3 weeks after childbirth and typically resolve on their own. Postpartum depression is more severe, lasts longer (weeks to months), and significantly interferes with daily functioning and the ability to care for your baby.",
  },
  {
    question: "How long does postpartum depression last?",
    answer: "Without treatment, postpartum depression can last for months or even years. With proper treatment, most women see significant improvement within 6-8 weeks, though full recovery may take several months. Early intervention leads to better outcomes.",
  },
  {
    question: "Can postpartum depression affect the baby?",
    answer: "Yes, untreated postpartum depression can affect the mother-baby bond and the baby's development. Babies of depressed mothers may experience delays in emotional and social development. Getting treatment helps both mother and baby thrive.",
  },
  {
    question: "Is it safe to take antidepressants while breastfeeding?",
    answer: "Many antidepressants are considered safe during breastfeeding, but this should be discussed with your healthcare provider. The benefits of treating depression often outweigh the risks, and untreated depression can also affect the baby.",
  },
  {
    question: "Can fathers experience postpartum depression?",
    answer: "Yes, fathers can also experience postpartum depression, though it's less common. Symptoms may include sadness, anxiety, irritability, and difficulty bonding with the baby. Support and treatment are available for fathers as well.",
  },
  {
    question: "What should I do if I think I have postpartum depression?",
    answer: "Reach out to your healthcare provider, a mental health professional, or a support group. Don't wait - early intervention is crucial. Remember, seeking help is a sign of strength and love for your baby.",
  },
  {
    question: "Can postpartum depression be prevented?",
    answer: "While it can't always be prevented, there are steps to reduce risk: maintaining social support, getting adequate rest, eating well, and being aware of the signs. If you have a history of depression, discuss prevention strategies with your healthcare provider.",
  },
  {
    question: "Will I ever feel like myself again?",
    answer: "Yes, with proper treatment and support, most women with postpartum depression recover completely and go on to enjoy motherhood. It may take time, but you can regain your emotional well-being and bond with your baby.",
  },
  {
    question: "How can family members help someone with postpartum depression?",
    answer: "Offer practical help with baby care and household tasks, provide emotional support without judgment, encourage professional help, and take care of your own mental health. Remember that postpartum depression is a medical condition, not a character flaw.",
  },
];

const PostpartumFaq = () => {
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
            Frequently Asked Questions on Postpartum Depression
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
          {postpartumFaqItems.map((item, index) => (
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

export default PostpartumFaq;
