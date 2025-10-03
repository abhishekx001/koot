"use client";

import React from "react";

const PostpartumSymptoms = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-0 -mt-20">
      {/* Section Title */}
      <h2 className="text-center text-xl font-bold text-gray-800 mb-8" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
        Common signs and symptoms
      </h2>

      {/* Symptoms Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Persistent sadness, anxiety, or emptiness that lasts for weeks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Difficulty bonding with your baby or feeling disconnected.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Overwhelming fatigue and loss of energy, even with rest.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Changes in appetite, sleep patterns, or concentration.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Feelings of guilt, worthlessness, or thoughts of self-harm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostpartumSymptoms;
