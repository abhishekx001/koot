import React from "react";

const RelatedConditions = ({ title = "Related Conditions for Keralite's", items }) => {
  const conditions = items && items.length > 0 ? items : [
    "Trauma",
    "Phobias", 
    "Addictions",
    "Anxiety",
    "Family Counselling",
    "Personality Dissorders",
    "Psychosis",
    "Postpartum Depression"
  ];

  return (
    <div
      className="flex justify-center items-center py-16 px-4 bg-white"
      style={{
        fontFamily: 'var(--font-quicksand), sans-serif',
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Main Heading */}
        <h2 className="text-lg md:text-xl font-bold text-black mb-8 text-left">
          {title}
        </h2>
        
        {/* Grid of Conditions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 text-center text-black text-sm font-medium hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer"
            >
              {condition}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedConditions;
