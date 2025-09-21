"use client";

import React from "react";

const TherapyServices = () => {
  return (
    <div className="py-8 px-4 mt-8 -mb-8" style={{fontFamily: 'var(--font-quicksand), sans-serif', backgroundColor: '#ededed'}}>
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="text-left md:text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Need help? Our experts could suggest the best!
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-3xl md:mx-auto leading-relaxed md:whitespace-nowrap">
            Our experienced psychologists are here to understand you and help you connect with the right therapist who truly fits your needs.
          </p>
        </div>

        {/* Therapy Cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center">
          {/* Individual Therapy Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-48 md:max-w-48">
            <div className="flex md:flex-col">
              {/* Image Div */}
              <div className="relative w-24 h-24 md:w-full md:h-28 flex-shrink-0">
                <img
                  src="/footerup.png"
                  alt="Individual Therapy"
                  className="w-full h-full object-cover rounded-l-xl md:rounded-t-xl md:rounded-l-none"
                />
              </div>
              {/* Text Div */}
              <div className="p-3 text-left md:text-center flex-1 ml-8 md:ml-0">
                <h3 className="text-base font-bold text-gray-800 mb-1">Individual</h3>
                <p className="text-gray-700 text-xs">Therapy for me</p>
              </div>
            </div>
          </div>

          {/* Teens Therapy Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-48 md:max-w-48">
            <div className="flex md:flex-col">
              {/* Image Div */}
              <div className="relative w-24 h-24 md:w-full md:h-28 flex-shrink-0">
                <img
                  src="/footerup.png"
                  alt="Teens Therapy"
                  className="w-full h-full object-cover rounded-l-xl md:rounded-t-xl md:rounded-l-none"
                />
              </div>
              {/* Text Div */}
              <div className="p-3 text-left md:text-center flex-1 ml-8 md:ml-0">
                <h3 className="text-base font-bold text-gray-800 mb-1">Teens</h3>
                <p className="text-gray-700 text-xs">For Age 13-17</p>
              </div>
            </div>
          </div>

          {/* Couples Therapy Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-48 md:max-w-48">
            <div className="flex md:flex-col">
              {/* Image Div */}
              <div className="relative w-24 h-24 md:w-full md:h-28 flex-shrink-0">
                <img
                  src="/footerup.png"
                  alt="Couples Therapy"
                  className="w-full h-full object-cover rounded-l-xl md:rounded-t-xl md:rounded-l-none"
                />
              </div>
              {/* Text Div */}
              <div className="p-3 text-left md:text-center flex-1 ml-8 md:ml-0">
                <h3 className="text-base font-bold text-gray-800 mb-1">Couples</h3>
                <p className="text-gray-700 text-xs">Therapy for us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyServices;
