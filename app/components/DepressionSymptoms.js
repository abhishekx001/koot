"use client";

import React from "react";

const DepressionSymptoms = () => {
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
            Feeling tired and sad all day, every day.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Not finding joy in favorite activities, impacting personal satisfaction.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Change in appetite causing weight gain or loss.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Sleep problems, either insomnia or excessive sleep.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <p className="text-gray-800 text-sm leading-relaxed" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
            Feeling guilty and worthless, causing more anxiety.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepressionSymptoms;
