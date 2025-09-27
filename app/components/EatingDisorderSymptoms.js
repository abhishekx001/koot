import React from "react";

const items = [
  "Physical signs: constipation, dry skin, dizziness, fatigue, and low blood pressure.",
  "Emotional and behavioral indicators: body dysmorphia, fear of weight gain, and mood problems.",
  "Notable changes: menstrual irregularities and sluggish movement.",
  "Early warnings: alterations in weight, eating patterns, and excessive exercise.",
  "Psychological symptoms: fixation on body size, appearance, calories, and sudden interest in food."
];

const EatingDisorderSymptoms = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-0 -mt-6 md:-mt-10">
      <h2 className="text-center text-xl font-bold text-black mb-8" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
        Common signs and symptoms.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {items.map((text, idx) => (
          <div key={idx} className="bg-gradient-to-b from-blue-50 to-blue-100 p-4">
            <p className="text-black text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EatingDisorderSymptoms;
