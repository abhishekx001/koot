"use client";

import React from "react";

const PanicAttackSymptoms = () => {
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
            Sudden episodes of intense fear with rapid heartbeat and shortness of breath.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Feeling like losing control or going crazy during panic episodes.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Sweating, trembling, and chest pain that feels like a heart attack.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Nausea, dizziness, and feeling detached from reality or surroundings.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Constant fear of having another panic attack, avoiding certain places.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanicAttackSymptoms;