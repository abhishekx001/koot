"use client";

import React from "react";

const OCDSymptoms = () => {
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
            Unwanted, intrusive thoughts that cause anxiety and distress.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Repetitive behaviors or mental acts performed to reduce anxiety.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Excessive cleaning, checking, or organizing behaviors.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Fear of contamination, harm, or making mistakes.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Time-consuming rituals that interfere with daily activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OCDSymptoms;
