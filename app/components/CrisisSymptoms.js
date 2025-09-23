import React from "react";

const items = [
  "Intense feelings of depression",
  "Lack of motivation or activity",
  "Sense of hopelessness",
  "Impatience or agitation",
  "Struggling with focus or decision-making",
];

const CrisisSymptoms = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-0 -mt-20">
      <h2 className="text-center text-xl font-bold text-black mb-8" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
        Common signs and symptoms for Crisis Intervention.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {items.map((text, idx) => (
          <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
            <p className="text-black text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrisisSymptoms;


