"use client";

import React from "react";

const TherapyServices = () => {
  return (
    <div className="py-8 px-4 mt-8 -mb-8" style={{fontFamily: 'var(--font-quicksand), sans-serif', backgroundColor: '#ededed'}}>
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Need help? Our experts could suggest the best!
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed whitespace-nowrap">
            Our experienced psychologists are here to understand you and help you connect with the right therapist who truly fits your needs.
          </p>
        </div>

        {/* Therapy Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Individual Therapy Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-48">
            <div className="relative">
              <img
                src="/footerup"
                alt="Individual Therapy"
                className="w-full h-28 object-cover rounded-t-xl"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-base font-bold text-gray-800 mb-1">Individual</h3>
              <p className="text-gray-700 text-xs">Therapy for me</p>
            </div>
          </div>

          {/* Teens Therapy Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-48">
            <div className="relative">
              <img
                src="/footerup"
                alt="Teens Therapy"
                className="w-full h-28 object-cover rounded-t-xl"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-base font-bold text-gray-800 mb-1">Teens</h3>
              <p className="text-gray-700 text-xs">For Age 13-17</p>
            </div>
          </div>

          {/* Couples Therapy Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-48">
            <div className="relative">
              <img
                src="/footerup"
                alt="Couples Therapy"
                className="w-full h-28 object-cover rounded-t-xl"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-base font-bold text-gray-800 mb-1">Couples</h3>
              <p className="text-gray-700 text-xs">Therapy for us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyServices;
