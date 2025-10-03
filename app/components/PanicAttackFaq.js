"use client";
import React, {useState} from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

const panicAttackFaqItems = [
  {
    question: "What exactly is a panic attack?",
    answer: "A panic attack is a sudden episode of intense fear or anxiety that triggers severe physical reactions. It can feel like a heart attack and often comes without warning. Panic attacks are treatable, and with proper counseling, most people can overcome them completely."
  },
  {
    question: "How common are panic attacks?",
    answer: "Panic attacks affect approximately 2-3% of adults in India annually. Many people experience occasional panic attacks, while others develop panic disorder with recurrent episodes. Early intervention through counseling can prevent chronic panic disorder."
  },
  {
    question: "Are panic attacks dangerous?",
    answer: "While panic attacks feel terrifying, they are not dangerous or life-threatening. However, they can significantly impact your quality of life if left untreated. The fear of future attacks can lead to avoidance behaviors and affect daily functioning."
  },
  {
    question: "What causes panic attacks?",
    answer: "Panic attacks can have various triggers including stress, traumatic experiences, major life changes, genetic predisposition, and certain medical conditions. Our psychologists help identify your specific triggers and develop coping strategies."
  },
  {
    question: "Can panic attacks be treated?",
    answer: "Yes, panic attacks are highly treatable. Through cognitive behavioral therapy (CBT), relaxation techniques, and gradual exposure therapy, most people can overcome panic attacks permanently. Many of our clients report complete recovery within 6-12 months."
  },
  {
    question: "What's the difference between panic attacks and anxiety?",
    answer: "Panic attacks are sudden, intense episodes with severe physical symptoms lasting minutes. Anxiety is usually a prolonged feeling of worry or unease. Both are treatable through counseling, but panic attacks require immediate coping strategies."
  },
  {
    question: "How can counseling help with panic attacks?",
    answer: "Counseling provides techniques like deep breathing, cognitive restructuring, gradual exposure, and mindfulness. Our Malayali psychologists use evidence-based treatments like CBT and exposure therapy to help you regain control and reduce fear."
  },
  {
    question: "Is online counseling effective for panic attacks?",
    answer: "Yes, online counseling for panic attacks is highly effective. Studies show equivalent outcomes to in-person therapy. Our secure platform allows you to learn coping strategies from home, and our Malayali psychologists provide culturally sensitive care."
  }
];

const PanicAttackFaq = () => {
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
            Frequently Asked Questions on Panic Attacks
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
          {panicAttackFaqItems.map((item, index) => (
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

export default PanicAttackFaq;