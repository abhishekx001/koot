"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

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

const eatingDisorderFaqItems = [
  {
    question: "What are the common types of eating disorders?",
    answer: "The main types include anorexia nervosa, bulimia nervosa, binge eating disorder, and avoidant/restrictive food intake disorder (ARFID). Each has distinct characteristics but all involve unhealthy relationships with food and body image.",
  },
  {
    question: "How do I know if I have an eating disorder?",
    answer: "Signs include extreme weight changes, preoccupation with food/weight, secretive eating, excessive exercise, mood changes, and physical symptoms like fatigue or digestive issues. If you're concerned, it's important to seek professional help.",
  },
  {
    question: "Can eating disorders be treated?",
    answer: "Yes, eating disorders are treatable with the right support. Treatment typically involves therapy, nutritional counseling, medical monitoring, and sometimes medication. Recovery is possible with proper treatment and support.",
  },
  {
    question: "How long does eating disorder recovery take?",
    answer: "Recovery varies for each person and can take months to years. It's a gradual process that requires patience, professional support, and often involves setbacks. Early intervention typically leads to better outcomes.",
  },
  {
    question: "Can family members help someone with an eating disorder?",
    answer: "Family support is crucial in recovery. Being patient, avoiding comments about weight/food, encouraging professional help, and educating yourself about eating disorders can make a significant difference.",
  },
];

const EatingDisorderFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Depression");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const getCurrentFaqItems = () => {
    const items = activeTab === "Depression" ? depressionFaqItems : eatingDisorderFaqItems;
    if (searchTerm) {
      return items.filter(item => 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return items;
  };

  const currentFaqItems = getCurrentFaqItems();

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
            Frequently Asked Questions on {activeTab}
          </h2>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Looking for something?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 mb-8 border-b border-gray-200">
          <button
            onClick={() => {
              setActiveTab("Depression");
              setActiveIndex(null);
              setSearchTerm("");
            }}
            className={`pb-3 text-sm font-medium ${
              activeTab === "Depression" 
                ? "text-green-600 border-b-2 border-green-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Depression
          </button>
          <button
            onClick={() => {
              setActiveTab("Eating Disorder");
              setActiveIndex(null);
              setSearchTerm("");
            }}
            className={`pb-3 text-sm font-medium ${
              activeTab === "Eating Disorder" 
                ? "text-green-600 border-b-2 border-green-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Eating Disorder
          </button>
        </div>
        
        {/* Scrollable FAQ Container */}
        <div className="max-h-80 overflow-y-auto pr-2">
          {/* FAQ Items */}
          {currentFaqItems.map((item, index) => (
            <div key={index} className="border-b border-green-100 py-4">
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
          
          {currentFaqItems.length === 0 && searchTerm && (
            <div className="text-center py-8 text-gray-500">
              No questions found matching "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EatingDisorderFaq;
